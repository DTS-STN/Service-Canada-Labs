import React from "react";
import { render, screen } from "@testing-library/react";
import TextWithImage from "./TextWithImage";
import { Default } from "./TextWithImage.stories.js";
import { Vertical } from "./TextWithImage.stories.js";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("TextWithImage", () => {
  test("renders TextWithImage component with default props", async () => {
    const { container } = render(<TextWithImage {...Default.args} />);
    expect(screen.getByAltText("image alt text")).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.startsWith("Every week"))
    ).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test("renders TextWithImage component with Vertical props", async () => {
    const { container } = render(<TextWithImage {...Vertical.args} />);
    expect(screen.getByAltText("image alt text")).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.startsWith("Every week"))
    ).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
