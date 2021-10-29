import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "next-i18next";
import { useState, useRef } from "react";
import { FeedbackWidget } from "../molecules/FeedbackWidget";

/**
 * Displays the PhaseBanner on the page
 */

export const PhaseBanner = ({ phase, text, feedbackActive }) => {
  const [showFeedback, setShowFeedback] = useState(false);
  const { t } = useTranslation("common");
  const toggle = useRef("Collapsed");

  let toggleForm = async (e) => {
    if (showFeedback) {
      toggle.current = "Collapsed";
    } else {
      toggle.current = "Expanded";
    }

    srSpeak(toggle.current);
    setShowFeedback(!showFeedback);
  };

  function srSpeak(text, priority) {
    var el = document.createElement("div");
    var id = "speak-" + Date.now();
    el.setAttribute("id", id);
    el.setAttribute("aria-live", priority || "polite");
    el.classList.add("sr-only");
    document.body.appendChild(el);

    window.setTimeout(function () {
      document.getElementById(id).innerHTML = text;
    }, 100);

    window.setTimeout(function () {
      document.body.removeChild(document.getElementById(id));
    }, 1000);
  }

  return (
    <>
      <div className="bg-circle-color">
        <div className="block lg:flex py-4 layout-container">
          <div
            className={`flex justify-between lg:block lg:w-max ${
              feedbackActive ? "mt-2" : ""
            }`}
          >
            <span
              className="font-body text-xs text-white border block w-max px-4 py-1 my-auto leading-6"
              role="alert"
            >
              {phase}
            </span>
            {/* {feedbackActive ? (
              <ActionButton
                id="back-projects"
                dataCy="back-projects"
                dataTestId="back-projects"
                custom="font-body w-max text-xs mt-0 lg:mt-4 underline text-white block w-32 outline-none focus:outline-white-solid"
                text={t("backProjects")}
                href={t("breadCrumbsHref2")}
              />
            ) : (
              ""
            )} */}
          </div>
          <div className="lg:ml-4 xl:ml-8 xxl:ml-12">
            <p className="font-body text-xs lg:text-sm mt-5 lg:mt-auto text-white lg:ml-4 pt-1 my-auto lg:mb-0 lg:pb-1">
              {text}
            </p>
          </div>
        </div>
      </div>
      {feedbackActive ? (
        <div className="py-4 w-full outline-none bg-custom-blue-blue font-body text-xs lg:text-sm text-white flex justify-center items-center text-left lg:my-0">
          <button
            id="feedbackButton"
            onClick={toggleForm}
            className="flex focus:outline-white-solid items-center"
            data-testid="feedbackButton"
          >
            <strong className="ml-2 underline">
              {t("giveFeedback")}
              <span className="sr-only"> {toggle.current}</span>
            </strong>
            <img
              className="px-2 flex items-center"
              src="/feedback-icon-white.svg"
              alt=""
            />
          </button>
        </div>
      ) : (
        ""
      )}
      <FeedbackWidget showFeedback={showFeedback} toggleForm={toggleForm} />
    </>
  );
};

PhaseBanner.propTypes = {
  /**
   * Phase stage in the PhaseBanner
   */
  phase: PropTypes.string.isRequired,
  /**
   * Phasebanner text
   */
  text: PropTypes.string.isRequired,
  /**
   * This is for showing the feedback component
   */
  feedbackActive: PropTypes.bool,
};

export default PhaseBanner;
