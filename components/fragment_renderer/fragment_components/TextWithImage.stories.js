import * as React from "react";
import TextWithImage from "./TextWithImage";
import TextRender from "../../text_node_renderer/TextRender";
import { CollapseData } from "../../../__mocks__/mockStore";

export default {
  title: "Components/Fragment_Renderer/Fragment_Components/TextWithImage",
  component: TextWithImage,
};

const Template = (args) => <TextWithImage {...args} />;

export const Default = Template.bind({});
export const Vertical = Template.bind({});
export const VerticalWithCollapse = Template.bind({});

Default.args = {
  src: "/image2.png",
  alt: "image alt text",
  width: 359,
  height: 260,
  layout: "default",
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

Vertical.args = {
  src: "/image2.png",
  alt: "image alt text",
  width: 359,
  height: 260,
  layout: "image-vertical-line-content",
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

VerticalWithCollapse.args = {
  src: "/image2.png",
  alt: "image alt text",
  width: 359,
  height: 260,
  layout: "image-vertical-line-content",
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
