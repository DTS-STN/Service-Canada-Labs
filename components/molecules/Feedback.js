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

  return (
    <div id="feedbackDropdown" className="feedbackDropdown" role="status">
      <div className="layout-container">
        <p className="text-base font-body mb-4">Thank you for your feedback!</p>
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
