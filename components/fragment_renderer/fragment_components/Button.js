import { ActionButton } from "../../atoms/ActionButton";

export default function Button(props) {
  const style =
    props.fragmentData.scButtonType === null
      ? "primary"
      : props.fragmentData.scButtonType[0] ===
        "gc:custom/decd-endc/button-type/primary"
      ? "primary"
      : props.fragmentData.scButtonType[0] ===
        "gc:custom/decd-endc/button-type/secondary"
      ? "secondary"
      : "primary";

  return (
    <div className="grid grid-cols-12 gap-x-6 my-12">
      <ActionButton
        id={props.key}
        style={style}
        custom="col-span-12"
        href={
          props.locale === "en"
            ? props.fragmentData.scDestinationURLEn
            : props.fragmentData.scDestinationURLFr
        }
        text={
          props.locale === "en"
            ? props.fragmentData.scTitleEn
            : props.fragmentData.scTitleFr
        }
      />
    </div>
  );
}
