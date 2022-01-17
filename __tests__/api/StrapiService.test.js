import { StrapiService } from "../../pages/api/StrapiService";

const testUrl = "https://testurl.com";

describe("StrapiService class", () => {
  it("base url should not be empty", () => {
    expect(() => {
      new StrapiService();
    }).toThrow(Error);
    expect(() => {
      new StrapiService("       ");
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
});
