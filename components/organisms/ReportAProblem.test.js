/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
  it("displays error message after submit button is pressed and form is empty", async () => {
    render(<Primary {...Primary.args} />);
    await userEvent.click(screen.getByTestId("report-a-problem-submit"));
    expect(screen.getByText("reportAProblemError")).toBeTruthy();
  });
  it("displays thank you message after submit button is pressed and form isn't empty", async () => {
    render(<Primary {...Primary.args} />);
    await userEvent.click(screen.getByTestId("unclearInformation-checkbox"));
    await userEvent.click(screen.getByTestId("report-a-problem-submit"));
    expect(screen.getByText("reportAProblemThankYouForYourHelp")).toBeTruthy();
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
    const submitButton = screen.getByTestId("report-a-problem-submit");
    submitButton.click();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
