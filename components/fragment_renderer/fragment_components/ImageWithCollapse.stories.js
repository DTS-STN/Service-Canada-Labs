import * as React from "react";
import ImageWithCollapse from "./ImageWithCollapse";

export default {
  title: "Components/Fragment_Renderer/ImageWithCollapse",
  component: ImageWithCollapse,
};

const Template = (args) => <ImageWithCollapse {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "ImageWithCollapse",
  src: "/image2.png",
  alt: "image alt text",
  width: 359,
  height: 260,
  content:
    "Every week, our product team meets for Feedback Friday to sort through all the new survey responses. We look at the ratings and comments people shared with us about their experience. ",
  title: "Example Title",
  longDesc: "Test Description",
  children: [
    <p>First paragraph tag</p>,
    <p>Second paragraph tag</p>,
    <ul>
      <li>Unordered list item 1</li>
      <li>Unordered list item 2</li>
    </ul>,
    <ol>
      <li>Ordered list item 1</li>
      <li>Ordered list item 2</li>
    </ol>,
  ],
};
