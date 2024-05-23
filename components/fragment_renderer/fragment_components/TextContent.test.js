import React from "react";
import { render, screen } from "@testing-library/react";
import TextContent from "./TextContent";
import { Default } from "./TextContent.stories.js";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("TextContent", () => {
  test("renders TextContent component with default props", async () => {
    const { container } = render(<TextContent {...Default.args} />);
    expect(screen.getByText((content) => content.startsWith("Every week")))
      .toBeInTheDocument;
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
