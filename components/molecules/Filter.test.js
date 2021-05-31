/**
 * @jest-environment jsdom
 */
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./Filter.stories";

expect.extend(toHaveNoViolations);

describe("Filter Experiments", () => {
  it("renders radio buttons and label correctly", () => {
    render(<Primary {...Primary.args} />);
    screen.getByText(Primary.args.label);
    const optionOne = screen.getByText(Primary.args.options[0].label);
    const optionTwo = screen.getByText(Primary.args.options[1].label);
    const optionThree = screen.getByText(Primary.args.options[2].label);

    expect(optionOne).toHaveClass("rounded-l-lg");
    expect(optionTwo).not.toHaveClass("rounded-l-lg");
    expect(optionTwo).not.toHaveClass("rounded-r-lg");
    expect(optionThree).toHaveClass("rounded-r-lg");
  });

  it("calls onChange callback correctly", () => {
    let mockFn = jest.fn();
    render(<Primary {...Primary.args} onChange={mockFn} />);
    const allOption = screen.getByText(Primary.args.options[0].label);
    act(() => {
      allOption.click();
    });
    expect(mockFn.mock.calls.length).toBe(1);
    expect(mockFn.mock.calls[0][0]).toBe(Primary.args.options[0].id);
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
