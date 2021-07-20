import React from "react";
import { VirtualConcierge } from "./VirtualConcierge";

export default {
  title: "Components/organisms/VirtualConcierge",
  component: VirtualConcierge,
};

const Template = (args) => <VirtualConcierge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  vcImageAltText: "A picture",
  description: "Description",
  description1: "Description1",
  description2: "Description2",
  dataTestId: "virtual-concierge",
};
