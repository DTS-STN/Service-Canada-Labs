import {
  validateRequiredFields,
  fragmentValidators,
} from "../../utils/validation";

describe("validation", () => {
  describe("validateRequiredFields", () => {
    it("throws error for missing fields", () => {
      expect(() => {
        validateRequiredFields({ a: { b: null } }, ["a.b.c"]);
      }).toThrow("Missing required fields: a.b.c");
    });
  });

  describe("fragmentValidators", () => {
    it("validates SCLabs-Feature-v1 correctly", () => {
      const validData = {
        scTitleEn: "title",
        scTitleFr: "titre",
        scContentEn: { json: {} },
        scContentFr: { json: {} },
        scLabsButton: [{ scId: "123" }],
      };

      expect(() => {
        fragmentValidators["SCLabs-Feature-v1"](validData);
      }).not.toThrow();
    });
  });
});
