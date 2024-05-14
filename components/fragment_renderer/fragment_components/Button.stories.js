import * as React from "react";
import Button from "./Button";

export default {
  title: "Components/Fragment_Renderer/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
Primary.args = {
  id: "Primary",
  buttonType: "gc:custom/decd-endc/button-type/primary",
  href: "/",
  text: "Primary Button",
};

Secondary.args = {
  id: "Secondary",
  buttonType: "gc:custom/decd-endc/button-type/secondary",
  href: "/",
  text: "Secondary Button",
};
