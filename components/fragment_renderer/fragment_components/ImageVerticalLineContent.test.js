import React from "react";
import { render, screen } from "@testing-library/react";
import ImageVerticalLineContent from "./ImageVerticalLineContent";
import { Default } from "./ImageVerticalLineContent.stories.js";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("ImageVerticalLineContent", () => {
  test("renders ImageVerticalLineContent component with default props", async () => {
    const { container } = render(
      <ImageVerticalLineContent {...Default.args} />
    );
    expect(screen.getByAltText("image alt text")).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.startsWith("Every week"))
    ).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
