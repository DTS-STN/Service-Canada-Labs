import { Link } from "../atoms/Link";
import { useTranslation } from "next-i18next";

export function MainBand(props) {
  const { t } = useTranslation("common");

  return (
    <>
      <h3 className="pt-[22px] text-multi-neutrals-white font-body font-bold text-[19px]">
        {t("footerTitle")}
      </h3>
      <nav
        className="pb-6"
        role="navigation"
        aria-labelledby="accessibleSectionHeader1"
      >
        <h2 className="sr-only" id="accessibleSectionHeader1">
          {t("aboutGovernment")}
        </h2>
        <ul className="md:grid md:grid-cols-2 lg:grid-cols-3 flex flex-col gap-1 text-xs ml-0">
          {props.landscapeLinks.map((key, index) => {
            return (
              <li
                key={key + index}
                className={`${
                  index === 0 ? "footerLine pb-[22px] relative" : ""
                } text-white w-64 sm:w-56 lg:w-80 my-2.5 list-none ml-0 text-xs`}
              >
                <Link
                  id={"LandscapeLink" + index}
                  href={t(`landscapeLinks.link.${key}`)}
                  text={t(`landscapeLinks.text.${key}`)}
                  linkStyle="smfooterWhite"
                  target={props.target}
                />
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
