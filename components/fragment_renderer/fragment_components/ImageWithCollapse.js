import { Collapse } from "../../molecules/Collapse";
import { generateCollapseElements } from "../../../lib/utils/generateCollapseElements";
import Image from "../../../node_modules/next/image";

export default function ImageWithCollapse(props) {
  return (
    <div className="layout-container grid grid-cols-12 gap-x-6 my-12">
      <Image
        id={props.scId}
        src={
          props.locale === "en"
            ? props.fragmentData.scImageEn._publishUrl
            : props.fragmentData.scImageFr._publishUrl
        }
        alt={
          props.locale === "en"
            ? props.fragmentData.scImageAltTextEn
            : props.fragmentData.scImageAltTextFr
        }
        className="col-span-12 lg:col-span-10"
        width={props.fragmentData.scImageEn.width}
        height={props.fragmentData.scImageEn.height}
      />
      <p className="grid row-start-2 col-span-12 lg:col-span-10 justify-around mb-8">
        {props.locale === "en"
          ? props.fragmentData.scImageCaptionEn.json[0].content[0].value
          : props.fragmentData.scImageCaptionFr.json[0].content[0].value}
      </p>
      {props.fragmentData.scLongDescEn ? (
        <div className="grid row-start-3 col-span-12 lg:col-span-10">
          <Collapse
            title={
              props.locale === "en"
                ? props.fragmentData.scLongDescHeadingEn
                : props.fragmentData.scLongDescHeadingFr
            }
            children={generateCollapseElements(
              props.locale === "en"
                ? props.fragmentData.scLongDescEn.json
                : props.fragmentData.scLongDescFr.json
            )}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
