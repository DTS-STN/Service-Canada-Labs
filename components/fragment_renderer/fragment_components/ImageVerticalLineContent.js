import Image from "next/image";
import TextRender from "../../text_node_renderer/TextRender";
import { Collapse } from "../../molecules/Collapse";

export default function ImageVerticalLineContent({
  src,
  alt,
  width,
  height,
  data,
  longDesc,
  title,
  children,
}) {
  return (
    <div className="layout-container grid grid-cols-12 gap-x-8 my-12">
      <div className="col-span-12 xl:col-span-3 ">
        <Image
          className="w-64"
          alt={alt}
          src={src}
          width={width}
          height={height}
        />
      </div>
      <div className="col-span-12 lg:col-span-7 xl:col-span-4 h-fit p-5 border-l-4 border-multi-blue-blue60f">
        <TextRender data={data} />
      </div>
      {longDesc ? (
        <div className="grid row-start-3 col-span-12 lg:col-span-10">
          <Collapse title={title} children={children} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
