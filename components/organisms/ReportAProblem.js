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
      label={t("footerReportProblemButtonString")}
      dataCy="report-a-problem-details"
      dataTestId="report-a-problem-details"
    >
      {submitted ? (
        <>
          <h2 className="text-base font-body mb-4">
            {t("reportAProblemThankYouForYourHelp")}
          </h2>
          <p className="text-sm font-body mb-4">
            {t("reportAProblemYouWillNotBeContacted")}
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
            value={i18n.language}
          />
          <fieldset>
            <legend className="text-base sm:text-p font-body font-normal mb-6">
              {t("reportAProblemCheckAllThatApply")}
            </legend>
            <OptionalTextField
              controlId="incorrectInformationCheckBox"
              textFieldId="incorrectInformationTextField"
              controlName="incorrect_information"
              textFieldName="incorrect_information_details"
              controlLabel={t("reportAProblemIncorrectInformation")}
              textFieldLabel={t("reportAProblemProvideMoreDetails")}
              uncontrolled={true}
              multiText={true}
              textLabelBold={true}
              wrap="hard"
              maxLength={750}
              controlDataTestId="incorrectInformation-checkbox"
              textFieldDataTestId="incorrectInformation-text"
              controlDataCy="incorrectInformation-checkbox"
              textFieldDataCy="incorrectInformation-text"
            />
            <OptionalTextField
              controlId="unclearInformationCheckBox"
              textFieldId="unclearInformationTextField"
              controlName="unclear_information"
              textFieldName="unclear_information_details"
              controlLabel={t("reportAProblemUnclearInformation")}
              textFieldLabel={t("reportAProblemProvideMoreDetails")}
              uncontrolled={true}
              multiText={true}
              textLabelBold={true}
              wrap="hard"
              maxLength={750}
              controlDataTestId="unclearInformation-checkbox"
              textFieldDataTestId="unclearInformation-text"
              controlDataCy="unclearInformation-checkbox"
              textFieldDataCy="unclearInformation-text"
            />
            <OptionalTextField
              controlId="infoNotFoundCheckBox"
              textFieldId="infoNotFoundTextField"
              controlName="info_not_found"
              textFieldName="info_not_found_details"
              controlLabel={t("reportAProblemDidNotFindWhatYoureLookingFor")}
              textFieldLabel={t("reportAProblemProvideMoreDetails")}
              uncontrolled={true}
              multiText={true}
              textLabelBold={true}
              wrap="hard"
              maxLength={750}
              controlDataTestId="infoNotFound-checkbox"
              textFieldDataTestId="infoNotFound-text"
              controlDataCy="infoNotFound-checkbox"
              textFieldDataCy="infoNotFound-text"
            />
            <OptionalTextField
              controlId="adaptiveTechnologyCheckBox"
              textFieldId="adaptiveTechnologyTextField"
              controlName="adaptive_technology"
              textFieldName="adaptive_technology_details"
              controlLabel={t(
                "reportAProblemPageDoesNotWorkWithAdaptiveTechnology"
              )}
              textFieldLabel={t("reportAProblemProvideMoreDetails")}
              uncontrolled={true}
              multiText={true}
              textLabelBold={true}
              wrap="hard"
              maxLength={750}
              controlDataTestId="adaptiveTechnology-checkbox"
              textFieldDataTestId="adaptiveTechnology-text"
              controlDataCy="adaptiveTechnology-checkbox"
              textFieldDataCy="adaptiveTechnology-text"
            />
            <OptionalTextField
              controlId="privacyIssuesCheckBox"
              textFieldId="privacyIssuesTextField"
              controlName="privacy_issues"
              textFieldName="privacy_issues_details"
              controlLabel={t("reportAProblemIncorrectInformation")}
              textFieldLabel={t("reportAProblemProvideMoreDetails")}
              uncontrolled={true}
              multiText={true}
              textLabelBold={true}
              wrap="hard"
              maxLength={750}
              controlDataTestId="privacyIssues-checkbox"
              textFieldDataTestId="privacyIssues-text"
              controlDataCy="privacyIssues-checkbox"
              textFieldDataCy="privacyIssues-text"
            />
            <OptionalTextField
              controlId="noWhereElseToGoCheckBox"
              textFieldId="no_where_else_to_go"
              controlName="no_where_else_to_go_details"
              textFieldName="noWhereElseToGoTextField"
              controlLabel={t("reportAProblemNoWhereElseToGo")}
              textFieldLabel={t("reportAProblemProvideMoreDetails")}
              uncontrolled={true}
              multiText={true}
              textLabelBold={true}
              wrap="hard"
              maxLength={750}
              controlDataTestId="noWhereElseToGo-checkbox"
              textFieldDataTestId="noWhereElseToGo-text"
              controlDataCy="noWhereElseToGo-checkbox"
              textFieldDataCy="noWhereElseToGo-text"
            />
            <OptionalTextField
              controlId="otherCheckBox"
              textFieldId="otherTextField"
              controlName="other"
              textFieldName="other_details"
              controlLabel={t("reportAProblemOther")}
              textFieldLabel={t("reportAProblemProvideMoreDetails")}
              uncontrolled={true}
              multiText={true}
              textLabelBold={true}
              wrap="hard"
              maxLength={750}
              controlDataTestId="other-checkbox"
              textFieldDataTestId="other-text"
              controlDataCy="other-checkbox"
              textFieldDataCy="other-text"
            />
          </fieldset>

          <ul className="list-outside list-disc px-6 py-2">
            <li className="text-xxs sm:text-sm font-body my-4 leading-tight sm:leading-6">
              <b>{t("reportAProblemNoReply")}</b>
              {t("reportAProblemEnquiries")}
              <a
                className="block text-xxs sm:text-sm font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font"
                href="mailto:experience@servicecanada.gc.ca"
              >
                experience@servicecanada.gc.ca
              </a>
            </li>
            <li className="text-xxs sm:text-sm font-body my-4 leading-tight sm:leading-6">
              <b>{t("reportAProblemNoPersonalInfo")}</b>,&nbsp;
              {t("reportAProblemNoPersonalInfoDetails")}
            </li>
            <li className="text-xxs sm:text-sm font-body my-4 leading-tight sm:leading-6">
              <b>{t("reportAProblemMoreInfo")}</b>,&nbsp;
              {t("reportAProblemMoreInfoDetails")}&nbsp;
              <a
                className="text-xxs sm:text-sm font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font"
                href={t("reportAProblemMoreInfoLink")}
              >
                {t("reportAProblemMoreInfoLinkText")}
              </a>
            </li>
          </ul>
          <a
            className="block text-xs sm:text-sm font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font my-4 underline"
            href={t("reportAProblemPrivacyStatementLink")}
          >
            {t("reportAProblemPrivacyStatement")}
          </a>
          <ActionButton
            id="submit"
            className="rounded"
            type="submit"
            dataCy="report-a-problem-submit"
            dataTestId="report-a-problem-submit"
          >
            Submit
          </ActionButton>
        </form>
      )}
    </Details>
  );
}
