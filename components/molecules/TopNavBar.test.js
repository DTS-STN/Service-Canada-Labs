/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./TopNavBar.stories";

expect.extend(toHaveNoViolations);

describe("TopNavBar", () => {
  it("renders the TopNavBar with expected props on desktop", () => {
    render(<Primary {...Primary.args} />);
    expect(screen.getByLabelText("nav-aria-label")).toBeTruthy();
    expect(screen.getByLabelText("button-aria-label")).toBeTruthy();
    expect(screen.getByText("Home")).toBeTruthy();
    expect(screen.getByText("Updates")).toBeTruthy();
  });

  it("renders the TopNavBar with expected props on mobile", () => {
    render(<Primary {...Primary.args} />);
    global.innerWidth = 500;
    expect(screen.getByLabelText("nav-aria-label")).toBeTruthy();
    expect(screen.getByLabelText("button-aria-label")).toBeTruthy();
    expect(screen.getByText("Home")).toBeTruthy();
    expect(screen.getByText("Updates")).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
