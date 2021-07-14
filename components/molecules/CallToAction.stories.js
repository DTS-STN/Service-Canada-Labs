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
  descriptionP1: "a description that should be short and concise",
  descriptionP2: "a description Part 2",
  href: "#",
  hrefText: "the link text",
};
