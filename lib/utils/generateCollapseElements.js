export const generateCollapseElements = (json) => {
  const elements = [];

  for (const item of json) {
    if (item.nodeType === "paragraph") {
      elements.push(
        <p key={elements.length}>{generateCollapseElements(item.content)}</p>
      );
    } else if (item.nodeType === "unordered-list") {
      const listItems = item.content.map((listItem, index) => (
        <li key={index} className="my-0">
          {generateCollapseElements(listItem.content)}
        </li>
      ));
      elements.push(
        <ul key={elements.length} className="mb-0">
          {listItems}
        </ul>
      );
    } else if (item.nodeType === "ordered-list") {
      const listItems = item.content.map((listItem, index) => (
        <li key={index} className="my-0">
          {generateCollapseElements(listItem.content)}
        </li>
      ));
      elements.push(
        <ol key={elements.length} className="mb-0">
          {listItems}
        </ol>
      );
    } else if (item.nodeType === "list-item") {
      elements.push(
        <li key={elements.length} className="my-0">
          {generateCollapseElements(item.content)}
        </li>
      );
    } else if (item.nodeType === "text") {
      elements.push(item.value);
    }
  }

  return elements;
};
