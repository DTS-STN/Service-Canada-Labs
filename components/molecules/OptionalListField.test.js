/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import {
  UnControlled,
  Radio,
  Opened_Checkboxes,
  Opened_Radiofields,
} from "./OptionalListField.stories";

expect.extend(toHaveNoViolations);

describe("OptionalListField", () => {
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

  it("opens and closes list field", async () => {
    const { container } = render(<UnControlled {...UnControlled.args} />);
    const checkBox = screen.getByTestId("uncontrolled-check-1");
    await act(async () => {
      await userEvent.click(screen.getByTestId("uncontrolled-check-1"));
    });
    expect(checkBox).toBeChecked();
    expect(screen.getByTestId("reasons-dislike")).toBeTruthy();
    expect(screen.getByTestId("reasons-poor-choice")).toBeTruthy();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("renders radio input when specified", async () => {
    render(<Radio {...Radio.args} />);
    let radio = screen.getByTestId("radio-check-1");
    expect(radio.type).toBe("radio");
  });

  it("renders checkbox list when specified", async () => {
    const { container } = render(
      <Opened_Checkboxes {...Opened_Checkboxes.args} />
    );
    let elem = screen.getByTestId("reasons-dislike");
    expect(elem.type).toEqual("checkbox");
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("renders radio button list when specified", async () => {
    const { container } = render(
      <Opened_Radiofields {...Opened_Radiofields.args} />
    );
    let elem = screen.getByTestId("reasons-dislike");
    expect(elem.type).toEqual("radio");
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
