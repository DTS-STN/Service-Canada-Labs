import { Footer } from "./Footer";
import logo from "../../public/wmms-blk.svg";

export default {
  title: "Components/Organisms/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
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
  reportBtnText: "Report a problem",
  reportDescription: "Experiencing an issue with this product or have you ",
  reportDescriptionContinue: "spotted an error?",
};
