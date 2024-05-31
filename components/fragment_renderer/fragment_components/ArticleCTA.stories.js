import * as React from "react";
import ArticleCTA from "./ArticleCTA";

export default {
  title: "Components/Fragment_Renderer/Fragment_Components/ArticleCTA",
  component: ArticleCTA,
};

const Template = (args) => <ArticleCTA {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: "This is a heading",
  body: "This is a body",
  ButtonProps: {
    text: "Action Button",
  },
  LinkProps: {
    id: "privacy-policy",
    text: "Review the Privacy Policy",
  },
};
