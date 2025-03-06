class AEMService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getFragment(fragId) {
    if (!fragId?.trim?.()) return;

    // try {
    //   const fileContents = fs.readFileSync(path.resolve(cacheFilePath, `${fragId}.json`))
    //   if (fileContents) {
    //     const data = JSON.parse(fileContents)
    //     console.error("FRAG from cache", fragId)
    //     return { data, error: null };
    //   }
    // } catch (e) {
    //   // console.error(e)
    //   console.log(`no cache file for ${fragId}`)
    // }

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

    // if there's no error, store for memoization
    // if (!error && data) {
    //   console.log("storing", fragId, "in cache")
    //   fs.writeFileSync(path.resolve(cacheFilePath, `${fragId}.json`), JSON.stringify(data));
    // }

    return { data, error };
  }

  // flush(){
  //   fs.rmSync(cacheFilePath, { recursive: true, force: true });
  //   fs.mkdirSync(cacheFilePath, { recursive: true })
  // }
}

module.exports = AEMService;
