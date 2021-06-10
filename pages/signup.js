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

// Joi form validation schema. Only required fields are validated
const formSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .error((errors) => {
      errors.forEach((error) => {
        switch (error.code) {
          case "any.required":
            error.message = "This field is required";
            break;
          case "string.email":
            error.message = "Must be a valid email";
            break;
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
            error.message = "This field is required";
            break;
          case "number.integer":
            error.message = "This field must be an integer";
            break;
          case "number.min":
            error.message = "This field must be a valid birth year";
            break;
          case "number.max":
            error.message = "This field must be a valid birth year";
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
            error.message = "This field is required";
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
            error.message = "Use the dropdown to select a valid value";
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
            error.message = "You must agree to conditions before sign up";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
});

export default function Signup(props) {
  const { t } = useTranslation("common");
  const { asPath, push } = useRouter();

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
            text: `Error ${errorNumber}: ` + message,
          };
        }
        // override the error message if the type of error is because the field is empty
        else if (type.includes("empty")) {
          prevErrors[field] = {
            id: field,
            number: prevErrors[field].number,
            text: `Error ${prevErrors[field].number}: ` + message,
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
        `The form could not be submitted because ${errorsList.length} errors were found`
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
        await setErrorBoxText(
          "It looks like you have previously registered with us. Check your inbox for the validation email!"
        );
      } else {
        await setErrorBoxText(
          "An unknown error has occurred during your registration. Please contact experience@servicecanada.gc.ca to continue your registration or try again later"
        );
      }
    }
  };

  return (
    <Layout
      locale={props.locale}
      langUrl={asPath}
      breadcrumbItems={[
        { text: "Service Canada Labs", link: "/" },
        { text: "Sign Up", link: asPath },
      ]}
    >
      <Head>
        <title>{"Sign up"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="layout-container mb-2 mt-12">
        {errorBoxText ? (
          <ErrorBox text={errorBoxText} errors={errorBoxErrors} />
        ) : undefined}
        <h1 className="mb-12">Become a participant!</h1>
        <p className="mb-6">
          You’re invited to take part in usability testing and other research
          interviews to make Service Canada better for everyone. Every bit of
          feedback helps us make sure we’re making our services simple and easy
          to use. Fill out the form below to join our list of participants.
        </p>
        <h2 className="mb-3">Privacy policy</h2>
        <p className="mb-6">
          Your participation is completely voluntary. You can withdraw your
          participation and data from our list at any time with no impact.
        </p>
        <h3 className="mb-3">What we will collect</h3>
        <p className="mb-3">
          We need the following information so we can contact you:
        </p>
        <ul className="list-disc list-inside pl-2 mb-3 font-body">
          <li>Email address</li>
          <li>Year of birth</li>
          <li>Language preference</li>
        </ul>
        <p className="mb-3">
          You can also choose to share more information with us so we can invite
          you to research and testing opportunities based on your life
          experiences
        </p>
        <ul className="list-disc list-inside pl-2 mb-3 font-body">
          <li>Province or territory</li>
          <li>Gender identity</li>
          <li>Indigenous identity</li>
          <li>Disabilities</li>
          <li>Visible Minority status</li>
          <li>Income range</li>
        </ul>
      </section>
      <section className="layout-container">
        <form onSubmit={handleSubmit} onReset={handlerClearData} noValidate>
          <a
            className="block font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font underline mb-4"
            href={t("reportAProblemPrivacyStatementLink")}
          >
            Read the full privacy policy
          </a>
          <ActionButton
            id="reset"
            custom="block font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font underline mb-4"
            type="reset"
          >
            Clear my information from this form
          </ActionButton>
          <div className="max-w-600px">
            <TextField
              className="mb-10"
              label={"Email address"}
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
              label="What is your year of birth"
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
                <b className="text-error-border-red">*</b> What language would
                you like us to contact you in{" "}
                <b className="text-error-border-red">(required)</b>
              </legend>
              {languageError ? (
                <ErrorLabel message={languageError} />
              ) : undefined}
              <RadioField
                label={"English"}
                id="languageEn"
                name="language"
                value="en"
                error={languageError !== ""}
                checked={language === "en"}
                onChange={(checked, name, value) => setLanguage(value)}
                required
              />
              <RadioField
                label={"French"}
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
              label={"What province/territory do you live in?"}
              className="mb-10"
              id="province"
              boldLabel
              name="province"
              value={province}
              error={provinceError}
              options={[
                {
                  id: "on",
                  name: "Ontario",
                  value: "ON",
                },
                {
                  id: "qc",
                  name: "Quebec",
                  value: "QC",
                },
                {
                  id: "nl",
                  name: "Newfoundland and Labrador",
                  value: "NL",
                },
                {
                  id: "pe",
                  name: "Prince Edward Island",
                  value: "PE",
                },
                {
                  id: "ns",
                  name: "Nova Scotia",
                  value: "NS",
                },
                {
                  id: "nb",
                  name: "New Brunswick",
                  value: "NB",
                },
                {
                  id: "mb",
                  name: "Manitoba",
                  value: "MB",
                },
                {
                  id: "sk",
                  name: "Saskatchewan",
                  value: "SK",
                },
                {
                  id: "ab",
                  name: "Alberta",
                  value: "AB",
                },
                {
                  id: "bc",
                  name: "British Columbia",
                  value: "BC",
                },
                {
                  id: "yt",
                  name: "Yukon",
                  value: "YT",
                },
                {
                  id: "nt",
                  name: "Northwest Territories",
                  value: "NT",
                },
                {
                  id: "nu",
                  name: "Nunavut",
                  value: "NU",
                },
              ]}
              onChange={setProvince}
            />

            <fieldset className="mb-10">
              <legend className="block leading-tight text-sm font-body mb-5px font-bold">
                Which term best describes your gender identity?{" "}
                <p className="inline text-form-input-gray text-sm">
                  (optional)
                </p>
              </legend>
              <RadioField
                label={"Woman"}
                id="genderWoman"
                name="gender"
                onChange={(checked, name, value) => setGender(value)}
                checked={gender === "woman"}
                value="woman"
              />
              <RadioField
                label={"Man"}
                id="genderMan"
                name="gender"
                onChange={(checked, name, value) => setGender(value)}
                checked={gender === "man"}
                value="man"
              />
              <OptionalTextField
                controlLabel={"Other"}
                textFieldName="genderOtherDetails"
                textFieldId="genderOtherDetails"
                textFieldLabel={"If Other please specify"}
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
                label={"I prefer not to answer"}
                id="genderPreferNotToAnswer"
                name="gender"
                onChange={(checked, name, value) => setGender(value)}
                checked={gender === "preferNotToAnswer"}
                value="preferNotToAnswer"
              />
            </fieldset>

            <fieldset className="mb-10">
              <legend className="block leading-tight text-sm font-body mb-5px font-bold">
                Do you identify as Indigenous; that is First Nations, Métis, or
                Inuit?{" "}
                <p className="inline text-form-input-gray text-sm">
                  (optional)
                </p>
              </legend>
              <RadioField
                label={"First Nations"}
                id="nativeStatusFirstNations"
                checked={nativeStatus === "firstNations"}
                onChange={(checked, name, value) => {
                  setNativeStatus(value);
                }}
                name="nativeStatus"
                value="firstNations"
              />
              <RadioField
                label={"Métis"}
                id="nativeStatusMétis"
                checked={nativeStatus === "métis"}
                onChange={(checked, name, value) => {
                  setNativeStatus(value);
                }}
                name="nativeStatus"
                value="métis"
              />
              <RadioField
                label={"Inuit"}
                id="nativeStatusInuit"
                checked={nativeStatus === "inuit"}
                onChange={(checked, name, value) => {
                  setNativeStatus(value);
                }}
                name="nativeStatus"
                value="inuit"
              />
              <RadioField
                label={"Does not apply to me"}
                id="nativeStatusNA"
                checked={nativeStatus === "N/A"}
                onChange={(checked, name, value) => {
                  setNativeStatus(value);
                }}
                name="nativeStatus"
                value="N/A"
              />
              <RadioField
                label={"I prefer not to answer"}
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
                Do you identify as a person with a disability?{" "}
                <p className="inline text-form-input-gray text-sm">
                  (optional)
                </p>
              </legend>
              <OptionalTextField
                controlLabel={"Yes"}
                textFieldName="disabilityDetails"
                textFieldId="disabilityDetails"
                textFieldLabel={
                  "If “Yes,” what accommodations will you need in order to participate in an online research session with us?"
                }
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
                label={"No"}
                id="disabilityNo"
                onChange={(checked, name, value) => setDisability(value)}
                checked={disability === "no"}
                name="disability"
                value="no"
              />
              <RadioField
                label={"I'm not sure"}
                id="disabilityNotSure"
                onChange={(checked, name, value) => setDisability(value)}
                checked={disability === "notSure"}
                name="disability"
                value="notSure"
              />
              <RadioField
                label={"I prefer not to answer"}
                id="disabilityPreferNotToAnswer"
                onChange={(checked, name, value) => setDisability(value)}
                checked={disability === "preferNotToAnswer"}
                name="disability"
                value="preferNotToAnswer"
              />
            </fieldset>

            <fieldset className="mb-10">
              <legend className="block leading-tight text-sm font-body mb-5px font-bold">
                Do you identify as a member of a visible minority in Canada ? If
                yes, select the options that you identify with{" "}
                <p className="inline text-form-input-gray text-sm">
                  (optional)
                </p>
              </legend>
              <CheckBox
                label="Arab"
                id="minorityGroupArab"
                name="minorityGroup"
                checked={minority.includes("arab")}
                onChange={handlerMinorityOnChange}
                value="arab"
              />
              <CheckBox
                label="Black"
                id="minorityGroupBlack"
                name="minorityGroup"
                checked={minority.includes("black")}
                onChange={handlerMinorityOnChange}
                value="black"
              />
              <CheckBox
                label="Chinese"
                id="minorityGroupChinese"
                name="minorityGroup"
                checked={minority.includes("chinese")}
                onChange={handlerMinorityOnChange}
                value="chinese"
              />
              <CheckBox
                label="Filipino"
                id="minorityGroupFilipino"
                name="minorityGroup"
                checked={minority.includes("filipino")}
                onChange={handlerMinorityOnChange}
                value="filipino"
              />
              <CheckBox
                label="Japanese"
                id="minorityGroupJapanese"
                name="minorityGroup"
                checked={minority.includes("japanese")}
                onChange={handlerMinorityOnChange}
                value="japanese"
              />
              <CheckBox
                label="Korean"
                id="minorityGroupKorean"
                name="minorityGroup"
                checked={minority.includes("korean")}
                onChange={handlerMinorityOnChange}
                value="korean"
              />
              <CheckBox
                label="Latin American"
                id="minorityGroupLatinAmerican"
                name="minorityGroup"
                checked={minority.includes("latinAmerican")}
                onChange={handlerMinorityOnChange}
                value="latinAmerican"
              />
              <CheckBox
                label="South Asian (e.g., East Indian, Pakistani, Sri Lankan, etc.)"
                id="minorityGroupSouthAsian"
                name="minorityGroup"
                checked={minority.includes("southAsian")}
                onChange={handlerMinorityOnChange}
                value="southAsian"
              />
              <CheckBox
                label="Southeast Asian (including Vietnamese, Cambodian, Laotian, Thai, etc.)"
                id="minorityGroupSoutheastAsian"
                name="minorityGroup"
                checked={minority.includes("southeastAsian")}
                onChange={handlerMinorityOnChange}
                value="southeastAsian"
              />
              <CheckBox
                label="West Asian (e.g., Iranian, Afghan, etc.)"
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
                controlLabel="Another visible minority group"
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
                textFieldLabel="If “Another visible minority group”, please specify"
                controlValue="other"
                controlName="minorityGroup"
                controlId="minorityGroupOther"
              />
            </fieldset>

            <fieldset className="mb-10">
              <legend className="block leading-tight text-sm font-body mb-5px font-bold">
                What is your approximate annual household income (before taxes)?{" "}
                <p className="inline text-form-input-gray text-sm">
                  (optional)
                </p>
              </legend>
              <RadioField
                label={"Less than $30,000"}
                id="income30kLess"
                name="incomeLevel"
                checked={incomeLevel === "30kLess"}
                onChange={(checked, name, value) => setIncomeLevel(value)}
                value="30kLess"
              />
              <RadioField
                label={"$30,001 to $59,999"}
                id="income60kLess"
                name="incomeLevel"
                checked={incomeLevel === "30kto60k"}
                onChange={(checked, name, value) => setIncomeLevel(value)}
                value="30kto60k"
              />
              <RadioField
                label={"$60,000 to $99,999"}
                id="income100kLess"
                name="incomeLevel"
                checked={incomeLevel === "60kto100k"}
                onChange={(checked, name, value) => setIncomeLevel(value)}
                value="60kto100k"
              />
              <RadioField
                label={"$100,000 to $149,999"}
                id="income150kLess"
                name="incomeLevel"
                checked={incomeLevel === "100kto150k"}
                onChange={(checked, name, value) => setIncomeLevel(value)}
                value="100kto150k"
              />
              <RadioField
                label={"$150,000 or more"}
                id="income150kMore"
                name="incomeLevel"
                checked={incomeLevel === "150kMore"}
                onChange={(checked, name, value) => setIncomeLevel(value)}
                value="150kMore"
              />
              <RadioField
                label={"I prefer not to answer"}
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
              label="I have read, understood and agree to the above. I affirm that I am 18 years old, or older. I understand that I can withdraw from this participant pool, or any research study at any time without consequence."
              id="agreeToConditions"
              name="agreeToConditions"
              value="yes"
            />
          </div>
          <a
            className="block font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font underline my-10"
            href={t("reportAProblemPrivacyStatementLink")}
          >
            Read the full privacy policy
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
            Clear my information from this form
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
