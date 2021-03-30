import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./EntryBanner.stories";

expect.extend(toHaveNoViolations);

describe("Entry Banner", () => {
  it("renders the banner", () => {
    render(<Primary {...Primary.args} />);
    const banner = screen.getByTitle("Home banner");
    expect(banner).toBeTruthy();
  });

  it("renders the buttons", () => {
    render(<Primary {...Primary.args} />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
