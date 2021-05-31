import React from "react";
import { Filter } from "./Filter";

export default {
  title: "Components/Molecules/Filter",
  component: Filter,
};

const Template = (args) => <Filter {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: "Filter By",
  options: [
    {
      id: "all",
      label: "All",
      checked: false,
    },
    {
      id: "coming_soon",
      label: "Coming Soon",
      checked: false,
    },
    {
      id: "alpha",
      label: "Alpha",
      checked: true,
    },
  ],
};
