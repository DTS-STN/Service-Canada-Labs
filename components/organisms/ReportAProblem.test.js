/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./ReportAProblem.stories";
import fetchMock from "fetch-mock";

expect.extend(toHaveNoViolations);

describe("Report A Problem", () => {
  beforeEach(() => {
    fetchMock.postOnce("/api/report-a-problem", {
      status: 200,
      body: "OK",
    });
  });
  afterEach(() => {
    fetchMock.restore();
  });
  it("displays thank you message after submit button is pressed", () => {
    render(<Primary {...Primary.args} />);
    const submitButton = screen.getByTestId("report-a-problem-submit");
    submitButton.click();
    expect(screen.getByText("reportAProblemThankYouForYourHelp")).toBeTruthy();
  });
  it("no accessibility issues for form", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("no accessibility issues for thank you message", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const submitButton = screen.getByTestId("report-a-problem-submit");
    submitButton.click();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
