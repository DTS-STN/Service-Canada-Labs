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
            href="mailto:experience@servicecanada.gc.ca"
          >
            experience@servicecanada.gc.ca
          </a>
        </>
      ) : (
        <form className="w-full" action="#" onSubmit={onSubmitHandler}>
          <input
            type="hidden"
            id="language"
            name="language"
            value={
              props.language !== undefined ? props.language : i18n.language
            }
          />
          <fieldset>
            <legend className="text-base sm:text-p font-body font-normal mb-6">
              {t("reportAProblemCheckAllThatApply", { lng: props.language })}
            </legend>
            <OptionalTextField
              checkBoxId="incorrectInformationCheckBox"
              textFieldId="incorrectInformationTextField"
              checkBoxName="incorrect_information"
              textFieldName="incorrect_information_details"
              checkBoxLabel={t("reportAProblemIncorrectInformation", {
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
              checkBoxDataTestId="incorrectInformation-checkbox"
              textFieldDataTestId="incorrectInformation-text"
              checkBoxDataCy="incorrectInformation-checkbox"
              textFieldDataCy="incorrectInformation-text"
            />
            <OptionalTextField
              checkBoxId="unclearInformationCheckBox"
              textFieldId="unclearInformationTextField"
              checkBoxName="unclear_information"
              textFieldName="unclear_information_details"
              checkBoxLabel={t("reportAProblemUnclearInformation", {
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
              checkBoxDataTestId="unclearInformation-checkbox"
              textFieldDataTestId="unclearInformation-text"
              checkBoxDataCy="unclearInformation-checkbox"
              textFieldDataCy="unclearInformation-text"
            />
            <OptionalTextField
              checkBoxId="infoNotFoundCheckBox"
              textFieldId="infoNotFoundTextField"
              checkBoxName="info_not_found"
              textFieldName="info_not_found_details"
              checkBoxLabel={t("reportAProblemDidNotFindWhatYoureLookingFor", {
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
              checkBoxDataTestId="infoNotFound-checkbox"
              textFieldDataTestId="infoNotFound-text"
              checkBoxDataCy="infoNotFound-checkbox"
              textFieldDataCy="infoNotFound-text"
            />
            <OptionalTextField
              checkBoxId="adaptiveTechnologyCheckBox"
              textFieldId="adaptiveTechnologyTextField"
              checkBoxName="adaptive_technology"
              textFieldName="adaptive_technology_details"
              checkBoxLabel={t(
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
              checkBoxDataTestId="adaptiveTechnology-checkbox"
              textFieldDataTestId="adaptiveTechnology-text"
              checkBoxDataCy="adaptiveTechnology-checkbox"
              textFieldDataCy="adaptiveTechnology-text"
            />
            <OptionalTextField
              checkBoxId="privacyIssuesCheckBox"
              textFieldId="privacyIssuesTextField"
              checkBoxName="privacy_issues"
              textFieldName="privacy_issues_details"
              checkBoxLabel={t("reportAProblemIncorrectInformation", {
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
              checkBoxDataTestId="privacyIssues-checkbox"
              textFieldDataTestId="privacyIssues-text"
              checkBoxDataCy="privacyIssues-checkbox"
              textFieldDataCy="privacyIssues-text"
            />
            <OptionalTextField
              checkBoxId="noWhereElseToGoCheckBox"
              textFieldId="no_where_else_to_go"
              checkBoxName="no_where_else_to_go_details"
              textFieldName="noWhereElseToGoTextField"
              checkBoxLabel={t("reportAProblemNoWhereElseToGo", {
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
              checkBoxDataTestId="noWhereElseToGo-checkbox"
              textFieldDataTestId="noWhereElseToGo-text"
              checkBoxDataCy="noWhereElseToGo-checkbox"
              textFieldDataCy="noWhereElseToGo-text"
            />
            <OptionalTextField
              checkBoxId="otherCheckBox"
              textFieldId="otherTextField"
              checkBoxName="other"
              textFieldName="other_details"
              checkBoxLabel={t("reportAProblemOther", { lng: props.language })}
              textFieldLabel={t("reportAProblemProvideMoreDetails", {
                lng: props.language,
              })}
              uncontrolled={true}
              multiText={true}
              textLabelBold={true}
              wrap="hard"
              maxLength={750}
              checkBoxDataTestId="other-checkbox"
              textFieldDataTestId="other-text"
              checkBoxDataCy="other-checkbox"
              textFieldDataCy="other-text"
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
