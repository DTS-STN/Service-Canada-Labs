import PropTypes from "prop-types";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { OptionalTextField } from "../molecules/OptionalTextField";
import { Details } from "../molecules/Details";
import { ActionButton } from "../atoms/ActionButton";
import { stripFeedback } from "../../lib/utils/stripFeedback";
import { ErrorLabel } from "../atoms/ErrorLabel";

/**
 * Report a problem button to report technical issues on the page.
 */
export function ReportAProblem(props) {
  const [submitted, setSubmitted] = useState(false);
  const { t, i18n } = useTranslation();

  const [submittedOnce, setSubmittedOnce] = useState(false);

  let onSubmitHandler = (e) => {
    //Checking if at least one checkbox is selected
    let checkBoxSelected = false;

    //Check the checkboxes
    let inputElements = document.getElementsByTagName("input");
    for (let index = 0; index < inputElements.length; index++) {
      if (inputElements[index].type == "checkbox") {
        if (inputElements[index].checked) {
          checkBoxSelected = true;
        }
      }
    }

    // prevent default behaviour of form
    e.preventDefault();
    // create FormData object from form
    const formData = new FormData(e.target);

    // Iterate through key/value pairs and strip personal identifier information from each value
    for (var pair of formData.entries()) {
      let cleanedFeedback = stripFeedback(pair[1]);
      formData.set(pair[0], cleanedFeedback);
    }
    // create URLSearchParams object from FormData object
    // this will be used to create url encoded string of names and values of the form fields
    const urlEncoded = new URLSearchParams(formData);
    let urlString = urlEncoded.toString();
    //Replace the values with yes for GCNotify
    let values;

    if (formData.get("language").toString().localeCompare("fr") == 0) {
      values = [
        "Informations+incorrectes",
        "Informations+impr%C3%A9cises",
        "Vous+n%E2%80%99avez+pas+trouv%C3%A9+ce+que+vous+cherchiez",
        "La+page+ne+fonctionne+pas+avec+vos+technologies+d%E2%80%99adaptation",
        "Vous+%C3%AAtes+inquiet+pour+votre+vie+priv%C3%A9e",
        "Vous+ne+savez+pas+o%C3%B9+trouver+de+l%E2%80%99aide",
        "Autres",
      ];
    } else {
      values = [
        "Incorrect+Information",
        "Unclear+Information",
        "You+didn%E2%80%99t+find+what+you+were+looking+for",
        "Page+does+not+work+with+your+adaptive+technologies",
        "You%E2%80%99re+worried+about+your+privacy",
        "You+don%E2%80%99t+know+where+else+to+go+for+help",
        "Other",
      ];
    }

    for (const value of values) {
      urlString = urlString.replace(value, "yes");
    }

    // call report a problem API route
    fetch("/api/report-a-problem", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: urlString,
    }).catch((e) => {
      // handle error if fetch fails
      // fetch only fails if there is no internet connection not for the actual
      // request so there is nothing really to do here other than to log it
      console.log(e);
    });

    if (checkBoxSelected) {
      setSubmitted(true);
    }
    //Make sure the form was submitted at least once
    setSubmittedOnce(true);
  };

  return (
    <Details
      label={t("footerReportProblemButtonString", { lng: props.language })}
      dataCy="report-a-problem-details"
      dataTestId="report-a-problem-details"
    >
      <div role="status">
        {submitted ? (
          <>
            <h2 className="text-h3 font-display mb-4 font-bold">
              <b>
                {t("reportAProblemThankYouForYourHelp", {
                  lng: props.language,
                })}
              </b>
            </h2>
            <p className="text-sm font-body">
              {t("reportAProblemYouWillNotBeContacted", {
                lng: props.language,
              })}
            </p>
          </>
        ) : (
          ""
        )}
      </div>
      {submitted ? (
        ""
      ) : (
        <>
          <h2 className="text-base font-body mt-0">
            {t("reportAProblemTitle", { lng: props.language })}
          </h2>
          <ul className="list-outside list-disc px-6 py-2">
            <li className="text-xs sm:text-sm font-body mb-4 leading-tight sm:leading-6">
              <b>{t("reportAProblemNoReply", { lng: props.language })}</b>
            </li>
            <li className="text-xs sm:text-sm font-body my-4 leading-tight sm:leading-6">
              <b>
                {t("reportAProblemFeedbackConfidential", {
                  lng: props.language,
                })}
              </b>{" "}
              <Link
                href="/signup/privacy"
                className="underline text-xs sm:text-sm font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font"
              >
                {t("reportAProblemPrivacyStatement", { lng: props.language })}
              </Link>
            </li>
          </ul>
          <form
            data-gc-analytics-formname="ESDC|EDSC:ServiceCanadaLabsReport-Problem"
            data-gc-analytics-collect='[{"value":"input,select","emptyField":"N/A"}]'
            className="w-full"
            action="#"
            onSubmit={onSubmitHandler}
          >
            <input
              type="hidden"
              id="language"
              name="language"
              value={i18n.language}
            />
            <fieldset>
              <legend className="text-base sm:text-p font-body font-normal mb-6">
                <b className="text-error-border-red mr-2" aria-hidden="true">
                  *
                </b>
                {t("reportAProblemCheckAllThatApply", { lng: props.language })}
              </legend>
              <OptionalTextField
                controlId="incorrectInformationCheckBox"
                textFieldId="incorrectInformationTextField"
                controlName="incorrect_information"
                textFieldName="incorrect_information_details"
                controlLabel={t("reportAProblemIncorrectInformation", {
                  lng: props.language,
                })}
                textFieldLabel={t("reportAProblemProvideMoreDetails", {
                  lng: props.language,
                })}
                uncontrolled={true}
                multiText={true}
                textLabelBold={true}
                wrap="hard"
                maxLength={750}
                controlDataTestId="incorrectInformation-checkbox"
                textFieldDataTestId="incorrectInformation-text"
                controlDataCy="incorrectInformation-checkbox"
                textFieldDataCy="incorrectInformation-text"
                describedby="incorrectInformation"
                OptionalTextField
                checkBoxStyle="mb-4 inline-block"
                controlValue={t("reportAProblemIncorrectInformation", {
                  lng: props.language,
                })}
              />
              <OptionalTextField
                controlId="unclearInformationCheckBox"
                textFieldId="unclearInformationTextField"
                controlName="unclear_information"
                textFieldName="unclear_information_details"
                controlLabel={t("reportAProblemUnclearInformation", {
                  lng: props.language,
                })}
                textFieldLabel={t("reportAProblemProvideMoreDetails", {
                  lng: props.language,
                })}
                uncontrolled={true}
                multiText={true}
                textLabelBold={true}
                wrap="hard"
                maxLength={750}
                controlDataTestId="unclearInformation-checkbox"
                textFieldDataTestId="unclearInformation-text"
                controlDataCy="unclearInformation-checkbox"
                textFieldDataCy="unclearInformation-text"
                describedby="unclearInformation"
                checkBoxStyle="mb-4 inline-block"
                controlValue={t("reportAProblemUnclearInformation", {
                  lng: props.language,
                })}
              />
              <OptionalTextField
                controlId="infoNotFoundCheckBox"
                textFieldId="infoNotFoundTextField"
                controlName="info_not_found"
                textFieldName="info_not_found_details"
                controlLabel={t("reportAProblemDidNotFindWhatYoureLookingFor", {
                  lng: props.language,
                })}
                textFieldLabel={t("reportAProblemProvideMoreDetails", {
                  lng: props.language,
                })}
                uncontrolled={true}
                multiText={true}
                textLabelBold={true}
                wrap="hard"
                maxLength={750}
                controlDataTestId="infoNotFound-checkbox"
                textFieldDataTestId="infoNotFound-text"
                controlDataCy="infoNotFound-checkbox"
                textFieldDataCy="infoNotFound-text"
                describedby="infoNotFound"
                checkBoxStyle="lg:mb-8 mb-4 inline-block"
                controlValue={t("reportAProblemDidNotFindWhatYoureLookingFor", {
                  lng: props.language,
                })}
              />
              <OptionalTextField
                controlId="adaptiveTechnologyCheckBox"
                textFieldId="adaptiveTechnologyTextField"
                controlName="adaptive_technology"
                textFieldName="adaptive_technology_details"
                controlLabel={t(
                  "reportAProblemPageDoesNotWorkWithAdaptiveTechnology",
                  { lng: props.language }
                )}
                textFieldLabel={t("reportAProblemProvideMoreDetails", {
                  lng: props.language,
                })}
                uncontrolled={true}
                multiText={true}
                textLabelBold={true}
                wrap="hard"
                maxLength={750}
                controlDataTestId="adaptiveTechnology-checkbox"
                textFieldDataTestId="adaptiveTechnology-text"
                controlDataCy="adaptiveTechnology-checkbox"
                textFieldDataCy="adaptiveTechnology-text"
                describedby="adaptiveTechnology"
                checkBoxStyle="mb-8 inline-block"
                controlValue={t(
                  "reportAProblemPageDoesNotWorkWithAdaptiveTechnology",
                  { lng: props.language }
                )}
              />
              <OptionalTextField
                controlId="privacyIssuesCheckBox"
                textFieldId="privacyIssuesTextField"
                controlName="privacy_issues"
                textFieldName="privacy_issues_details"
                controlLabel={t("reportAProblemYoureWorriedAboutYourPrivacy", {
                  lng: props.language,
                })}
                textFieldLabel={t("reportAProblemProvideMoreDetails", {
                  lng: props.language,
                })}
                uncontrolled={true}
                multiText={true}
                textLabelBold={true}
                wrap="hard"
                maxLength={750}
                controlDataTestId="privacyIssues-checkbox"
                textFieldDataTestId="privacyIssues-text"
                controlDataCy="privacyIssues-checkbox"
                textFieldDataCy="privacyIssues-text"
                describedby="privacyIssues"
                checkBoxStyle="mb-4 inline-block"
                controlValue={t("reportAProblemYoureWorriedAboutYourPrivacy", {
                  lng: props.language,
                })}
              />
              <OptionalTextField
                controlId="noWhereElseToGoCheckBox"
                textFieldId="noWhereElseToGoTextField"
                controlName="no_where_else_to_go"
                textFieldName="no_where_else_to_go_details"
                controlLabel={t("reportAProblemNoWhereElseToGo", {
                  lng: props.language,
                })}
                textFieldLabel={t("reportAProblemProvideMoreDetails", {
                  lng: props.language,
                })}
                uncontrolled={true}
                multiText={true}
                textLabelBold={true}
                wrap="hard"
                maxLength={750}
                controlDataTestId="noWhereElseToGo-checkbox"
                textFieldDataTestId="noWhereElseToGo-text"
                controlDataCy="noWhereElseToGo-checkbox"
                textFieldDataCy="noWhereElseToGo-text"
                describedby="noWhereElseToGo"
                checkBoxStyle="lg:mb-8 mb-4 inline-block"
                controlValue={t("reportAProblemNoWhereElseToGo", {
                  lng: props.language,
                })}
              />
              <OptionalTextField
                controlId="otherCheckBox"
                textFieldId="otherTextField"
                controlName="other"
                textFieldName="other_details"
                controlLabel={t("reportAProblemOther", { lng: props.language })}
                textFieldLabel={t("reportAProblemProvideMoreDetails", {
                  lng: props.language,
                })}
                uncontrolled={true}
                multiText={true}
                textLabelBold={true}
                wrap="hard"
                maxLength={750}
                controlDataTestId="other-checkbox"
                textFieldDataTestId="other-text"
                controlDataCy="other-checkbox"
                textFieldDataCy="other-text"
                describedby="other"
                checkBoxStyle="mb-4"
                controlValue={t("reportAProblemOther", { lng: props.language })}
              />
              {submittedOnce ? (
                <ErrorLabel
                  message={t("reportAProblemError", { lng: props.language })}
                />
              ) : undefined}
            </fieldset>
            <ActionButton
              id="submit"
              className="rounded block mt-4"
              type="submit"
              dataCy="report-a-problem-submit"
              dataTestId="report-a-problem-submit"
              analyticsTracking
            >
              {t("reportAProblemSubmit", { lng: props.language })}
            </ActionButton>
          </form>
        </>
      )}
    </Details>
  );
}

ReportAProblem.propTypes = {
  /**
   * Translation language
   */
  language: PropTypes.string,
};
