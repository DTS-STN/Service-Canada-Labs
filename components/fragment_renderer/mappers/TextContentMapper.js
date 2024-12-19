import { getLocalizedContent } from "../utils/localeUtils";
import { fragmentValidators } from "../utils/validation";

export default function TextContentMapper(fragmentData, locale, excludeH1) {
  // Validate fragment data
  fragmentValidators["SCLabs-Content-v1"](fragmentData);

  return {
    data: getLocalizedContent(
      fragmentData,
      locale,
      "scContentEn",
      "scContentFr"
    ).json,
    excludeH1,
  };
}
