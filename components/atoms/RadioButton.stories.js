import React from "react";
import { RadioButton } from "./RadioButton";

export default {
  title: "Components/Atoms/RadioButton",
  component: RadioButton,
};

const Template = (args) => <RadioButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: "radio-button-1",
  name: "radio_button_1",
  value: "Some Value",
  label: "My Radio Button",
  dataTestId: "primary",
};

export const Checked = Template.bind({});
Checked.args = {
  id: "radio-button-checked",
  name: "radio_button_checked",
  value: "Some Value",
  label: "My Radio Button",
  dataTestId: "checked",
  checked: true,
};

export const UnControlled = Template.bind({});
UnControlled.args = {
  id: "radio-button-uncontrolled",
  name: "radio_button_uncontrolled",
  value: "Some Value",
  label: "My Radio Button",
  dataTestId: "uncontrolled",
  uncontrolled: true,
};

export const RoundedFront = Template.bind({});
RoundedFront.args = {
  id: "radio-button-rounded-front",
  name: "radio_button_rounded_front",
  value: "Some Value",
  label: "My Radio Button",
  dataTestId: "roundedFront",
  roundedFront: true,
};

export const RoundedBack = Template.bind({});
RoundedBack.args = {
  id: "radio-button-rounded-back",
  name: "radio_button_rounded_back",
  value: "Some Value",
  label: "My Radio Button",
  dataTestId: "roundedBack",
  roundedBack: true,
};
