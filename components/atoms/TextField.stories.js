import React from "react";
import { TextField } from "./TextField";

export default {
  title: "Components/Atoms/TextField",
  component: TextField,
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

const Template = (args) => <TextField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: "textField1",
  name: "textField1",
  label: "I am a text field",
  dataTestId: "textbox-controlled",
  placeholder: "Some placeholder text",
};

export const UnControlled = Template.bind({});
UnControlled.args = {
  id: "textField1",
  name: "textField1",
  label: "I am a text field",
  placeholder: "Some placeholder text",
  dataTestId: "textbox-uncontrolled",
  uncontrolled: true,
};

export const BoldLabel = Template.bind({});
BoldLabel.args = {
  id: "textField1",
  name: "textField1",
  label: "I am a text field",
  placeholder: "Some placeholder text",
  dataTestId: "textbox-bold",
  uncontrolled: true,
  boldLabel: true,
};
