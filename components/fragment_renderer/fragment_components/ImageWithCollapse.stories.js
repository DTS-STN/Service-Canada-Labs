import * as React from "react";
import ImageWithCollapse from "./ImageWithCollapse";
import TextRender from "../../text_node_renderer/TextRender";
import { CollapseData } from "../../../__mocks__/mockStore";

export default {
  title: "Components/Fragment_Renderer/Fragment_Components/ImageWithCollapse",
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
  children: <TextRender data={CollapseData.scLongDescEn.json} />,
};
