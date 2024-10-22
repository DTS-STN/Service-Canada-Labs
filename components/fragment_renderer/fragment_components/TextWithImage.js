import BasicTextWithImage from "./BasicTextWithImage";
import ImageVerticalLineContent from "./ImageVerticalLineContent";

export default function TextWithImage({
  src,
  alt,
  width,
  height,
  data,
  layout,
  title,
  longDesc,
  children,
  excludeH1,
}) {
  switch (layout) {
    case "default":
      return (
        <BasicTextWithImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          data={data}
          excludeH1={excludeH1}
        />
      );
    case "image-vertical-line-content":
      return (
        <ImageVerticalLineContent
          src={src}
          alt={alt}
          width={width}
          height={height}
          data={data}
          title={title}
          longDesc={longDesc}
          children={children}
          excludeH1={excludeH1}
        />
      );
    default:
      break;
  }
}
