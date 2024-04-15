import { v4 as uuid } from "uuid";
import TextWithImage from "./fragment_components/TextWithImage";
import TextContent from "./fragment_components/TextContent";
import Button from "./fragment_components/Button";
import ArticleCTA from "./fragment_components/ArticleCTA";
import QuoteVerticalLineContent from "./fragment_components/QuoteVerticalLineContent";
import ImageWithCollapse from "./fragment_components/ImageWithCollapse";
import TextRender from "../text_node_renderer/TextRender";

const FRAGMENTS = {
  "SCLabs-Comp-Content-Image-v1": TextWithImage,
  "SCLabs-Comp-Content-v1": QuoteVerticalLineContent,
  "SCLabs-Content-v1": TextContent,
  "SCLabs-Button-v1": Button,
  "SCLabs-Feature-v1": ArticleCTA,
  "SCLabs-Image-v1": ImageWithCollapse,
};

const mapFragmentsToProps = (fragmentData, fragmentName, locale) => {
  switch (fragmentName) {
    case "SCLabs-Feature-v1":
      return {
        heading:
          locale === "en" ? fragmentData.scTitleEn : fragmentData.scTitleFr,
        body: (
          <TextRender
            data={
              locale === "en"
                ? fragmentData.scContentEn.json
                : fragmentData.scContentFr.json
            }
          />
        ),
        ButtonProps: {
          id: fragmentData.scLabsButton[0].scId,
          text:
            locale === "en"
              ? fragmentData.scLabsButton[0].scTitleEn
              : fragmentData.scLabsButton[0].scTitleFr,
          href:
            locale === "en"
              ? fragmentData.scLabsButton[0].scDestinationURLEn
              : fragmentData.scLabsButton[0].scDestinationURLFr,
        },
      };
    case "SCLabs-Comp-Content-Image-v1":
      switch (fragmentData.scLabLayout) {
        case "default":
          return {};

        default:
          break;
      }
      return {};
      break;

    default:
      break;
  }
};

export default function FragmentRender(props) {
  // Create and return array of elements corresponding to
  // fragments
  const pageFragments = props.fragments.map((fragmentData) => {
    const Fragment = FRAGMENTS[fragmentData?._model.title];
    if (!Fragment) {
      return;
    }
    return (
      <Fragment
        key={uuid()}
        props={mapFragmentsToProps(
          fragmentData,
          fragmentData?._model.title,
          props.locale
        )}
      />
    );
  });

  return pageFragments;
}
