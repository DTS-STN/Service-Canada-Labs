/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./ErrorBox.stories";

expect.extend(toHaveNoViolations);

describe("ErrorBox", () => {
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

  it("has no accessibility violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
