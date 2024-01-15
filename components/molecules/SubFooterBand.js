import { Link } from "../atoms/Link";
import { Image } from "../atoms/Image";

export function SubFooterBand(props) {
  return (
    <div className="bg-[#F8F8F8]">
      <div
        className={`lg:container mx-auto ${
          props.isAuthenticated ? "min-h-[86px]" : "min-h-[96px]"
        } ${props.error ? "items-center" : ""} flex justify-between`}
      >
        {props.error ? (
          <div>
            <a
              id="top_btn"
              href={props.btnLink}
              className="sm:hidden float-left cursor-pointer pr-3"
            >
              Top of page / Haut de la page
            </a>
            <img src="/upArrow.svg" alt="" className="pt-2 sm:hidden" />
          </div>
        ) : (
          <section className="flex items-center">
            <nav role="navigation">
              <ul className="flex flex-col md:flex-row whitespace-nowrap pt-4">
                {props.brandLinks
                  ? props.brandLinks.map(({ href, text, onClick }, index) => {
                      return (
                        <li
                          key={index}
                          className={`${
                            index === 0 ? "" : "md:list-disc"
                          } pr-4 mb-[17px] list-inside list-none text-xxs ml-0`}
                        >
                          <Link
                            onClick={onClick ? onClick : undefined}
                            id={"footerLink" + index}
                            href={href}
                            text={text}
                            linkStyle="smfooterBlue"
                            target={props.target}
                          />
                        </li>
                      );
                    })
                  : props.brandLinksDefault.map(({ href, text }, index) => {
                      return (
                        <li
                          key={index}
                          className={`${
                            index === 0 ? "" : "md:list-disc"
                          } pr-4 mb-[17px] list-inside list-none text-xxs`}
                        >
                          <Link
                            onClick={props.onClick ? props.onClick : undefined}
                            id={"footerLink" + index}
                            href={href}
                            text={text}
                            linkStyle="smfooterBlue"
                            target={props.target}
                          />
                        </li>
                      );
                    })}
              </ul>
            </nav>
          </section>
        )}
        <div
          className={`${
            props.error ? "items-center" : "items-center"
          } min-h-[96px] flex mr-[5px]`}
        >
          <Image
            className={`${
              props.error
                ? "h-[40px] w-auto"
                : "h-[25px] md:h-[40px] w-full mr-2"
            } my-[15px]`}
            src={props.logo}
            alt="Symbol of the Government of Canada"
          />
        </div>
      </div>
    </div>
  );
}
