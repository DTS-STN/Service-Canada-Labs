import React from "react";
import { RadioField } from "./RadioField";

export default {
  title: "Components/Atoms/RadioField",
  component: RadioField,
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

const Template = (args) => <RadioField {...args} />;

export const UnChecked = Template.bind({});
UnChecked.args = {
  id: "radio 1",
  name: "RadioField1",
  value: "IsChecked",
  label: "I am a radio button",
  dataTestId: "unchecked-radio-field",
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  id: "radio 1",
  name: "RadioField1",
  value: "IsChecked",
  label: "I am a radio button",
  dataTestId: "checked-radio-field",
  checked: true,
};

export const UnControlled = Template.bind({});
UnControlled.args = {
  id: "radio 1",
  name: "RadioField1",
  value: "IsChecked",
  label: "I am an uncontrolled checkbox",
  dataTestId: "uncontrolled-checkbox",
  uncontrolled: true,
  checked: false,
};
