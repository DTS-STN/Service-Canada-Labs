/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./TopNavBar.stories";

expect.extend(toHaveNoViolations);

describe("TopNavBar", () => {
  it("renders the TopNavBar with expected props", () => {
    render(<Primary {...Primary.args} />);
    expect(screen.getByLabelText("nav-aria-label")).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
