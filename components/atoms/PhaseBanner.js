import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "next-i18next";
import { ActionButton } from "./ActionButton";
import { Feedback } from "../organisms/Feedback";

/**
 * Displays the PhaseBanner on the page
 */

export const PhaseBanner = ({ phase, children, feedback }) => {
  const { t } = useTranslation("common");

  //Function for changing feedback button state
  function onfeedbackClick() {
    const feedbackButton = document.getElementById("feedbackButton");
    const feedbackDropdown = document.getElementById("feedbackDropdown");
    const caret = document.getElementById("caret");

    feedbackDropdown.classList.toggle("active");
    feedbackButton.getAttribute("aria-expanded") === "true"
      ? feedbackButton.setAttribute("aria-expanded", false)
      : feedbackButton.setAttribute("aria-expanded", true);

    feedbackButton.getAttribute("aria-expanded") === "true"
      ? (caret.innerHTML = "&#9660;")
      : (caret.innerHTML = "&#9656;");
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
                aria-expanded="false"
                aria-controls="feedbackDropdown"
                data-testid="feedbackButton"
              >
                <span id="caret" className="text-p leading-5">
                  &#9656;
                </span>
                <span className="underline mt-2 lg:mt-0 ml-2 font-bold">
                  {t("giveFeedback")}
                </span>
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <Feedback />
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
