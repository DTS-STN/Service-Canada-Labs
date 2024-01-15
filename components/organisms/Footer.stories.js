import React from "react";
import { Footer } from "./Footer";

export default {
  title: "Components/Organisms/Footer",
  component: Footer,
};

const brandLinksDefault = [
  {
    href: "https://www.canada.ca/en/social.html",
    text: "Social media",
  },
  {
    href: "https://www.canada.ca/en/mobile.html",
    text: "Mobile applications",
  },
  {
    href: "https://www.canada.ca/en/government/about.html",
    text: "About Canada.ca",
  },
  {
    href: "https://www.canada.ca/en/transparency/terms.html",
    text: "Terms and conditions",
  },
  {
    href: "https://www.canada.ca/en/transparency/privacy.html",
    text: "Privacy",
  },
];

const Template = (args) => <Footer {...args} />;

export const DefaultFooter = Template.bind({});
DefaultFooter.args = {
  id: "footer",
  btnLink: "/",
  target: "_blank",
  brandLinks: brandLinksDefault,
};
