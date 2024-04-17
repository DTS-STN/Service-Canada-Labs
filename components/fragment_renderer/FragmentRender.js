import { v4 as uuid } from "uuid";
import TextWithImage from "./fragment_components/TextWithImage";
import TextContent from "./fragment_components/TextContent";
import Button from "./fragment_components/Button";
import ArticleCTA from "./fragment_components/ArticleCTA";
import QuoteVerticalLineContent from "./fragment_components/QuoteVerticalLineContent";
import ImageWithCollapse from "./fragment_components/ImageWithCollapse";
import TextRender from "../text_node_renderer/TextRender";
import BasicTextWithImage from "./fragment_components/BasicTextWithImage";
import ImageVerticalLineContent from "./fragment_components/ImageVerticalLineContent";
import { generateCollapseElements } from "../../lib/utils/generateCollapseElements";

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
          return (
            <BasicTextWithImage
              src={
                locale === "en"
                  ? fragmentData.scLabImage.scImageEn._publishUrl
                  : fragmentData.scLabImage.scImageFr._publishUrl
              }
              alt={
                fragmentData.scLabImage.scImageAltTextEn
                  ? locale === "en"
                    ? fragmentData.scLabImage.scImageAltTextEn
                    : fragmentData.scLabImage.scImageAltTextFr
                  : ""
              }
              width={fragmentData.scLabImage.scImageEn.width}
              height={fragmentData.scLabImage.scImageEn.height}
              data={
                locale === "en"
                  ? fragmentData.scLabContent[0].scContentEn.json
                  : fragmentData.scLabContent[0].scContentFr.json
              }
            />
          );

        case "image-vertical-line-content":
          return (
            <ImageVerticalLineContent
              alt={
                locale === "en"
                  ? fragmentData.scLabImage.scImageAltTextEn
                  : fragmentData.scLabImage.scImageAltTextFr
              }
              src={
                locale === "en"
                  ? fragmentData.scLabImage.scImageEn._publishUrl
                  : fragmentData.scLabImage.scImageFr._publishUrl
              }
              width={fragmentData.scLabImage.scImageEn.width}
              height={fragmentData.scLabImage.scImageEn.height}
              data={
                locale === "en"
                  ? fragmentData.scLabContent.scContentEn.json
                  : fragmentData.scLabContent.scContentFr.json
              }
            />
          );
      }

    case "SCLabs-Comp-Content-v1":
      return (
        <QuoteVerticalLineContent
          content1={
            locale === "en"
              ? fragmentData.scLabContent[0].scContentEn.json
              : fragmentData.scLabContent[0].scContentFr.json
          }
          content2={
            locale === "en"
              ? fragmentData.scLabContent[1].scContentEn.json
              : fragmentData.scLabContent[1].scContentFr.json
          }
        />
      );

    case "SCLabs-Content-v1":
      return (
        <TextContent
          data={
            locale === "en"
              ? fragmentData.scContentEn.json
              : fragmentData.scContentFr.json
          }
          excludeH1={true}
        />
      );

    case "SCLabs-Button-v1":
      return (
        <Button
          style={
            fragmentData.scButtonType === null
              ? "primary"
              : fragmentData.scButtonType[0] ===
                "gc:custom/decd-endc/button-type/primary"
              ? "primary"
              : fragmentData.scButtonType[0] ===
                "gc:custom/decd-endc/button-type/secondary"
              ? "secondary"
              : "primary"
          }
          id={fragmentData.scId}
          custom={"col-span-12"}
          href={
            locale === "en"
              ? fragmentData.scDestinationURLEn
              : fragmentData.scDestinationURLFr
          }
          text={
            locale === "en" ? fragmentData.scTitleEn : fragmentData.scTitleFr
          }
        />
      );

    case "SCLabs-Image-v1":
      return (
        <ImageWithCollapse
          id={fragmentData.scId}
          src={
            locale === "en"
              ? fragmentData.scImageEn._publishUrl
              : fragmentData.scImageFr._publishUrl
          }
          alt={
            locale === "en"
              ? fragmentData.scImageAltTextEn
              : fragmentData.scImageAltTextFr
          }
          width={fragmentData.scImageEn.width}
          height={fragmentData.scImageEn.height}
          content={
            locale === "en"
              ? fragmentData.scImageCaptionEn.json[0].content[0].value
              : fragmentData.scImageCaptionFr.json[0].content[0].value
          }
          title={
            locale === "en"
              ? fragmentData.scLongDescHeadingEn
              : fragmentData.scLongDescHeadingFr
          }
          longDesc={
            locale === "en"
              ? fragmentData.scLongDescEn
              : fragmentData.scLongDescFr
          }
          children={generateCollapseElements(
            locale === "en"
              ? fragmentData.scLongDescEn.json
              : fragmentData.scLongDescFr.json
          )}
        />
      );
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
