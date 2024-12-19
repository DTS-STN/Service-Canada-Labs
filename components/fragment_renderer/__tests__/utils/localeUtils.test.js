import { getLocalizedContent, formatImageData } from "../../utils/localeUtils";

describe("localeUtils", () => {
  describe("getLocalizedContent", () => {
    it("returns English content when locale is en", () => {
      const content = { en: "Hello", fr: "Bonjour" };
      expect(getLocalizedContent(content, "en")).toBe("Hello");
    });

    it("returns French content when locale is fr", () => {
      const content = { en: "Hello", fr: "Bonjour" };
      expect(getLocalizedContent(content, "fr")).toBe("Bonjour");
    });
  });

  describe("formatImageData", () => {
    it("formats image data correctly", () => {
      const imageData = {
        scImageEn: { _publishUrl: "en-url", width: 100, height: 200 },
        scImageFr: { _publishUrl: "fr-url", width: 100, height: 200 },
        scImageAltTextEn: "alt-en",
        scImageAltTextFr: "alt-fr",
      };

      const result = formatImageData(imageData, "en");
      expect(result).toEqual({
        src: "en-url",
        alt: "alt-en",
        width: 100,
        height: 200,
      });
    });
  });
});
