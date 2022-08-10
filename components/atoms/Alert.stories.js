import { Alert } from "./Alert";

export default {
  title: "Components/Atoms/Alert",
  component: Alert,
};

const Template = (args) => <Alert {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: "Alert Title",
  text: "Alert Text",
};
