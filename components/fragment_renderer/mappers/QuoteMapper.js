import { getLocalizedContent } from "../utils/localeUtils";
import { fragmentValidators } from "../utils/validation";

export default function QuoteMapper(fragmentData, locale) {
  // Validate fragment data
  fragmentValidators["SCLabs-Comp-Content-v1"](fragmentData);

  return {
    quoteText: getLocalizedContent(
      fragmentData.scLabContent[0],
      locale,
      "scContentEn",
      "scContentFr"
    ).json,
    explanationtext: getLocalizedContent(
      fragmentData.scLabContent[1],
      locale,
      "scContentEn",
      "scContentFr"
    ).json,
  };
}
