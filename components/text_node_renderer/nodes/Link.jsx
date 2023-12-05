export default function Link(props) {
  return (
    <a
      href={props.node.data.href}
      className="underline underline-offset-[6px] text-custom-blue-projects-link hover:text-custom-blue-projects-link-hover"
    >
      {props.node.value}
    </a>
  );
}
