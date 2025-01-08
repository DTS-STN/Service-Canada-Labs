import Image from "next/image";

export default function ImageFragment(props) {
  return (
    <div className="layout-container grid grid-cols-12 gap-x-6 my-12">
      <Image
        unoptimized={true}
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
        sizes="(max-width: 768px) 100vw, 80vw"
        quality={100}
      />
      <p className="grid row-start-2 col-span-12 lg:col-span-10 justify-around">
        {props.locale === "en"
          ? props.fragmentData.scImageCaptionEn.json[0].content[0].value
          : props.fragmentData.scImageCaptionFr.json[0].content[0].value}
      </p>
    </div>
  );
}
