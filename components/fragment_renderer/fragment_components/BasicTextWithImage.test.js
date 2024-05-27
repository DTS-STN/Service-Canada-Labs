import React from "react";
import { render, screen } from "@testing-library/react";
import BasicTextWithImage from "./BasicTextWithImage";
import { Default } from "./BasicTextWithImage.stories.js";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("BasicTextWithImage", () => {
  test("renders BasicTextWithImage component with default props", async () => {
    const { container } = render(<BasicTextWithImage {...Default.args} />);
    expect(screen.getByAltText("image alt text")).toBeInTheDocument();
    expect(screen.getByText((content) => content.startsWith("Every week")))
      .toBeInTheDocument;
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
