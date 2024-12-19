import TextRender from "../../text_node_renderer/TextRender";
import { getLocalizedContent } from "../utils/localeUtils";
import { fragmentValidators } from "../utils/validation";

export default function ArticleCTAMapper(fragmentData, locale, excludeH1) {
  // Validate fragment data
  fragmentValidators["SCLabs-Feature-v1"](fragmentData);

  const button = fragmentData.scLabsButton[0];

  return {
    heading: getLocalizedContent(
      fragmentData,
      locale,
      "scTitleEn",
      "scTitleFr"
    ),
    body: (
      <TextRender
        data={
          getLocalizedContent(
            fragmentData,
            locale,
            "scContentEn",
            "scContentFr"
          ).json
        }
        excludeH1={excludeH1}
      />
    ),
    ButtonProps: {
      id: button.scId,
      text: getLocalizedContent(button, locale, "scTitleEn", "scTitleFr"),
      href: getLocalizedContent(
        button,
        locale,
        "scDestinationURLEn",
        "scDestinationURLFr"
      ),
    },
  };
}
