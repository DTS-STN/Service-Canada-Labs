import { ActionButton } from "./ActionButton";

export default {
  title: "Components/Atoms/ActionButton",
  component: ActionButton,
};

const Template = (args) => <ActionButton {...args} />;

export const Primary = Template.bind({});
export const Rounded = Template.bind({});
export const WithCounter = Template.bind({});
export const StartAgain = Template.bind({});
export const Disabled = Template.bind({});

Primary.args = {
  text: "Example Action 🚀",
};

FullyRounded.args = {
  text: "Example Fully Rounded Action 🚀",
  fullyRounded: true,
};

Rounded.args = {
  text: "Example Rounded Action 🚀",
  rounded: true,
};

StartAgain.args = {
  notRound: true,
  className: "bg-bg-gray-dk text-white",
  icon: "icon-loop2 my-1 mr-4",
  text: "Start again and clear answers",
};

Disabled.args = {
  text: "Disabled Button 🚀",
  disabled: true,
  invert: true,
};
