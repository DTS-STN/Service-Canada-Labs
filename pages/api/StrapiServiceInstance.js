import StrapiService from "./StrapiService";

const strapiServiceInstance = new StrapiService(
  process.env.NEXT_PUBLIC_STRAPI_API_BACKEND_URL,
  process.env.NEXT_PUBLIC_BUILD_DATE
);

export default strapiServiceInstance;
