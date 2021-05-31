import React from "react";
import { Menu } from "./Menu";

export default {
  title: "Components/Molecules/Menu",
  component: Menu,
};

const Template = (args) => <Menu {...args}></Menu>;

export const Primary = Template.bind({});

Primary.args = {
  menuButtonTitle: "Menu",
  items: [
    {
      link: "#",
      text: "Link1",
    },
    {
      link: "#",
      text: "Link2",
    },
    {
      link: "#",
      text: "Link3",
    },
  ],
};
