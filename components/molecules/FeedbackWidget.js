import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "next-i18next";
import { ActionButton } from "../atoms/ActionButton";
import { useState } from "react";
import Joi from "joi";
import { ErrorLabel } from "../atoms/ErrorLabel";
import FocusTrap from "focus-trap-react";

/**
 * Displays the PhaseBanner on the page
 */

export const FeedbackWidget = ({ showFeedback, toggleForm }) => {
  const [submitted, setSubmitted] = useState(false);
  const [feedbackClose, setFeedbackClose] = useState(false);
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

  function setFocusAfterSubmit() {
    document.getElementById("feedbackButton").focus();
  }

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
      setFeedbackClose(false);
      setFocusAfterSubmit();
    } else {
      setFeedbackError(error.message);
      srSpeak(error.message);
    }
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
      {showFeedback ? (
        <FocusTrap>
          <div className="fixed top-0 left-0 w-screen h-full bg-opacity-50 bg-gray-400 flex items-center">
            <div
              className="w-full bg-custom-blue-blue"
              data-testid="feedbackDropdown"
            >
              {submitted ? (
                <div role="status" className="w-full">
                  {!feedbackClose ? (
                    <div
                      className={`${
                        response === t("thankYouFeedback")
                          ? "bg-custom-green-darker font-bold"
                          : "bg-circle-color"
                      } text-white flex py-2`}
                    >
                      <div className="layout-container flex">
                        <span className="flex text-xs lg:text-sm font-body mt-2 mb-4 w-5/6">
                          {response}
                          {response === t("sorryFeedback") ? (
                            <a
                              href={`mailto:${process.env.NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL}`}
                              className="px-2 underline outline-none focus:outline-white-solid flex items-end"
                            >
                              experience@service.gc.ca
                            </a>
                          ) : (
                            " "
                          )}
                        </span>
                        <button
                          id="feedbackClose"
                          onClick={() => setFeedbackClose(true)}
                          className="font-body text-white flex mt-2.5 lg:mt-0 outline-none focus:outline-white-solid justify-end w-1/6"
                          data-testid="closeButton"
                          aria-label="Close the expanded feedback section"
                        >
                          <img
                            src="/close-x.svg"
                            alt="Close button"
                            className="mt-0.5 lg:mt-3.5"
                          />
                          <span className="text-xs leading-4 lg:text-sm underline ml-1 lg:ml-2 lg:leading-10">
                            {t("close")}
                          </span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                ""
              )}
              <div className="layout-container text-white pb-4">
                <button
                  id="feedbackClose"
                  onClick={toggleForm}
                  className="flex float-right pt-4 font-body text-white flex mt-2.5 lg:mt-0 outline-none focus:outline-white-solid"
                  data-testid="closeButton"
                  aria-label="Close the expanded feedback section"
                >
                  <img
                    src="/close-x.svg"
                    alt="Close button"
                    className="mt-0.5 lg:mt-3.5"
                  />
                  <span className="text-xs leading-4 lg:text-sm underline ml-2 lg:leading-10">
                    {t("close")}
                  </span>
                </button>
                <h2 className="text-h4 lg:text-h3 lg:text-sm font-display pt-6 mb-4 w-48 sm:w-auto">
                  {t("improveService")}
                </h2>
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
                  <div id="feedbackInfo">
                    <p className="text-xs lg:text-sm my-2">
                      {t("doNotInclude")}
                    </p>
                    <p className="text-xs lg:text-sm my-2">
                      {t("maximum2000")}
                    </p>
                  </div>
                  {feedbackError ? (
                    <ErrorLabel
                      message={feedbackError}
                      className="text-black mt-4"
                    />
                  ) : undefined}
                  <textarea
                    aria-describedby="feedbackInfo"
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
                    custom="outline-none focus:outline-black-solid rounded block w-full lg:w-auto lg:px-12 text-xs lg:text-sm py-2 mt-2 font-bold text-custom-blue-projects-link bg-details-button-gray hover:bg-gray-300 flex justify-center"
                    type="submit"
                    dataCy="feedback-submit"
                    dataTestId="feedback-submit"
                    text={t("reportAProblemSubmit")}
                    analyticsTracking
                  />
                </form>
              </div>
            </div>
          </div>
        </FocusTrap>
      ) : (
        ""
      )}
    </>
  );
};

FeedbackWidget.propTypes = {
  /**
   * This is for showing the feedback component
   */
  feedbackActive: PropTypes.bool,
};

export default FeedbackWidget;
