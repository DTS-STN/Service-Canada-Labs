import PropTypes from "prop-types";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { ActionButton } from "../atoms/ActionButton";

/**
 * Feedback component
 */
export function Feedback(props) {
  const [submitted, setSubmitted] = useState(false);
  const { t, i18n } = useTranslation();

  let onSubmitHandler = (e) => {
    // prevent default behaviour of form
    e.preventDefault();
    // create FormData object from form
    const formData = new FormData(e.target);
    // create URLSearchParams object from FormData object
    // this will be used to create url encoded string of names and values of the form fields
    const urlEncoded = new URLSearchParams(formData);
    // call feedback API route
    fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: urlEncoded.toString(),
    }).catch((e) => {
      // handle error if fetch fails
      // fetch only fails if there is no internet connection not for the actual
      // request so there is nothing really to do here other than to log it
      console.log(e);
    });

    setSubmitted(true);
  };

  //Function for closing feedback
  function closeFeedback() {
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
    <div id="feedbackDropdown" className="feedbackDropdown bg-custom-blue-blue">
      <div role="status">
        {submitted ? (
          <div className="layout-container text-white flex justify-between">
            <h2 className="text-xs lg:text-sm font-body mt-2 mb-4">
              {t("thankYouFeedback")}
            </h2>
            <button
              id="feedbackClose"
              onClick={closeFeedback}
              className="font-body text-white flex text-left sm:ml-4 my-2 sm:my-0"
              aria-haspopup="true"
              aria-expanded="false"
              aria-controls="feedbackDropdown"
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
        ) : (
          ""
        )}
      </div>
      {submitted ? (
        ""
      ) : (
        <div className="layout-container text-white pb-4">
          <div className="flex justify-between">
            <h2 className="text-h4 lg:text-h3 lg:text-sm font-display mt-2 mb-4 w-48 sm:w-auto">
              {t("improveService")}
            </h2>
            <button
              id="feedbackClose"
              onClick={closeFeedback}
              className="font-body text-white flex text-left sm:ml-4 my-2 sm:my-0"
              aria-haspopup="true"
              aria-expanded="false"
              aria-controls="feedbackDropdown"
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
              <b>{t("reportAProblemNoReply", { lng: props.language })}</b>{" "}
              {t("reportAProblemEnquiries", { lng: props.language })}{" "}
              <a
                className="underline text-xs lg:text-sm font-body hover:text-gray-300 text-white"
                href="mailto:experience@servicecanada.gc.ca"
              >
                experience@servicecanada.gc.ca
              </a>
              .
            </li>
            <li className="text-xs lg:text-sm font-body mb-4">
              <b>{t("confidential", { lng: props.language })}</b>
              <ActionButton
                id="link-privacyPage"
                dataCy="link-privacyPage"
                dataTestId="link-privacyPage"
                href={t("privacyLink")}
                text={t("reportAProblemPrivacyStatement")}
                custom="text-xs lg:text-sm underline ml-2 hover:text-gray-300"
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
            </label>
            <p className="text-xs lg:text-sm my-2">{t("doNotInclude")}</p>
            <p className="text-xs lg:text-sm my-2">{t("maximum2000")}</p>
            <textarea
              id="feedbackTextArea"
              name="feedbackTextArea"
              maxLength="2000"
              rows="5"
              className={
                "text-input font-body w-full min-h-40px shadow-sm text-form-input-gray border-2 py-6px px-12px rounded"
              }
            />
            <ActionButton
              id="submit"
              custom="rounded block w-full lg:w-auto lg:px-12 text-xs lg:text-sm py-2 mt-2 font-bold text-custom-blue-projects-link bg-details-button-gray hover:bg-gray-300"
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
  );
}

Feedback.propTypes = {
  /**
   * Translation language
   */
  language: PropTypes.string,
};
