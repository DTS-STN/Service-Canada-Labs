import TextRender from "../../text_node_renderer/TextRender";

export default function TextContent({ data, excludeH1, layout }) {
  switch (layout) {
    case "default":
      return (
        <div className="layout-container grid grid-cols-12 gap-x-6 my-12">
          <div className="col-span-12 lg:col-span-7">
            <TextRender data={data} excludeH1={excludeH1} />
          </div>
        </div>
      );
    case "quote":
      return (
        <div className="layout-container grid grid-cols-12 gap-x-6 my-12">
          <div className="col-span-12 xl:col-span-7">
            <div className="speech-bubble-full-width">
              <div className="speech-bubble-top-full-width">
                <blockquote className="speech-bubble-quote">
                  <TextRender data={data} excludeH1={excludeH1} />
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      );
    default:
      break;
  }
}
