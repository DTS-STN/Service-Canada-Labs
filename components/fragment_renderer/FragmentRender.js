import { v4 as uuid } from "uuid";
import TextWithImage from "./fragment_components/TextWithImage";
import TextContent from "./fragment_components/TextContent";
import Button from "./fragment_components/Button";
import ArticleCTA from "./fragment_components/ArticleCTA";
import QuoteVerticalLineContent from "./fragment_components/QuoteVerticalLineContent";

const FRAGMENTS = {
  "SCLabs-Comp-Content-Image-v1": TextWithImage,
  "SCLabs-Comp-Content-v1": QuoteVerticalLineContent,
  "SCLabs-Content-v1": TextContent,
  "SCLabs-Button-v1": Button,
  "SCLabs-Feature-v1": ArticleCTA,
};

export default function FragmentRender(props) {
  // Create and return array of elements corresponding to
  // fragments
  const pageFragments = props.fragments.map((fragment) => {
    const Fragment = FRAGMENTS[fragment?._model.title];
    if (!Fragment) {
      return;
    }
    return (
      <Fragment key={uuid()} fragmentData={fragment} locale={props.locale} />
    );
  });

  return pageFragments;
}
