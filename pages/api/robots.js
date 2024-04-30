/**
 * Disallow web crawlers to scrape our dev site, while only blocking crawlers from scraping the api routes in production
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export default async function handler(req, res) {
  if (process.env.NODE_ENV === "production") {
    res.write("User-agent: *\n");
    res.write("Disallow: /api\n");
    res.write("Disallow: /projects/*\n");
    res.write("Disallow: /notsupported.js\n");
  } else {
    res.write("User-agent: *\n");
    res.write("Disallow: /\n");
  }
  res.write("Disallow: /cdcp-apply");
  res.write("Disallow: /rsdc-demander");
  res.end();
}
