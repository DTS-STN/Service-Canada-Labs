/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./List.stories";

expect.extend(toHaveNoViolations);

describe("List", () => {
  it("renders the list with some items", () => {
    render(<Primary {...Primary.args} />);
    Primary.args.items.forEach((value) => {
      screen.getByText(value);
    });
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
