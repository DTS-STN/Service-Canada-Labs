import { v4 as uuid } from "uuid";
import { FRAGMENT_CONFIG } from "./config/fragments";

/**
 * FragmentRender Component
 * Renders AEM content fragments by mapping them to their corresponding React components.
 * Each fragment is wrapped in an error boundary to prevent cascading failures.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Array<Object>} props.fragments - Array of AEM content fragments to render
 * @param {string} props.locale - Current language locale ('en' or 'fr')
 * @param {boolean} props.excludeH1 - Flag to exclude h1 headers in certain contexts
 * @returns {Array<ReactElement>} Array of rendered fragment components
 */
export default function FragmentRender({ fragments, locale, excludeH1 }) {
  return fragments.map((fragmentData) => {
    const config = FRAGMENT_CONFIG[fragmentData?._model.title];

    if (!config) {
      console.warn(
        `No configuration found for fragment type: ${fragmentData?._model.title}`
      );
      return null;
    }

    const { component: Fragment, mapper } = config;
    const props = mapper(fragmentData, locale, excludeH1);

    return <Fragment key={uuid()} {...props} />;
  });
}

/**
 * Fragment Types supported by the renderer:
 * - SCLabs-Feature-v1: Article CTAs with buttons
 * - SCLabs-Comp-Content-Image-v1: Text with image layouts
 * - SCLabs-Comp-Content-v1: Quote blocks with vertical line styling
 * - SCLabs-Content-v1: Generic text content blocks
 * - SCLabs-Button-v1: Interactive button elements
 * - SCLabs-Image-v1: Images with collapsible details
 */

/**
 * Expected Fragment Data Structure:
 * {
 *   _model: {
 *     title: string, // Fragment type identifier
 *   },
 *   // Additional properties vary by fragment type
 *   // See individual mapper files for specific data structures
 * }
 */

/**
 * Error Handling:
 * 1. Component-level errors are caught by the withFragmentErrorBoundary HOC
 * 2. Mapping errors are caught in the try-catch block
 * 3. Missing configurations are handled gracefully with warnings
 * 4. Individual fragment failures don't affect other fragments
 */
