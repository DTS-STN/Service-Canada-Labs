/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Primary } from "./Details.stories";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("Details", () => {
  it("opens and shows content", () => {
    render(<Primary {...Primary.args} />);
    const elem = screen.getByTestId("details");
    const summary = elem.getElementsByTagName("summary")[0];
    expect(summary).toHaveTextContent(Primary.args.label);
    summary.click();
    screen.getByText(Primary.args.children);
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const elem = screen.getByTestId("details");
    const summary = elem.getElementsByTagName("summary")[0];
    summary.click();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
