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
    <p>First paragraph tag</p>,
    <p>Second paragprahp tag</p>,
    <ul>
      <li>Unorderded list item 1</li>
      <li>Unorderded list item 2</li>
    </ul>,
    <ol>
      <li>Ordered list item 1</li>
      <li>Ordered list item 2</li>
    </ol>,
  ],
  dataTestId: "exampleTestId",
};
