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
  it("renders Card in its primary state", async () => {
    render(<Primary {...Primary.args} />);
    const titleElement = screen.findByText("Title");
    const descriptionElement = screen.findByText("Description");
    expect(titleElement).toBeTruthy();
    expect(descriptionElement).toBeTruthy();
  });

  it("renders Card with tag", async () => {
    render(<WithTag {...WithTag.args} />);
    const titleElement = await screen.findByText("Title");
    const tagElement = await screen.findByText("Experiment tag");
    const descriptionElement = await screen.findByText("Description");
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
