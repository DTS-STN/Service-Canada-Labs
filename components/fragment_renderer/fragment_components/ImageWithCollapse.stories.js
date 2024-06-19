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
  src: CollapseData.scImageEn._publishUrl,
  alt: "image alt text",
  width: CollapseData.scImageEn.width,
  height: CollapseData.scImageEn.height,
  content: CollapseData.scImageCaptionEn.json[0].content[0].value,
  title: "Example Title",
  longDesc: "Test Description",
  children: <TextRender data={CollapseData.scLongDescEn.json} />,
};
