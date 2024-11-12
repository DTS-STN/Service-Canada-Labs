import TextRecur from "./TextRecur";
import { v4 as uuid } from "uuid"; // Import UUID generator for unique keys

/**
 * TextRender Component
 * Top-level component that initiates the recursive rendering of text content
 * Processes an array of content nodes from AEM and renders them recursively
 */
export default function TextRender(props) {
  return (
    <>
      {/* Map through each content node and render it recursively */}
      {props.data.map((node, index) => {
        return (
          <TextRecur
            key={uuid()} // Generate unique key for React rendering
            node={node} // Pass the current node data
            index={index} // Pass index for potential ordering/styling
            excludeH1={props.excludeH1} // Flag to exclude h1 headers if needed
          />
        );
      })}
    </>
  );
}
