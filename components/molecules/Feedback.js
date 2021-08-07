import PropTypes from "prop-types";
import { useTranslation } from "next-i18next";
import { useState } from "react";

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
    <div
      id="feedbackDropdown"
      className="feedbackDropdown bg-custom-blue-blue"
      role="status"
    >
      <div className="layout-container text-white flex justify-between">
        <p className="text-xs font-body mt-2 mb-4">
          Thank you for your feedback!
        </p>
        <button
          id="feedbackClose"
          onClick={closeFeedback}
          className="font-body text-xs text-white flex text-left sm:ml-4 my-2 sm:my-0"
          aria-haspopup="true"
          aria-expanded="false"
          aria-controls="feedbackDropdown"
          data-testid="closeButton"
        >
          <span id="close" className="text-p">
            &times;
          </span>
          <span className="underline mt-2 ml-2 font-bold">{t("Close")}</span>
        </button>
      </div>
    </div>
  );
}

Feedback.propTypes = {
  /**
   * Translation language
   */
  language: PropTypes.string,
};
