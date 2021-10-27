import React from "react";
import FeedbackWidget from "./FeedbackWidget";

export default {
  title: "Components/Organisms/FeedbackWidget",
  component: FeedbackWidget,
};

const Template = (args) => <FeedbackWidget {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  showFeedback: true,
};
