import TextRender from "../../text_node_renderer/TextRender";

export default function TextContent(props) {
  return (
    <div className="layout-container grid grid-cols-12 gap-x-6 my-12">
      <div className="col-span-12 lg:col-span-7">
        <TextRender
          data={props.data}
          excludeH1={true}
        />
      </div>
    </div>
  );
}
