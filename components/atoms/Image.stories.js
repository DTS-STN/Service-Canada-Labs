import { Image } from "./Image";

export default {
  title: "Components/Atoms/Image",
  component: Image,
};
import imageFile from "../../public/image1.png";
import imageFile2 from "../../public/image2.png";

const Template = (args) => <Image {...args} />;

export const Default = Template.bind({});
export const Mobile = Template.bind({});
export const DefaultWithRounded = Template.bind({});
export const MobileWithRounded = Template.bind({});

Default.args = {
  id: "image",
  alt: "Default Image",
  src: imageFile,
};

DefaultWithRounded.args = {
  id: "image",
  alt: "Default Image with rounded",
  rounded: "rounded",
  src: imageFile,
};

Mobile.args = {
  id: "image",
  alt: "Mobile Image",
  src: imageFile2,
};

MobileWithRounded.args = {
  id: "image",
  alt: "Mobile Image with rounded",
  rounded: "rounded",
  src: imageFile2,
};
