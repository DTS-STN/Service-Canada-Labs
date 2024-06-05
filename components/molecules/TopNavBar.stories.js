import React from "react";
import { TopNavBar } from "./TopNavBar";

export default {
  title: "Components/Molecules/TopNavBar",
  component: TopNavBar,
};

const Template = (args) => <TopNavBar {...args}></TopNavBar>;

export const Primary = Template.bind({});

Primary.args = {
  homeLink: "#home",
  homeLinkLabel: "Home",
  updatesLink: "#updates",
  updatesLinkLabel: "Updates",
  projectsLink: "#projects",
  projectsLinkLabel: "Projects",
  navAriaLabel: "nav-aria-label",
  buttonAriaLabel: "button-aria-label",
};
