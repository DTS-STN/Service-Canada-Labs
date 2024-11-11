import { v4 as uuid } from "uuid";

// Import all supported node type components
import HeaderText from "./nodes/HeaderText";
import LineBreak from "./nodes/LineBreak";
import ListItem from "./nodes/ListItem";
import OrderedList from "./nodes/OrderedList";
import Paragraph from "./nodes/Paragraph";
import Text from "./nodes/Text";
import Span from "./nodes/Span";
import UnorderedList from "./nodes/UnorderedList";
import Link from "./nodes/Link";

/**
 * TextRecur Component
 * Recursive component that handles the actual rendering of content nodes
 * Supports various content types (headers, paragraphs, lists, etc.)
 * Can handle nested content structures of arbitrary depth
 */

// Map of supported node types to their corresponding components
// This mapping allows dynamic selection of the appropriate component based on nodeType
const NODES = {
  header: HeaderText, // Renders h1-h6 headers
  paragraph: Paragraph, // Renders paragraph blocks
  link: Link, // Renders hyperlinks
  text: Text, // Renders plain text
  span: Span, // Renders inline styled text
  "unordered-list": UnorderedList, // Renders bullet lists
  "ordered-list": OrderedList, // Renders numbered lists
  "list-item": ListItem, // Renders individual list items
  "line-break": LineBreak, // Renders line breaks
};

export default function TextRecur(props) {
  // Get the appropriate component for the current node type
  const Node = NODES[props.node?.nodeType];

  // Get any child content from the current node
  let content = props.node?.content;

  // Skip rendering if:
  // 1. No matching component exists for this node type
  // 2. Node is an h1 header and excludeH1 flag is true
  if (
    !Node ||
    (props.excludeH1 &&
      props.node?.nodeType === "header" &&
      props.node?.style === "h1")
  ) {
    return;
  }

  return (
    <>
      {/* Handle nodes differently based on whether they have child content */}
      {content && content.length ? (
        // For nodes with children: render the node and recursively render its children
        <Node key={uuid()} node={props.node} index={props.index}>
          {content.map((node) => (
            <TextRecur key={uuid()} node={node} />
          ))}
        </Node>
      ) : (
        // For leaf nodes: render just the node itself
        <Node key={uuid()} node={props.node}></Node>
      )}
    </>
  );
}
