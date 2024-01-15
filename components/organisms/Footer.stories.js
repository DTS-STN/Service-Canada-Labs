import React from "react";
import { Footer } from "./Footer";

export default {
  title: "Components/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const SubFooterEn = Template.bind({});
SubFooterEn.args = {
  id: "footer",
  lang: "en",
  btnLink: "/",
  target: "_blank",
  withMainBand: false,
};

export const SubFooterFr = Template.bind({});
SubFooterFr.args = {
  id: "footer",
  lang: "fr",
  btnLink: "/",
  target: "_blank",
  withMainBand: false,
};

export const WithMainBandEn = Template.bind({});
WithMainBandEn.args = {
  id: "footer",
  lang: "en",
  btnLink: "/",
  target: "_blank",
  brandLinks: [
    {
      id: "link1",
      text: "Social media",
      href: "https://www.canada.ca/en/social.html",
    },
    {
      id: "link2",
      text: "Mobile applications",
      href: "https://www.canada.ca/en/mobile.html",
    },
    {
      id: "link3",
      text: "About Canada.ca",
      href: "https://www.canada.ca/en/government/about.html",
    },
    {
      id: "link4",
      text: "Terms and conditions",
      href: "https://www.canada.ca/en/transparency/terms.html",
    },
    {
      id: "link5",
      text: "Privacy",
      href: "https://www.canada.ca/en/transparency/privacy.html",
    },
  ],
};

export const WithMainBandFr = Template.bind({});
WithMainBandFr.args = {
  id: "footer",
  lang: "fr",
  btnLink: "/",
  target: "_blank",
};

export const WithContextualBand = Template.bind({});
WithContextualBand.args = {
  contextualBandTitle: "Service Canada",
  withContextualBand: true,
  id: "footer",
  lang: "en",
  btnLink: "/",
  target: "_blank",
  contextualBandLinks: [
    {
      key: "serviceCanadalink1",
      text: "Contact us",
      link: "#",
    },
    {
      key: "serviceCanadalink2",
      text: "[link]",
      link: "#",
    },
    {
      key: "serviceCanadalink3",
      text: "[link]",
      link: "#",
    },
  ],
};

export const Error = Template.bind({});
Error.args = {
  id: "footer",
  withMainBand: false,
  btnLink: "/",
  error: true,
};
