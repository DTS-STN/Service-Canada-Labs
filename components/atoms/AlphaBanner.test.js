import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./AlphaBanner.stories";

expect.extend(toHaveNoViolations);

describe("AlphaBanner tests", () => {
  it("renders AlphaBanner in its primary state", () => {
    render(<Primary {...Primary.args} />);
    const textElement = screen.getByText("AlphaBanner Text");
    expect(textElement).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
