import React from "react";
import { CopyToClipboard } from "./CopyToClipboard";

export default {
  title: "Components/Molecules/CopyToClipboard",
  component: CopyToClipboard,
};

const Template = (args) => <CopyToClipboard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  buttonId: "clipboardButton",
  buttonText: "Copy link",
  buttonStyle: "ieButton",
  id: "clipboard",
  name: "theClipboard",
  textFieldStyle: "ieTextField",
  dataTestId: "clipboard-controlled",
  aria_label: "clipboard",
};
