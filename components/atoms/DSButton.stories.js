import { DSButton } from "./DSButton";
import btnIcon from "../../assets/plus.svg";

export default {
  title: "Components/DSButton",
  component: DSButton,
};

const Template = (args) => <DSButton {...args} />;

export const Supertask = Template.bind({});
export const SupertaskIcon = Template.bind({});
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Danger = Template.bind({});
export const Link = Template.bind({});

Supertask.args = {
  id: "supertask",
  styling: "supertask",
  text: "Supertask button",
  iconAltText: "supertask",
};

SupertaskIcon.args = {
  id: "supertask_icon",
  styling: "supertask",
  text: "Supertask button",
  icon: btnIcon,
  iconAltText: "icon",
  iconEnd: false,
};

Primary.args = {
  id: "primary",
  text: "Primary button",
  iconAltText: "prime",
  styling: "primary",
};

Secondary.args = {
  id: "secondary",
  text: "Secondary Button",
  iconEnd: false,
  secondary: true,
  styling: "secondary",
};

Danger.args = {
  id: "danger",
  text: "Danger Button",
  iconEnd: false,
  styling: "danger",
};

Link.args = {
  id: "link",
  text: "Link Button",
  styling: "link",
  href: "/",
  iconAltText: "link",
};
