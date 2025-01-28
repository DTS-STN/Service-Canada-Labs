import { Collapse } from "../../molecules/Collapse";
import Image from "next/image";

export default function ImageWithCollapse({
  id,
  src,
  alt,
  width,
  height,
  content,
  longDesc,
  title,
  children,
}) {
  return (
    <div className="layout-container grid grid-cols-12 gap-x-6 my-12">
      <Image
        id={id}
        src={src}
        alt={alt}
        className="col-span-12 lg:col-span-10"
        width={width}
        height={height}
        sizes="100vw"
        quality={100}
      />
      {content ? (
        <div className="grid row-start-2 col-span-12 lg:col-span-10 justify-around mb-8">
          {content}
        </div>
      ) : (
        ""
      )}
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
