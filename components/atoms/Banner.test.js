/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./Banner.stories";

expect.extend(toHaveNoViolations);

describe("Banner tests", () => {
  it("renders Banner in its primary state", () => {
    render(<Primary {...Primary.args} />);
    const textElement = screen.getByText("Banner Text");
    const headlineElement = screen.getByText("Banner Headline");
    expect(textElement).toBeTruthy();
    expect(headlineElement).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
