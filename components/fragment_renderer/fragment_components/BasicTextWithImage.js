import Image from "next/image";
import TextRender from "../../text_node_renderer/TextRender";

export default function BasicTextWithImage({ src, alt, width, height, data }) {
  return (
    <div className="layout-container grid grid-cols-12 gap-x-6 my-12">
      <div className="hidden lg:grid col-start-8 col-span-5 row-start-1 row-span-2">
        <div className="flex justify-center">
          <div className="h-auto">
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              sizes="50vw"
              quality={100}
            />
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-7">
        <TextRender data={data} excludeH1={true} />
      </div>
    </div>
  );
}
