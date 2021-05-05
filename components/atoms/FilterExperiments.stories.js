import React from "react";
import { FilterExperiments } from "./FilterExperiments";


export default {
  title: "Components/Atoms/FilterExperiments",
  component: FilterExperiments,
};

const Template = (args) => <FilterExperiments {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  options: [{id:0, text:"All"}, {id:1, text:"Active"}, {id:2, text:"Coming soon"},],
};
