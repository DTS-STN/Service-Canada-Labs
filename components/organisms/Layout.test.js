import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { NoBanner, WithBanner, WithMenu } from "./Layout.stories";

expect.extend(toHaveNoViolations);

describe("Layout", () => {
  it("renders without the banner", () => {
    render(<NoBanner {...NoBanner.args} />);
    screen.getByTestId("child-element");
  });

  it("renders with the banner", () => {
    render(<WithBanner {...WithBanner.args} />);
    screen.getByTitle("Home banner");
  });

  it("renders with the menu", () => {
    render(<WithMenu {...WithMenu.args} />);
    screen.getByTitle("Menu");
  });

  it("has no a11y violations", async () => {
    const { container } = render(<NoBanner {...NoBanner.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("has no a11y violations with banner", async () => {
    const { container } = render(<WithBanner {...WithBanner.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("has no a11y violations with menu", async () => {
    const { container } = render(<WithMenu {...WithBanner.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
