/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary, WithFeedback } from "./PhaseBanner.stories";

expect.extend(toHaveNoViolations);

describe("PhaseBanner tests", () => {
  it("renders PhaseBanner in its primary state", () => {
    render(<Primary {...Primary.args} />);
    const phaseElement = screen.getByText("PhaseBanner Phase");
    const textElement = screen.getByText("PhaseBanner Text");
    expect(phaseElement).toBeTruthy();
    expect(textElement).toBeTruthy();
  });

  it("renders PhaseBanner with the feedback", () => {
    render(<WithFeedback {...WithFeedback.args} />);
    const feedback = screen.getByTestId("feedbackDropdown");
    expect(feedback).toBeTruthy();
  });

  it("renders an empty status div before submitting the form", () => {
    render(<WithFeedback {...Primary.args} />);
    expect(screen.getByRole("status")).toBeTruthy();
  });

  it("no accessibility issues for form", async () => {
    const { container } = render(<WithFeedback {...Primary.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("no accessibility issues for thank you message", async () => {
    const { container } = render(<WithFeedback {...Primary.args} />);
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
