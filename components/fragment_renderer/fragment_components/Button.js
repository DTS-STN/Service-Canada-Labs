import { ActionButton } from "../../atoms/ActionButton";

export default function Button({ id, buttonType, href, text }) {
  const style =
    buttonType === null
      ? "primary"
      : buttonType === "gc:custom/decd-endc/button-type/primary"
      ? "primary"
      : buttonType === "gc:custom/decd-endc/button-type/secondary"
      ? "secondary"
      : "primary";
  return (
    <div className="layout-container grid grid-cols-12 gap-x-6 mt-12">
      <ActionButton
        id={id}
        style={style}
        custom="col-span-12"
        href={href}
        text={text}
      />
    </div>
  );
}
