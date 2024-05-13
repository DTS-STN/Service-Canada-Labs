/**
 * @jest-environment jsdom
 */
import { act, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { NoBanner, WithBanner } from "./Layout.stories";

expect.extend(toHaveNoViolations);

// Store the original console.error function
const originalConsoleError = console.error;

describe("Layout", () => {
  beforeAll(() => {
    // Suppress the specific act(...) warning
    console.error = (...args) => {
      if (
        (typeof args[0] === "string" &&
          args[0].includes(
            "Warning: An update to %s inside a test was not wrapped in act"
          )) ||
        (typeof args[0] === "string" &&
          args[0].includes(
            "Error: Not implemented: navigation (except hash changes)"
          ))
      ) {
        return;
      }
      originalConsoleError(...args);
    };
  });

  afterAll(() => {
    // Restore the original console.error function
    console.error = originalConsoleError;
  });

  it("renders without the banner", () => {
    render(<NoBanner {...NoBanner.args} />);
    screen.getByTestId("child-element");
  });

  it("renders with the banner", () => {
    render(<WithBanner {...WithBanner.args} />);
    const bannerTitle = screen.getByText("Banner Text");
    expect(bannerTitle).toBeTruthy();
  });

  it("changes the language from French to English when language toggle clicked", async () => {
    render(<NoBanner {...NoBanner.args} locale="fr" />);
    const languageLink = await screen.findByTestId("languageLink3");
    await act(async () => {
      await userEvent.click(languageLink);
    });
    await waitFor(() => {
      expect(screen.getByTestId("languageLink3").textContent).toEqual(
        "English"
      );
    });
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
