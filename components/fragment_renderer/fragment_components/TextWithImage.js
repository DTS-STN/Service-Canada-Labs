import BasicTextWithImage from "./BasicTextWithImage";
import ImageVerticalLineContent from "./ImageVerticalLineContent";

export default function TextWithImage(props) {
  switch (props.fragmentData.scLabLayout) {
    case "default":
      return (
        <BasicTextWithImage
          fragmentData={props.fragmentData}
          locale={props.locale}
        />
      );
    case "image-vertical-line-content":
      return (
        <ImageVerticalLineContent
          fragmentData={props.fragmentData}
          locale={props.locale}
        />
      );
    default:
      break;
  }
}
