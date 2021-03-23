import { ActionButton } from "./ActionButton";

export default {
  title: "Components/Atoms/ActionButton",
  component: ActionButton,
};

const Template = (args) => <ActionButton {...args} />;

export const Default = Template.bind({});
export const Secondary = Template.bind({});
export const Disabled = Template.bind({});

Default.args = {
  className:
    "bg-custom-blue-100 text-white border border-blue-600 hover:bg-custom-blue-200",
  text: "Default button 🚀",
};

Secondary.args = {
  text: "Secondary button 🚀",
  className:
    "bg-white text-custom-blue-100 border border-custom-blue-100 hover:bg-gray-200",
  secondary: true,
};

Disabled.args = {
  text: "Disabled Button 🚀",
  className: "bg-gray-light text-gray-600 border border-gray-md",
  disabled: true,
};
