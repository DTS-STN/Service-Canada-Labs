import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Success, Warning, Info, Danger } from "./ContextualAlert.stories.js";

expect.extend(toHaveNoViolations);

describe("ContextualAlert", () => {
  it("renders alert image", () => {
    render(<Success {...Success.args} />);
    expect(screen.getByAltText("success icon"));
  });
  it("has no a11y Success", async () => {
    const { container } = render(<Success {...Success.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("has no a11y Warnsing", async () => {
    const { container } = render(<Warning {...Warning.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("has no a11y Danger", async () => {
    const { container } = render(<Danger {...Danger.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("has no a11y Info", async () => {
    const { container } = render(<Info {...Info.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
