import React from "react";
import { CallToAction } from "./CallToAction";

export default {
  title: "Components/Molecules/CallToAction",
  component: CallToAction,
};

const Template = (args) => <CallToAction {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "the title",
  description: "a description that should be short and concise",
  href: "#",
  hrefText: "the link text",
};
