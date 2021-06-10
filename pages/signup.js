import Head from "next/head";
import { useState } from "react";
import Joi from "joi";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ErrorBox } from "../components/molecules/ErrorBox";
import { ErrorLabel } from "../components/atoms/ErrorLabel";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Layout } from "../components/organisms/Layout";
import { ActionButton } from "../components/atoms/ActionButton";
import { TextField } from "../components/atoms/TextField";
import { RadioField } from "../components/atoms/RadioField";
import { OptionalTextField } from "../components/molecules/OptionalTextField";
import { SelectField } from "../components/atoms/SelectField";
import { CheckBox } from "../components/atoms/CheckBox";

// TODO
//  - fix bug with error messages not showing custom error message [x]
//  - create error box component that scrolls down to the field when there is an error [x]
//  - create thank you page
//  - create translation strings
//  - write cypress tests
export default function Signup(props) {
  const { t } = useTranslation("common");
  const { asPath, push } = useRouter();

  // Joi form validation schema. Only required fields are validated
  const formSchema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .error((errors) => {
        errors.forEach((error) => {
          switch (error.code) {
            case "any.required":
              error.message = t("signupErrorRequired");
              break;
            case "string.email":
              error.message = t("signupErrorEmail");
            default:
              break;
          }
        });
        return errors;
      }),
    yearOfBirth: Joi.number()
      .integer()
      .min(1850)
      .max(new Date().getFullYear())
      .required()
      .error((errors) => {
        errors.forEach((error) => {
          switch (error.code) {
            case "any.required":
              error.message = t("signupErrorRequired");
              break;
            case "number.integer":
              error.message = t("signupErrorInt");
              break;
            case "number.min":
              error.message = t("signupErrorMinMax");
              break;
            case "number.max":
              error.message = t("signupErrorMinMax");
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    language: Joi.string()
      .valid("en", "fr")
      .required()
      .error((errors) => {
        errors.forEach((error) => {
          switch (error.code) {
            case "any.required":
              error.message = t("signupErrorRequired");
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    province: Joi.string()
      .valid(
        "",
        "ON",
        "QC",
        "NL",
        "PE",
        "NS",
        "NB",
        "MB",
        "SK",
        "AB",
        "BC",
        "YT",
        "NT",
        "NU"
      )
      .error((errors) => {
        errors.forEach((error) => {
          switch (error.code) {
            case "any.only":
              error.message = t("signupErrorDropdown");
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    agreeToConditions: Joi.string()
      .valid("yes")
      .required()
      .error((errors) => {
        errors.forEach((error) => {
          switch (error.code) {
            case "any.required":
              error.message = t("signupErrorTerms");
              break;
            default:
              break;
          }
        });
        return errors;
      }),
  });

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [yearOfBirth, setYearOfBirth] = useState("");
  const [yearOfBirthError, setYearOfBirthError] = useState("");

  const [language, setLanguage] = useState("");
  const [languageError, setLanguageError] = useState("");

  const [province, setProvince] = useState("");
  const [provinceError, setProvinceError] = useState("");

  const [gender, setGender] = useState("");
  const [genderOtherDetails, setGenderOtherDetails] = useState("");

  const [nativeStatus, setNativeStatus] = useState("");

  const [disability, setDisability] = useState("");
  const [disabilityDetails, setDisabilityDetails] = useState("");

  const [minority, setMinority] = useState([]);
  const [minorityGroupOther, setMinorityGroupOther] = useState("");

  const [incomeLevel, setIncomeLevel] = useState("");

  const [agreeToConditions, setAgreeToConditions] = useState("");
  const [agreeToConditionsError, setAgreeToConditionsError] = useState("");

  const [errorBoxErrors, setErrorBoxErrors] = useState([]);

  const [errorBoxText, setErrorBoxText] = useState("");

  const handlerMinorityOnChange = (checked, name, value) => {
    // pop value from list
    if (checked) {
      const indexOfElement = minority.indexOf(value);
      if (indexOfElement > -1) {
        const newMinorityArray = [...minority];
        newMinorityArray.splice(indexOfElement, 1);
        setMinority(newMinorityArray);
      }
    } else {
      setMinority([...minority, value]);
    }
  };

  const handlerClearData = (e) => {
    e.preventDefault();
    setEmailError("");
    setLanguageError("");
    setYearOfBirthError("");
    setProvinceError("");
    setAgreeToConditionsError("");

    setEmail("");
    setYearOfBirth("");
    setLanguage("");
    setGender("");
    setGenderOtherDetails("");
    setNativeStatus("");
    setDisability("");
    setDisabilityDetails("");
    setMinority([]);
    setMinorityGroupOther("");
    setIncomeLevel("");
    setAgreeToConditions("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // clear out error values
    await setEmailError("");
    await setLanguageError("");
    await setYearOfBirthError("");
    await setProvinceError("");
    await setAgreeToConditionsError("");
    await setErrorBoxErrors([]);
    await setErrorBoxText("");

    // compile data into one object
    const formData = {
      email,
      yearOfBirth: parseInt(yearOfBirth),
      language,
      province,
      gender,
      genderOtherDetails,
      nativeStatus,
      disability,
      disabilityDetails,
      minority,
      minorityGroupOther,
      incomeLevel,
      agreeToConditions,
    };

    // remove empty values
    Object.keys(formData).forEach(
      (k) =>
        (formData[k] === "" ||
          formData[k] !== formData[k] ||
          (Array.isArray(formData[k]) && formData[k].length === 0)) &&
        delete formData[k]
    );

    // validate data using Joi schema
    const { error } = await formSchema.validate(formData, {
      abortEarly: false,
      allowUnknown: true,
    });

    const valid = error === undefined;

    if (!valid) {
      // map error message setters to field names so that they can be called dynamically
      const errorSetFunctions = {
        email: setEmailError,
        language: setLanguageError,
        yearOfBirth: setYearOfBirthError,
        province: setProvinceError,
        agreeToConditions: setAgreeToConditionsError,
      };
      // get  the details of the error
      const { details } = error;

      // extract the errors from the Joi schema details object
      // in my view extracting errors and then setting them is a less expensive
      // then setting immediately
      const errors = details.reduce((prevErrors, { path, message, type }) => {
        const field = path[0];
        const errorNumber = Object.keys(prevErrors).length + 1;
        if (!prevErrors[field]) {
          prevErrors[field] = {
            id: field,
            number: errorNumber,
            text: `${t("signupError")} ${errorNumber}: ` + message,
          };
        }
        // override the error message if the type of error is because the field is empty
        else if (type.includes("empty")) {
          prevErrors[field] = {
            id: field,
            number: prevErrors[field].number,
            text: `${t("signupError")} ${prevErrors[field].number}: ` + message,
          };
        }
        return prevErrors;
      }, {});

      // set errors using mapped error functions
      let errorsList = [];
      for (let error in errors) {
        await errorSetFunctions[error](errors[error].text);
        // the id for the language field is not actually language but languageEn
        if (errors[error].id === "language") {
          errors[error].id = "languageEn";
        }
        // likewise with province its province choice
        else if (errors[error].id === "province") {
          errors[error].id = "province-choice";
        }
        errorsList.push(errors[error]);
      }

      // set the errors to the error list
      await setErrorBoxErrors(errorsList);
      await setErrorBoxText(
        `${t("signupErrorSubmit1")} ${errorsList.length} ${t(
          "signupErrorSubmit2"
        )}`
      );
    } else {
      //submit data to the api and then redirect to the thank you page
      const response = await fetch("/api/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // if the response is good, redirect to the thankyou page
      if (response.status === 201 || response.status === 200) {
        await push("/thankyou", {}, { locale: props.locale });
      } else if (response.status === 400) {
        await setErrorBoxText(t("signupErrorRegistered"));
      } else {
        await setErrorBoxText(t("signupErrorUnknown"));
      }
    }
  };

  return (
    <Layout
      locale={props.locale}
      langUrl={asPath}
      breadcrumbItems={[{ text: "Service Canada Labs", link: "/" }]}
    >
      <Head>
        <title>{t("signupPage")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="layout-container mb-2 mt-12">
        {errorBoxText ? (
          <ErrorBox text={errorBoxText} errors={errorBoxErrors} />
        ) : undefined}
        <h1 className="mb-12">{t("signupTitle")}</h1>
        <p className="mb-6">{t("signupParagraph1")}</p>
        <h2 className="mb-3">{t("signupTitle2")}</h2>
        <p className="mb-6">{t("signupParagraph2")}</p>
        <h3 className="mb-3">{t("signupTitle3")}</h3>
        <p className="mb-3">{t("signupParagraph3")}</p>
        <ul className="list-disc list-inside pl-2 mb-3 font-body">
          <li>{t("signupListEmail")}</li>
          <li>{t("signupListYear")}</li>
          <li>{t("signupListLanguage")}</li>
        </ul>
        <p className="mb-3">{t("signupParagraph4")}</p>
        <ul className="list-disc list-inside pl-2 mb-3 font-body">
          <li>{t("signupListProvince")}</li>
          <li>{t("signupListGender")}</li>
          <li>{t("signupListIndigenous")}</li>
          <li>{t("signupListDisabilities")}</li>
          <li>{t("signupListMinority")}</li>
          <li>{t("signupListIncome")}</li>
        </ul>
      </section>
      <section className="layout-container">
        <form onSubmit={handleSubmit} onReset={handlerClearData} noValidate>
          <a
            className="block font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font underline mb-4"
            href={t("reportAProblemPrivacyStatementLink")}
          >
            {t("signupPrivacy")}
          </a>
          <ActionButton
            id="reset"
            custom="block font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font underline mb-4"
            type="reset"
          >
            {t("signupClear")}
          </ActionButton>
          <div className="max-w-600px">
            <TextField
              className="mb-10"
              label={t("signupListEmail")}
              type="email"
              name="email"
              id="email"
              error={emailError}
              value={email}
              onChange={setEmail}
              boldLabel={true}
              required
            />
            <TextField
              className="mb-10"
              type="number"
              label={t("signupFormYear")}
              name="yearOfBirth"
              id="yearOfBirth"
              error={yearOfBirthError}
              value={yearOfBirth}
              min={0}
              max={new Date().getFullYear()}
              step={1}
              onChange={setYearOfBirth}
              boldLabel={true}
              required
            />
            <fieldset className="mb-10">
              <legend className="block leading-tight text-sm font-body mb-5px font-bold">
                <b className="text-error-border-red">*</b>{" "}
                {t("signupFormLanguage")}{" "}
                <b className="text-error-border-red">
                  {t("signupFormrequired")}
                </b>
              </legend>
              {languageError ? (
                <ErrorLabel message={languageError} />
              ) : undefined}
              <RadioField
                label={t("signupFormEn")}
                id="languageEn"
                name="language"
                value="en"
                error={languageError !== ""}
                checked={language === "en"}
                onChange={(checked, name, value) => setLanguage(value)}
                required
              />
              <RadioField
                label={t("signupFormFr")}
                id="languageFr"
                name="language"
                value="fr"
                error={languageError !== ""}
                checked={language === "fr"}
                onChange={(checked, name, value) => setLanguage(value)}
                required
              />
            </fieldset>

            <SelectField
              label={t("signupFormProvince")}
              className="mb-10"
              id="province"
              boldLabel
              name="province"
              value={province}
              error={provinceError}
              options={[
                {
                  id: "on",
                  name: t("signupFormON"),
                  value: "ON",
                },
                {
                  id: "qc",
                  name: t("signupFormQC"),
                  value: "QC",
                },
                {
                  id: "nl",
                  name: t("signupFormNL"),
                  value: "NL",
                },
                {
                  id: "pe",
                  name: t("signupFormPE"),
                  value: "PE",
                },
                {
                  id: "ns",
                  name: t("signupFormNS"),
                  value: "NS",
                },
                {
                  id: "nb",
                  name: t("signupFormNB"),
                  value: "NB",
                },
                {
                  id: "mb",
                  name: t("signupFormMB"),
                  value: "MB",
                },
                {
                  id: "sk",
                  name: t("signupFormSK"),
                  value: "SK",
                },
                {
                  id: "ab",
                  name: t("signupFormAB"),
                  value: "AB",
                },
                {
                  id: "bc",
                  name: t("signupFormBC"),
                  value: "BC",
                },
                {
                  id: "yt",
                  name: t("signupFormYT"),
                  value: "YT",
                },
                {
                  id: "nt",
                  name: t("signupFormNT"),
                  value: "NT",
                },
                {
                  id: "nu",
                  name: t("signupFormNU"),
                  value: "NU",
                },
              ]}
              onChange={setProvince}
            />

            <fieldset className="mb-10">
              <legend className="block leading-tight text-sm font-body mb-5px font-bold">
                {t("signupFormGender")}{" "}
                <p className="inline text-form-input-gray text-sm">
                  {t("signupFormOptional")}
                </p>
              </legend>
              <RadioField
                label={t("signupFormWoman")}
                id="genderWoman"
                name="gender"
                onChange={(checked, name, value) => setGender(value)}
                checked={gender === "woman"}
                value="woman"
              />
              <RadioField
                label={t("signupFormMan")}
                id="genderMan"
                name="gender"
                onChange={(checked, name, value) => setGender(value)}
                checked={gender === "man"}
                value="man"
              />
              <OptionalTextField
                controlLabel={t("signupFormOther")}
                textFieldName="genderOtherDetails"
                textFieldId="genderOtherDetails"
                textFieldLabel={t("signupFormOtherDetails")}
                controlName="gender"
                controlId="genderOther"
                controlValue="other"
                controlType="radiofield"
                onControlChange={(checked, name, value) => {
                  setGender(value);
                  setGenderOtherDetails("");
                }}
                onTextFieldChange={setGenderOtherDetails}
                textFieldValue={genderOtherDetails}
                checked={gender === "other"}
                textLabelBold={true}
              />
              <RadioField
                label={t("signupFormPreferNotAnswer")}
                id="genderPreferNotToAnswer"
                name="gender"
                onChange={(checked, name, value) => setGender(value)}
                checked={gender === "preferNotToAnswer"}
                value="preferNotToAnswer"
              />
            </fieldset>

            <fieldset className="mb-10">
              <legend className="block leading-tight text-sm font-body mb-5px font-bold">
                {t("signupFormIndigenous")}{" "}
                <p className="inline text-form-input-gray text-sm">
                  {t("signupFormOptional")}
                </p>
              </legend>
              <RadioField
                label={t("signupFormFirstNations")}
                id="nativeStatusFirstNations"
                checked={nativeStatus === "firstNations"}
                onChange={(checked, name, value) => {
                  setNativeStatus(value);
                }}
                name="nativeStatus"
                value="firstNations"
              />
              <RadioField
                label={t("signupFormMetis")}
                id="nativeStatusMétis"
                checked={nativeStatus === "métis"}
                onChange={(checked, name, value) => {
                  setNativeStatus(value);
                }}
                name="nativeStatus"
                value="métis"
              />
              <RadioField
                label={t("signupFormInuit")}
                id="nativeStatusInuit"
                checked={nativeStatus === "inuit"}
                onChange={(checked, name, value) => {
                  setNativeStatus(value);
                }}
                name="nativeStatus"
                value="inuit"
              />
              <RadioField
                label={t("signupFormDoesNotApply")}
                id="nativeStatusNA"
                checked={nativeStatus === "N/A"}
                onChange={(checked, name, value) => {
                  setNativeStatus(value);
                }}
                name="nativeStatus"
                value="N/A"
              />
              <RadioField
                label={t("signupFormPreferNotAnswer")}
                id="nativeStatusPreferNotToAnswer"
                checked={nativeStatus === "preferNotToAnswer"}
                onChange={(checked, name, value) => {
                  setNativeStatus(value);
                }}
                name="nativeStatus"
                value="preferNotToAnswer"
              />
            </fieldset>

            <fieldset className="mb-10">
              <legend className="block leading-tight text-sm font-body mb-5px font-bold">
                {t("signupFormDisability")}{" "}
                <p className="inline text-form-input-gray text-sm">
                  {t("signupFormOptional")}
                </p>
              </legend>
              <OptionalTextField
                controlLabel={t("signupFormYes")}
                textFieldName="disabilityDetails"
                textFieldId="disabilityDetails"
                textFieldLabel={t("signupFormDisability")}
                textLabelBold={true}
                multiText={true}
                checked={disability === "yes"}
                onControlChange={(checked, name, value) => {
                  setDisability(value);
                  setDisabilityDetails("");
                }}
                onTextFieldChange={setDisabilityDetails}
                textFieldValue={disabilityDetails}
                controlName="disability"
                controlId="disabilityYes"
                controlValue="yes"
                controlType="radiofield"
              />
              <RadioField
                label={t("signupFormNo")}
                id="disabilityNo"
                onChange={(checked, name, value) => setDisability(value)}
                checked={disability === "no"}
                name="disability"
                value="no"
              />
              <RadioField
                label={t("signupFormNotSure")}
                id="disabilityNotSure"
                onChange={(checked, name, value) => setDisability(value)}
                checked={disability === "notSure"}
                name="disability"
                value="notSure"
              />
              <RadioField
                label={t("signupFormPreferNotAnswer")}
                id="disabilityPreferNotToAnswer"
                onChange={(checked, name, value) => setDisability(value)}
                checked={disability === "preferNotToAnswer"}
                name="disability"
                value="preferNotToAnswer"
              />
            </fieldset>

            <fieldset className="mb-10">
              <legend className="block leading-tight text-sm font-body mb-5px font-bold">
                {t("signupFormMinority")}{" "}
                <p className="inline text-form-input-gray text-sm">
                  {t("signupFormOptional")}
                </p>
              </legend>
              <CheckBox
                label={t("signupFormArab")}
                id="minorityGroupArab"
                name="minorityGroup"
                checked={minority.includes("arab")}
                onChange={handlerMinorityOnChange}
                value="arab"
              />
              <CheckBox
                label={t("signupFormBlack")}
                id="minorityGroupBlack"
                name="minorityGroup"
                checked={minority.includes("black")}
                onChange={handlerMinorityOnChange}
                value="black"
              />
              <CheckBox
                label={t("signupFormChinese")}
                id="minorityGroupChinese"
                name="minorityGroup"
                checked={minority.includes("chinese")}
                onChange={handlerMinorityOnChange}
                value="chinese"
              />
              <CheckBox
                label={t("signupFormFilipino")}
                id="minorityGroupFilipino"
                name="minorityGroup"
                checked={minority.includes("filipino")}
                onChange={handlerMinorityOnChange}
                value="filipino"
              />
              <CheckBox
                label={t("signupFormJapanese")}
                id="minorityGroupJapanese"
                name="minorityGroup"
                checked={minority.includes("japanese")}
                onChange={handlerMinorityOnChange}
                value="japanese"
              />
              <CheckBox
                label={t("signupFormKorean")}
                id="minorityGroupKorean"
                name="minorityGroup"
                checked={minority.includes("korean")}
                onChange={handlerMinorityOnChange}
                value="korean"
              />
              <CheckBox
                label={t("signupFormLatinAmerican")}
                id="minorityGroupLatinAmerican"
                name="minorityGroup"
                checked={minority.includes("latinAmerican")}
                onChange={handlerMinorityOnChange}
                value="latinAmerican"
              />
              <CheckBox
                label={t("signupFormSouthAsian")}
                id="minorityGroupSouthAsian"
                name="minorityGroup"
                checked={minority.includes("southAsian")}
                onChange={handlerMinorityOnChange}
                value="southAsian"
              />
              <CheckBox
                label={t("signupFormSoutheastAsian")}
                id="minorityGroupSoutheastAsian"
                name="minorityGroup"
                checked={minority.includes("southeastAsian")}
                onChange={handlerMinorityOnChange}
                value="southeastAsian"
              />
              <CheckBox
                label={t("signupFormWestAsian")}
                id="minorityGroupWestAsian"
                name="minorityGroup"
                checked={minority.includes("westAsian")}
                onChange={(checked, name, value) => {
                  // pop value from list
                  if (checked) {
                    setMinority(minority.splice(minority.indexOf(value), 1));
                  } else {
                    setMinority([...minority, value]);
                  }
                }}
                value="westAsian"
              />
              <OptionalTextField
                controlLabel={t("signupFormOtherMinority")}
                textFieldName="minorityGroupOther"
                textFieldId="minorityGroupOtherDetails"
                textLabelBold={true}
                checked={minority.includes("other")}
                onControlChange={(checked, name, value) => {
                  // pop value from list
                  if (checked) {
                    const indexOfElement = minority.indexOf(value);
                    if (indexOfElement > -1) {
                      const newMinorityArray = [...minority];
                      newMinorityArray.splice(indexOfElement, 1);
                      setMinority(newMinorityArray);
                      setMinorityGroupOther("");
                    }
                  } else {
                    setMinority([...minority, value]);
                  }
                }}
                onTextFieldChange={setMinorityGroupOther}
                textFieldValue={minorityGroupOther}
                textFieldLabel={t("signupFormOtherMinorityDetails")}
                controlValue="other"
                controlName="minorityGroup"
                controlId="minorityGroupOther"
              />
            </fieldset>

            <fieldset className="mb-10">
              <legend className="block leading-tight text-sm font-body mb-5px font-bold">
                {t("signupFormIncome")}{" "}
                <p className="inline text-form-input-gray text-sm">
                  {t("signupFormOptional")}
                </p>
              </legend>
              <RadioField
                label={t("signupFormIncome1")}
                id="income30kLess"
                name="incomeLevel"
                checked={incomeLevel === "30kLess"}
                onChange={(checked, name, value) => setIncomeLevel(value)}
                value="30kLess"
              />
              <RadioField
                label={t("signupFormIncome2")}
                id="income60kLess"
                name="incomeLevel"
                checked={incomeLevel === "30kto60k"}
                onChange={(checked, name, value) => setIncomeLevel(value)}
                value="30kto60k"
              />
              <RadioField
                label={t("signupFormIncome3")}
                id="income100kLess"
                name="incomeLevel"
                checked={incomeLevel === "60kto100k"}
                onChange={(checked, name, value) => setIncomeLevel(value)}
                value="60kto100k"
              />
              <RadioField
                label={t("signupFormIncome4")}
                id="income150kLess"
                name="incomeLevel"
                checked={incomeLevel === "100kto150k"}
                onChange={(checked, name, value) => setIncomeLevel(value)}
                value="100kto150k"
              />
              <RadioField
                label={t("signupFormIncome5")}
                id="income150kMore"
                name="incomeLevel"
                checked={incomeLevel === "150kMore"}
                onChange={(checked, name, value) => setIncomeLevel(value)}
                value="150kMore"
              />
              <RadioField
                label={t("signupFormPreferNotAnswer")}
                id="incomePreferNotToAnswer"
                name="incomeLevel"
                checked={incomeLevel === "preferNotToAnswer"}
                onChange={(checked, name, value) => setIncomeLevel(value)}
                value="preferNotToAnswer"
              />
            </fieldset>

            {agreeToConditionsError ? (
              <ErrorLabel message={agreeToConditionsError} />
            ) : undefined}
            <CheckBox
              className="mb-20"
              checked={agreeToConditions === "yes"}
              onChange={(checked, name, value) => {
                if (checked) {
                  setAgreeToConditions("");
                } else {
                  setAgreeToConditions(value);
                }
              }}
              label={t("signupFormCheckBox")}
              id="agreeToConditions"
              name="agreeToConditions"
              value="yes"
            />
          </div>
          <a
            className="block font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font underline my-10"
            href={t("reportAProblemPrivacyStatementLink")}
          >
            {t("signupPrivacy")}
          </a>
          <ActionButton
            id="submit"
            className="rounded w-72"
            type="submit"
            dataCy="report-a-problem-submit"
            dataTestId="report-a-problem-submit"
          >
            {t("reportAProblemSubmit")}
          </ActionButton>
          <ActionButton
            id="reset"
            custom="block font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font underline my-10"
            type="reset"
          >
            {t("signupClear")}
          </ActionButton>
        </form>
      </section>
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
