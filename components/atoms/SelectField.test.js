/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./SelectField.stories";

expect.extend(toHaveNoViolations);

describe("SelectField", () => {
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
  });
  afterEach(() => {
    mockFn.mockRestore();
  });
  // TODO could not find a way to test selecting item from data list
  it("renders field and accepts input", () => {
    render(<Primary {...Primary.args} onChange={mockFn} />);
    const inputElem = screen.getByTestId("select-field-1-choice");
    fireEvent.change(inputElem, { target: { value: "Option 1" } });
    expect(inputElem.value).toBe("Option 1");
  });
  it("has no accessibility violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
