/**
 * @jest-environment jsdom
 */
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
    expect(screen.getByRole("button")).toHaveTextContent(
      Primary.args.buttonText
    );
  });

  it("renders the Text field with some text", () => {
    render(<Primary {...Primary.args} />);
    screen.findByText(Primary.args.html);
  });

  it("renders secondary button", () => {
    render(<Secondary {...Secondary.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(
      Secondary.args.buttonText
    );
  });

  it("renders disabled button", () => {
    render(<Disabled {...Disabled.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(
      Disabled.args.buttonText
    );
    expect(screen.getByRole("button")).toHaveAttribute("disabled");
  });

  it("renders custom button", () => {
    render(<Custom {...Custom.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(
      Custom.args.buttonText
    );
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
