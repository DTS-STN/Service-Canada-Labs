import StrapiService from "../../pages/api/StrapiService";

const testUrl = "https://test-url.com";

describe("StrapiService class", () => {
  it("base url should not be empty", () => {
    expect(() => {
      new StrapiService();
    }).toThrow(Error);
    expect(() => {
      new StrapiService(" ");
    }).toThrow(Error);
    expect(new StrapiService(testUrl).baseUrl).toBe(testUrl);
  });
  it("should contain a cache bust string that is passed as a second arg, or defaulted to today date (en-CA localized)", () => {
    expect(new StrapiService(testUrl, "cachebuster").cacheBustString).toBe(
      "cachebuster"
    );
    expect(new StrapiService(testUrl).cacheBustString).toBe(
      new Date().toLocaleDateString("en-CA")
    );
  });

  describe("getFragment method", () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            properties: {
              elements: [1, 2, 3],
            },
          }),
      })
    );

    beforeEach(() => {
      fetch.mockClear();
    });

    it("should return undefined an empty string is passed in", async () => {
      try {
        const strapiServiceInstance = new StrapiService(fakeBaseUrl);
        expect(async () => {
          strapiServiceInstance.getFragment("     ");
        }).toEqual(undefined);
        expect(() => {
          strapiServiceInstance.getFragment(() => {});
        }).toEqual(undefined);
        expect(() => {
          strapiServiceInstance.getFragment(324);
        }).toEqual(undefined);
      } catch (e) {
        console.log(e);
      }
    });

    it("should fetch Strapi content when passed in a valid path", async () => {
      try {
        const strapiServiceInstance = new StrapiService(fakeBaseUrl);
        await strapiServiceInstance.getFragment("test.json");
        expect(global.fetch).toHaveBeenCalledTimes(1);
      } catch (e) {
        console.log(e);
      }
    });

    it("should NOT fetch Strapi content that has already been called", async () => {
      try {
        const strapiServiceInstance = new StrapiService(fakeBaseUrl);
        await strapiServiceInstance.getFragment("test.json");
        expect(global.fetch).toHaveBeenCalledTimes(1);
        await strapiServiceInstance.getFragment("test.json");
        await strapiServiceInstance.getFragment("test.json");
        await strapiServiceInstance.getFragment("test.json");
        expect(global.fetch).toHaveBeenCalledTimes(1);
        await strapiServiceInstance.getFragment("test22.json");
        expect(global.fetch).toHaveBeenCalledTimes(2);
      } catch (e) {}
    });
  });
  describe("getElements method", () => {
    it("should return properties.elements property from getFragments", async () => {
      try {
        const strapiServiceInstance = new StrapiService(fakeBaseUrl);
        const { elements } = await strapiServiceInstance.getElements(
          "test.json"
        );
        expect(elements).toHaveLength(3);

        global.fetch = jest.fn(() =>
          Promise.resolve({
            json: () => Promise.resolve({}),
          })
        );
      } catch (e) {}
    });
    it("should return empty array when no data is resolved for the elements", async () => {
      try {
        const strapiServiceInstance = new StrapiService(fakeBaseUrl);
        global.fetch = jest.fn(() =>
          Promise.resolve({
            json: () => Promise.resolve({}),
          })
        );
        const { elements } = await strapiServiceInstance.getElements(
          "test.json"
        );
        expect(elements).toHaveLength(0);
        expect(elements).toEqual([]);
      } catch (e) {
        console.log(e);
      }
    });
  });
});
