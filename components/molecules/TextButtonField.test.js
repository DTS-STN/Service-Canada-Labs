import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import {
  Primary,
  Secondary,
  Disabled,
  Custom,
} from "./TextButtonField.stories";

expect.extend(toHaveNoViolations);

describe("TextButtonField", () => {
  it("renders the Text field with a button", () => {
    render(<Primary {...Primary.args} />);
    expect(screen.getByText("Primary")).toBeTruthy;
  });

  it("renders secondary button", () => {
    render(<Secondary {...Secondary.args} />);
    expect(screen.getByText("Secondary")).toBeTruthy;
  });

  it("renders disabled button", () => {
    render(<Disabled {...Disabled.args} />);
    expect(screen.getByText("Disabled")).toBeTruthy;
  });

  it("renders custom button", () => {
    render(<Custom {...Custom.args} />);
    expect(screen.getByText("Custom")).toBeTruthy;
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
