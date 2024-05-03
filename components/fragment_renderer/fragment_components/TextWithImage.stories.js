import * as React from "react";
import TextWithImage from "./TextWithImage";
import BasicTextWithImage from "./BasicTextWithImage";
import ImageVerticalLineContent from "./ImageVerticalLineContent";

export default {
    title: "Components/Fragment_Renderer/TextWithImage",
    component: TextWithImage
  };

const Template = (args) => <TextWithImage {...args} />;

export const Default = Template.bind({});
export const Vertical = Template.bind({});

Default.args = {
    src: "/image.png",
    alt: "alt",
    width: 359,
    height: 260,
    layout:"default",
    data:  [
        {
            "nodeType": "paragraph",
            "content": [
                {
                    "nodeType": "text",
                    "value": "Every week, our product team meets for Feedback Friday to sort through all the new survey responses. We look at the ratings and comments people shared with us about their experience. "
                }
            ]
        }
]
}

Vertical.args = {
    src: "/image.png",
    alt: "alt",
    width: 359,
    height: 260,
    layout:"image-vertical-line-content",
    data:  [
        {
            "nodeType": "paragraph",
            "content": [
                {
                    "nodeType": "text",
                    "value": "Every week, our product team meets for Feedback Friday to sort through all the new survey responses. We look at the ratings and comments people shared with us about their experience. "
                }
            ]
        }
]    
}

