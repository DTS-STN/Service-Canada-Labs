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
    <div className="bg-[#ebf2fc] text-[#333] my-12">
      <div className="layout-container pb-10 pt-10 text-sm md:text-base">
        <div>
          <div className="flex flex-col">
            <div className="flex -my-2">
              <img
                className="mb-2 -ml-4"
                src="/cta_icon.svg"
                alt=""
                width="60"
                height="53"
              />
              <h3 className="lg:text-h1 ml-2">
                <>{props.title}</>
              </h3>
            </div>
            <aside className="pt-3 border-l-2 ml-2 lg:ml-3.5 border-custom-blue-blue xl:w-3/4">
              {props.description ? (
                <div className="pl-4">
                  <p className="text-base lg:text-p ml-6 pb-3 whitespace-pre-line">
                    {props.description}
                  </p>
                  <p className="text-base lg:text-p ml-6 pb-3 whitespace-pre-line">
                    {props.disclaimer}
                  </p>
                </div>
              ) : (
                <div
                  className="text-base lg:text-p ml-6 pb-3 whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: props.html }}
                />
              )}
              <div className="ml-6">
                <p className="flex mb-4 pl-4 text-center">
                  <ActionButton
                    id="become-a-participant-btn"
                    custom={`py-1.5 px-3 rounded text-white text-base lg:text-p font-display bg-custom-blue-dark hover:bg-custom-blue-light border border-custom-blue-darker active:bg-custom-blue-darker hover:ring-2 hover:ring-white`}
                    className=""
                    href={props.href}
                    text={props.hrefText}
                    expandIcon={
                      props.feedbackActive ? (
                        <img
                          className="px-2"
                          src="/feedback-icon-white.svg"
                          alt=""
                        />
                      ) : undefined
                    }
                    onClick={props.feedbackActive ? props.clicked : undefined}
                    ariaExpanded={props.ariaExpanded}
                  />
                </p>
                {props.showPrivacyLink && (
                  <Link href={t("privacyRedirect")} locale={props.lang}>
                    <a className="pl-4 text-base lg:text-p underline flex xl:inline lg:mr-10">
                      {t("privacyLinkText")}
                    </a>
                  </Link>
                )}
              </div>
            </aside>
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
   * a short description about what the call to action is about - string format
   */
  description: PropTypes.string,
  /**
   * a short disclaimer after the description - ie. for a sign up banner an explanation that participation is voluntary
   */
  disclaimer: PropTypes.string,

  /**
   * a short description about what the call to action is about - html format
   */
  html: PropTypes.string,

  /**
   * the url to the action
   */
  href: PropTypes.string.isRequired,

  /**
   * url text to be displayed
   */
  hrefText: PropTypes.string.isRequired,

  /**
   * Aria expanded state
   */
  ariaExpanded: PropTypes.string,

  /**
   * Show or hide privacy link
   */
  showPrivacyLink: PropTypes.bool,
};
