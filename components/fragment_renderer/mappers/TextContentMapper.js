import { getLocalizedContent } from "../utils/localeUtils";
import { fragmentValidators } from "../utils/validation";

const mapDefaultLayout = (fragmentData, locale, excludeH1) => ({
  data: getLocalizedContent(fragmentData, locale, "scContentEn", "scContentFr")
    .json,
  layout: "default",
  excludeH1,
});

const mapQuoteLayout = (fragmentData, locale, excludeH1) => ({
  data: getLocalizedContent(fragmentData, locale, "scContentEn", "scContentFr")
    .json,
  layout: "quote",
  excludeH1,
});

export default function TextContentMapper(fragmentData, locale, excludeH1) {
  // Validate fragment data
  fragmentValidators["SCLabs-Content-v1"](fragmentData);

  const layoutMappers = {
    default: () => mapDefaultLayout(fragmentData, locale, excludeH1),
    quote: () => mapQuoteLayout(fragmentData, locale, excludeH1),
  };

  const mapper = layoutMappers[fragmentData.scLabLayout];
  return mapper ? mapper() : mapDefaultLayout(fragmentData, locale, excludeH1);
}
