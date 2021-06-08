/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./ErrorLabel.stories";

expect.extend(toHaveNoViolations);

describe("ErrorLabel", () => {
  it("renders text correctly on the page", () => {
    render(<Primary {...Primary.args} />);
    expect(screen.getByText(Primary.args.message)).toBeTruthy();
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });
});
