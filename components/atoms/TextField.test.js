/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary, UnControlled, BoldLabel } from "./TextField.stories";

expect.extend(toHaveNoViolations);

describe("TextField", () => {
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
  });
  afterEach(() => {
    mockFn.mockRestore();
  });
  it("renders text field in primary state", () => {
    render(<Primary {...Primary.args} onChange={mockFn} />);
    const inputElem = screen.getByTestId("textbox-controlled");
    fireEvent.change(inputElem, { target: { value: "h" } });
    expect(inputElem.value).toBe("");
    expect(mockFn.mock.calls.length).toBe(1);
    expect(mockFn.mock.calls[0][0]).toBe("h");
  });

  it("renders text field in uncontrolled state", () => {
    render(<UnControlled {...UnControlled.args} onChange={mockFn} />);
    const inputElem = screen.getByTestId("textbox-uncontrolled");
    fireEvent.change(inputElem, { target: { value: "hello" } });
    expect(inputElem.value).toEqual("hello");
    expect(mockFn.mock.calls.length).toEqual(1);
    expect(mockFn.mock.calls[0][0]).toEqual("hello");
  });

  it("renders text field with bold label", () => {
    render(<BoldLabel {...BoldLabel.args} />);
    expect(screen.getByText(BoldLabel.args.label).classList).toContain(
      "font-bold"
    );
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
