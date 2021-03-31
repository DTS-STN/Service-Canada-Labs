import { Breadcrumb } from "./Breadcrumb";

export default {
  title: "Components/Atoms/Breadcrumb",
  component: Breadcrumb,
};

const Template = (args) => <Breadcrumb {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  items: [
    { text: "Link1", link: "/" },
    { text: "Link2", link: "/" },
    { text: "Link3", link: "/" },
  ],
};
