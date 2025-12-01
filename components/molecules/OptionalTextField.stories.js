import React from "react";
import { OptionalTextField } from "./OptionalTextField";

export default {
  title: "Components/Molecules/OptionalTextField",
  component: OptionalTextField,
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

const Template = (args) => <OptionalTextField {...args} />;

export const UnOpened = Template.bind({});
UnOpened.args = {
  controlId: "nutella-check-1",
  textFieldId: "nutella-text-1",
  controlName: "nutellaCheckOne",
  textFieldName: "nutellaTextOne",
  controlLabel: "Do you not like Nutella ?",
  textFieldLabel: "Please explain why you are wrong ?",
  controlDataTestId: "unopened-check-1",
  textFieldDataTestId: "unopened-text-1",
  checked: false,
  controlValue: "val",
};

export const Opened = Template.bind({});
Opened.args = {
  controlId: "nutella-check-1",
  textFieldId: "nutella-text-1",
  controlName: "nutellaCheckOne",
  textFieldName: "nutellaTextOne",
  controlLabel: "Do you not like Nutella ?",
  checked: true,
  textFieldLabel: "Please explain why you are wrong ?",
  controlDataTestId: "opened-check-1",
  textFieldDataTestId: "opened-text-1",
  controlValue: "val",
};

export const Radio = Template.bind({});
Radio.args = {
  controlType: "radiofield",
  controlId: "nutella-check-1",
  textFieldId: "nutella-text-1",
  controlName: "nutellaCheckOne",
  textFieldName: "nutellaTextOne",
  controlLabel: "Do you not like Nutella ?",
  checked: true,
  textFieldLabel: "Please explain why you are wrong ?",
  controlDataTestId: "radio-check-1",
  textFieldDataTestId: "radio-text-1",
  controlValue: "val",
};

export const UnControlled = Template.bind({});
UnControlled.args = {
  controlId: "nutella-check-1",
  textFieldId: "nutella-text-1",
  controlName: "nutellaCheckOne",
  textFieldName: "nutellaTextOne",
  controlLabel: "Do you not like Nutella ?",
  uncontrolled: true,
  textFieldLabel: "Please explain why you are wrong ?",
  controlDataTestId: "uncontrolled-check-1",
  textFieldDataTestId: "uncontrolled-text-1",
  checked: false,
  controlValue: "val",
};

export const MultiText = Template.bind({});
MultiText.args = {
  controlId: "nutella-check-1",
  textFieldId: "nutella-text-1",
  controlName: "nutellaCheckOne",
  textFieldName: "nutellaTextOne",
  controlLabel: "Do you not like Nutella ?",
  uncontrolled: true,
  multiText: true,
  rows: 5,
  textFieldLabel: "Please explain why you are wrong ?",
  controlDataTestId: "multitext-check-1",
  textFieldDataTestId: "multitext-text-1",
  checked: false,
  controlValue: "val",
};
