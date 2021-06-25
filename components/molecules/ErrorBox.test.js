/**
 * @jest-environment jsdom
 */
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./ErrorBox.stories";

expect.extend(toHaveNoViolations);

describe("ErrorBox", () => {
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
  });
  afterEach(() => {
    mockFn.mockRestore();
  });

  it("renders component correctly", () => {
    render(<Primary {...Primary.args} />);
    screen.getByText(Primary.args.text);
    expect(screen.getByText(Primary.args.errors[0].text).tagName).toBe(
      "BUTTON"
    );
    expect(screen.getByText(Primary.args.errors[1].text).tagName).toBe(
      "BUTTON"
    );
    expect(screen.getByText(Primary.args.errors[2].text).tagName).toBe(
      "BUTTON"
    );
  });

  it("fires event when an error is selected", () => {
    render(<Primary {...Primary.args} onClick={mockFn} />);
    const inputElem = screen.getByText(Primary.args.errors[0].text);
    act(() => {
      inputElem.click();
    });
    expect(mockFn.mock.calls.length).toBe(1);
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
