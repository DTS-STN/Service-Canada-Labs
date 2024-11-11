// Import UUID generator for unique React keys
import { v4 as uuid } from "uuid";

// Import all fragment-specific components
import TextWithImage from "./fragment_components/TextWithImage";
import TextContent from "./fragment_components/TextContent";
import Button from "./fragment_components/Button";
import ArticleCTA from "./fragment_components/ArticleCTA";
import QuoteVerticalLineContent from "./fragment_components/QuoteVerticalLineContent";
import ImageWithCollapse from "./fragment_components/ImageWithCollapse";
import TextRender from "../text_node_renderer/TextRender";

/**
 * Map of fragment types to their corresponding React components
 * Each key represents a specific AEM fragment model type
 * Values are the React components responsible for rendering that fragment type
 */
const FRAGMENTS = {
  "SCLabs-Comp-Content-Image-v1": TextWithImage, // Combined text and image layouts
  "SCLabs-Comp-Content-v1": QuoteVerticalLineContent, // Quote blocks with vertical line styling
  "SCLabs-Content-v1": TextContent, // Generic text content blocks
  "SCLabs-Button-v1": Button, // Interactive button elements
  "SCLabs-Feature-v1": ArticleCTA, // Call-to-action article features
  "SCLabs-Image-v1": ImageWithCollapse, // Images with collapsible details
};

/**
 * Maps AEM fragment data to component-specific props
 * Handles bilingual content and different layout variations
 *
 * @param {Object} fragmentData - Raw fragment data from AEM
 * @param {string} fragmentName - Type identifier for the fragment
 * @param {string} locale - Current language locale (en/fr)
 * @param {boolean} excludeH1 - Whether to exclude h1 headers
 * @returns {Object} Props object formatted for the specific component
 */
const mapFragmentsToProps = (fragmentData, fragmentName, locale, excludeH1) => {
  switch (fragmentName) {
    // Article CTA Fragment handling
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

    // Text with Image Fragment handling
    case "SCLabs-Comp-Content-Image-v1":
      switch (fragmentData.scLabLayout) {
        // Default layout configuration
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
        // Vertical line layout configuration
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
                ? fragmentData.scLabImage.scLongDescHeadingEn
                : fragmentData.scLabImage.scLongDescHeadingFr,
            longDesc:
              locale === "en"
                ? fragmentData.scLabImage.scLongDescEn
                : fragmentData.scLabImage.scLongDescFr,
            children: (
              <TextRender
                data={
                  locale === "en"
                    ? fragmentData.scLabImage.scLongDescEn?.json
                    : fragmentData.scLabImage.scLongDescFr?.json
                }
              />
            ),
          };
        default:
          break;
      }

    // Quote with vertical line styling
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

    // Generic text content
    case "SCLabs-Content-v1":
      return {
        data:
          locale === "en"
            ? fragmentData.scContentEn.json
            : fragmentData.scContentFr.json,
      };

    // Interactive button element
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

    // Image with collapsible details
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

/**
 * FragmentRender Component
 * Main component responsible for rendering AEM content fragments
 * Handles the transformation of AEM data into React components
 *
 * @param {Object} props - Component props
 * @param {Array} props.fragments - Array of AEM content fragments
 * @param {string} props.locale - Current language locale
 * @param {boolean} props.excludeH1 - Flag to exclude h1 headers
 */
export default function FragmentRender(props) {
  // Map each fragment to its corresponding React component
  const pageFragments = props.fragments.map((fragmentData) => {
    // Get the appropriate component based on the fragment model type
    const Fragment = FRAGMENTS[fragmentData?._model.title];

    // Skip if no matching component is found
    if (!Fragment) {
      return;
    }

    // Render the component with mapped props
    return (
      <Fragment
        key={uuid()}
        {...mapFragmentsToProps(
          fragmentData,
          fragmentData?._model.title,
          props.locale,
          props.excludeH1
        )}
      />
    );
  });

  return pageFragments;
}
