const { i18n } = require("./next-i18next.config");

securityHeaders = [
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
    value: `frame-ancestors 'self'`,
  },
];

module.exports = {
  i18n,
  env: {
    NEXT_PUBLIC_BUILD_DATE: process.env.NEXT_PUBLIC_BUILD_DATE,
    NEXT_PUBLIC_TC_BUILD: process.env.NEXT_PUBLIC_TC_BUILD,
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
      {
        source: "/en/:path",
        has: [
          {
            type: "cookie",
            key: "lang",
            value: "fr",
          },
        ],
        locale: false,
        permanent: false,
        destination: "/fr/:path",
      },
      {
        source: "/fr/:path",
        has: [
          {
            type: "cookie",
            key: "lang",
            value: "en",
          },
        ],
        locale: false,
        permanent: false,
        destination: "/en/:path",
      },
      {
        source: "/fr/home",
        locale: false,
        permanent: false,
        destination: "/fr/accueil",
      },
      {
        source: "/fr/about",
        locale: false,
        permanent: false,
        destination: "/fr/a-propos",
      },
      {
        source: "/fr/signup",
        locale: false,
        permanent: false,
        destination: "/fr/inscription",
      },
      {
        source: "/fr/projects",
        locale: false,
        permanent: false,
        destination: "/fr/projets",
      },
      {
        source: "/fr/signup/privacy",
        locale: false,
        permanent: false,
        destination: "fr/inscription/protection-renseignements-personnels",
      },
      {
        source: "/fr/thankyou",
        locale: false,
        permanent: false,
        destination: "/fr/merci",
      },
      {
        source: "/fr/unsubscribe",
        locale: false,
        permanent: false,
        destination: "/fr/desabonnement",
      },
    ];
  },
};
