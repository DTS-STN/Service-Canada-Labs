export default function Link(props) {
  return (
    <a href={props.node.data.href} className="underline">
      {props.node.value}
    </a>
  );
}
