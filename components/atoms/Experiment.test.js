import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./Experiment.stories";

expect.extend(toHaveNoViolations);

describe("Experiment tests", () => {
  it("renders Experiment in its primary state", () => {
    render(<Primary {...Primary.args} />);
    const titleElement = screen.getByText("Experiment title");
    const tagElement = screen.getByText("Experiment tag");
    const descriptionElement = screen.getByText("Experiment description");
    expect(titleElement).toBeTruthy();
    expect(tagElement).toBeTruthy();
    expect(descriptionElement).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
