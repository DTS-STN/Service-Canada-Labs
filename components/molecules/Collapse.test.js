/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { TextDescription } from "./Collapse.stories";
import { HtmlDescription } from "./Collapse.stories";

expect.extend(toHaveNoViolations);

describe("Collapse component", () => {
  it("renders Collapse with string content", async () => {
    const { container } = render(<TextDescription {...TextDescription.args} />);
    const titleElement = screen.findByText("Example title");
    const descriptionElement = screen.findByText("Example description");
    expect(titleElement).toBeTruthy();
    expect(descriptionElement).toBeTruthy();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("renders Collapse with html content", async () => {
    const { container } = render(<HtmlDescription {...HtmlDescription.args} />);
    const titleElement = await screen.findByText("Example title");
    const descriptionParagraphElement = await screen.findByText(
      "First paragraph tag"
    );
    const descriptionUnorderedListElement = await screen.findByText(
      "Unorderded list item 1"
    );
    const descriptionOrderedListElement = await screen.findByText(
      "Ordered list item 1"
    );
    expect(titleElement).toBeTruthy();
    expect(descriptionParagraphElement).toBeTruthy();
    expect(descriptionUnorderedListElement).toBeTruthy();
    expect(descriptionOrderedListElement).toBeTruthy();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
