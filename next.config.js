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
      // Note: pathmatch is removed because subpaths are in different languages, so subpath match doesn't work anymore.
      // Redirect to home page when user set prefered language
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
        source: "/home",
        destination: "/accueil",
        has: [
          {
            type: "cookie",
            key: "lang",
            value: "fr",
          },
        ],
        permanent: false,
      },
      {
        source: "/about",
        destination: "/a-propos",
        has: [
          {
            type: "cookie",
            key: "lang",
            value: "fr",
          },
        ],
        permanent: false,
      },
      {
        source: "/signup",
        destination: "/inscription",
        has: [
          {
            type: "cookie",
            key: "lang",
            value: "fr",
          },
        ],
        permanent: false,
      },
      {
        source: "/projects",
        destination: "/projets",
        has: [
          {
            type: "cookie",
            key: "lang",
            value: "fr",
          },
        ],
        permanent: false,
      },
      {
        source: "/signup/privacy",
        destination: "/inscription/protection-renseignements-personnels",
        has: [
          {
            type: "cookie",
            key: "lang",
            value: "fr",
          },
        ],
        permanent: false,
      },
      {
        source: "/thankyou",
        destination: "/merci",
        has: [
          {
            type: "cookie",
            key: "lang",
            value: "fr",
          },
        ],
        permanent: false,
      },
      {
        source: "/unsubscribe",
        destination: "/desabonnement",
        has: [
          {
            type: "cookie",
            key: "lang",
            value: "fr",
          },
        ],
        permanent: false,
      },

      // Redirect to English path when cookie set to en
      {
        source: "/accueil",
        destination: "/home",
        has: [
          {
            type: "cookie",
            key: "lang",
            value: "en",
          },
        ],
        permanent: false,
      },
      {
        source: "/a-propos",
        destination: "/about",
        has: [
          {
            type: "cookie",
            key: "lang",
            value: "en",
          },
        ],
        permanent: false,
      },
      {
        source: "/inscription",
        destination: "/signup",
        has: [
          {
            type: "cookie",
            key: "lang",
            value: "en",
          },
        ],
        permanent: false,
      },
      {
        source: "/projets",
        destination: "/projects",
        has: [
          {
            type: "cookie",
            key: "lang",
            value: "en",
          },
        ],
        permanent: false,
      },
      {
        source: "/inscription/protection-renseignements-personnels",
        destination: "/signup/privacy",
        has: [
          {
            type: "cookie",
            key: "lang",
            value: "en",
          },
        ],
        permanent: false,
      },
      {
        source: "/merci",
        destination: "/thankyou",
        has: [
          {
            type: "cookie",
            key: "lang",
            value: "en",
          },
        ],
        permanent: false,
      },
      {
        source: "/desabonnement",
        destination: "/unsubscribe",
        has: [
          {
            type: "cookie",
            key: "lang",
            value: "en",
          },
        ],
        permanent: false,
      },
    ];
  },
};
