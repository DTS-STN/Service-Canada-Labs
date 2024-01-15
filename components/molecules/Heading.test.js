/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Default, withFromLink } from "./Heading.stories";
import { Heading } from "./Heading";

expect.extend(toHaveNoViolations);

describe("Heading", () => {
  it("renders default", () => {
    render(<Heading {...Default.args} />);
    expect(screen.getByText("Default Heading")).toHaveTextContent(
      Default.args.title
    );
  });

  it("renders with from link", () => {
    render(<Heading {...withFromLink.args} />);
    expect(screen.getByText("Google")).toHaveAttribute("href");
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Heading {...Default.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
