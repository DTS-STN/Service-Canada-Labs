import TextRender from "../../text_node_renderer/TextRender";
import { getLocalizedContent, formatImageData } from "../utils/localeUtils";
import { fragmentValidators } from "../utils/validation";

const mapDefaultLayout = (fragmentData, locale, excludeH1) => ({
  ...formatImageData(fragmentData.scLabImage, locale),
  data: getLocalizedContent(
    fragmentData.scLabContent[0],
    locale,
    "scContentEn",
    "scContentFr"
  ).json,
  layout: "default",
  excludeH1,
});

const mapVerticalLineLayout = (fragmentData, locale, excludeH1) => ({
  ...formatImageData(fragmentData.scLabImage, locale),
  data: getLocalizedContent(
    fragmentData.scLabContent[0],
    locale,
    "scContentEn",
    "scContentFr"
  ).json,
  layout: "image-vertical-line-content",
  title: getLocalizedContent(
    fragmentData.scLabImage,
    locale,
    "scLongDescHeadingEn",
    "scLongDescHeadingFr"
  ),
  longDesc: getLocalizedContent(
    fragmentData.scLabImage,
    locale,
    "scLongDescEn",
    "scLongDescFr"
  ),
  children: (
    <TextRender
      data={
        getLocalizedContent(
          fragmentData.scLabImage,
          locale,
          "scLongDescEn",
          "scLongDescFr"
        )?.json
      }
      excludeH1={excludeH1}
    />
  ),
});

export default function TextWithImageMapper(fragmentData, locale, excludeH1) {
  // Validate fragment data
  fragmentValidators["SCLabs-Comp-Content-Image-v1"](fragmentData);

  const layoutMappers = {
    default: () => mapDefaultLayout(fragmentData, locale, excludeH1),
    "image-vertical-line-content": () =>
      mapVerticalLineLayout(fragmentData, locale, excludeH1),
  };

  const mapper = layoutMappers[fragmentData.scLabLayout];
  return mapper ? mapper() : null;
}
