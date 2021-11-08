import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "next-i18next";
import { useState, useRef } from "react";
import { FeedbackWidget } from "../molecules/FeedbackWidget";
import { ActionButton } from "../atoms/ActionButton";

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
              className="font-body text-xs text-white border block w-max px-4 py-1 my-auto leading-6 items-center"
              role="alert"
            >
              {phase}
            </span>
            {feedbackActive ? (
              <ActionButton
                id="back-projects"
                dataCy="back-projects"
                dataTestId="back-projects"
                custom="font-body w-max text-xs underline text-white block outline-none focus:outline-white-solid h-full flex items-center -mt-2 py-2"
                text={t("backProjects")}
                href={t("breadCrumbsHref2")}
              />
            ) : (
              ""
            )}
          </div>
          <div className="lg:ml-4 xl:ml-8 xxl:ml-12">
            <p className="mt-2 lg:mt-0 h-full font-body text-xs lg:text-sm text-white lg:ml-4 my-auto flex items-center">
              {text}
            </p>
          </div>
        </div>
        {feedbackActive ? (
          <div className="py-4 outline-none bg-custom-blue-blue font-body text-xs lg:text-sm text-white flex items-center lg:my-0">
            <div className="flex layout-container">
              <span
                className="invisible hidden md:block font-body text-xs text-white border block w-max px-4 py-1 my-auto leading-6 items-center"
                role="alert"
              >
                {phase}
              </span>
              <div className="lg:ml-6 xl:ml-12 xxl:ml-14 my-auto">
                <button
                  id="feedbackButton"
                  onClick={toggleForm}
                  className="flex focus:outline-white-solid items-center lg:ml-4 my-auto"
                  data-testid="feedbackButton"
                >
                  <strong className="underline">
                    {t("giveFeedback")}
                    <span className="sr-only">{toggle.current}</span>
                  </strong>
                  <img
                    className="px-2 flex items-center"
                    src="/feedback-icon-white.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

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
