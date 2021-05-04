import { ActionButton } from "./ActionButton";

export default {
  title: "Components/Atoms/ActionButton",
  component: ActionButton,
};

const Template = (args) => <ActionButton {...args} />;

export const Default = Template.bind({});
export const Secondary = Template.bind({});
export const Disabled = Template.bind({});
export const Link = Template.bind({});

Default.args = {
  id: "default",
  className:
    "bg-custom-blue-blue text-white border border-custom-blue-blue active:bg-custom-blue-dark hover:bg-custom-blue-light",
  text: "Default button 🚀",
};

Secondary.args = {
  id: "secondary",
  text: "Secondary button 🚀",
  className:
    "bg-white text-custom-blue-blue border border-custom-blue-blue active:bg-gray-400 hover:bg-gray-200",
  secondary: true,
};

Disabled.args = {
  id: "disabled",
  text: "Disabled Button 🚀",
  className: "bg-gray-light text-gray-600 border border-gray-md",
  disabled: true,
};

Link.args = {
  id: "link",
  text: "Link Button 🚀",
  className:
    "bg-custom-blue-blue text-white border border-custom-blue-blue active:bg-custom-blue-dark hover:bg-custom-blue-light",
  href: "/",
};
