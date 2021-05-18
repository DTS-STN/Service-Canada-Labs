import React from "react";
import Experiment from "./Experiment";

export default {
  title: "Components/Molecules/Experiment",
  component: Experiment,
};

const Template = (args) => <Experiment {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: "Experiment title",
  tag: "Experiment tag",
  desc: "Experiment description",
};
