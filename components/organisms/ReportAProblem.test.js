/**
 * @jest-environment jsdom
 */
import { render, screen, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./ReportAProblem.stories";
import fetchMock from "fetch-mock";

expect.extend(toHaveNoViolations);

jest.mock("next/link", () => {
  return ({ children }) => {
    return <div>{children}</div>;
  };
});

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
    await act(async () => {
      await userEvent.click(screen.getByTestId("report-a-problem-submit"));
    });
    await waitFor(() => {
      expect(screen.getByText("reportAProblemError")).toBeTruthy();
    });
  });
  it("displays thank you message after submit button is pressed and form isn't empty", async () => {
    render(<Primary {...Primary.args} />);
    await act(async () => {
      await userEvent.click(screen.getByTestId("unclearInformation-checkbox"));
      await userEvent.click(screen.getByTestId("report-a-problem-submit"));
    });
    await waitFor(() => {
      expect(
        screen.getByText("reportAProblemThankYouForYourHelp")
      ).toBeTruthy();
    });
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
    await act(async () => {
      await userEvent.click(screen.getByTestId("report-a-problem-submit"));
    });
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
