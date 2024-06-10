import { v4 as uuid } from "uuid";

import HeaderText from "./nodes/HeaderText";
import LineBreak from "./nodes/LineBreak";
import ListItem from "./nodes/ListItem";
import OrderedList from "./nodes/OrderedList";
import Paragraph from "./nodes/Paragraph";
import Text from "./nodes/Text";
import Span from "./nodes/Span";
import UnorderedList from "./nodes/UnorderedList";
import Link from "./nodes/Link";

// todo: more components will like need to be added, but for now, these are the only ones returned in the aem json response
const NODES = {
  header: HeaderText,
  paragraph: Paragraph,
  link: Link,
  text: Text,
  span: Span,
  "unordered-list": UnorderedList,
  "ordered-list": OrderedList,
  "list-item": ListItem,
  "line-break": LineBreak,
};

export default function TextRecur(props) {
  const Node = NODES[props.node?.nodeType];
  let content = props.node?.content;

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
      {content && content.length ? (
        <Node key={uuid()} node={props.node} index={props.index}>
          {content.map((node) => (
            <TextRecur key={uuid()} node={node} />
          ))}
        </Node>
      ) : (
        <Node key={uuid()} node={props.node}></Node>
      )}
    </>
  );
}
