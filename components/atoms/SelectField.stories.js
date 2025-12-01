import React from "react";
import { SelectField } from "./SelectField";

export default {
  title: "Components/Atoms/SelectField",
  component: SelectField,
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

const Template = (args) => <SelectField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: "select-field-1",
  name: "selectField1",
  label: "I am a select field",
  uncontrolled: true,
  value: "",
  dataTestId: "select-field-1",
  options: [
    {
      id: "option1",
      name: "Option 1",
      value: "option1",
    },
    {
      id: "option2",
      name: "Option 2",
      value: "option2",
    },
    {
      id: "option3",
      name: "Option 3",
      value: "option3",
    },
    {
      id: "option4",
      name: "Option 4",
      value: "option4",
    },
  ],
};
