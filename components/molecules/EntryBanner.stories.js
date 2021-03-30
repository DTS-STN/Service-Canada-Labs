import React from "react";
import { EntryBanner } from "./EntryBanner";

export default {
  title: "Components/Molecules/EntryBanner",
  component: EntryBanner,
};

const Template = (args) => <EntryBanner {...args} />;

export const Primary = Template.bind({});
