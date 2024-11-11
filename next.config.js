// Import i18n configuration for internationalization
const { i18n } = require("./next-i18next.config");

// URL rewrite rules for French/English bilingual routes
// Maps French routes to their English counterparts
const REWRITES = [
  // API endpoint rewrites
  {
    source: "/robots.txt",
    destination: "/api/robots",
  },
  // Main page rewrites
  {
    source: "/accueil",
    destination: "/home",
  },
  // Project page rewrites
  {
    source: "/projets",
    destination: "/projects",
  },
  // Individual project rewrites with their slugs
  {
    source: "/projets/estimateur-prestations-sv",
    destination: "/projects/oas-benefits-estimator",
  },
  {
    source: "/projets/estimateur-prestations-sv/:slug",
    destination: "/projects/oas-benefits-estimator/:slug",
  },
  {
    source: "/projets/tableau-de-bord",
    destination: "/projects/dashboard",
  },
  {
    source: "/projets/tableau-de-bord/:slug",
    destination: "/projects/dashboard/:slug",
  },
  {
    source: "/projets/navigateur-prestations",
    destination: "/projects/benefits-navigator",
  },
  {
    source: "/projets/navigateur-prestations/:slug",
    destination: "/projects/benefits-navigator/:slug",
  },
  {
    source: "/projets/guide-normes-numeriques",
    destination: "/projects/digital-standards-playbook",
  },
  {
    source: "/projets/guide-normes-numeriques/:slug",
    destination: "/projects/digital-standards-playbook/:slug",
  },
  {
    source: "/projets/faciliter-obtention-prestations",
    destination: "/projects/making-easier-get-benefits",
  },
  {
    source: "/projets/faciliter-obtention-prestations/:slug",
    destination: "/projects/making-easier-get-benefits/:slug",
  },
  {
    source: "/projets/chercheur-prestations",
    destination: "/projects/benefits-finder",
  },
  {
    source: "/projets/chercheur-prestations/:slug",
    destination: "/projects/benefits-finder/:slug",
  },
  {
    source: "/projets/transformer-assurance-emploi-peuples-autochtones",
    destination: "/projects/transforming-ei-indigenous-peoples",
  },
  {
    source: "/projets/transformer-assurance-emploi-peuples-autochtones/:slug",
    destination: "/projects/transforming-ei-indigenous-peoples/:slug",
  },
  // Updates page rewrite
  {
    source: "/mises-a-jour",
    destination: "/updates"
  }
];

// Security headers configuration for enhanced protection
securityHeaders = [
  // DNS prefetching for performance optimization
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  // Prevent site from being embedded in iframes (clickjacking protection)
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // Restrict access to browser features
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Force HTTPS connection
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  // XSS attack protection
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  // Prevent MIME type sniffing
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Control how much referrer information should be included
  {
    key: "Referrer-Policy",
    value: "same-origin",
  },
  // Content Security Policy configuration
  {
    key: "Content-Security-Policy",
    value: `default-src 'self' dts-stn.com *.dts-stn.com *.adobe.com https://assets.adobedtm.com *.omniture.com *.2o7.net; frame-ancestors 'self'; base-uri 'self'; form-action 'self'; connect-src 'self' *.adobe.com https://assets.adobedtm.com *.demdex.net *.omtrdc.net cm.everesttech.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com data:; img-src 'self' data: webpack: *.omtrdc.net *.demdex.net cm.everesttech.net https://assets.adobedtm.com https://www.canada.ca; font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com data:; frame-src 'self' *.adobe.com https://assets.adobedtm.com *.demdex.net; script-src 'self' 'unsafe-inline' *.adobe.com *.adobedtm.com *.omniture.com *.2o7.net https://*.demdex.net https://cm.everesttech.net ${
      process.env.CI === "true"
        ? "'unsafe-eval'"
        : process.env.NODE_ENV === "development"
        ? "'unsafe-eval'"
        : ""
    } https://ajax.googleapis.com https://assets.adobedtm.com;`,
  },
];

// Main Next.js configuration export
module.exports = {
  // Build output configuration
  output: "standalone",
  swcMinify: true,
  // Internationalization settings
  i18n,

  // Webpack configuration
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add GraphQL file loader
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });

    return config;
  },

  // Image optimization configuration
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.canada.ca",
        port: "",
      },
    ]
  },

  // Disable the "Powered by Next.js" header
  poweredByHeader: false,

  // Custom header configuration
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: "/:path*{/}?",
        headers: securityHeaders,
      },
    ];
  },

  // URL rewrite configuration
  async rewrites() {
    return REWRITES;
  },

  // Redirect configuration
  async redirects() {
    return [
      // Redirect IE (Trident) users to not supported page
      {
        source: "/",
        has: [
          {
            type: "header",
            key: "User-Agent",
            value: "(.*Trident.*)",
          },
        ],
        destination: "/notsupported",
        permanent: false,
      },
      // Redirect all other routes for IE users to not supported page
      // except the not supported page itself
      {
        source: "/:slug((?!notsupported$).*)",
        has: [
          {
            type: "header",
            key: "User-Agent",
            value: "(.*Trident.*)",
          },
        ],
        destination: "/notsupported",
        permanent: false,
      },
    ];
  },
};