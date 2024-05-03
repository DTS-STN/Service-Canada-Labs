import * as React from "react";
import QuoteVerticalLineContent from "./QuoteVerticalLineContent";

export default {
  title: "Components/Fragment_Renderer/QuoteVerticalLineContent",
  component: QuoteVerticalLineContent,
};

const Template = (args) => <QuoteVerticalLineContent {...args} />;

export const Default = Template.bind({});
Default.args = {
  locale: "en",
  quoteText: [
    {
        "nodeType": "paragraph",
        "content": [
            {
                "nodeType": "text",
                "value": "Quote Text "
            }
        ]
    }
],
  explanationtext: [
    {
        "nodeType": "paragraph",
        "content": [
            {
                "nodeType": "text",
                "value": "Explanation Text"
            }
        ]
    }
]
};
