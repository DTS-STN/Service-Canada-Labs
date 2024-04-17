import BasicTextWithImage from "./BasicTextWithImage";
import ImageVerticalLineContent from "./ImageVerticalLineContent";

export default function TextWithImage(src, alt, width, height, data, layout) {
  switch (layout) {
    case "default":
      return (
        <BasicTextWithImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          data={data}
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
        />
      );
    default:
      break;
  }
}
