import React from "react";
import { Primary } from "./SurveyCTA.stories";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { render, screen } from "@testing-library/react";

expect.extend(toHaveNoViolations);

describe("SurveyCTA", () => {
  it("renders without errors", () => {
    render(<Primary {...Primary.args} />);
    screen.getByText("CTA Heading");
  });
  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
