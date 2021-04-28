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
    e.preventDefault();
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
        <form className="w-full" action="#" onSubmit={onSubmitHandler}>
          <input type="hidden" id="language" value={i18n.language} />
          <fieldset>
            <legend className="text-base sm:text-p font-body font-normal mb-6">
              {t("reportAProblemCheckAllThatApply")}
            </legend>
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
              textFieldId="incorrectInformationTextField"
              checkBoxName="incorrectInformation"
              textFieldName="incorrectInformationText"
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
