import { v4 as uuid } from "uuid";

import Header from "./nodes/Header";
import LineBreak from "./nodes/LineBreak";
import ListItem from "./nodes/ListItem";
import OrderedList from "./nodes/OrderedList";
import Paragraph from "./nodes/Paragraph";
import Text from "./nodes/Text";
import UnorderedList from "./nodes/UnorderedList";
import Link from "./nodes/Link";

// todo: more components will like need to be added, but for now, these are the only ones returned in the aem json response
const NODES = {
  header: Header,
  paragraph: Paragraph,
  link: Link,
  text: Text,
  "unordered-list": UnorderedList,
  "ordered-list": OrderedList,
  "list-item": ListItem,
  "line-break": LineBreak,
};

export default function Recur(props) {
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
        <Node key={uuid()} node={props.node}>
          {content.map((node) => (
            <Recur key={uuid()} node={node} />
          ))}
        </Node>
      ) : (
        <Node key={uuid()} node={props.node}></Node>
      )}
    </>
  );
}
