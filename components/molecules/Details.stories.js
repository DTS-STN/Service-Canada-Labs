import React from "react";
import { Details } from "./Details";

export default {
  title: "Components/Molecules/Details",
  component: Details,
};

const Template = (args) => <Details {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: "unopenedDetails",
  label: "A Drop Down",
  children: "Content",
  dataTestId: "details",
};
