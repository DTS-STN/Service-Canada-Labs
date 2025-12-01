const fs = require("fs");
const path = require("path");

const CACHE_DIR = path.join(process.cwd(), ".cache");

// Ensure cache directory exists
if (process.env.NODE_ENV === "development" && !fs.existsSync(CACHE_DIR)) {
  try {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
  } catch (e) {
    console.error("Failed to create cache directory:", e);
  }
}

/**
 * Fetches data from a URL with caching in development mode.
 * @param {string} url - The URL to fetch.
 * @returns {Promise<any>} - The JSON response.
 */
async function fetchWithCache(url) {
  // Only cache in development mode
  if (process.env.NODE_ENV !== "development") {
    return fetch(url).then((res) => res.json());
  }

  // Create a safe filename from the URL
  // We use a hash or just encode the URL to avoid filesystem issues
  const filename = encodeURIComponent(url).slice(0, 255) + ".json";
  const filePath = path.join(CACHE_DIR, filename);

  if (fs.existsSync(filePath)) {
    console.log(`[Cache] Hit: ${url}`);
    try {
      const fileContent = fs.readFileSync(filePath, "utf8");
      return JSON.parse(fileContent);
    } catch (e) {
      console.error("Error reading cache file, fetching fresh data:", e);
    }
  }

  console.log(`[Cache] Miss: ${url}`);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch ${url}: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();

    try {
      fs.writeFileSync(filePath, JSON.stringify(data));
    } catch (e) {
      console.error("Failed to write to cache:", e);
    }

    return data;
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
    throw error;
  }
}

module.exports = { fetchWithCache };
