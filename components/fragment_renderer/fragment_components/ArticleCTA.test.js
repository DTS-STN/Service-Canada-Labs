import React from "react";
import { render, screen } from "@testing-library/react";
import ArticleCTA from "./ArticleCTA";
import { Default } from "./ArticleCTA.stories.js";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("ArticleCTA", () => {
  test("renders ArticleCTA component with default props", async () => {
    const { container } = render(<ArticleCTA {...Default.args} />);
    expect(screen.getByText("This is a body")).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
