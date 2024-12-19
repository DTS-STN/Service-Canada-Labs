import TextRender from "../../text_node_renderer/TextRender";
import { getLocalizedContent, formatImageData } from "../utils/localeUtils";
import { fragmentValidators } from "../utils/validation";

export default function ImageMapper(fragmentData, locale, excludeH1) {
  // Validate fragment data
  fragmentValidators["SCLabs-Image-v1"](fragmentData);

  return {
    id: fragmentData.scId,
    ...formatImageData(fragmentData, locale),
    content: (
      <TextRender
        data={
          getLocalizedContent(
            fragmentData,
            locale,
            "scImageCaptionEn",
            "scImageCaptionFr"
          ).json
        }
        excludeH1={excludeH1}
      />
    ),
    title: getLocalizedContent(
      fragmentData,
      locale,
      "scLongDescHeadingEn",
      "scLongDescHeadingFr"
    ),
    longDesc: getLocalizedContent(
      fragmentData,
      locale,
      "scLongDescEn",
      "scLongDescFr"
    ),
    children: (
      <TextRender
        data={
          getLocalizedContent(
            fragmentData,
            locale,
            "scLongDescEn",
            "scLongDescFr"
          ).json
        }
        excludeH1={excludeH1}
      />
    ),
  };
}
