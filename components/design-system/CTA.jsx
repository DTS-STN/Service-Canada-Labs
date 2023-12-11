import { Button } from "./Button";
import { Link } from "./Link";
import { Image } from "./Image";

export function CTA({
  heading,
  body,
  ButtonProps,
  LinkProps,
  containerClass = "",
}) {
  // Check if the prop is HTML content
  const isHTML = (str) => /<\/?[a-z][\s\S]*>/i.test(str);

  return (
    <div className="bg-multi-blue-blue2 p-3">
      <div className={`flex flex-row ${containerClass}`}>
        <div className="flex flex-col w-[60px] shrink-0">
          <Image alt="icon" src="/comment_bubble.svg" className="w-[60px]" />
          <div className="flex-grow divide-x-2 divide-multi-blue-blue60a flex flex-row justify-center mt-3">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="pt-0 pl-5">
          <h3 className={`leading-[40px] text-multi-neutrals-grey100`}>
            {heading}
          </h3>
          {isHTML ? body : <p className="body">{body}</p>}
          <Button
            styling="primary"
            className="my-3"
            type="button"
            {...ButtonProps}
          />
          {LinkProps && <Link {...LinkProps} />}
        </div>
      </div>
    </div>
  );
}
