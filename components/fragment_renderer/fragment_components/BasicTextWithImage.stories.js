import * as React from "react";
import BasicTextWithImage from "./BasicTextWithImage";

export default {
  title: "Components/Fragment_Renderer/Fragment_Components/BasicTextWithImage",
  component: BasicTextWithImage,
};

const Template = (args) => <BasicTextWithImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://www.canada.ca/content/dam/decd-endc/images/sclabs/benefits-navigator/navigator-overview.jpg",
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
