import { useState, useRef } from "react";
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
  const formRef = useRef(null);

  let onSubmitHandler = (e) => {
    // prevent default behaviour of form
    e.preventDefault();
    // create FormData object from form
    const formData = new FormData(e.target);
    // create URLSearchParams object from FormData object
    // this will be used to create url encoded string of names and values of the form fields
    const urlEncoded = new URLSearchParams(formData);
    console.log(urlEncoded.toString());

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
            className="block text-xxs font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font"
            href="mailto:experience@servicecanada.gc.ca"
          >
            experience@servicecanada.gc.ca
          </a>
        </>
      ) : (
        <>
          <h2 className="text-base font-body font-normal mb-4">
            {t("reportAProblemCheckAllThatApply")}
          </h2>
          <form ref={formRef} className="w-full" onSubmit={onSubmitHandler}>
            <input type="hidden" id="language" value={i18n.language} />
            <OptionalTextField
              checkBoxId="incorrectInformation"
              textFieldId="incorrectInformationTextField"
              checkBoxName="incorrectInformation"
              textFieldName="incorrectInformationText"
              checkBoxLabel={t("reportAProblemIncorrectInformation")}
              textFieldLabel={t("reportAProblemProvideMoreDetails")}
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
              checkBoxId="unclearInformation"
              textFieldId="unclearInformationTextField"
              checkBoxName="unclearInformation"
              textFieldName="unclearInformationText"
              checkBoxLabel={t("reportAProblemUnclearInformation")}
              textFieldLabel={t("reportAProblemProvideMoreDetails")}
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
              checkBoxId="infoNotFound"
              textFieldId="infoNotFoundTextField"
              checkBoxName="infoNotFound"
              textFieldName="infoNotFoundText"
              checkBoxLabel={t("reportAProblemDidNotFindWhatYoureLookingFor")}
              textFieldLabel={t("reportAProblemProvideMoreDetails")}
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
              checkBoxId="adaptiveTechnology"
              textFieldId="adaptiveTechnologyTextField"
              checkBoxName="adaptiveTechnology"
              textFieldName="adaptiveTechnologyText"
              checkBoxLabel={t(
                "reportAProblemPageDoesNotWorkWithAdaptiveTechnology"
              )}
              textFieldLabel={t("reportAProblemProvideMoreDetails")}
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
              checkBoxId="privacyIssues"
              textFieldId="privacyIssuesTextField"
              checkBoxName="privacyIssues"
              textFieldName="privacyIssuesText"
              checkBoxLabel={t("reportAProblemIncorrectInformation")}
              textFieldLabel={t("reportAProblemProvideMoreDetails")}
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
              checkBoxId="noWhereElseToGo"
              textFieldId="noWhereElseToGoTextField"
              checkBoxName="noWhereElseToGo"
              textFieldName="noWhereElseToGoText"
              checkBoxLabel={t("reportAProblemNoWhereElseToGo")}
              textFieldLabel={t("reportAProblemProvideMoreDetails")}
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
              checkBoxId="other"
              textFieldId="otherTextField"
              checkBoxName="other"
              textFieldName="otherText"
              checkBoxLabel={t("reportAProblemOther")}
              textFieldLabel={t("reportAProblemProvideMoreDetails")}
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
            <ul className="list-outside list-disc px-6 py-2">
              <li className="text-xxs font-body my-4">
                <b>{t("reportAProblemNoReply")}</b>
                {t("reportAProblemEnquiries")}
                <a
                  className="block text-xxs font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font"
                  href="mailto:experience@servicecanada.gc.ca"
                >
                  experience@servicecanada.gc.ca
                </a>
              </li>
              <li className="text-xxs font-body my-4">
                <b>{t("reportAProblemNoPersonalInfo")}</b>,&nbsp;
                {t("reportAProblemNoPersonalInfoDetails")}
              </li>
              <li className="text-xxs font-body my-4">
                <b>{t("reportAProblemMoreInfo")}</b>,&nbsp;
                {t("reportAProblemMoreInfoDetails")}&nbsp;
                <a
                  className="text-xxs font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font"
                  href={t("reportAProblemMoreInfoLink")}
                >
                  {t("reportAProblemMoreInfoLinkText")}
                </a>
              </li>
            </ul>
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
        </>
      )}
    </Details>
  );
}
