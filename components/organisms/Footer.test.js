import React from "react";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";
import { DefaultFooter } from "./Footer.stories.js";

describe("Footer", () => {
  test("renders Footer component with default props", () => {
    render(<Footer {...DefaultFooter.args} />);

    expect(screen.getByTestId("footer")).toBeInTheDocument();
    expect(
      screen.getByAltText("Symbol of the Government of Canada")
    ).toBeInTheDocument();
  });

  test("renders Footer component with custom brand links", () => {
    render(<Footer {...DefaultFooter.args} />);
    expect(screen.getByTestId("footer")).toBeInTheDocument();
    expect(screen.getByText("Social media")).toBeInTheDocument();
    expect(screen.getByText("Mobile applications")).toBeInTheDocument();
  });
});
