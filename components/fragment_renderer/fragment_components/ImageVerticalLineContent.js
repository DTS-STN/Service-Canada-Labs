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
    <div className="layout-container">
      <div className="grid grid-cols-12 gap-x-6 mb-9">
        <div className="mb-6 object-fill col-span-12 row-start-1 xl:row-start-1 xl:col-span-8">
          <Image
            src={src}
            alt={alt}
            height={height}
            width={width}
            sizes="100vw"
            quality={100}
          />
        </div>
        <div className="col-span-12 row-start-3 xl:col-span-4 xl:row-start-1">
          <div className="py-4 pl-4 border-l-4 border-multi-blue-blue60f">
            <TextRender data={data} />
          </div>
        </div>
        {longDesc ? (
          <div className="mb-6 col-span-12 xl:col-span-8 row-start-2 xl:row-start-2">
            <Collapse data-testid="summary" title={title} children={children} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
