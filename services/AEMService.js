const fs = require('fs');
const path = require('path');

const CACHE_DIR = path.join(process.cwd(), '.cache');

class AEMService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    // Ensure cache directory exists in development
    if (process.env.NODE_ENV === 'development' && !fs.existsSync(CACHE_DIR)) {
      try {
        fs.mkdirSync(CACHE_DIR, { recursive: true });
      } catch (e) {
        console.error('Failed to create cache directory:', e);
      }
    }
  }

  async getFragment(fragId) {
    if (!fragId?.trim?.()) return;

    // Check cache in development mode
    if (process.env.NODE_ENV === 'development') {
      try {
        const filePath = path.join(CACHE_DIR, `${fragId}.json`);
        if (fs.existsSync(filePath)) {
          const fileContents = fs.readFileSync(filePath, 'utf8');
          const data = JSON.parse(fileContents);
          console.log(`[Cache] Hit (Fragment): ${fragId}`);
          return { data, error: null };
        }
      } catch (e) {
        console.error(`Error reading cache for ${fragId}:`, e);
      }
    }

    let headers = new Headers()
    headers.append("Content-Type", "application/json")
    headers.append("User-Agent", "sc-labs/1.1.3");

    const graphqlModule = await import(`../graphql/queries/${fragId}.graphql`);
    const query = graphqlModule.default.loc.source.body;

    let error, data;
    try {
      let resp = await fetch(this.baseUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
          query: query,
        }),
        cache: 'no-cache',
      });
      error = resp.ok ? false : resp.status;
      data = (await resp.json())?.data;
    } catch (e) {
      console.log(e);
    }

    // Store in cache in development mode
    if (process.env.NODE_ENV === 'development' && !error && data) {
      try {
        const filePath = path.join(CACHE_DIR, `${fragId}.json`);
        fs.writeFileSync(filePath, JSON.stringify(data));
        console.log(`[Cache] Saved (Fragment): ${fragId}`);
      } catch (e) {
        console.error(`Error writing cache for ${fragId}:`, e);
      }
    }

    return { data, error };
  }
}

module.exports = AEMService;
