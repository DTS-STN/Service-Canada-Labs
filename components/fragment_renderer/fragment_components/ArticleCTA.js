import { CTA } from "../../design-system/CTA";
import TextRender from "../../text_node_renderer/TextRender";

export default function ArticleCTA(props) {
  return (
    <CTA
      heading={
        props.locale === "en"
          ? props.fragmentData.scTitleEn
          : props.fragmentData.scTitleFr
      }
      body={
        <TextRender
          data={
            props.locale === "en"
              ? props.fragmentData.scContentEn.json
              : props.fragmentData.scContentFr.json
          }
          excludeH1={true}
        />
      }
      ButtonProps={{
        id: props.fragmentData.scLabsButton[0].scId,
        text:
          props.locale === "en"
            ? props.fragmentData.scLabsButton[0].scTitleEn
            : props.fragmentData.scLabsButton[0].scTitleFr,
        href:
          props.locale === "en"
            ? props.fragmentData.scLabsButton[0].scDestinationURLEn
            : props.fragmentData.scLabsButton[0].scDestinationURLFr,
        className:
          "w-fit bg-[#26374A] mt-4 text-white visited:text-white hover:bg-[#1C578A] hover:no-underline hover:text-white active:bg-[#16446C]",
      }}
      containerClass="layout-container my-4"
    />
  );
}
