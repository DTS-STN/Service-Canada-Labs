import React from "react";
import Card from "./Card";

export default {
  title: "Components/Molecules/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
export const Experiment = Template.bind({});

Primary.args = {
  title: "Title",
  description: "Description",
};

Experiment.args = {
  isExperiment: true,
  title: "Title",
  tag: "experiment_tag",
  tagLabel: "Experiment tag",
  description: "Description",
  href: "/some/link",
};
