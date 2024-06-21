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

const mapFragmentsToProps = (fragmentData, fragmentName, locale, excludeH1) => {
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
          return {
            src:
              locale === "en"
                ? fragmentData.scLabImage.scImageEn._publishUrl
                : fragmentData.scLabImage.scImageFr._publishUrl,
            alt: fragmentData.scLabImage.scImageAltTextEn
              ? locale === "en"
                ? fragmentData.scLabImage.scImageAltTextEn
                : fragmentData.scLabImage.scImageAltTextFr
              : "",
            width: fragmentData.scLabImage.scImageEn.width,
            height: fragmentData.scLabImage.scImageEn.height,
            data:
              locale === "en"
                ? fragmentData.scLabContent[0].scContentEn.json
                : fragmentData.scLabContent[0].scContentFr.json,
            layout: fragmentData.scLabLayout,
            excludeH1: excludeH1,
          };
        case "image-vertical-line-content":
          return {
            src:
              locale === "en"
                ? fragmentData.scLabImage.scImageEn._publishUrl
                : fragmentData.scLabImage.scImageFr._publishUrl,
            alt: fragmentData.scLabImage.scImageAltTextEn
              ? locale === "en"
                ? fragmentData.scLabImage.scImageAltTextEn
                : fragmentData.scLabImage.scImageAltTextFr
              : "",
            width: fragmentData.scLabImage.scImageEn.width,
            height: fragmentData.scLabImage.scImageEn.height,
            data:
              locale === "en"
                ? fragmentData.scLabContent[0].scContentEn.json
                : fragmentData.scLabContent[0].scContentFr.json,
            layout: fragmentData.scLabLayout,
            title:
              locale === "en"
                ? fragmentData.scLongDescHeadingEn
                : fragmentData.scLongDescHeadingFr,
            longDesc:
              locale === "en"
                ? fragmentData.scLongDescEn
                : fragmentData.scLongDescFr,
            children: (
              <TextRender
                data={
                  locale === "en"
                    ? fragmentData.scLongDescEn.json
                    : fragmentData.scLongDescFr.json
                }
              />
            ),
          };
        default:
          break;
      }

    case "SCLabs-Comp-Content-v1":
      return {
        quoteText:
          locale === "en"
            ? fragmentData.scLabContent[0].scContentEn.json
            : fragmentData.scLabContent[0].scContentFr.json,
        explanationtext:
          locale === "en"
            ? fragmentData.scLabContent[1].scContentEn.json
            : fragmentData.scLabContent[1].scContentFr.json,
      };

    case "SCLabs-Content-v1":
      return {
        data:
          locale === "en"
            ? fragmentData.scContentEn.json
            : fragmentData.scContentFr.json,
      };

    case "SCLabs-Button-v1":
      return {
        id: fragmentData.scId,
        buttonType: fragmentData.scButtonType[0],
        href:
          locale === "en"
            ? fragmentData.scDestinationURLEn
            : fragmentData.scDestinationURLFr,
        text: locale === "en" ? fragmentData.scTitleEn : fragmentData.scTitleFr,
      };

    case "SCLabs-Image-v1":
      return {
        id: fragmentData.scId,
        src:
          locale === "en"
            ? fragmentData.scImageEn._publishUrl
            : fragmentData.scImageFr._publishUrl,
        alt:
          locale === "en"
            ? fragmentData.scImageAltTextEn
            : fragmentData.scImageAltTextFr,
        width: fragmentData.scImageEn.width,
        height: fragmentData.scImageEn.height,
        content: (
          <TextRender
            data={
              locale === "en"
                ? fragmentData.scImageCaptionEn.json
                : fragmentData.scImageCaptionFr.json
            }
          />
        ),
        title:
          locale === "en"
            ? fragmentData.scLongDescHeadingEn
            : fragmentData.scLongDescHeadingFr,
        longDesc:
          locale === "en"
            ? fragmentData.scLongDescEn
            : fragmentData.scLongDescFr,
        children: (
          <TextRender
            data={
              locale === "en"
                ? fragmentData.scLongDescEn.json
                : fragmentData.scLongDescFr.json
            }
          />
        ),
      };
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
        {...mapFragmentsToProps(
          fragmentData,
          fragmentData?._model.title,
          props.locale,
          props.excludeH1,
        )}
      />
    );
  });

  return pageFragments;
}
