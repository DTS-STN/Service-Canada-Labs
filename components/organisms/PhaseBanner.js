import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "next-i18next";
import { ActionButton } from "../atoms/ActionButton";
import { useState } from "react";
import Joi from "joi";
import { ErrorLabel } from "../atoms/ErrorLabel";

/**
 * Displays the PhaseBanner on the page
 */

export const PhaseBanner = ({ phase, children, feedbackActive }) => {
  const [submitted, setSubmitted] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const { t } = useTranslation("common");
  const [response, setResponse] = useState(t("thankYouFeedback"));

  // Joi form validation schema.
  const formSchema = Joi.object({
    feedback: Joi.string()
      .required()
      .error((errors) => {
        errors.forEach((error) => {
          switch (error.code) {
            case "any.required":
              error.message = t("feedbackRequired");
              break;
            default:
              error.message = t("feedbackRequired");
              break;
          }
        });
        return errors;
      }),
  });

  const [feedback, setFeedback] = useState("");
  const [feedbackError, setFeedbackError] = useState("");

  let onSubmitHandler = async (e) => {
    // prevent default behaviour of form
    e.preventDefault();
    // clear out error values
    await setFeedbackError("");
    // compile data into one object
    const formData = { feedback };
    // validate data using Joi schema
    const { error } = formSchema.validate(formData, {
      abortEarly: false,
      allowUnknown: true,
    });
    const valid = error === undefined;

    if (valid) {
      //Submit data to the api
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // if the response is good, show thank you message
      if (response.status === 201 || response.status === 200) {
        await setResponse(t("thankYouFeedback"));
      } else {
        await setResponse(t("sorryFeedback"));
      }

      setSubmitted(true);
    } else {
      setFeedbackError(error.message);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
            {feedbackActive ? (
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
            )}
          </div>
          <div className="lg:ml-4 xl:ml-8 xxl:ml-12">
            <p className="font-body text-xs lg:text-sm mt-5 lg:mt-auto text-white lg:ml-4 pt-1 my-auto lg:mb-0 lg:pb-1">
              {children}
            </p>
            {feedbackActive ? (
              <button
                id="feedbackButton"
                onClick={() => setShowFeedback(!showFeedback)}
                className="group outline-none focus:outline-white-solid bg-circle-color font-body text-xs lg:text-sm text-white flex text-left lg:ml-4 my-2 lg:my-0"
                data-testid="feedbackButton"
              >
                <span
                  id="caret"
                  className={`${
                    showFeedback ? "text-sm" : "text-p"
                  } leading-7 lg:leading-5`}
                  dangerouslySetInnerHTML={{
                    __html: showFeedback ? "&#9660;" : "&#11208;",
                  }}
                />
                <strong className="mt-2 lg:mt-0 ml-2 group-hover:underline">
                  {t("giveFeedback")}
                </strong>
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {showFeedback ? (
        <div className="bg-custom-blue-blue" data-testid="feedbackDropdown">
          <div role="status">
            {submitted ? (
              <div className="layout-container text-white flex justify-between">
                <span className="text-xs lg:text-sm font-body mt-2 mb-4">
                  {response}
                  {response === t("sorryFeedback") ? (
                    <a
                      href={`mailto:${process.env.NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL}`}
                      className="underline outline-none focus:outline-white-solid"
                    >
                      {" "}
                      experience@service.gc.ca
                    </a>
                  ) : (
                    " "
                  )}
                  .
                </span>
                <button
                  id="feedbackClose"
                  onClick={() => setShowFeedback(!showFeedback)}
                  className="font-body text-white flex mt-2.5 lg:mt-0 outline-none focus:outline-white-solid"
                  data-testid="closeButton"
                >
                  <span
                    id="close"
                    className="text-h2 lg:text-h1 leading-4 lg:leading-10"
                  >
                    &times;
                  </span>
                  <span className="text-xs leading-4 lg:text-sm underline ml-1 lg:ml-2 lg:leading-10">
                    {t("close")}
                  </span>
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
          {submitted ? (
            ""
          ) : (
            <div className="layout-container text-white pb-4">
              <div className="flex justify-between pt-4">
                <h2 className="text-h4 lg:text-h3 lg:text-sm font-display mt-2 mb-4 w-48 sm:w-auto">
                  {t("improveService")}
                </h2>
                <button
                  id="feedbackClose"
                  onClick={() => setShowFeedback(!showFeedback)}
                  className="font-body text-white flex mt-2.5 lg:mt-0 outline-none focus:outline-white-solid"
                  data-testid="closeButton"
                >
                  <span
                    id="close"
                    className="text-h3 lg:text-h2 leading-4 lg:leading-10"
                  >
                    &times;
                  </span>
                  <span className="text-xs leading-4 lg:text-sm underline ml-2 lg:leading-10">
                    {t("close")}
                  </span>
                </button>
              </div>
              <ul className="list-outside list-disc px-6 py-2">
                <li className="text-xs lg:text-sm font-body mb-4">
                  <strong>{t("reportAProblemNoReply")}</strong>{" "}
                  {t("reportAProblemEnquiries")}{" "}
                  <a
                    className="underline text-xs lg:text-sm font-body outline-none focus:outline-white-solid"
                    href="mailto:experience@servicecanada.gc.ca"
                  >
                    experience@servicecanada.gc.ca
                  </a>
                  .
                </li>
                <li className="text-xs lg:text-sm font-body mb-4">
                  <strong>{t("confidential")}</strong>
                  <ActionButton
                    id="link-privacyPage"
                    dataCy="link-privacyPage"
                    dataTestId="link-privacyPage"
                    href={t("privacyLink")}
                    text={t("reportAProblemPrivacyStatement")}
                    custom="text-xs lg:text-sm underline ml-2 outline-none focus:outline-white-solid"
                  />
                </li>
              </ul>
              <form
                data-gc-analytics-formname="ESDC|EDSC:ServiceCanadaLabsFeedback-Form"
                data-gc-analytics-collect='[{"value":"input,select","emptyField":"N/A"}]'
                className="w-full"
                action="#"
                onSubmit={onSubmitHandler}
              >
                <label
                  htmlFor="feedbackTextArea"
                  className="text-xs lg:text-sm font-body font-bold"
                >
                  {t("doBetter")}
                  <span className="text-gray-md"> {t("required")}</span>
                </label>
                <p className="text-xs lg:text-sm my-2">{t("doNotInclude")}</p>
                <p className="text-xs lg:text-sm my-2">{t("maximum2000")}</p>
                {feedbackError ? (
                  <ErrorLabel
                    message={feedbackError}
                    className="text-black mt-4"
                  />
                ) : undefined}
                <textarea
                  id="feedbackTextArea"
                  name="feedbackTextArea"
                  maxLength="2000"
                  rows="5"
                  className={
                    "text-input font-body w-full min-h-40px shadow-sm text-form-input-gray border-2 py-6px px-12px rounded"
                  }
                  onChange={(e) => setFeedback(e.currentTarget.value)}
                />
                <ActionButton
                  id="feedback-submit"
                  custom="outline-none focus:outline-black-solid rounded block w-full lg:w-auto lg:px-12 text-xs lg:text-sm py-2 mt-2 font-bold text-custom-blue-projects-link bg-details-button-gray hover:bg-gray-300"
                  type="submit"
                  dataCy="feedback-submit"
                  dataTestId="feedback-submit"
                  text={t("reportAProblemSubmit")}
                  analyticsTracking
                />
              </form>
            </div>
          )}
        </div>
      ) : (
        ""
      )}
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
  feedbackActive: PropTypes.bool,
};

export default PhaseBanner;
