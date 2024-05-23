import React from "react";
import { render, screen } from "@testing-library/react";
import QuoteVerticalLineContent from "./QuoteVerticalLineContent";
import { Default } from "./QuoteVerticalLineContent.stories.js";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("QuoteVerticalLineContent", () => {
  test("renders QuoteVerticalLineContent component with default props", async () => {
    const { container } = render(
      <QuoteVerticalLineContent {...Default.args} />
    );
    expect(
      screen.getByText((content) => content.startsWith("Quote Text"))
    ).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.startsWith("Explanation Text"))
    ).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
