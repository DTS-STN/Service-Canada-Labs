import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { NoBanner, WithBanner } from "./Layout.stories";

expect.extend(toHaveNoViolations);

describe("Layout", () => {
  it("renders without the banner", () => {
    const noBanner = render(<NoBanner {...NoBanner.args} />);
    expect(noBanner).toBeTruthy();
  });

  it("renders with the banner", () => {
    render(<WithBanner {...WithBanner.args} />);
    const banner = screen.getByTitle("Home banner");
    expect(banner).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<NoBanner {...NoBanner.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
