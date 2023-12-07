export default function Text(props) {
  // todo: guessing on italic since I didn't see it, but I'm assuming it exists and will need to be updated
  switch (props.node?.format?.variants?.[0]) {
    case "strong":
      return <strong>{props.node.value}</strong>;
    case "emphasis":
      return <em>{props.node.value}</em>;
    default:
      return <>{props.node.value}</>;
  }
}
