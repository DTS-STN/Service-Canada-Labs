/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./Project.stories";

expect.extend(toHaveNoViolations);

describe("Project tests", () => {
  it("renders Project in its primary state", () => {
    render(<Primary {...Primary.args} />);
    const titleElement = screen.getByText("Project title");
    const tagElement = screen.getByText("Project tag");
    const descriptionElement = screen.getByText("Project description");
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
