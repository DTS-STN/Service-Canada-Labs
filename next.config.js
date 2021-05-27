const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  env: {
    NEXT_PUBLIC_BUILD_DATE: process.env.NEXT_PUBLIC_BUILD_DATE,
    NEXT_PUBLIC_TC_BUILD: process.env.NEXT_PUBLIC_TC_BUILD,
    STRAPI_API_BACKEND_URL: process.env.STRAPI_API_BACKEND_URL,
  }
}