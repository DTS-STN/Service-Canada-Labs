import React from "react";
import Project from "./Project";

export default {
  title: "Components/Molecules/Project",
  component: Project,
};

const Template = (args) => <Project {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: "Project title",
  tag: "project_tag",
  tagLabel: "Project tag",
  description: "Project description",
};
