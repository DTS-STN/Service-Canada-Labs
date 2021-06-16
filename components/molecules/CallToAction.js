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
          <p>{props.description}</p>
          <div>
            <p className="mb-4">
              <ActionButton
                id="become-a-participant-btn"
                href={props.href}
                text={props.hrefText}
              />
            </p>
            <p>
              {/*TODO: figure out what the privacy link is*/}
              <Link href="#">
                <a className="text-sm underline">{t("privacyLinkText")}</a>
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
   * a short description about what the call to action is about
   */
  description: PropTypes.string.isRequired,

  /**
   * the url to the action
   */
  href: PropTypes.string.isRequired,

  /**
   * url text to be displayed
   */
  hrefText: PropTypes.string.isRequired,
};
