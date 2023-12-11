import TextRender from "../../text_node_renderer/TextRender";

export default function TextWithImage(props) {
  return (
    <div className="layout-container grid grid-cols-12 gap-x-6 my-12">
      <div className="hidden lg:grid col-start-8 col-span-5 row-start-1 row-span-2">
        <div className="flex justify-center">
          <div className="h-auto">
            <img
              src={
                props.locale === "en"
                  ? props.fragmentData.scLabImage.scImageEn._publishUrl
                  : props.fragmentData.scLabImage.scImageFr._publishUrl
              }
              alt={
                props.locale === "en"
                  ? props.fragmentData.scLabImage.scImageAltTextEn
                  : props.fragmentData.scLabImage.scImageAltTextFr
              }
            />
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-7">
        <TextRender
          data={
            props.locale === "en"
              ? props.fragmentData.scLabContent.scContentEn.json
              : props.fragmentData.scLabContent.scContentFr.json
          }
          excludeH1={true}
        />
      </div>
    </div>
  );
}
