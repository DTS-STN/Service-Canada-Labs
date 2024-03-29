import Image from "../../../node_modules/next/image";
import TextRender from "../../text_node_renderer/TextRender";

export default function ImageVerticalLineContent(props) {
  return (
    <div className="layout-container grid grid-cols-12 gap-x-8 my-12">
      <div className="col-span-12 xl:col-span-3 ">
        <Image
          className="w-64"
          alt={
            props.locale === "en"
              ? props.fragmentData.scLabImage.scImageAltTextEn
              : props.fragmentData.scLabImage.scImageAltTextFr
          }
          src={
            props.locale === "en"
              ? props.fragmentData.scLabImage.scImageEn._publishUrl
              : props.fragmentData.scLabImage.scImageFr._publishUrl
          }
          width={props.fragmentData.scLabImage.scImageEn.width}
          height={props.fragmentData.scLabImage.scImageEn.height}
        />
      </div>
      <div className="col-span-12 lg:col-span-7 xl:col-span-4 h-fit p-5 border-l-4 border-multi-blue-blue60f">
        <TextRender
          data={
            props.locale === "en"
              ? props.fragmentData.scLabContent.scContentEn.json
              : props.fragmentData.scLabContent.scContentFr.json
          }
        />
      </div>
    </div>
  );
}
