/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./TableOfContents.stories";

expect.extend(toHaveNoViolations);

describe("Alert tests", () => {
  it("renders TableOfContents in its primary state", () => {
    render(<Primary {...Primary.args} />);
    const title = screen.getByText("Table of Contents Title");
    const text = screen.getByText("Heading one");
    expect(title).toBeTruthy();
    expect(text).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
