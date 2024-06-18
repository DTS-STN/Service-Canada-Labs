import * as React from "react";
import ImageVerticalLineContent from "./ImageVerticalLineContent";
import TextRender from "../../text_node_renderer/TextRender";
import { CollapseData } from "../../../__mocks__/mockStore";

export default {
  title:
    "Components/Fragment_Renderer/Fragment_Components/ImageVerticalLineContent",
  component: ImageVerticalLineContent,
};

const Template = (args) => <ImageVerticalLineContent {...args} />;

export const Default = Template.bind({});
export const WithCollapse = Template.bind({});
Default.args = {
  id: "ImageVerticalLineContent",
  src: "/image2.png",
  alt: "image alt text",
  width: 359,
  height: 260,
  data: [
    {
      nodeType: "paragraph",
      content: [
        {
          nodeType: "text",
          value:
            "Every week, our product team meets for Feedback Friday to sort through all the new survey responses. We look at the ratings and comments people shared with us about their experience. ",
        },
      ],
    },
  ],
};

WithCollapse.args = {
  id: "ImageVerticalLineContent",
  src: "/image2.png",
  alt: "image alt text",
  width: 359,
  height: 260,
  data: [
    {
      nodeType: "paragraph",
      content: [
        {
          nodeType: "text",
          value:
            "Every week, our product team meets for Feedback Friday to sort through all the new survey responses. We look at the ratings and comments people shared with us about their experience. ",
        },
      ],
    },
  ],
  title: "Example Title",
  longDesc: "Test Description",
  children: <TextRender data={CollapseData.scLongDescEn.json} />,
};
