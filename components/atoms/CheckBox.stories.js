import React from "react";
import { CheckBox } from "./CheckBox";

export default {
  title: "Components/Atoms/CheckBox",
  component: CheckBox,
};

const Template = (args) => <CheckBox {...args} />;

export const UnChecked = Template.bind({});
UnChecked.args = {
  id: "checkbox 1",
  name: "ChexBox1",
  value: "IsChecked",
  label: "I am a checkbox",
  dataTestId: "unchecked-checkbox",
};

export const Checked = Template.bind({});
Checked.args = {
  id: "checkbox 1",
  name: "ChexBox1",
  value: "IsChecked",
  label: "I am a checkbox",
  dataTestId: "checked-checkbox",
  checked: true,
};
