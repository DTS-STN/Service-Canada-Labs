import { maskEmail } from "./maskEmail";

describe("mask email", () => {
  it("masks an email address", () => {
    expect(maskEmail("some@email.com")).toEqual("s***@****l.***");
  });
});
