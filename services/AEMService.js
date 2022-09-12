const fs = require('fs')
const path = require('path')

const cacheFilePath = path.resolve('.', 'graphql', '.cache')

class AEMService {
  constructor(baseUrl, cacheBust) {
    if (!baseUrl?.trim?.()) throw new Error(`Provide a base URL for AEM.`);

    this.cacheBustString = !!cacheBust?.trim?.()
      ? cacheBust
      : new Date().toLocaleDateString("en-CA");
    this.baseUrl = baseUrl;
    fs.mkdirSync(cacheFilePath, { recursive: true })
    this.flush()
  }

  async getFragment(fragId) {
    if (!fragId?.trim?.()) return;

    try {
      const fileContents = fs.readFileSync(path.resolve(cacheFilePath, `${fragId}.json`))
      if (fileContents) {
        const data = JSON.parse(fileContents)
        console.error("FRAG from cache", fragId)
        return { data, error: null };
      }
    } catch (e) {
      // console.error(e)
      console.log(`no cache file for ${fragId}`)
    }

    let headers = new Headers()
    headers.append("Content-Type", "application/json")
    headers.append("User-Agent", "sc-labs/1.1.3");

    const query = require(`../graphql/queries/${fragId}.graphql`).loc.source.body

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

    // if there's no error, store for memoization
    if (!error) {
      console.log("storing", fragId, "in cache")
      fs.writeFileSync(path.resolve(cacheFilePath, `${fragId}.json`), JSON.stringify(data));
    }

    return { data, error };
  }

  async getElements(fragId) {
    const { data, error } = await this.getFragment(fragId);
    return {
      elements: data?.properties?.elements || [],
      error: error,
    };
  }

  async getPage(pageId) {
    const { elements } = await this.getElements(pageId);
    return elements;
  }

  flush(){
    fs.rmSync(cacheFilePath, { recursive: true, force: true });
    fs.mkdirSync(cacheFilePath, { recursive: true })
  }

  //
  // gets the data for all benefits, start by getting the urls for each, then get the benefit data using the url
  //
  async getBenefits(fragId) {
    const { data, error } = await this.getFragment(fragId);
    let benefitsUrls = [];
    let benefitData = [];
    let errorCode = error;

    if (!error) {
      benefitsUrls = data.entities.map((benefit) => {
        return {
          name: benefit.properties.name,
          href: benefit.links[0].href,
        };
      });

      benefitData = await Promise.all(
        benefitsUrls.map(async (benefit) => {
          const { data, error } = await this.getFragment(
            benefit.href
              .replace(this.baseUrl, "")
              .replace(`?dates=${this.cacheBustString}`, "")
          );
          return {
            elements: data?.entities[0]?.properties?.elements || [],
            name: data?.entities[0]?.properties?.name || "",
            description: data?.entities[0]?.properties?.description || "",
            title: data?.entities[0]?.properties?.title || "",
            error: error,
          };
        })
      );
    }
    return {
      benefits: benefitData,
      error: errorCode,
    };
  }

  //
  // gets the data for a single benefit
  //
  async getBenefit(benefitId) {
    const { data, error } = await this.getFragment(benefitId);
    return {
      elements: data?.entities[0]?.properties?.elements || [],
      name: data?.entities[0]?.properties?.name || "",
      description: data?.entities[0]?.properties?.description || "",
      title: data?.entities[0]?.properties?.title || "",
      error: error,
    };
  }
}

module.exports = AEMService;
