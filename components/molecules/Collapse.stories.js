import React from "react";
import { Collapse } from "./Collapse";

export default {
  title: "Components/Molecules/Collapse",
  component: Collapse,
};

const Template = (args) => <Collapse {...args} />;

export const TextDescription = Template.bind({});
TextDescription.args = {
  id: "collapseId",
  title: "Example title",
  children: "Example description",
  dataTestId: "/placeholderImg",
};

export const HtmlDescription = Template.bind({});
HtmlDescription.args = {
  id: "collapseId",
  title: "Example title",
  children: [
    <p key="p1">First paragraph tag</p>,
    <p key="p2">Second paragprahp tag</p>,
    <ul key="ul1">
      <li>Unorderded list item 1</li>
      <li>Unorderded list item 2</li>
    </ul>,
    <ol key="ol1">
      <li>Ordered list item 1</li>
      <li>Ordered list item 2</li>
    </ol>,
  ],
  dataTestId: "exampleTestId",
};
