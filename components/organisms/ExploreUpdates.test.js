import React from "react";
import { render, screen } from "@testing-library/react";
import { Default } from "./ExploreUpdates.stories.js";
import { axe, toHaveNoViolations } from "jest-axe";
import { ExploreUpdates } from "./ExploreUpdates";

expect.extend(toHaveNoViolations);

describe("ExploreUpdates", () => {
  test("renders properly with default props", async () => {
    const { container } = render(<ExploreUpdates {...Default.args} />);
    expect(screen.getByText("Explore more updates")).toBeInTheDocument();
    expect(
      screen.getByText("How feedback is shaping the estimator")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "What we learned on Service Canada Labs before going live on Canada.ca"
      )
    ).toBeInTheDocument();
    expect(screen.getAllByText("Project:")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Posted on:")[0]).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
