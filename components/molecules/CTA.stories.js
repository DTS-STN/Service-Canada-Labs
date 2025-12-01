import * as React from "react";
import { CTA } from "./CTA";
export default {
  title: "Components/Molecules/CTA",
  component: CTA,
};

const Template = (args) => <CTA {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: "This is a call-to-action!",
  body: "This sentence explains the action we want the users to take.",
  ButtonProps: {
    id: "cta-button",
    text: "Action Button",
  },
  LinkProps: {
    id: "privacy-policy",
    text: "Review the Privacy Policy",
  },
};

export const WithoutLink = Template.bind({});
WithoutLink.args = {
  heading: "This is a call-to-action!",
  body: "This sentence explains the action we want the users to take.",
  ButtonProps: {
    id: "cta-button-no-link",
    text: "Action Button",
  },
};
