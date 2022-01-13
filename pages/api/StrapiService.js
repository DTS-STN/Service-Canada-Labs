export class StrapiService {
  constructor(baseUrl, cacheBust) {
    if (!baseUrl?.trim?.()) throw new Error("Provide a base URL for Strapi");

    this.cacheBustString = !!cacheBust?.trim?.()
      ? cacheBust
      : new Date().toLocaleDateString("en-CA");
    this.baseUrl = baseUrl;

    // maintain all fragments by their path
    this.store = new Map();
  }

  async getFragment(fragPath) {
    if (!fragPath?.trim?.()) return;

    // return memoized fragPath data if it's stored
    if (this.store.has(fragPath)) {
      return { data: this.store.get(fragPath), error: null };
    }

    // otherwise, fetch from Strapi
    const res = await fetch(
      `${this.baseUrl}${fragPath}?dates=${this.cacheBustString}`
    );
    const error = res.ok ? false : res.status;
    const data = res.ok ? await res.json() : null;

    // if there's no error, store for memoization
    if (!error) {
      this.store.set(fragPath, data);
    }

    return { data, error };
  }
}

const strapiService = new StrapiService(
  process.env.NEXT_PUBLIC_STRAPI_API_BACKEND_URL,
  process.env.NEXT_PUBLIC_BUILD_DATE
);

export default strapiService;
