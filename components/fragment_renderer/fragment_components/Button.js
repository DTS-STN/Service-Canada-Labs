import { ActionButton } from "../../atoms/ActionButton";

export default function Button(props) {
  return (
    <div className="grid grid-cols-12 gap-x-6 my-12">
      <ActionButton
        id={props.key}
        style="primary"
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
