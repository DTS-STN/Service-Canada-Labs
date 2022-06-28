const { i18n } = require("./next-i18next.config");

securityHeaders = [
  //Enables DNS prefetching, which reduces latency when a user clicks a link
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  //Restrict our page from being rendered within a frame
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  //Restrict browser features
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
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
    value: `default-src 'self' dts-stn.com *.dts-stn.com *.adobe.com *.omniture.com *.2o7.net; frame-ancestors 'self'; base-uri 'self'; form-action 'self'; connect-src 'self' *.demdex.net *.omtrdc.net cm.everesttech.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com data:; img-src 'self' *.omtrdc.net *.demdex.net cm.everesttech.net assets.adobedtm.com https://www.canada.ca; font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com; frame-src 'self' *.demdex.net; script-src 'self' 'unsafe-inline' ${
      process.env.CI === "true"
        ? "'unsafe-eval'"
        : process.env.NODE_ENV === "development"
        ? "'unsafe-eval'"
        : ""
    } https://ajax.googleapis.com https://assets.adobedtm.com;`,
  },
];

module.exports = {
  images: {
    domains: ['www.canada.ca']
  },
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
    NEXT_PUBLIC_TC_BUILD: process.env.NEXT_PUBLIC_TC_BUILD,
    NEXT_PUBLIC_VERSION: "1.1.3",
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
    return [
      {
        source: "/robots.txt",
        destination: "/api/robots",
      },
      {
        source: "/accueil",
        destination: "/home",
      },
      {
        source: "/a-propos",
        destination: "/about",
      },
      {
        source: "/projets",
        destination: "/projects",
      },
      {
        source: "/inscription",
        destination: "/signup",
      },
      {
        source: "/inscription-info",
        destination: "/signup-info",
      },
      {
        source: "/inscription/protection-renseignements-personnels",
        destination: "/signup/privacy",
      },
      {
        source: "/merci",
        destination: "/thankyou",
      },
      {
        source: "/desabonnement",
        destination: "/unsubscribe",
      },
      {
        source: "/projets/centre-numerique",
        destination: "/projects/digital-centre",
      },
      {
        source: "/projets/assistant-virtuel",
        destination: "/projects/virtual-assistant",
      },
    ];
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
        source: "/home",
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
        source: "/404",
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
        source: "/500",
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
        source: "/about",
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
        source: "/confirmation",
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
        source: "/error",
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
        source: "/projects",
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
        source: "/signup",
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
        source: "/signup-info",
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
        source: "/thankyou",
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
        source: "/unsubscribe",
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
        source: "/signup/privacy",
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
        source: "/projects/virtual-assistant",
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
        source: "/projects/digital-centre",
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
        source: "/projects/life-journeys",
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
        source: "/en",
        has: [
          {
            type: "cookie",
            key: "lang",
            value: "fr",
          },
        ],
        locale: false,
        permanent: false,
        destination: "/fr/accueil",
      },
      {
        source: "/en",
        has: [
          {
            type: "cookie",
            key: "lang",
            value: "en",
          },
        ],
        locale: false,
        permanent: false,
        destination: "/home",
      },
      // Redirect to French path en cookie set to fr
      {
        source: "/en/home",
        destination: "/fr/accueil",
        has: [
          {
            type: "cookie",
            key: "lang",
            value: "fr",
          },
        ],
        locale: false,
        permanent: false,
      },
      {
        source: "/en/about",
        destination: "/fr/a-propos",
        has: [
          {
            type: "cookie",
            key: "lang",
            value: "fr",
          },
        ],
        locale: false,
        permanent: false,
      },
      {
        source: "/en/signup",
        destination: "/fr/inscription",
        has: [
          {
            type: "cookie",
            key: "lang",
            value: "fr",
          },
        ],
        locale: false,
        permanent: false,
      },
      {
        source: "/en/signup-info",
        destination: "/fr/inscription-info",
        has: [
          {
            type: "cookie",
            key: "lang",
            value: "fr",
          },
        ],
        locale: false,
        permanent: false,
      },
      {
        source: "/en/projects",
        destination: "/fr/projets",
        has: [
          {
            type: "cookie",
            key: "lang",
            value: "fr",
          },
        ],
        locale: false,
        permanent: false,
      },
      {
        source: "/en/signup/privacy",
        destination: "/fr/inscription/protection-renseignements-personnels",
        has: [
          {
            type: "cookie",
            key: "lang",
            value: "fr",
          },
        ],
        locale: false,
        permanent: false,
      },
      {
        source: "/en/thankyou",
        destination: "/fr/merci",
        has: [
          {
            type: "cookie",
            key: "lang",
            value: "fr",
          },
        ],
        locale: false,
        permanent: false,
      },
      {
        source: "/en/unsubscribe",
        destination: "/fr/desabonnement",
        has: [
          {
            type: "cookie",
            key: "lang",
            value: "fr",
          },
        ],
        locale: false,
        permanent: false,
      },

      // Redirect to English path when cookie set to en
      {
        source: "/fr/accueil",
        destination: "/en/home",
        has: [
          {
            type: "cookie",
            key: "lang",
            value: "en",
          },
        ],
        locale: false,
        permanent: false,
      },
      {
        source: "/fr/a-propos",
        destination: "/en/about",
        has: [
          {
            type: "cookie",
            key: "lang",
            value: "en",
          },
        ],
        locale: false,
        permanent: false,
      },
      {
        source: "/fr/inscription",
        destination: "/en/signup",
        has: [
          {
            type: "cookie",
            key: "lang",
            value: "en",
          },
        ],
        locale: false,
        permanent: false,
      },
      {
        source: "/fr/inscription-info",
        destination: "/en/signup-info",
        has: [
          {
            type: "cookie",
            key: "lang",
            value: "en",
          },
        ],
        locale: false,
        permanent: false,
      },
      {
        source: "/fr/projets",
        destination: "/en/projects",
        has: [
          {
            type: "cookie",
            key: "lang",
            value: "en",
          },
        ],
        locale: false,
        permanent: false,
      },
      {
        source: "/fr/inscription/protection-renseignements-personnels",
        destination: "/en/signup/privacy",
        has: [
          {
            type: "cookie",
            key: "lang",
            value: "en",
          },
        ],
        locale: false,
        permanent: false,
      },
      {
        source: "/fr/merci",
        destination: "/en/thankyou",
        has: [
          {
            type: "cookie",
            key: "lang",
            value: "en",
          },
        ],
        locale: false,
        permanent: false,
      },
      {
        source: "/fr/desabonnement",
        destination: "/en/unsubscribe",
        has: [
          {
            type: "cookie",
            key: "lang",
            value: "en",
          },
        ],
        locale: false,
        permanent: false,
      },
    ];
  },
};
