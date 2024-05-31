import * as React from "react";
import TextContent from "./TextContent";

export default {
  title: "Components/Fragment_Renderer/Fragment_Components/TextContent",
  component: TextContent,
};

const Template = (args) => <TextContent {...args} />;

export const Default = Template.bind({});

Default.args = {
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
