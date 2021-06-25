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
import { OptionalListField } from "../components/molecules/OptionalListField";

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
              error.message = t("errorRequired");
              break;
            case "string.email":
              error.message = t("errorEmail");
            default:
              break;
          }
        });
        return errors;
      }),
    yearOfBirth: Joi.number()
      .integer()
      .min(1850)
      .max(new Date().getFullYear() - 18)
      .required()
      .error((errors) => {
        errors.forEach((error) => {
          switch (error.code) {
            case "any.required":
              error.message = t("errorRequired");
              break;
            case "number.integer":
              error.message = t("errorInt");
              break;
            case "number.min":
              error.message = t("errorMinMax");
              break;
            case "number.max":
              error.message = t("errorMustBe18");
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
              error.message = t("errorRequired");
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
              error.message = t("errorDropdown");
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
              error.message = t("errorTerms");
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

  const [minority, setMinority] = useState("");
  const [minorityGroup, setMinorityGroup] = useState([]);
  const [minorityGroupOther, setMinorityGroupOther] = useState("");

  const [incomeLevel, setIncomeLevel] = useState("");

  const [agreeToConditions, setAgreeToConditions] = useState("");
  const [agreeToConditionsError, setAgreeToConditionsError] = useState("");

  const [errorBoxErrors, setErrorBoxErrors] = useState([]);

  const [errorBoxText, setErrorBoxText] = useState("");

  const handlerMinorityGroupOnChange = (checked, name, value) => {
    // pop value from list
    if (checked) {
      const indexOfElement = minorityGroup.indexOf(value);
      if (indexOfElement > -1) {
        const newMinorityGroupArray = [...minorityGroup];
        newMinorityGroupArray.splice(indexOfElement, 1);
        setMinorityGroup(newMinorityGroupArray);
        if (value === "other") {
          setMinorityGroupOther("");
        }
      }
    } else {
      setMinorityGroup([...minorityGroup, value]);
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
    setMinority("");
    setMinorityGroup([]);
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
      minorityGroup,
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
            text: `${t("error")} ${errorNumber}: ` + message,
          };
        }
        // override the error message if the type of error is because the field is empty
        else if (type.includes("empty")) {
          prevErrors[field] = {
            id: field,
            number: prevErrors[field].number,
            text: `${t("error")} ${prevErrors[field].number}: ` + message,
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
        `${t("errorSubmit1")} ${errorsList.length} ${t("errorSubmit2")}`
      );
      document.getElementById("error-box").scrollIntoView();
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
        await push("/thankyou");
      } else if (response.status === 400) {
        await setErrorBoxText(t("errorRegistered"));
      } else {
        await setErrorBoxText(t("errorUnknown"));
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
        <title>{t("scLabsSignup")}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="dcterms.title" content={t("scLabsSignup")} />
        <meta
          name="dcterms.language"
          content={props.locale === "en" ? "eng" : "fra"}
        />
        <meta name="dcterms.creator" content={t("creator")} />
        <meta name="dcterms.accessRights" content="2" />
      </Head>
      <section className="layout-container mb-2 mt-12 xl:bg-lightbulb-right-img xl:bg-right xl:bg-no-repeat">
        {errorBoxText ? (
          <ErrorBox text={errorBoxText} errors={errorBoxErrors} />
        ) : undefined}
        <div className="xl:w-2/3 ">
          <h1 className="mb-12" id="pageMainTitle">
            {t("signupTitle")}
          </h1>
          <p className="mb-10">{t("signupP1")}</p>
          <h2 className="mb-5">{t("signupTitle2")}</h2>
          <ul className="list-disc list-outside pl-2 mb-10 font-body ml-3">
            <li className="mb-3">{t("signupP2.1")}</li>
            <li className="mb-3">{t("signupP2.2")}</li>
            <li className="mb-3">{t("signupP2.3")}</li>
            <li>{t("signupP2.4")}</li>
          </ul>
          <h3 className="mb-5">{t("signupTitle3")}</h3>
          <p className="mb-3">{t("signupP3")}</p>
          <ul className="list-disc list-outside pl-2 mb-5 font-body ml-3">
            <li>{t("email")}</li>
            <li>{t("year")}</li>
            <li>{t("language")}</li>
          </ul>
          <p className="mb-3">{t("signupP4")}</p>
          <ul className="list-disc list-outside pl-2 mb-5 font-body ml-3">
            <li>{t("province")}</li>
            <li>{t("gender")}</li>
            <li>{t("indigenous")}</li>
            <li>{t("disabilities")}</li>
            <li>{t("minority")}</li>
            <li>{t("income")}</li>
          </ul>
        </div>
      </section>
      <section className="layout-container">
        <form
          data-gc-analytics-formname="ESDC:ServiceCanadaLabsSign-up"
          data-gc-analytics-collect='[{"value":"input,select","emptyField":"N/A"}]'
          onSubmit={handleSubmit}
          onReset={handlerClearData}
          noValidate
        >
          <a
            className="block font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font underline mb-5"
            href={t("reportAProblemPrivacyStatementLink")}
          >
            {t("privacy")}
          </a>
          <ActionButton
            id="reset"
            custom="block font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font underline mb-5"
            type="reset"
          >
            {t("clear")}
          </ActionButton>
          <div className="max-w-600px">
            <TextField
              className="mb-10"
              label={t("email")}
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
              label={t("formYear")}
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
            <fieldset className="mb-6">
              <legend className="block leading-tight text-sm font-body mb-5 font-bold">
                <b className="text-error-border-red">*</b> {t("formLang")}{" "}
                <b className="text-error-border-red">{t("required")}</b>
              </legend>
              {languageError ? (
                <ErrorLabel message={languageError} />
              ) : undefined}
              <RadioField
                label={t("en")}
                id="languageEn"
                name="language"
                value="en"
                error={languageError !== ""}
                checked={language === "en"}
                onChange={(checked, name, value) => setLanguage(value)}
                required
              />
              <RadioField
                label={t("fr")}
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
              label={t("prov")}
              className="mb-10"
              id="province"
              boldLabel
              name="province"
              value={province}
              error={provinceError}
              options={[
                {
                  id: "on",
                  name: t("ON"),
                  value: "ON",
                },
                {
                  id: "qc",
                  name: t("QC"),
                  value: "QC",
                },
                {
                  id: "nl",
                  name: t("NL"),
                  value: "NL",
                },
                {
                  id: "pe",
                  name: t("PE"),
                  value: "PE",
                },
                {
                  id: "ns",
                  name: t("NS"),
                  value: "NS",
                },
                {
                  id: "nb",
                  name: t("NB"),
                  value: "NB",
                },
                {
                  id: "mb",
                  name: t("MB"),
                  value: "MB",
                },
                {
                  id: "sk",
                  name: t("SK"),
                  value: "SK",
                },
                {
                  id: "ab",
                  name: t("AB"),
                  value: "AB",
                },
                {
                  id: "bc",
                  name: t("BC"),
                  value: "BC",
                },
                {
                  id: "yt",
                  name: t("YT"),
                  value: "YT",
                },
                {
                  id: "nt",
                  name: t("NT"),
                  value: "NT",
                },
                {
                  id: "nu",
                  name: t("NU"),
                  value: "NU",
                },
              ]}
              onChange={setProvince}
            />

            <fieldset className="mb-6">
              <legend className="block leading-tight text-sm font-body mb-5 font-bold">
                {t("formGender")}{" "}
                <p className="inline text-form-input-gray text-sm">
                  {t("optional")}
                </p>
              </legend>
              <RadioField
                label={t("woman")}
                id="genderWoman"
                name="gender"
                onChange={(checked, name, value) => setGender(value)}
                checked={gender === "woman"}
                value="woman"
              />
              <RadioField
                label={t("man")}
                id="genderMan"
                name="gender"
                onChange={(checked, name, value) => setGender(value)}
                checked={gender === "man"}
                value="man"
              />
              <OptionalTextField
                controlLabel={t("other")}
                textFieldName="genderOtherDetails"
                textFieldId="genderOtherDetails"
                textFieldLabel={t("otherDetails")}
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
                label={t("preferNotAnswer")}
                id="genderPreferNotToAnswer"
                name="gender"
                onChange={(checked, name, value) => setGender(value)}
                checked={gender === "preferNotToAnswer"}
                value="preferNotToAnswer"
              />
            </fieldset>

            <fieldset className="mb-6">
              <legend className="block leading-tight text-sm font-body mb-5 font-bold">
                {t("formIndigenous")}{" "}
                <p className="inline text-form-input-gray text-sm">
                  {t("optional")}
                </p>
              </legend>
              <RadioField
                label={t("FN")}
                id="nativeStatusFirstNations"
                checked={nativeStatus === "firstNations"}
                onChange={(checked, name, value) => {
                  setNativeStatus(value);
                }}
                name="nativeStatus"
                value="firstNations"
              />
              <RadioField
                label={t("metis")}
                id="nativeStatusMétis"
                checked={nativeStatus === "métis"}
                onChange={(checked, name, value) => {
                  setNativeStatus(value);
                }}
                name="nativeStatus"
                value="métis"
              />
              <RadioField
                label={t("inuit")}
                id="nativeStatusInuit"
                checked={nativeStatus === "inuit"}
                onChange={(checked, name, value) => {
                  setNativeStatus(value);
                }}
                name="nativeStatus"
                value="inuit"
              />
              <RadioField
                label={t("doesNotApply")}
                id="nativeStatusNA"
                checked={nativeStatus === "N/A"}
                onChange={(checked, name, value) => {
                  setNativeStatus(value);
                }}
                name="nativeStatus"
                value="N/A"
              />
              <RadioField
                label={t("preferNotAnswer")}
                id="nativeStatusPreferNotToAnswer"
                checked={nativeStatus === "preferNotToAnswer"}
                onChange={(checked, name, value) => {
                  setNativeStatus(value);
                }}
                name="nativeStatus"
                value="preferNotToAnswer"
              />
            </fieldset>

            <fieldset className="mb-6">
              <legend className="block leading-tight text-sm font-body mb-5 font-bold">
                {t("disability")}{" "}
                <p className="inline text-form-input-gray text-sm">
                  {t("optional")}
                </p>
              </legend>
              <OptionalTextField
                controlLabel={t("yes")}
                textFieldName="disabilityDetails"
                textFieldId="disabilityDetails"
                textFieldLabel={t("yesDetails")}
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
                label={t("no")}
                id="disabilityNo"
                onChange={(checked, name, value) => setDisability(value)}
                checked={disability === "no"}
                name="disability"
                value="no"
              />
              <RadioField
                label={t("notSure")}
                id="disabilityNotSure"
                onChange={(checked, name, value) => setDisability(value)}
                checked={disability === "notSure"}
                name="disability"
                value="notSure"
              />
              <RadioField
                label={t("preferNotAnswer")}
                id="disabilityPreferNotToAnswer"
                onChange={(checked, name, value) => setDisability(value)}
                checked={disability === "preferNotToAnswer"}
                name="disability"
                value="preferNotToAnswer"
              />
            </fieldset>

            <fieldset className="mb-6">
              <legend className="block leading-tight text-sm font-body mb-5 font-bold">
                {t("formMinority")}{" "}
                <p className="inline text-form-input-gray text-sm">
                  {t("optional")}
                </p>
              </legend>
              <OptionalListField
                controlName="minority"
                controlId="minorityYes"
                controlLabel={t("yes")}
                controlValue="yes"
                controlType="radiofield"
                checked={minority === "yes"}
                onControlChange={(checked, name, value) => setMinority(value)}
                listLabel={t("minorityYesDetails")}
              >
                <CheckBox
                  label={t("black")}
                  id="minorityGroupBlack"
                  name="minorityGroup"
                  checked={minorityGroup.includes("black")}
                  onChange={handlerMinorityGroupOnChange}
                  value="black"
                  className="mb-7"
                />
                <CheckBox
                  label={t("chinese")}
                  id="minorityGroupChinese"
                  name="minorityGroup"
                  checked={minorityGroup.includes("chinese")}
                  onChange={handlerMinorityGroupOnChange}
                  value="chinese"
                  className="mb-7"
                />
                <CheckBox
                  label={t("filipino")}
                  id="minorityGroupFilipino"
                  name="minorityGroup"
                  checked={minorityGroup.includes("filipino")}
                  onChange={handlerMinorityGroupOnChange}
                  value="filipino"
                  className="mb-7"
                />
                <CheckBox
                  label={t("japanese")}
                  id="minorityGroupJapanese"
                  name="minorityGroup"
                  checked={minorityGroup.includes("japanese")}
                  onChange={handlerMinorityGroupOnChange}
                  value="japanese"
                  className="mb-7"
                />
                <CheckBox
                  label={t("korean")}
                  id="minorityGroupKorean"
                  name="minorityGroup"
                  checked={minorityGroup.includes("korean")}
                  onChange={handlerMinorityGroupOnChange}
                  value="korean"
                  className="mb-7"
                />
                <CheckBox
                  label={t("SA")}
                  id="minorityGroupSouthAsian"
                  name="minorityGroup"
                  checked={minorityGroup.includes("southAsian")}
                  onChange={handlerMinorityGroupOnChange}
                  value="southAsian"
                  className="mb-10 lg:mb-7"
                />
                <CheckBox
                  label={t("SEA")}
                  id="minorityGroupSoutheastAsian"
                  name="minorityGroup"
                  checked={minorityGroup.includes("southeastAsian")}
                  onChange={handlerMinorityGroupOnChange}
                  value="southeastAsian"
                  className="mb-10 lg:mb-7"
                />
                <CheckBox
                  label={t("nonWhiteAAA")}
                  id="minorityGroupNonWhiteAAA"
                  name="minorityGroup"
                  checked={minorityGroup.includes("nonWhiteAAA")}
                  onChange={handlerMinorityGroupOnChange}
                  value="nonWhiteAAA"
                  className="mb-10 lg:mb-7"
                />
                <CheckBox
                  label={t("LA")}
                  id="minorityGroupLatinAmerican"
                  name="minorityGroup"
                  checked={minorityGroup.includes("latinAmerican")}
                  onChange={handlerMinorityGroupOnChange}
                  value="latinAmerican"
                  className="mb-10 lg:mb-7"
                />
                <CheckBox
                  label={t("mixedOrigin")}
                  id="minorityGroupMixedOrigin"
                  name="minorityGroup"
                  checked={minorityGroup.includes("mixedOrigin")}
                  onChange={handlerMinorityGroupOnChange}
                  value="mixedOrigin"
                  className="mb-7"
                />
                <OptionalTextField
                  controlLabel={t("otherMinority")}
                  textFieldName="minorityGroupOther"
                  textFieldId="minorityGroupOtherDetails"
                  textLabelBold={true}
                  checked={minorityGroup.includes("other")}
                  onControlChange={handlerMinorityGroupOnChange}
                  onTextFieldChange={setMinorityGroupOther}
                  textFieldValue={minorityGroupOther}
                  textFieldLabel={t("otherMinorityDetails")}
                  controlValue="other"
                  controlName="minorityGroup"
                  controlId="minorityGroupOther"
                />
              </OptionalListField>
              <RadioField
                label={t("no")}
                id="minorityNo"
                name="minority"
                value="no"
                checked={minority === "no"}
                onChange={(checked, name, value) => setMinority(value)}
              />
              <RadioField
                label={t("preferNotAnswer")}
                id="minorityPreferNotToAnswer"
                onChange={(checked, name, value) => setMinority(value)}
                checked={minority === "preferNotToAnswer"}
                name="minority"
                value="preferNotToAnswer"
              />
            </fieldset>

            <fieldset className="mb-6">
              <legend className="block leading-tight text-sm font-body mb-5 font-bold">
                {t("formIncome")}{" "}
                <p className="inline text-form-input-gray text-sm">
                  {t("optional")}
                </p>
              </legend>
              <RadioField
                label={t("income1")}
                id="income30kLess"
                name="incomeLevel"
                checked={incomeLevel === "30kLess"}
                onChange={(checked, name, value) => setIncomeLevel(value)}
                value="30kLess"
              />
              <RadioField
                label={t("income2")}
                id="income60kLess"
                name="incomeLevel"
                checked={incomeLevel === "30kto60k"}
                onChange={(checked, name, value) => setIncomeLevel(value)}
                value="30kto60k"
              />
              <RadioField
                label={t("income3")}
                id="income100kLess"
                name="incomeLevel"
                checked={incomeLevel === "60kto100k"}
                onChange={(checked, name, value) => setIncomeLevel(value)}
                value="60kto100k"
              />
              <RadioField
                label={t("income4")}
                id="income150kLess"
                name="incomeLevel"
                checked={incomeLevel === "100kto150k"}
                onChange={(checked, name, value) => setIncomeLevel(value)}
                value="100kto150k"
              />
              <RadioField
                label={t("income5")}
                id="income150kMore"
                name="incomeLevel"
                checked={incomeLevel === "150kMore"}
                onChange={(checked, name, value) => setIncomeLevel(value)}
                value="150kMore"
              />
              <RadioField
                label={t("preferNotAnswer")}
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
              label={t("formCheckBox")}
              id="agreeToConditions"
              name="agreeToConditions"
              value="yes"
              showRequiredLabel
            />
          </div>
          <a
            className="block font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font underline my-10"
            href={t("reportAProblemPrivacyStatementLink")}
          >
            {t("privacy")}
          </a>
          <ActionButton
            id="signup-submit"
            className="rounded w-72"
            type="submit"
            dataCy="signup-submit"
            dataTestId="signup-submit"
          >
            {t("reportAProblemSubmit")}
          </ActionButton>
          <ActionButton
            id="reset-bottom"
            custom="block font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font underline my-10"
            type="reset"
          >
            {t("clear")}
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
