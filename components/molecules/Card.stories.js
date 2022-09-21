import React from "react";
import Card from "./Card";

export default {
  title: "Components/Molecules/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
export const Experiment = Template.bind({});
export const Blog = Template.bind({});

Primary.args = {
  title: "Title",
  description: "Description",
  imgSrc: "/placeholderImg",
  imgAlt: "placeholderAlt",
  imgHeight: 500,
  imgWidth: 500,
};

Experiment.args = {
  isExperiment: true,
  title: "Title",
  tag: "experiment_tag",
  tagLabel: "Experiment tag",
  description: "Description",
  href: "/some/link",
  imgSrc: "/placeholderImg",
  imgAlt: "placeholderAlt",
  imgHeight: 500,
  imgWidth: 500,
};

Blog.args = {
  blog: true,
  title: "Title",
  href: "/somelink",
  datePosted: "2022-01-01",
  description: "Project description",
  btnHref: "/somelink",
  btnText: "More about",
};
