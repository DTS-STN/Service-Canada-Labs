/**
 * Disallow web crawlers to scrape our dev site, while only blocking crawlers from scraping the api routes in production
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export default async function handler(req, res) {
  if (process.env.ENVIRONMENT === "production") {
    res.write("User-agent: *\n");
    res.write("Disallow: /api\n");
  } else {
    res.write("User-agent: *\n");
    res.write("Disallow: /\n");
  }
  res.end();
}
