import React from "react";
import { FooterBox } from "./FooterBox";

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
  footerCanadaCaAltText: "Canada.ca logo",
};
