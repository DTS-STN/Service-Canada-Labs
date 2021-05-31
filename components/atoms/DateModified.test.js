/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./DateModified.stories";

expect.extend(toHaveNoViolations);

describe("DateModified", () => {
  it("renders and formats the date properly", () => {
    render(<Primary {...Primary.args} />);
    screen.getByText("2020-04-20");
  });

  it("renders 'NA' as date if date is undefined", () => {
    render(<Primary />);
    screen.getByText("NA");
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
