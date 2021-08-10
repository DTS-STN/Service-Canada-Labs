/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./Feedback.stories";
import fetchMock from "fetch-mock";

expect.extend(toHaveNoViolations);

describe("Feedback tests", () => {
  beforeEach(() => {
    fetchMock.postOnce("/api/feedback", {
      status: 200,
      body: "OK",
    });
  });
  afterEach(() => {
    fetchMock.restore();
  });
  it("renders Feedback in its primary state", () => {
    render(<Primary {...Primary.args} />);
    const feedback = screen.getByTestId("feedbackDropdown");
    expect(feedback).toBeTruthy();
  });

  it("displays thank you message after submit button is pressed", () => {
    render(<Primary {...Primary.args} />);
    const submitButton = screen.getByTestId("feedback-submit");
    submitButton.click();
    expect(screen.getByText("thankYouFeedback")).toBeTruthy();
  });

  it("renders an empty status div before submitting the form", () => {
    render(<Primary {...Primary.args} />);
    expect(screen.getByRole("status")).toBeTruthy();
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
});
