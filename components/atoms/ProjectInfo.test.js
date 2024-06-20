/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./ProjectInfo.stories";

expect.extend(toHaveNoViolations);

describe("ProjectInfo tests", () => {
  it("renders ProjectInfo in its primary state", () => {
    render(<Primary {...Primary.args} />);
    const dateStarted = screen.getByText("2021-01-01");
    const dateEnded = screen.getByText("2022-03-31");
    const stage = screen.getByText("Alpha");
    expect(dateStarted).toBeTruthy();
    expect(dateEnded).toBeTruthy();
    expect(stage).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
