const { i18n } = require("./next-i18next.config");

const REWRITES = [
  {
    source: "/robots.txt",
    destination: "/api/robots",
  },
  {
    source: "/accueil",
    destination: "/home",
  },
  {
    source: "/projets/estimateur-prestations-sv",
    destination: "/projects/oas-benefits-estimator",
  },
  {
    source: "/projets/estimateur-prestations-sv/:slug",
    destination: "/projects/oas-benefits-estimator/:slug"
  },
  {
    source: "/projets/tableau-de-bord",
    destination: "/projects/dashboard"
  },
  {
    source: "/projets/navigateur-prestations",
    destination: "/projects/benefits-navigator"
  },
  {
    source: "/projets/navigateur-prestations/:slug",
    destination: "/projects/benefits-navigator/:slug"
  },
];

securityHeaders = [
  //Enables DNS prefetching, which reduces latency when a user clicks a link
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  //Restrict our page from being rendered within a frame
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  //Restrict browser features
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Only ever use HTTPS
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  // Disables use of inline javascript in XSS attacks
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  // Prevents the browser from attempting to guess the type of content
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Only allow secure origin to be delivered over HTTPS
  {
    key: "Referrer-Policy",
    value: "same-origin",
  },
  {
    key: "Content-Security-Policy",
    value: `default-src 'self' dts-stn.com *.dts-stn.com *.adobe.com https://assets.adobedtm.com *.omniture.com *.2o7.net; frame-ancestors 'self'; base-uri 'self'; form-action 'self'; connect-src 'self' *.adobe.com https://assets.adobedtm.com *.demdex.net *.omtrdc.net cm.everesttech.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com data:; img-src 'self' data: *.omtrdc.net *.demdex.net cm.everesttech.net https://assets.adobedtm.com https://www.canada.ca; font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com; frame-src 'self' *.adobe.com https://assets.adobedtm.com *.demdex.net; script-src 'self' 'unsafe-inline' *.adobe.com *.omniture.com *.2o7.net https://*.demdex.net https://cm.everesttech.net ${
      process.env.CI === "true"
        ? "'unsafe-eval'"
        : process.env.NODE_ENV === "development"
        ? "'unsafe-eval'"
        : ""
    } https://ajax.googleapis.com https://assets.adobedtm.com;`,
  },
];

module.exports = {
  output: 'standalone',
  swcMinify: true,
  i18n,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    //GraphQL loader for .graphql files
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });

    return config;
  },
  env: {
    NEXT_PUBLIC_BUILD_DATE: process.env.NEXT_PUBLIC_BUILD_DATE,
    NEXT_PUBLIC_BUILD_ID: process.env.NEXT_PUBLIC_BUILD_ID,
  },
  images: {
    domains: ["canada.ca", "www.canada.ca"],
  },
  poweredByHeader: false,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*{/}?",
        headers: securityHeaders,
      },
    ];
  },

  async rewrites() {
    return REWRITES;
  },
  async redirects() {
    return [
      // Note: pathmatch is removed because subpaths are in different languages, so subpath match doesn't work anymore.
      // Redirect to home page when user set prefered language
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
