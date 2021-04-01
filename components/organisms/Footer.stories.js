import { Footer } from "./Footer";
import logo from "../../public/wmms-blk.svg";

export default {
  title: "Components/Organisms/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  links: [
    {
      link: "https://some-link-1.com",
      linkText: "some-link-1",
    },
    {
      link: "https://some-link-2.com",
      linkText: "some-lin-2",
    },
    {
      link: "https://some-link-3.com",
      linkText: "some-link-3",
    },
    {
      link: "https://some-link-4.com",
      linkText: "some-link-4",
    },
    {
      link: "https://some-link-5.com",
      linkText: "some-link-5",
    },
    {
      link: "https://some-link-6.com",
      linkText: "some-link-6",
    },
    {
      link: "https://some-link-7.com",
      linkText: "some-link-7",
    },
    {
      link: "https://some-link-8.com",
      linkText: "some-link-8",
    },
  ],

  footerLogoAltText: "Canada.ca logo",
  footerLogoImage: logo,
  reportBtnText: "Report a problem",
  reportDescription: "Experiencing an issue with this product or have you ",
  reportDescriptionContinue: "spotted an error?",
};
