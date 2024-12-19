import { getLocalizedContent } from "../utils/localeUtils";
import { fragmentValidators } from "../utils/validation";

export default function ButtonMapper(fragmentData, locale) {
  // Validate fragment data
  fragmentValidators["SCLabs-Button-v1"](fragmentData);

  return {
    id: fragmentData.scId,
    buttonType: fragmentData.scButtonType[0],
    href: getLocalizedContent(
      fragmentData,
      locale,
      "scDestinationURLEn",
      "scDestinationURLFr"
    ),
    text: getLocalizedContent(fragmentData, locale, "scTitleEn", "scTitleFr"),
  };
}
