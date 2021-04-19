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
  checkBoxId: "nutella-check-1",
  textFieldId: "nutella-text-1",
  checkBoxName: "nutellaCheckOne",
  textFieldName: "nutellaTextOne",
  checkBoxLabel: "Do you not like Nutella ?",
  textFieldLabel: "Please explain why you are wrong ?",
  checkBoxDataTestId: "unopened-check-1",
  textFieldDataTestId: "unopened-text-1",
};

export const Opened = Template.bind({});
Opened.args = {
  checkBoxId: "nutella-check-1",
  textFieldId: "nutella-text-1",
  checkBoxName: "nutellaCheckOne",
  textFieldName: "nutellaTextOne",
  checkBoxLabel: "Do you not like Nutella ?",
  checked: true,
  textFieldLabel: "Please explain why you are wrong ?",
  checkBoxDataTestId: "opened-check-1",
  textFieldDataTestId: "opened-text-1",
};

export const UnControlled = Template.bind({});
UnControlled.args = {
  checkBoxId: "nutella-check-1",
  textFieldId: "nutella-text-1",
  checkBoxName: "nutellaCheckOne",
  textFieldName: "nutellaTextOne",
  checkBoxLabel: "Do you not like Nutella ?",
  uncontrolled: true,
  textFieldLabel: "Please explain why you are wrong ?",
  checkBoxDataTestId: "opened-check-1",
  textFieldDataTestId: "opened-text-1",
};
