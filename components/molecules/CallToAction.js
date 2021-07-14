import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";
import Link from "next/link";
import { useTranslation } from "next-i18next";

/**
 * A section that will have a title, small description, and a link to some action we want to user to make
 */
export function CallToAction(props) {
  const { t } = useTranslation("common");
  return (
    <div className="bg-custom-blue-experiment-blue text-white">
      <div className="layout-container pb-10 pt-10 text-xs md:text-base">
        <h2>{props.title}</h2>
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-24 gap-5">
          <div>
            <p>{props.descriptionP1}</p>
            <br />
            <p>{props.descriptionP2}</p>
          </div>
          <div>
            <p className="flex mb-4 text-center">
              <ActionButton
                id="become-a-participant-btn"
                href={props.href}
                text={props.hrefText}
              />
            </p>
            <p>
              <Link href="/privacy">
                <a className="text-sm underline flex xl:inline lg:mr-10">
                  {t("privacyLinkText")}
                </a>
              </Link>
              <Link href="/unsubscribe">
                <a className="text-sm underline">{t("unsubscribeLinkText")}</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

CallToAction.propTypes = {
  /**
   * title of the call to action
   */
  title: PropTypes.string.isRequired,

  /**
   * a short description about what the call to action is about - part 1
   */
  descriptionP1: PropTypes.string.isRequired,

  /**
   * a short description about what the call to action is about - part 2
   */
  descriptionP2: PropTypes.string.isRequired,

  /**
   * the url to the action
   */
  href: PropTypes.string.isRequired,

  /**
   * url text to be displayed
   */
  hrefText: PropTypes.string.isRequired,
};
