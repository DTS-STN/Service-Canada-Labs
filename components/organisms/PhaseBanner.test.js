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
    screen.getByTestId("feedbackButton").click();
    const feedback = screen.getByTestId("feedbackDropdown");
    expect(feedback).toBeTruthy();
  });
});
