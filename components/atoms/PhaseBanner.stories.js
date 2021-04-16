import React from "react";
import PhaseBanner from "./PhaseBanner";

export default {
  title: "Components/Atoms/PhaseBanner",
  component: PhaseBanner,
};

const Template = (args) => <PhaseBanner {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  phase: "PhaseBanner Phase",
  children: "PhaseBanner Text"
};
