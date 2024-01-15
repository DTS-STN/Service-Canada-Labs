import React from "react";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";
import { DefaultFooter } from "./Footer.stories.js";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("Footer", () => {
  test("renders Footer component with default props", async () => {
    const { container } = render(<Footer {...DefaultFooter.args} />);
    expect(screen.getByTestId("footer")).toBeInTheDocument();
    expect(
      screen.getByAltText("Symbol of the Government of Canada")
    ).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("renders Footer component with custom brand links", async () => {
    const { container } = render(<Footer {...DefaultFooter.args} />);
    expect(screen.getByTestId("footer")).toBeInTheDocument();
    expect(screen.getByText("Social media")).toBeInTheDocument();
    expect(screen.getByText("Mobile applications")).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
