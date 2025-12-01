import React from "react";
import { CheckBox } from "./CheckBox";

export default {
  title: "Components/Atoms/CheckBox",
  component: CheckBox,
  decorators: [
    (Story) => (
      <div className="w-full flex justify-center">
        <div className="w-96">
          <Story />
        </div>
      </div>
    ),
  ],
};

const Template = (args) => <CheckBox {...args} />;

export const UnChecked = Template.bind({});
UnChecked.args = {
  id: "checkbox 1",
  name: "ChexBox1",
  value: "IsChecked",
  label: "I am a checkbox",
  dataTestId: "unchecked-checkbox",
  checked: false,
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

export const UnControlled = Template.bind({});
UnControlled.args = {
  id: "checkbox 1",
  name: "ChexBox1",
  value: "IsChecked",
  label: "I am an uncontrolled checkbox",
  dataTestId: "uncontrolled-checkbox",
  uncontrolled: true,
  checked: false,
};

export const Required = Template.bind({});
Required.args = {
  id: "checkbox 1",
  name: "ChexBox1",
  value: "IsChecked",
  label: "I am an uncontrolled checkbox",
  dataTestId: "required-checkbox",
  showRequiredLabel: true,
  checked: false,
};
