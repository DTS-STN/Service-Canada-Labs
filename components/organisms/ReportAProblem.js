import PropTypes from "prop-types";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { OptionalTextField } from "../molecules/OptionalTextField";
import { Details } from "../molecules/Details";
import { ActionButton } from "../atoms/ActionButton";

/**
 * Report a problem button to report technical issues on the page.
 */
export function ReportAProblem(props) {
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
    // call report a problem API route
    fetch("/api/report-a-problem", {
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
    <Details
      label={t("footerReportProblemButtonString", { lng: props.language })}
      dataCy="report-a-problem-details"
      dataTestId="report-a-problem-details"
    >
      {submitted ? (
        <>
          <h2 className="text-base font-body mb-4">
            {t("reportAProblemThankYouForYourHelp", { lng: props.language })}
          </h2>
          <p className="text-sm font-body mb-4">
            {t("reportAProblemYouWillNotBeContacted", { lng: props.language })}
          </p>
          <a
            className="block text-sm font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font"
            href={`mailto: ${process.env.NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL}`}
          >
            experience@servicecanada.gc.ca
          </a>
        </>
      ) : (
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
            />
            <OptionalTextField
              controlId="noWhereElseToGoCheckBox"
              textFieldId="no_where_else_to_go"
              controlName="no_where_else_to_go_details"
              textFieldName="noWhereElseToGoTextField"
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
            />
          </fieldset>

          <ul className="list-outside list-disc px-6 py-2">
            <li className="text-xxs sm:text-sm font-body my-4 leading-tight sm:leading-6">
              <b>{t("reportAProblemNoReply", { lng: props.language })}</b>
              {t("reportAProblemEnquiries", { lng: props.language })}
              <a
                className="block text-xxs sm:text-sm font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font"
                href="mailto:experience@servicecanada.gc.ca"
              >
                experience@servicecanada.gc.ca
              </a>
            </li>
            <li className="text-xxs sm:text-sm font-body my-4 leading-tight sm:leading-6">
              <b>
                {t("reportAProblemNoPersonalInfo", { lng: props.language })}
              </b>
              ,&nbsp;
              {t("reportAProblemNoPersonalInfoDetails", {
                lng: props.language,
              })}
            </li>
            <li className="text-xxs sm:text-sm font-body my-4 leading-tight sm:leading-6">
              <b>{t("reportAProblemMoreInfo", { lng: props.language })}</b>
              ,&nbsp;
              {t("reportAProblemMoreInfoDetails", { lng: props.language })}
              &nbsp;
              <a
                className="text-xxs sm:text-sm font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font"
                href={t("reportAProblemMoreInfoLink", { lng: props.language })}
              >
                {t("reportAProblemMoreInfoLinkText", { lng: props.language })}
              </a>
            </li>
          </ul>
          <a
            className="block text-xs sm:text-sm font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font my-4 underline"
            href={t("reportAProblemPrivacyStatementLink", {
              lng: props.language,
            })}
          >
            {t("reportAProblemPrivacyStatement", { lng: props.language })}
          </a>
          <ActionButton
            id="submit"
            className="rounded"
            type="submit"
            dataCy="report-a-problem-submit"
            dataTestId="report-a-problem-submit"
            analyticsTracking
          >
            {t("reportAProblemSubmit", { lng: props.language })}
          </ActionButton>
        </form>
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
