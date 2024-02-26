import Image from "../../../node_modules/next/image";
import TextRender from "../../text_node_renderer/TextRender";

export default function BasicTextWithImage(props) {
  return (
    <div className="layout-container grid grid-cols-12 gap-x-6 my-12">
      <div className="hidden lg:grid col-start-8 col-span-5 row-start-1 row-span-2">
        <div className="flex justify-center">
          <div className="h-auto">
            <Image
              src={
                props.locale === "en"
                  ? props.fragmentData.scLabImage.scImageEn._publishUrl
                  : props.fragmentData.scLabImage.scImageFr._publishUrl
              }
              // If there is no alt text, set it to an empty string to prevent warnings
              alt={
                props.fragmentData.scLabImage.scImageAltTextEn
                  ? props.locale === "en"
                    ? props.fragmentData.scLabImage.scImageAltTextEn
                    : props.fragmentData.scLabImage.scImageAltTextFr
                  : ""
              }
              width={props.fragmentData.scLabImage.scImageEn.width}
              height={props.fragmentData.scLabImage.scImageEn.height}
            />
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-7">
        <TextRender
          data={
            props.locale === "en"
              ? props.fragmentData.scLabContent[0].scContentEn.json
              : props.fragmentData.scLabContent[0].scContentFr.json
          }
          excludeH1={true}
        />
      </div>
    </div>
  );
}
