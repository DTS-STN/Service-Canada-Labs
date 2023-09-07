export default function Header(props) {
  switch (props.node.style) {
    case "h1":
      return <h1>{props.children}</h1>;
    case "h2":
      return <h2>{props.children}</h2>;
    case "h3":
      return <h3>{props.children}</h3>;
    case "h4":
      return <h4>{props.children}</h4>;
    case "h5":
      return <h5>{props.children}</h5>;
    default:
      return <h6>{props.children}</h6>;
  }
}
