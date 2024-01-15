import React from "react";
import { Default, WithoutLink } from "./CTA.stories";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { render, screen } from "@testing-library/react";

expect.extend(toHaveNoViolations);

describe("CTA", () => {
  it("renders and formats the date properly", () => {
    render(<Default {...Default.args} />);
    screen.getByText("Action Button");
  });

  it("renders and formats the date properly", () => {
    render(<WithoutLink {...WithoutLink.args} />);
    screen.getByText("This is a call-to-action!");
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Default {...Default.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
