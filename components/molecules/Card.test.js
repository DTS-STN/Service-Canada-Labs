/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./Card.stories";
import { WithTag } from "./Card.stories";

expect.extend(toHaveNoViolations);

describe("Card tests", () => {
  it("renders Card in its primary state", () => {
    render(<Primary {...Primary.args} />);
    const titleElement = screen.getByText("Title");
    const descriptionElement = screen.getByText("Description");
    expect(titleElement).toBeTruthy();
    expect(descriptionElement).toBeTruthy();
  });

  it("renders Card with tag", () => {
    render(<WithTag {...WithTag.args} />);
    const titleElement = screen.getByText("Title");
    const tagElement = screen.getByText("Experiment tag");
    const descriptionElement = screen.getByText("Description");
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
