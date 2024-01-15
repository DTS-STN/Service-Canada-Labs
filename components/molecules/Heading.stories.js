import { Heading } from "./Heading";

export default {
  title: "Components/Molecules/Heading",
  component: Heading,
};

const Template = (args) => <Heading {...args} />;

export const Default = Template.bind({});
export const withFromLink = Template.bind({});

Default.args = {
  title: "Default Heading",
  id: "withoutLink",
};

withFromLink.args = {
  title: "Heading with from link",
  fromLink: "https://www.google.com",
  fromText: "Google",
  id: "withLink",
};
