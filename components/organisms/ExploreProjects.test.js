import React from "react";
import { render, screen } from "@testing-library/react";
import { ExploreProjects } from "./ExploreProjects";
import { Default } from "./ExploreProjects.stories.js";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("ExploreProjects", () => {
  test("renders component title and card titles with default props", async () => {
    const { container } = render(<ExploreProjects {...Default.args} />);
    expect(screen.getByText("Explore other projects")).toBeInTheDocument();
    expect(screen.getByText("First project")).toBeInTheDocument();
    expect(screen.getByText("Second project")).toBeInTheDocument();
    expect(screen.getByText("Third project")).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("renders card images with default props", async () => {
    const { container } = render(<ExploreProjects {...Default.args} />);
    expect(screen.getByAltText("first alt")).toBeInTheDocument();
    expect(screen.getByAltText("second alt")).toBeInTheDocument();
    expect(screen.getByAltText("third alt")).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("renders card descriptions with default props", async () => {
    const { container } = render(<ExploreProjects {...Default.args} />);
    expect(screen.getByText("first description")).toBeInTheDocument();
    expect(screen.getByText("second description")).toBeInTheDocument();
    expect(screen.getByText("third description")).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
