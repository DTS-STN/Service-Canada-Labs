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
  src: CollapseData.scImageEn._publishUrl,
  alt: "image alt text",
  width: CollapseData.scImageEn.width,
  height: CollapseData.scImageEn.height,
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

WithCollapse.args = {
  id: "ImageVerticalLineContent",
  src: CollapseData.scImageEn._publishUrl,
  alt: "image alt text",
  width: 759,
  height: 497,
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
