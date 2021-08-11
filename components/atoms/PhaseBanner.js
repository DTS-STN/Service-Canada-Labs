import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "next-i18next";
import { ActionButton } from "./ActionButton";
import { Feedback } from "../organisms/Feedback";
import { useState } from "react";

/**
 * Displays the PhaseBanner on the page
 */

export const PhaseBanner = ({ phase, children, feedback }) => {
  const { t } = useTranslation("common");
  const [ariaExpanded, setAriaExpanded] = useState(false);
  const [caretHtml, setCaretHtml] = useState("&#9656;");

  //Function for changing feedback button state
  function onfeedbackClick() {
    const feedbackDropdown = document.getElementById("feedbackDropdown");

    feedbackDropdown.classList.toggle("active");
    ariaExpanded === true ? setAriaExpanded(false) : setAriaExpanded(true);

    ariaExpanded === false ? setCaretHtml("&#9660;") : setCaretHtml("&#9656;");
  }

  return (
    <>
      <div className="bg-circle-color">
        <div className="block sm:flex py-4 layout-container">
          <div
            className={`flex justify-between sm:block sm:w-max ${
              feedback ? "mt-2" : ""
            }`}
          >
            <span className="font-body text-xs text-circle-color font-extrabold block w-max bg-white px-4 py-1 my-auto leading-6">
              {phase}
            </span>
            {feedback ? (
              <ActionButton
                id="back-projects"
                dataCy="back-projects"
                dataTestId="back-projects"
                custom="font-body text-xs mt-0 sm:mt-4 underline hover:text-canada-footer-hover-font-blue text-white block w-32"
                text={t("backProjects")}
                href={t("breadCrumbsHref2")}
              />
            ) : (
              ""
            )}
          </div>
          <div>
            <p className="font-body text-xs lg:text-sm mt-5 sm:mt-auto text-white sm:ml-4 pt-1 my-auto sm:mb-0 lg:pb-1">
              {children}
            </p>
            {feedback ? (
              <button
                id="feedbackButton"
                onClick={onfeedbackClick}
                className="bg-circle-color font-body text-xs lg:text-sm text-white flex text-left sm:ml-4 my-2 sm:my-0"
                aria-haspopup="true"
                aria-expanded={ariaExpanded}
                aria-controls="feedbackDropdown"
                data-testid="feedbackButton"
              >
                <span
                  id="caret"
                  className={`${
                    caretHtml === "&#9660;" ? "text-sm" : "text-p"
                  } leading-7 lg:leading-5`}
                  dangerouslySetInnerHTML={{ __html: caretHtml }}
                />
                <strong className="underline mt-2 lg:mt-0 ml-2">
                  {t("giveFeedback")}
                </strong>
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <Feedback
        ariaExpanded={ariaExpanded}
        setAriaExpanded={setAriaExpanded}
        setCaretHtml={setCaretHtml}
      />
    </>
  );
};

PhaseBanner.propTypes = {
  /**
   * Phase stage in the PhaseBanner
   */
  phase: PropTypes.string.isRequired,
  /**
   * Phase stage in the PhaseBanner
   */
  children: PropTypes.string.isRequired,
  /**
   * This is for showing the feedback component
   */
  feedback: PropTypes.bool,
};

export default PhaseBanner;
