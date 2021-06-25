/**
 * @jest-environment jsdom
 */
import { render, screen, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import {
  Primary,
  Checked,
  UnControlled,
  RoundedFront,
  RoundedBack,
} from "./RadioButton.stories";

expect.extend(toHaveNoViolations);

describe("RadioButton", () => {
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
  });
  afterEach(() => {
    mockFn.mockRestore();
  });

  it("renders in unchecked state and fires event when clicked", () => {
    render(<Primary {...Primary.args} onChange={mockFn} />);
    const inputElem = screen.getByTestId(Primary.args.dataTestId);
    act(() => {
      inputElem.click();
    });

    expect(screen.getByText(Primary.args.label)).toBeTruthy();
    expect(mockFn.mock.calls.length).toBe(1);
    expect(mockFn.mock.calls[0][0]).toBe(Primary.args.value);
  });

  it("renders in unchecked state and fires event on Enter key up", () => {
    render(<Primary {...Primary.args} onChange={mockFn} />);
    const inputElem = screen.getByTestId(Primary.args.dataTestId);
    act(() => {
      fireEvent.keyUp(inputElem, { key: "Enter", code: "Enter" });
    });

    expect(screen.getByText(Primary.args.label)).toBeTruthy();
    expect(mockFn.mock.calls.length).toBe(1);
    expect(mockFn.mock.calls[0][0]).toBe(Primary.args.value);
  });

  it("renders uncontrolled component and gets checked when clicked", () => {
    render(<UnControlled {...UnControlled.args} onChange={mockFn} />);
    const inputElem = screen.getByTestId(UnControlled.args.dataTestId);
    act(() => {
      inputElem.click();
    });

    expect(inputElem).toBeChecked();
  });

  it("renders button with rounded front", () => {
    render(<RoundedFront {...RoundedFront.args} />);
    const inputLabel = screen.getByText(RoundedFront.args.label);
    expect(inputLabel).toHaveClass("rounded-l-lg");
  });

  it("renders button with rounded back", () => {
    render(<RoundedBack {...RoundedBack.args} />);
    const inputLabel = screen.getByText(RoundedBack.args.label);
    expect(inputLabel).toHaveClass("rounded-r-lg");
  });

  it("expect unchecked state to have no accessibility violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("expect checked state to have no accessibility violations", async () => {
    const { container } = render(<Checked {...Checked.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
