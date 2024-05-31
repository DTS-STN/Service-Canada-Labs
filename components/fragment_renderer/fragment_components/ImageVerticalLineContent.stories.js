import * as React from "react";
import ImageVerticalLineContent from "./ImageVerticalLineContent";

export default {
  title:
    "Components/Fragment_Renderer/Fragment_Components/ImageVerticalLineContent",
  component: ImageVerticalLineContent,
};

const Template = (args) => <ImageVerticalLineContent {...args} />;

export const Default = Template.bind({});
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
