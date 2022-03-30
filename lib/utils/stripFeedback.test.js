import { stripFeedback } from "./stripFeedback";

describe("strip feedback", () => {
  it("strips personal identifier information from a provided string", () => {
    expect(stripFeedback("555 444 333")).toEqual("### ### ###");
  });
});
