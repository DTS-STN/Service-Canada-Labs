import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./SearchBar.stories";

expect.extend(toHaveNoViolations);

describe("Action Button", () => {
  it("renders primary", () => {
    render(<Primary {...Primary.args} />);
    expect(screen.findByPlaceholderText("Search Canada.ca")).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
