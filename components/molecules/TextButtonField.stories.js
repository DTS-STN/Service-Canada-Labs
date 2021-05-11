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
  text: ["Paragraph 1", "Paragraph 2", "Paragraph 3"],
  idButton: "Button1",
  buttonText: ["Button"],
};

Secondary.args = {
  title: "Secondary",
  text: ["Paragraph 1", "Paragraph 2", "Paragraph 3"],
  buttonText: ["Button"],
  idButton: "Button2",
  secondary: true,
};

Disabled.args = {
  title: "Disabled",
  text: ["Paragraph 1", "Paragraph 2", "Paragraph 3"],
  buttonText: ["Button"],
  idButton: "Button3",
  disabled: true,
};

Custom.args = {
  title: "Custom",
  text: ["Paragraph 1", "Paragraph 2", "Paragraph 3"],
  buttonText: ["Button"],
  idButton: "Button4",
  custom: "bg-red-100",
};
