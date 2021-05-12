import React from "react";
import { TextButtonField } from "./TextButtonField";

export default {
  title: "Components/Molecules/TextButtonField",
  component: TextButtonField,
};

const Template = (args) => <TextButtonField {...args}></TextButtonField>;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Disabled = Template.bind({});
export const Custom = Template.bind({});

Primary.args = {
  title: "Primary",
  html: "<h1>Title</h1><p>Text</p>",
  idButton: "Button1",
  buttonText: ["Button"],
  secondary: false,
};

Secondary.args = {
  title: "Secondary",
  html: "<h1>Title</h1><p>Text</p>",
  buttonText: ["Button"],
  idButton: "Button2",
};

Disabled.args = {
  title: "Disabled",
  html: "<h1>Title</h1><p>Text</p>",
  buttonText: ["Button"],
  idButton: "Button3",
  disabled: true,
};

Custom.args = {
  title: "Custom",
  html: "<h1>Title</h1><p>Text</p>",
  buttonText: ["Button"],
  idButton: "Button4",
  custom: "bg-red-100",
};
