/**
 * @jest-environment jsdom
 */
import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { NoBanner, WithBanner } from "./Layout.stories";
import Cookies from "js-cookie";

expect.extend(toHaveNoViolations);

jest.mock("next/link", () => {
  return ({ children }) => {
    return children;
  };
});

describe("Layout", () => {
  it("renders without the banner", () => {
    render(<NoBanner {...NoBanner.args} />);
    screen.getByTestId("child-element");
  });

  it("renders with the banner", () => {
    render(<WithBanner {...WithBanner.args} />);
    const bannerTitle = screen.getByText("Banner Text");
    expect(bannerTitle).toBeTruthy();
  });

  it("changes the language from French to English when language toggle clicked", () => {
    render(<NoBanner {...NoBanner.args} locale="fr" />);
    const inputElem3 = screen.getByTestId("languageLink3");
    act(() => {
      inputElem3.click();
    });
    expect(screen.getByTestId("languageLink3").textContent).toEqual("English");
  });

  it("has no a11y violations", async () => {
    const { container } = render(<NoBanner {...NoBanner.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("has no a11y violations with banner", async () => {
    const { container } = render(<WithBanner {...WithBanner.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
