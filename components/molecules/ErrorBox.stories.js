import React from "react";
import { ErrorBox } from "./ErrorBox";

export default {
  title: "Components/Molecules/ErrorBox",
  component: ErrorBox,
  decorators: [
    (Story) => (
      <div className="w-full flex items-center flex-col">
        <div className="w-96">
          <Story />
        </div>
        <div id="someid" className="mt-80">
          Some element with an id
        </div>
      </div>
    ),
  ],
};

const Template = (args) => <ErrorBox {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: "The form could not be submitted because three errors were found",
  errors: [
    {
      id: "someid",
      text: "Some Error 1",
    },
    {
      id: "someid",
      text: "Some Error 2",
    },
    {
      id: "someid",
      text: "Some Error 3",
    },
  ],
};
