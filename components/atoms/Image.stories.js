import { Image } from "./Image";

export default {
  title: "Components/Atoms/Image",
  component: Image,
};

const Template = (args) => <Image {...args} />;

export const Default = Template.bind({});
export const Mobile = Template.bind({});
export const DefaultWithRounded = Template.bind({});
export const MobileWithRounded = Template.bind({});

Default.args = {
  id: "image",
  alt: "Default Image",
  src: "/image1.png",
};

DefaultWithRounded.args = {
  id: "image",
  alt: "Default Image with rounded",
  rounded: "rounded",
  src: "/image1.png",
};

Mobile.args = {
  id: "image",
  alt: "Mobile Image",
  src: "/image2.png",
};

MobileWithRounded.args = {
  id: "image",
  alt: "Mobile Image with rounded",
  rounded: "rounded",
  src: "/image2.png",
};
