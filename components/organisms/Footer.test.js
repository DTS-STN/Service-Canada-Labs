import React from "react";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";
import { WithMainBandEn } from "./Footer.stories.js";

describe("Footer", () => {
  const defaultProps = {
    id: "footer",
    lang: "en",
    isAuthenticated: false,
    contactLink: "https://www.canada.ca/en/contact.html",
  };

  test("renders Footer component with default props", () => {
    render(<Footer {...WithMainBandEn.args} />);

    expect(screen.getByTestId("footer")).toBeInTheDocument();
    expect(
      screen.getByAltText("Symbol of the Government of Canada")
    ).toBeInTheDocument();
  });

  test("renders Footer component with custom brand links", () => {
    const brandLinks = [
      {
        href: "https://example.com/link1",
        text: "Link 1",
      },
      {
        href: "https://example.com/link2",
        text: "Link 2",
      },
    ];

    render(<Footer {...WithMainBandEn.args} brandLinks={brandLinks} />);

    expect(screen.getByTestId("footer")).toBeInTheDocument();
    expect(screen.getByText("Link 1")).toBeInTheDocument();
    expect(screen.getByText("Link 2")).toBeInTheDocument();
  });
});
