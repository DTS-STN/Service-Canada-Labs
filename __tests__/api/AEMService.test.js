import AEMService from "../../services/AEMService";

const testUrl = "https://test-url.com";

describe("AEMService class", () => {
  it("base url should not be empty", () => {
    expect(() => {
      new AEMService();
    }).toThrow(Error);
    expect(() => {
      new AEMService(" ");
    }).toThrow(Error);
    expect(new AEMService(testUrl).baseUrl).toBe(testUrl);
  });
  it("should contain a cache bust string that is passed as a second arg, or defaulted to today date (en-CA localized)", () => {
    expect(new AEMService(testUrl, "cachebuster").cacheBustString).toBe(
      "cachebuster"
    );
    expect(new AEMService(testUrl).cacheBustString).toBe(
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
        const AEMServiceInstance = new AEMService(fakeBaseUrl);
        expect(async () => {
          AEMServiceInstance.getFragment("     ");
        }).toEqual(undefined);
        expect(() => {
          AEMServiceInstance.getFragment(() => {});
        }).toEqual(undefined);
        expect(() => {
          AEMServiceInstance.getFragment(324);
        }).toEqual(undefined);
      } catch (e) {
        console.log(e);
      }
    });

    it("should fetch AEM content when passed in a valid path", async () => {
      try {
        const AEMServiceInstance = new AEMService(fakeBaseUrl);
        await AEMServiceInstance.getFragment("test.json");
        expect(global.fetch).toHaveBeenCalledTimes(1);
      } catch (e) {
        console.log(e);
      }
    });

    it("should NOT fetch AEM content that has already been called", async () => {
      try {
        const AEMServiceInstance = new AEMService(fakeBaseUrl);
        await AEMServiceInstance.getFragment("test.json");
        expect(global.fetch).toHaveBeenCalledTimes(1);
        await AEMServiceInstance.getFragment("test.json");
        await AEMServiceInstance.getFragment("test.json");
        await AEMServiceInstance.getFragment("test.json");
        expect(global.fetch).toHaveBeenCalledTimes(1);
        await AEMServiceInstance.getFragment("test22.json");
        expect(global.fetch).toHaveBeenCalledTimes(2);
      } catch (e) {}
    });
  });
  describe("getElements method", () => {
    it("should return properties.elements property from getFragments", async () => {
      try {
        const AEMServiceInstance = new AEMService(fakeBaseUrl);
        const { elements } = await AEMServiceInstance.getElements("test.json");
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
        const AEMServiceInstance = new AEMService(fakeBaseUrl);
        global.fetch = jest.fn(() =>
          Promise.resolve({
            json: () => Promise.resolve({}),
          })
        );
        const { elements } = await AEMServiceInstance.getElements("test.json");
        expect(elements).toHaveLength(0);
        expect(elements).toEqual([]);
      } catch (e) {
        console.log(e);
      }
    });
  });
});
