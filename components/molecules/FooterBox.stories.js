import React from "react";
import { FooterBox } from "./FooterBox";
import logo from "../../public/wmms-blk.svg";

export default {
  title: "Components/Molecules/FooterBox",
  component: FooterBox,
};

const Template = (args) => <FooterBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "some text",
  socialMediaLink: "https://www.canada.ca",
  socialMediaText: "Social media",
  mobileLink: "https://www.canada.ca",
  mobileText: "Mobile applications",
  termsAndConditionsLink: "https://www.canada.ca/en/transparency/terms.html",
  termsAndConditionsText: "Terms and conditions",
  privacyLink: "https://www.canada.ca/en/transparency/terms.html",
  privacyText: "Privacy",
  footerLogoAltText: "Canada.ca logo",
  footerLogoImage: logo,
};
