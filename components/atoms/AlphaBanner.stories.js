import React from "react";
import AlphaBanner from "./AlphaBanner";

export default {
  title: "Components/Atoms/AlphaBanner",
  component: AlphaBanner,
};

const Template = (args) => <AlphaBanner {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: "AlphaBanner Text",
};
