import React from "react";
import { SurveyCTA } from "./SurveyCTA";

export default {
  title: "Components/Molecules/SurveyCTA",
  component: SurveyCTA,
};

const Template = (args) => <SurveyCTA {...args}></SurveyCTA>;

export const Primary = Template.bind({});

Primary.args = {
  heading: "CTA Heading",
  description: "A description of what the CTA is for",
  buttonLabel: "Button label",
  buttonLink: "#",
  buttonType: "gc:custom/decd-endc/button-type/secondary",
  buttonId: "survey-cta-button",
};
