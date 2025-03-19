import { SurveyPopup } from "./SurveyPopup";
import { within } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

export default {
  title: "Components/Molecules/SurveyPopup",
  component: SurveyPopup,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
A feedback survey popup that appears at the bottom of the page. The popup can be expanded to show
a survey invitation and collapsed to show just the header. It includes accessibility features such as
keyboard navigation, focus management, and proper ARIA attributes.

## Usage
\`\`\`jsx
import { SurveyPopup } from '@components/molecules/SurveyPopup';

// With default translations
<SurveyPopup />

// With custom text
<SurveyPopup 
  titleCollapsed="Give us feedback"
  titleExpanded="Share your thoughts about our service"
  description="Your feedback helps us improve our services."
  noThanksText="Skip"
  takeSurveyText="Start Survey"
/>
\`\`\`

## Accessibility
- Uses proper ARIA attributes for expandable content
- Manages focus when opened/closed
- Supports keyboard navigation (Escape to close)
- Screen reader friendly with descriptive labels
`,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="h-screen relative">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    titleCollapsed: { control: "text" },
    titleExpanded: { control: "text" },
    description: { control: "text" },
    noThanksText: { control: "text" },
    takeSurveyText: { control: "text" },
    ariaLabel: { control: "text" },
    openButtonLabel: { control: "text" },
    closeButtonLabel: { control: "text" },
    optionsGroupLabel: { control: "text" },
  },
};

export const Default = {
  args: {
    titleCollapsed: "Give us feedback",
    titleExpanded: "Share your thoughts about our service",
    description: "Your feedback helps us improve our services.",
    noThanksText: "Skip",
    takeSurveyText: "Start Survey",
    ariaLabel: "Feedback survey",
    openButtonLabel: "Open feedback form",
    closeButtonLabel: "Close feedback form",
    optionsGroupLabel: "Feedback options",
  },
};

// Documentation for the stories
Default.parameters = {
  docs: {
    description: {
      story: "The default state of the survey popup.",
    },
  },
};
