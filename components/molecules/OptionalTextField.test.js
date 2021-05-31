import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { UnControlled, MultiText, Radio } from "./OptionalTextField.stories";

expect.extend(toHaveNoViolations);

describe("OptionalTextField", () => {
  let mockFn1;
  let mockFn2;
  beforeEach(() => {
    mockFn1 = jest.fn();
    mockFn2 = jest.fn();
  });
  afterEach(() => {
    mockFn1.mockRestore();
    mockFn2.mockRestore();
  });

  it("opens and closes text field", async () => {
    const { container } = render(<UnControlled {...UnControlled.args} />);
    let checkBox = screen.getByTestId("uncontrolled-check-1");
    checkBox.click();
    expect(checkBox).toBeChecked();
    expect(screen.getByTestId("uncontrolled-text-1")).toBeTruthy();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("renders radio input when specified", async () => {
    render(<Radio {...Radio.args} />);
    let radio = screen.getByTestId("radio-check-1");
    expect(radio.type).toBe("radio");
  });

  it("renders multitext field when specified", async () => {
    const { container } = render(<MultiText {...MultiText.args} />);
    let checkBox = screen.getByTestId("multitext-check-1");
    checkBox.click();
    expect(checkBox).toBeChecked();
    let elem = screen.getByTestId("multitext-text-1");
    expect(elem.tagName).toEqual("TEXTAREA");
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
