/* istanbul ignore file */

import Head from "next/head";
import { useEffect, useState } from "react";
import Joi from "joi";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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
import Link from "next/link";
import aemServiceInstance from "../services/aemServiceInstance";

// TODO
//  - fix bug with error messages not showing custom error message [x]
//  - create error box component that scrolls down to the field when there is an error [x]
//  - create thank you page
//  - create translation strings
//  - write cypress tests
export default function Signup(props) {
  const { t } = useTranslation("common");
  const { push } = useRouter();
  const [pageData] = useState(props.pageData.item);
  const fr = props.locale === "fr";

  const [formField] = useState(
    props.locale === "en"
      ? pageData.scFragments[0].scLabFormFields.en
      : pageData.scFragments[0].scLabFormFields.fr
  );

  // get the options for the year of birth ranges
  const minYear = new Date().getFullYear() - 18;
  const oldestYear = minYear + 18 - 85;
  let yearOptions = [
    {
      id: `${t("after").toLowerCase()}${minYear}`,
      value: `${t("after")} ${minYear}`,
    },
  ];
  for (let i = minYear - 3; i >= oldestYear; i -= 4) {
    yearOptions.push({
      id: `${i}-${i + 3}`,
      value: `${i}-${i + 3}`,
    });
  }
  yearOptions.push({
    id: `${t("before").toLowerCase()}${oldestYear}`,
    value: `${t("before")} ${oldestYear}`,
  });

  // Joi form validation schema. Only required fields are validated
  const formSchema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .error((errors) => {
        errors.forEach((error) => {
          switch (error.code) {
            case "any.required":
              error.message = formField.errorMsg.emailRequired;
              break;
            case "string.email":
              error.message = formField.errorMsg.invalidEmail;
            default:
              break;
          }
        });
        return errors;
      }),
    confirmEmail: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .equal(Joi.ref("email"))
      .error((errors) => {
        errors.forEach((error) => {
          switch (error.code) {
            case "any.required":
              error.message = formField.errorMsg.emailRequired;
              break;
            case "string.email":
              error.message = formField.errorMsg.invalidEmail;
            case "any.only":
              error.message = formField.errorMsg.emailMustMatch;
            default:
              break;
          }
        });
        return errors;
      }),
    yearOfBirthRange: Joi.string()
      .invalid(yearOptions[0].id)
      .required()
      .error((errors) => {
        errors.forEach((error) => {
          switch (error.code) {
            case "any.required":
              error.message = formField.errorMsg.yearOfBirthRequired;
              break;
            case "any.invalid":
              error.message = formField.errorMsg.age;
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
              error.message = formField.errorMsg.language;
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
    disability: Joi.string(),
    disabilityDetails: Joi.string()
      .when("disability", { is: "yes", then: Joi.string().trim().required() })
      .error((errors) => {
        errors.forEach((error) => {
          switch (error.code) {
            case "any.required":
              error.message = t("errorDisability");
              break;
            case "string.empty":
              error.message = t("errorDisability");
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
              error.message = formField.errorMsg.agreeToConditions;
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

  const [confirmEmail, setConfirmEmail] = useState("");
  const [confirmEmailError, setConfirmEmailError] = useState("");

  const [yearOfBirthRange, setYearOfBirthRange] = useState("");
  const [yearOfBirthRangeError, setYearOfBirthRangeError] = useState("");

  const [language, setLanguage] = useState("");
  const [languageError, setLanguageError] = useState("");

  const [province, setProvince] = useState("");
  const [provinceError, setProvinceError] = useState("");

  const [gender, setGender] = useState("");
  const [genderOtherDetails, setGenderOtherDetails] = useState("");

  const [nativeStatus, setNativeStatus] = useState("");

  const [disability, setDisability] = useState("");
  const [disabilityDetails, setDisabilityDetails] = useState("");
  const [disabilityError, setDisabilityError] = useState("");

  const [minority, setMinority] = useState("");
  const [minorityGroup, setMinorityGroup] = useState([]);
  const [minorityGroupOther, setMinorityGroupOther] = useState("");

  const [incomeLevel, setIncomeLevel] = useState("");
  const [publicServant, setPublicServant] = useState("");

  const [agreeToConditions, setAgreeToConditions] = useState("");
  const [agreeToConditionsError, setAgreeToConditionsError] = useState("");

  const [globalErrorText, setGlobalErrorText] = useState("");

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
    setConfirmEmailError("");
    setLanguageError("");
    setYearOfBirthRangeError("");
    setProvinceError("");
    setDisabilityError("");
    setAgreeToConditionsError("");

    setEmail("");
    setConfirmEmail("");
    setYearOfBirthRange("");
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
    setPublicServant("");
    setAgreeToConditions("");
    sessionStorage.removeItem("formData");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // clear out error values
    await setEmailError("");
    await setConfirmEmailError("");
    await setLanguageError("");
    await setYearOfBirthRangeError("");
    await setProvinceError("");
    await setDisabilityError("");
    await setAgreeToConditionsError("");

    // compile data into one object
    const formData = {
      email,
      confirmEmail,
      yearOfBirthRange,
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
      publicServant,
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
        confirmEmail: setConfirmEmailError,
        language: setLanguageError,
        yearOfBirthRange: setYearOfBirthRangeError,
        province: setProvinceError,
        disabilityDetails: setDisabilityError,
        agreeToConditions: setAgreeToConditionsError,
      };
      // get  the details of the error
      const { details } = error;

      // extract the errors from the Joi schema details object
      // in my view extracting errors and then setting them is a less expensive
      // then setting immediately
      const errors = details.reduce((prevErrors, { path, message, type }) => {
        const field = path[0];
        if (!prevErrors[field]) {
          prevErrors[field] = {
            id: field,
            text:
              `${formField.errorMsg.error} ${fr ? "\u00A0:" : ":"} ` + message,
          };
        }
        // override the error message if the type of error is because the field is empty
        else if (type.includes("empty")) {
          prevErrors[field] = {
            id: field,
            text:
              `${formField.errorMsg.error} ${fr ? "\u00A0:" : ":"} ` + message,
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
        } else if (errors[error].id === "yearOfBirthRange") {
          errors[error].id = "yearOfBirthRange-choice";
        }
        errorsList.push(errors[error]);
      }
    } else {
      let response = await fetch("/api/check-email", {
        method: "POST",
        body: formData.email,
      });
      response = await response.json();

      if (response.message === "User exists") {
        setGlobalErrorText(formField.errorMsg.errorRegistered);
      } else if (response.message === "User does not exist") {
        sessionStorage.setItem("formData", JSON.stringify(formData));
        await push({
          pathname: "/signup-review",
        });
      } else if (response.status === 500 || 400) {
        setGlobalErrorText(formField.errorMsg.errorUnknown);
      }
    }
    // Checks if error exists
    const errorLabel = document.getElementsByClassName("error-label")[0];
    const globalError = document.getElementById("form-error");
    if (globalError)
      globalError.scrollIntoView({
        behavior: "smooth",
      });
    else if (errorLabel)
      errorLabel.parentElement.scrollIntoView({
        behavior: "smooth",
      });
  };

  useEffect(() => {
    if (props.adobeAnalyticsUrl) {
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ event: "pageLoad" });
    }
    let formData = JSON.parse(sessionStorage.getItem("formData"));
    if (formData) {
      setEmail(formData.email);
      setConfirmEmail(formData.confirmEmail);
      setYearOfBirthRange(formData.yearOfBirthRange);
      setLanguage(formData.language);
      setGender(formData.gender);
      setProvince(formData.province);
      setGenderOtherDetails(formData.genderOtherDetails);
      setNativeStatus(formData.nativeStatus);
      setDisability(formData.disability);
      setDisabilityDetails(formData.disabilityDetails);
      setMinority(formData.minority);
      setMinorityGroup(
        formData.minorityGroup === undefined ? [] : formData.minorityGroup
      );
      setMinorityGroupOther(formData.minorityGroupOther);
      setIncomeLevel(formData.incomeLevel);
      setPublicServant(formData.publicServant);
      setAgreeToConditions(formData.agreeToConditions);
    }
  }, []);

  return (
    <>
      <Layout
        locale={props.locale}
        langUrl={
          props.locale === "en" ? pageData.scPageNameFr : pageData.scPageNameEn
        }
        breadcrumbItems={[
          { text: t("siteTitle"), link: t("breadCrumbsHref1") },
          { text: t("signupInfoTitle"), link: t("breadCrumbsHref4") },
        ]}
      >
        <Head>
          {props.adobeAnalyticsUrl ? (
            <script src={props.adobeAnalyticsUrl} />
          ) : (
            ""
          )}

          {/* Primary HTML Meta Tags */}
          <title>{`${t("signupTitle")} — ${t("siteTitle")}`}</title>
          <meta name="description" content={`${t("signupMetaDescription")}`} />
          <meta name="author" content="Service Canada" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="schema.dcterms" href="http://purl.org/dc/terms/" />

          {/* DCMI Meta Tags */}
          <meta
            name="dcterms.title"
            content={`${t("signupTitle")} — ${t("siteTitle")}`}
          />
          <meta
            name="dcterms.language"
            content={props.locale === "en" ? "eng" : "fra"}
            title="ISO639-2/T"
          />
          <meta
            name="dcterms.description"
            content={`${t("signupMetaDescription")}`}
          />
          <meta
            name="dcterms.subject"
            title="gccore"
            content={t("metaSubject")}
          />
          <meta name="dcterms.creator" content="Service Canada" />
          <meta name="dcterms.accessRights" content="2" />
          <meta
            name="dcterms.service"
            content="ESDC-EDSC_SCLabs-LaboratoireSC"
          />
          <meta name="dcterms.issued" title="W3CDTF" content="2021-06-08" />
          <meta name="dcterms.modified" title="W3CDTF" content="2021-12-16" />
          <meta name="dcterms.spatial" content="Canada" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:locale" content={props.locale} />
          <meta
            property="og:url"
            content={
              "https://alpha.service.canada.ca/" +
              `${props.locale}` +
              `${t("signupRedirect")}`
            }
          />
          <meta
            property="og:title"
            content={`${t("signupTitle")} — ${t("siteTitle")}`}
          />
          <meta
            property="og:description"
            content={`${t("signupMetaDescription")}`}
          />
          <meta property="og:image" content={`${t("metaImage")}`} />
          <meta property="og:image:alt" content={`${t("siteTitle")}`} />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content={
              "https://alpha.service.canada.ca/" +
              `${props.locale}` +
              `${t("signupRedirect")}`
            }
          />
          <meta
            property="twitter:title"
            content={`${t("signupTitle")} — ${t("siteTitle")}`}
          />
          <meta name="twitter:creator" content="Service Canada" />
          <meta
            property="twitter:description"
            content={`${t("signupMetaDescription")}`}
          />
          <meta property="twitter:image" content={`${t("metaImage")}`} />
          <meta property="twitter:image:alt" content={`${t("siteTitle")}`} />
        </Head>
        <section className="layout-container mb-2 mt-12">
          <div className="xl:w-2/3">
            <h1 className="mb-12" id="pageMainTitle" tabIndex="-1">
              {props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr}
            </h1>
          </div>
        </section>
        <section className="layout-container">
          {globalErrorText ? (
            <div
              id="form-error"
              className="relative border-l-4 border-error-border-red min-h-40px my-10"
              data-cy="form-error"
              role="alert"
              aria-atomic="true"
            >
              <span className="icon-error absolute top-1 -left-2.5 bg-white" />
              <p className="font-bold ml-4 text-p mb-2 lg:text-h4">
                {globalErrorText}
              </p>
            </div>
          ) : undefined}
          <form
            data-gc-analytics-formname="ESDC|EDSC:ServiceCanadaLabsSign-up"
            onSubmit={handleSubmit}
            onReset={handlerClearData}
            noValidate
          >
            <div className="max-w-750px">
              <p className="text-sm mb-8">
                <b className="text-error-border-red mr-2" aria-hidden="true">
                  *
                </b>
                {formField.requiredInfo}
              </p>
              <TextField
                className="mb-10"
                label={formField.label.email}
                type="email"
                name="email"
                id="email"
                error={emailError}
                value={email}
                onChange={setEmail}
                boldLabel={true}
                describedby="emailDoNoInclude"
                required
                autoComplete="email"
              />
              <TextField
                className="mb-10"
                label={formField.label.confirmEmail}
                type="email"
                name="confirmEmail"
                id="confirmEmail"
                error={confirmEmailError}
                value={confirmEmail}
                onChange={setConfirmEmail}
                boldLabel={true}
                required
                autoComplete="email"
              />
              <SelectField
                label={formField.label.yearOfBirth}
                className="mb-10"
                id="yearOfBirthRange"
                boldLabel
                ignoreSort
                required
                name="yearOfBirthRange"
                value={yearOfBirthRange}
                error={yearOfBirthRangeError}
                options={yearOptions.map((value) => {
                  return {
                    id: value.id,
                    name: value.value,
                    value: value.id,
                  };
                })}
                onChange={setYearOfBirthRange}
              />
              <fieldset className="mb-6">
                <legend className="block leading-tight text-sm font-body mb-5 lg:text-p font-bold">
                  <b className="text-error-border-red" aria-hidden="true">
                    *
                  </b>{" "}
                  {formField.label.language}
                  <span className="sr-only">required</span>
                </legend>
                {languageError ? (
                  <ErrorLabel message={languageError} />
                ) : undefined}
                <RadioField
                  label={
                    fr ? formField.option.french : formField.option.english
                  }
                  id={fr ? "languageFr" : "languageEn"}
                  name="language"
                  value={fr ? "fr" : "en"}
                  error={languageError !== ""}
                  checked={fr ? language === "fr" : language === "en"}
                  onChange={(checked, name, value) => setLanguage(value)}
                />
                <RadioField
                  label={
                    fr ? formField.option.english : formField.option.french
                  }
                  id={fr ? "languageEn" : "languageFr"}
                  name="language"
                  value={fr ? "en" : "fr"}
                  error={languageError !== ""}
                  checked={fr ? language === "en" : language === "fr"}
                  onChange={(checked, name, value) => setLanguage(value)}
                />
              </fieldset>

              <SelectField
                label={formField.label.province}
                className="mb-10"
                id="province"
                boldLabel
                name="province"
                value={province}
                error={provinceError}
                options={[
                  {
                    id: "on",
                    name: formField.option.province.ON,
                    value: "ON",
                  },
                  {
                    id: "qc",
                    name: formField.option.province.QC,
                    value: "QC",
                  },
                  {
                    id: "nl",
                    name: formField.option.province.NL,
                    value: "NL",
                  },
                  {
                    id: "pe",
                    name: formField.option.province.PE,
                    value: "PE",
                  },
                  {
                    id: "ns",
                    name: formField.option.province.NS,
                    value: "NS",
                  },
                  {
                    id: "nb",
                    name: formField.option.province.NB,
                    value: "NB",
                  },
                  {
                    id: "mb",
                    name: formField.option.province.MB,
                    value: "MB",
                  },
                  {
                    id: "sk",
                    name: formField.option.province.SK,
                    value: "SK",
                  },
                  {
                    id: "ab",
                    name: formField.option.province.AB,
                    value: "AB",
                  },
                  {
                    id: "bc",
                    name: formField.option.province.BC,
                    value: "BC",
                  },
                  {
                    id: "yt",
                    name: formField.option.province.YT,
                    value: "YT",
                  },
                  {
                    id: "nt",
                    name: formField.option.province.NT,
                    value: "NT",
                  },
                  {
                    id: "nu",
                    name: formField.option.province.NU,
                    value: "NU",
                  },
                ]}
                other
                onChange={setProvince}
              />

              <fieldset className="mb-6">
                <legend className="block leading-tight text-sm lg:text-p font-body mb-5 font-bold">
                  {formField.label.gender}{" "}
                </legend>
                <RadioField
                  label={formField.option.woman}
                  id="genderWoman"
                  name="gender"
                  onChange={(checked, name, value) => setGender(value)}
                  checked={gender === "woman"}
                  value="woman"
                />
                <RadioField
                  label={formField.option.man}
                  id="genderMan"
                  name="gender"
                  onChange={(checked, name, value) => setGender(value)}
                  checked={gender === "man"}
                  value="man"
                />
                <OptionalTextField
                  controlLabel={formField.option.another}
                  textFieldName="genderOtherDetails"
                  textFieldId="genderOtherDetails"
                  textFieldLabel={formField.option.anotherDetail}
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
                  describedby="genderotherDescribedBy"
                />
                <RadioField
                  label={formField.option.preferNotAnswer}
                  id="genderPreferNotToAnswer"
                  name="gender"
                  onChange={(checked, name, value) => setGender(value)}
                  checked={gender === "preferNotToAnswer"}
                  value="preferNotToAnswer"
                />
              </fieldset>

              <fieldset className="mb-6">
                <legend className="block leading-tight text-sm lg:text-p font-body mb-5 font-bold">
                  {formField.label.indigenous}{" "}
                </legend>
                <RadioField
                  label={formField.option.firstNations}
                  id="nativeStatusFirstNations"
                  checked={nativeStatus === "firstNations"}
                  onChange={(checked, name, value) => {
                    setNativeStatus(value);
                  }}
                  name="nativeStatus"
                  value="firstNations"
                />
                <RadioField
                  label={formField.option.metis}
                  id="nativeStatusMétis"
                  checked={nativeStatus === "métis"}
                  onChange={(checked, name, value) => {
                    setNativeStatus(value);
                  }}
                  name="nativeStatus"
                  value="métis"
                />
                <RadioField
                  label={formField.option.inuk}
                  id="nativeStatusInuit"
                  checked={nativeStatus === "inuit"}
                  onChange={(checked, name, value) => {
                    setNativeStatus(value);
                  }}
                  name="nativeStatus"
                  value="inuit"
                />
                <RadioField
                  label={formField.option.notApply}
                  id="nativeStatusNA"
                  checked={nativeStatus === "N/A"}
                  onChange={(checked, name, value) => {
                    setNativeStatus(value);
                  }}
                  name="nativeStatus"
                  value="N/A"
                />
                <RadioField
                  label={formField.option.preferNotAnswer}
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
                <legend className="block leading-tight text-sm lg:text-p font-body mb-5 font-bold">
                  {formField.label.disability}{" "}
                </legend>
                <OptionalTextField
                  controlLabel={
                    formField.option.yes.charAt(0).toUpperCase() +
                    formField.option.yes.slice(1)
                  }
                  textFieldName="disabilityDetails"
                  textFieldId="disabilityDetails"
                  textFieldLabel={formField.option.assistiveTech}
                  textLabelBold={true}
                  textFieldRequired={true}
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
                  controlDataCy="btn-disability-yes"
                  textFieldDataCy="text-disability-yes"
                  error={disabilityError}
                  describedby="disabilityDetailsDescribedBy"
                />
                <RadioField
                  label={
                    formField.option.no.charAt(0).toUpperCase() +
                    formField.option.no.slice(1)
                  }
                  id="disabilityNo"
                  onChange={(checked, name, value) => setDisability(value)}
                  checked={disability === "no"}
                  name="disability"
                  value="no"
                  dataCy="btn-disability-no"
                />
                <RadioField
                  label={formField.option.notSure}
                  id="disabilityNotSure"
                  onChange={(checked, name, value) => setDisability(value)}
                  checked={disability === "notSure"}
                  name="disability"
                  value="notSure"
                />
                <RadioField
                  label={formField.option.preferNotAnswer}
                  id="disabilityPreferNotToAnswer"
                  onChange={(checked, name, value) => setDisability(value)}
                  checked={disability === "preferNotToAnswer"}
                  name="disability"
                  value="preferNotToAnswer"
                />
              </fieldset>

              <fieldset className="mb-6">
                <legend className="block leading-tight text-sm lg:text-p font-body mb-5 font-bold">
                  {formField.label.minority}{" "}
                </legend>
                <OptionalListField
                  controlName="minority"
                  controlId="minorityYes"
                  controlLabel={
                    formField.option.yes.charAt(0).toUpperCase() +
                    formField.option.yes.slice(1)
                  }
                  controlValue="yes"
                  controlType="radiofield"
                  checked={minority === "yes"}
                  onControlChange={(checked, name, value) => setMinority(value)}
                  listLabel={formField.option.minority.detail}
                >
                  <CheckBox
                    label={formField.option.minority.black}
                    id="minorityGroupBlack"
                    name="minorityGroup"
                    checked={minorityGroup.includes("black")}
                    onChange={handlerMinorityGroupOnChange}
                    value="black"
                    className="mb-7"
                  />
                  <CheckBox
                    label={formField.option.minority.chinese}
                    id="minorityGroupChinese"
                    name="minorityGroup"
                    checked={minorityGroup.includes("chinese")}
                    onChange={handlerMinorityGroupOnChange}
                    value="chinese"
                    className="mb-7"
                  />
                  <CheckBox
                    label={formField.option.minority.filipino}
                    id="minorityGroupFilipino"
                    name="minorityGroup"
                    checked={minorityGroup.includes("filipino")}
                    onChange={handlerMinorityGroupOnChange}
                    value="filipino"
                    className="mb-7"
                  />
                  <CheckBox
                    label={formField.option.minority.japanese}
                    id="minorityGroupJapanese"
                    name="minorityGroup"
                    checked={minorityGroup.includes("japanese")}
                    onChange={handlerMinorityGroupOnChange}
                    value="japanese"
                    className="mb-7"
                  />
                  <CheckBox
                    label={formField.option.minority.korean}
                    id="minorityGroupKorean"
                    name="minorityGroup"
                    checked={minorityGroup.includes("korean")}
                    onChange={handlerMinorityGroupOnChange}
                    value="korean"
                    className="mb-7"
                  />
                  <CheckBox
                    label={formField.option.minority.southAsian}
                    id="minorityGroupSouthAsian"
                    name="minorityGroup"
                    checked={minorityGroup.includes("southAsian")}
                    onChange={handlerMinorityGroupOnChange}
                    value="southAsian"
                    className={
                      props.locale === "en"
                        ? "mb-20 md:mb-12 lg:mb-7"
                        : "mb-24 md:mb-12 lg:mb-16"
                    }
                  />
                  <CheckBox
                    label={formField.option.minority.sea}
                    id="minorityGroupSoutheastAsian"
                    name="minorityGroup"
                    checked={minorityGroup.includes("southeastAsian")}
                    onChange={handlerMinorityGroupOnChange}
                    value="southeastAsian"
                    className="mb-12 md:mb-7"
                  />
                  <CheckBox
                    label={formField.option.minority.nonWhite}
                    id="minorityGroupNonWhiteAAA"
                    name="minorityGroup"
                    checked={minorityGroup.includes("nonWhiteAAA")}
                    onChange={handlerMinorityGroupOnChange}
                    value="nonWhiteAAA"
                    className={
                      props.locale === "en" ? "mb-12 md:mb-7" : "mb-16 md:mb-7"
                    }
                  />
                  <CheckBox
                    label={formField.option.minority.latinAmerican}
                    id="minorityGroupLatinAmerican"
                    name="minorityGroup"
                    checked={minorityGroup.includes("latinAmerican")}
                    onChange={handlerMinorityGroupOnChange}
                    value="latinAmerican"
                    className="mb-16 md:mb-7"
                  />
                  <CheckBox
                    label={formField.option.minority.mixedOrigin}
                    id="minorityGroupMixedOrigin"
                    name="minorityGroup"
                    checked={minorityGroup.includes("mixedOrigin")}
                    onChange={handlerMinorityGroupOnChange}
                    value="mixedOrigin"
                    className="mb-12 md:mb-7"
                  />
                  <OptionalTextField
                    controlLabel={formField.option.minority.another}
                    textFieldName="minorityGroupOther"
                    textFieldId="minorityGroupOtherDetails"
                    textLabelBold={true}
                    checked={minorityGroup.includes("other")}
                    onControlChange={handlerMinorityGroupOnChange}
                    onTextFieldChange={setMinorityGroupOther}
                    textFieldValue={minorityGroupOther}
                    textFieldLabel={formField.option.minority.anotherDetail}
                    controlValue="other"
                    controlName="minorityGroup"
                    controlId="minorityGroupOther"
                    describedby="minorityGroupDescribedBy"
                  />
                </OptionalListField>
                <RadioField
                  label={
                    formField.option.no.charAt(0).toUpperCase() +
                    formField.option.no.slice(1)
                  }
                  id="minorityNo"
                  name="minority"
                  value="no"
                  checked={minority === "no"}
                  onChange={(checked, name, value) => setMinority(value)}
                />
                <RadioField
                  label={formField.option.preferNotAnswer}
                  id="minorityPreferNotToAnswer"
                  onChange={(checked, name, value) => setMinority(value)}
                  checked={minority === "preferNotToAnswer"}
                  name="minority"
                  value="preferNotToAnswer"
                />
              </fieldset>

              <fieldset className="mb-6">
                <legend className="block leading-tight text-sm lg:text-p font-body mb-5 font-bold">
                  {formField.label.income}{" "}
                </legend>
                <RadioField
                  label={formField.option.income1}
                  id="income30kLess"
                  name="incomeLevel"
                  checked={incomeLevel === "30kLess"}
                  onChange={(checked, name, value) => setIncomeLevel(value)}
                  value="30kLess"
                />
                <RadioField
                  label={formField.option.income2}
                  id="income60kLess"
                  name="incomeLevel"
                  checked={incomeLevel === "30kto60k"}
                  onChange={(checked, name, value) => setIncomeLevel(value)}
                  value="30kto60k"
                />
                <RadioField
                  label={formField.option.income3}
                  id="income100kLess"
                  name="incomeLevel"
                  checked={incomeLevel === "60kto100k"}
                  onChange={(checked, name, value) => setIncomeLevel(value)}
                  value="60kto100k"
                />
                <RadioField
                  label={formField.option.income4}
                  id="income150kLess"
                  name="incomeLevel"
                  checked={incomeLevel === "100kto150k"}
                  onChange={(checked, name, value) => setIncomeLevel(value)}
                  value="100kto150k"
                />
                <RadioField
                  label={formField.option.income5}
                  id="income150kMore"
                  name="incomeLevel"
                  checked={incomeLevel === "150kMore"}
                  onChange={(checked, name, value) => setIncomeLevel(value)}
                  value="150kMore"
                />
                <RadioField
                  label={formField.option.preferNotAnswer}
                  id="incomePreferNotToAnswer"
                  name="incomeLevel"
                  checked={incomeLevel === "preferNotToAnswer"}
                  onChange={(checked, name, value) => setIncomeLevel(value)}
                  value="preferNotToAnswer"
                />
              </fieldset>

              <fieldset className="mb-16">
                <legend className="block leading-tight text-sm lg:text-p font-body mb-5 font-bold">
                  {formField.label.publicServant}{" "}
                </legend>
                <RadioField
                  label={
                    formField.option.yes.charAt(0).toUpperCase() +
                    formField.option.yes.slice(1)
                  }
                  id="publicServantYes"
                  name="publicServant"
                  checked={publicServant === "yes"}
                  onChange={(checked, name, value) => setPublicServant(value)}
                  value="yes"
                />
                <RadioField
                  label={
                    formField.option.no.charAt(0).toUpperCase() +
                    formField.option.no.slice(1)
                  }
                  id="publicServantNo"
                  name="publicServant"
                  checked={publicServant === "no"}
                  onChange={(checked, name, value) => setPublicServant(value)}
                  value="no"
                />
              </fieldset>

              <div>
                {agreeToConditionsError ? (
                  <ErrorLabel message={agreeToConditionsError} />
                ) : undefined}
                <CheckBox
                  className="h-187px sm:h-32 xxs:mb-6 xs:mb-0 font-bold"
                  bolded={true}
                  checked={agreeToConditions === "yes"}
                  onChange={(checked, name, value) => {
                    if (checked) {
                      setAgreeToConditions("");
                    } else {
                      setAgreeToConditions(value);
                    }
                  }}
                  label={formField.agreeToConditions}
                  id="agreeToConditions"
                  name="agreeToConditions"
                  value="yes"
                  showRequiredLabel
                  required
                />
              </div>
            </div>
            <Link href={formField.privacyLink} locale={props.locale}>
              <a className="block font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font underline mt-28 sm:mt-0 mb-10 text-sm lg:text-p">
                {formField.privacy}
              </a>
            </Link>
            <ActionButton
              id="signup-submit"
              className="rounded xs:w-72 my-6 mr-10 text-base py-2"
              type="submit"
              dataCy="signup-submit"
              dataTestId="signup-submit"
              analyticsTracking
            >
              {formField.submit}
            </ActionButton>
            <ActionButton
              id="reset-bottom"
              className="rounded xs:w-fit py-2 bg-[#EAEBED] text-base text-custom-blue-text focus:ring-inset focus:ring-2 focus:ring-black hover:bg-details-button-hover-gray text-center border-0"
              secondary
              custom=""
              type="reset"
              onClick={() => {
                setProvince("");
              }}
            >
              {formField.clearForm}
            </ActionButton>
          </form>
        </section>
      </Layout>
      {props.adobeAnalyticsUrl ? (
        <script type="text/javascript">_satellite.pageBottom()</script>
      ) : (
        ""
      )}
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  const { data } = await aemServiceInstance.getFragment("signupQuery");

  return {
    props: {
      locale: locale,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL,
      ...(await serverSideTranslations(locale, ["common"])),
      pageData: data.scLabsPagev1ByPath,
    },
  };
};
