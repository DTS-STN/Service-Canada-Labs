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
  tag: "experiment_tag",
  tagLabel: "Experiment tag",
  description: "Experiment description",
};
