import { ActionButton } from "../../atoms/ActionButton";

export default function Button(id, style, custom, href, text) {
  return (
    <div className="layout-container grid grid-cols-12 gap-x-6 my-12">
      <ActionButton
        id={id}
        style={style}
        custom={custom}
        href={href}
        text={text}
      />
    </div>
  );
}
