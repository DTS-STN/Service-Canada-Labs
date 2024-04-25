import TextRender from "../../text_node_renderer/TextRender";

export default function QuoteVerticalLineContent({
  quoteText,
  explanationtext,
}) {
  return (
    <div className="layout-container grid grid-cols-12 gap-x-4 my-12">
      <div className="col-span-12 xl:col-span-3">
        <div className="speech-bubble">
          <div className="speech-bubble-top">
            <blockquote className="speech-bubble-quote">
              <TextRender data={quoteText} />
            </blockquote>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-7 xl:col-span-4 xxl:-ml-14 h-fit p-5 border-l-4 border-multi-blue-blue60f">
        <TextRender data={explanationtext} />
      </div>
    </div>
  );
}
