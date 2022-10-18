import React from "react";
import Card from "./Card";
import Image from "../../public/placeholder.png";

export default {
  title: "Components/Molecules/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
export const WithTag = Template.bind({});
export const WithImage = Template.bind({});
export const WithDate = Template.bind({});
export const WithButton = Template.bind({});

Primary.args = {
  title: "Title",
  href: "/some/link",
  description: "Description",
  imgSrc: "/placeholderImg",
  imgAlt: "placeholderAlt",
};

WithTag.args = {
  showTag: true,
  title: "Title",
  tag: "experiment_tag",
  tagLabel: "Experiment tag",
  description: "Description",
  href: "/some/link",
};

WithImage.args = {
  showImage: true,
  title: "Title",
  description: "Description",
  href: "/somelink",
  imgSrc: Image,
  imgAlt: "placeholderAlt",
};

WithDate.args = {
  showDate: true,
  title: "Title",
  href: "/somelink",
  datePosted: "2022-01-01",
  description: "Description",
};

WithButton.args = {
  showButton: true,
  title: "Title",
  description: "Description",
  href: "/somelink",
  btnHref: "/somelink",
  btnText: "Button text",
};
