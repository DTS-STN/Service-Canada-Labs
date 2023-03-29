import { ActionButton } from "./ActionButton";

export default {
  title: "Components/Atoms/ActionButton",
  component: ActionButton,
};

const Template = (args) => <ActionButton {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Supertask = Template.bind({});
export const Danger = Template.bind({});
export const Link = Template.bind({});

Primary.args = {
  id: "primary",
  style: "primary",
  text: "Primary",
};

Secondary.args = {
  id: "secondary",
  text: "Secondary",
  style: "secondary",
  secondary: true,
};

Supertask.args = {
  id: "supertask",
  text: "Supertask",
  style: "supertask",
  tertiary: true,
};

Danger.args = {
  id: "danger",
  text: "Danger",
  style: "danger",
  disabled: true,
};

Link.args = {
  id: "link",
  text: "Link",
  style: "link",
  href: "/",
};
