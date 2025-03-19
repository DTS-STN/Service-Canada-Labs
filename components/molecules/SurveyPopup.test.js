import { render, screen, fireEvent } from "@testing-library/react";
import { SurveyPopup } from "./SurveyPopup";
import { axe, toHaveNoViolations } from "jest-axe";
import { useTranslation } from "next-i18next";

// Mock the translation hook
jest.mock("next-i18next", () => ({
  useTranslation: () => ({
    t: (key) =>
      ({
        "surveyPopup.ariaLabel": "Website feedback survey",
        "surveyPopup.openButtonLabel": "Open feedback survey",
        "surveyPopup.closeButtonLabel": "Close feedback survey",
        "surveyPopup.titleExpanded":
          "Tell us what you think of Service Canada Labs",
        "surveyPopup.titleCollapsed": "Tell us what you think",
        "surveyPopup.description":
          "You can help shape this website too. Take a few minutes to tell us about your experience.",
        "surveyPopup.optionsGroupLabel": "Survey options",
        "surveyPopup.noThanksButton": "No thanks",
        "surveyPopup.takeSurveyButton": "Take the survey",
      }[key]),
  }),
}));

expect.extend(toHaveNoViolations);

describe("SurveyPopup", () => {
  it("renders in initial collapsed state", () => {
    render(<SurveyPopup />);

    expect(screen.getByRole("complementary")).toBeInTheDocument();
    expect(screen.getByText("Tell us what you think")).toBeInTheDocument();
    expect(
      screen.queryByText("Tell us what you think of Service Canada Labs")
    ).not.toBeInTheDocument();
  });

  it("expands when clicked and shows full content", () => {
    render(<SurveyPopup />);

    const toggleButton = screen.getByRole("button", {
      name: /Open feedback survey/i,
    });
    fireEvent.click(toggleButton);

    expect(
      screen.getByText("Tell us what you think of Service Canada Labs")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "You can help shape this website too. Take a few minutes to tell us about your experience."
      )
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /No thanks/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Take the survey/i })
    ).toBeInTheDocument();
  });

  it('collapses when "No thanks" is clicked', () => {
    render(<SurveyPopup />);

    // Open the popup
    fireEvent.click(
      screen.getByRole("button", { name: /Open feedback survey/i })
    );
    // Click "No thanks"
    fireEvent.click(screen.getByRole("button", { name: /No thanks/i }));

    expect(
      screen.queryByText("Tell us what you think of Service Canada Labs")
    ).not.toBeInTheDocument();
    expect(screen.getByText("Tell us what you think")).toBeInTheDocument();
  });

  it("collapses when Escape key is pressed", () => {
    render(<SurveyPopup />);

    // Open the popup
    fireEvent.click(
      screen.getByRole("button", { name: /Open feedback survey/i })
    );
    // Press Escape
    fireEvent.keyDown(screen.getByRole("complementary"), { key: "Escape" });

    expect(
      screen.queryByText("Tell us what you think of Service Canada Labs")
    ).not.toBeInTheDocument();
    expect(screen.getByText("Tell us what you think")).toBeInTheDocument();
  });

  it('moves focus to "No thanks" button when opened', () => {
    render(<SurveyPopup />);

    // Open the popup
    fireEvent.click(
      screen.getByRole("button", { name: /Open feedback survey/i })
    );

    expect(document.activeElement).toBe(
      screen.getByRole("button", { name: /No thanks/i })
    );
  });

  describe("text overrides", () => {
    const customText = {
      titleCollapsed: "Give us feedback",
      titleExpanded: "Share your thoughts about our service",
      description: "Your feedback helps us improve our services.",
      noThanksText: "Skip",
      takeSurveyText: "Start Survey",
      ariaLabel: "Feedback survey",
      openButtonLabel: "Open feedback form",
      closeButtonLabel: "Close feedback form",
      optionsGroupLabel: "Feedback options",
    };

    it("uses custom text when provided", () => {
      render(<SurveyPopup {...customText} />);

      // Check initial state
      expect(screen.getByText(customText.titleCollapsed)).toBeInTheDocument();
      expect(screen.getByRole("complementary")).toHaveAttribute(
        "aria-label",
        customText.ariaLabel
      );

      // Open popup
      fireEvent.click(
        screen.getByRole("button", { name: customText.openButtonLabel })
      );

      // Check expanded state
      expect(screen.getByText(customText.titleExpanded)).toBeInTheDocument();
      expect(screen.getByText(customText.description)).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: customText.noThanksText })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: customText.takeSurveyText })
      ).toBeInTheDocument();
      expect(screen.getByRole("group")).toHaveAttribute(
        "aria-label",
        customText.optionsGroupLabel
      );
    });

    it("falls back to translations when props are not provided", () => {
      render(<SurveyPopup />);

      expect(screen.getByText("Tell us what you think")).toBeInTheDocument();
      expect(screen.getByRole("complementary")).toHaveAttribute(
        "aria-label",
        "Website feedback survey"
      );

      fireEvent.click(
        screen.getByRole("button", { name: /Open feedback survey/i })
      );

      expect(
        screen.getByText("Tell us what you think of Service Canada Labs")
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "No thanks" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Take the survey" })
      ).toBeInTheDocument();
    });

    it("allows mixing custom text and translations", () => {
      render(
        <SurveyPopup
          titleCollapsed={customText.titleCollapsed}
          noThanksText={customText.noThanksText}
        />
      );

      expect(screen.getByText(customText.titleCollapsed)).toBeInTheDocument();

      fireEvent.click(
        screen.getByRole("button", { name: /Open feedback survey/i })
      );

      expect(
        screen.getByText("Tell us what you think of Service Canada Labs")
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: customText.noThanksText })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Take the survey" })
      ).toBeInTheDocument();
    });
  });

  it("has no a11y violations", async () => {
    const { container } = render(<SurveyPopup />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
