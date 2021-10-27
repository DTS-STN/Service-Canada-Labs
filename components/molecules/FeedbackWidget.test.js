/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./FeedbackWidget.stories";

expect.extend(toHaveNoViolations);

describe("FeedbackWidget tests", () => {
  it("renders FeedbackWidget in its primary state", () => {
    render(<Primary {...Primary.args} />);
    expect(screen.getByTestId("feedbackDropdown")).toHaveClass(
      "relative flex w-full justify-center items-center bg-custom-blue-blue"
    );
  });

  it("no accessibility issues for form", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("no accessibility issues for thank you message", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const submitButton = screen.getByTestId("feedback-submit");
    submitButton.click();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
