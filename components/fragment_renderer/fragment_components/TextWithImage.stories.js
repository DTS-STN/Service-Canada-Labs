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
  width: 759,
  height: 498,
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
  src: CollapseData.scImageEn._publishUrl,
  alt: "image alt text",
  width: CollapseData.scImageEn.width,
  height: CollapseData.scImageEn.height,
  layout: "image-vertical-line-content",
  data: [
    {
      nodeType: "header",
      style: "h3",
      content: [
        {
          nodeType: "text",
          value: "Information is clearly presented ",
        },
      ],
    },
    {
      nodeType: "paragraph",
      content: [
        {
          nodeType: "text",
          value: "On the dashboard, you will find: ",
        },
      ],
    },
    {
      nodeType: "unordered-list",
      content: [
        {
          nodeType: "list-item",
          content: [
            {
              nodeType: "text",
              value: "all your benefits on the same page ",
            },
          ],
        },
        {
          nodeType: "list-item",
          content: [
            {
              nodeType: "text",
              value:
                "a menu to access your personal information and security settings",
            },
          ],
        },
      ],
    },
  ],
};

VerticalWithCollapse.args = {
  src: CollapseData.scImageEn._publishUrl,
  alt: "image alt text",
  width: CollapseData.scImageEn.width,
  height: CollapseData.scImageEn.height,
  layout: "image-vertical-line-content",
  data: [
    {
      nodeType: "header",
      style: "h3",
      content: [
        {
          nodeType: "text",
          value: "Information is clearly presented ",
        },
      ],
    },
    {
      nodeType: "paragraph",
      content: [
        {
          nodeType: "text",
          value: "On the dashboard, you will find: ",
        },
      ],
    },
    {
      nodeType: "unordered-list",
      content: [
        {
          nodeType: "list-item",
          content: [
            {
              nodeType: "text",
              value: "all your benefits on the same page ",
            },
          ],
        },
        {
          nodeType: "list-item",
          content: [
            {
              nodeType: "text",
              value:
                "a menu to access your personal information and security settings",
            },
          ],
        },
      ],
    },
  ],
  title: "Example Title",
  longDesc: "Test Description",
  children: <TextRender data={CollapseData.scLongDescEn.json} />,
};
