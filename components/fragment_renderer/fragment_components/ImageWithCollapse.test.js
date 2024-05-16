import React from "react";
import { render, screen } from "@testing-library/react";
import ImageWithCollapse from "./ImageWithCollapse";
import { Default } from "./ImageWithCollapse.stories.js";
import { axe, toHaveNoViolations } from "jest-axe";
import { userEvent } from "../../../node_modules/@storybook/test/dist/index";

expect.extend(toHaveNoViolations);

describe("ImageWithCollapse", () => {
  test("renders ImageWithCollapse component with default props", async () => {
    const { container } = render(<ImageWithCollapse {...Default.args} />);
    expect(screen.getByAltText("image alt text")).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.startsWith("Example Title"))
    ).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("on click renders Collapse component with default props", async () => {
    const { container } = render(<ImageWithCollapse {...Default.args} />);
    const collapse = screen.getByText((content) =>
      content.startsWith("Example Title")
    );
    userEvent.click(collapse);
    expect(
      screen.getByText((content) => content.startsWith("Every"))
    ).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.startsWith("First"))
    ).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.startsWith("Unordered list item 1"))
    ).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.startsWith("Ordered list item 1"))
    ).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
