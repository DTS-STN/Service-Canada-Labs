import React from "react";
import { Footer } from "./Footer";

export default {
  title: "Components/Organisms/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const DefaultFooter = Template.bind({});
DefaultFooter.args = {
  id: "footer",
  btnLink: "/",
  target: "_blank",
};
