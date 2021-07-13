/* istanbul ignore file */

import Head from "next/head";
import { useState } from "react";
import Joi from "joi";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ErrorBox } from "../components/molecules/ErrorBox";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Layout } from "../components/organisms/Layout";
import { ActionButton } from "../components/atoms/ActionButton";
import { TextField } from "../components/atoms/TextField";
import { maskEmail } from "../lib/utils/maskEmail";

export default function Unsubscribe(props) {
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
  });

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [errorBoxErrors, setErrorBoxErrors] = useState([]);
  const [errorBoxText, setErrorBoxText] = useState("");

  const handlerClearData = (e) => {
    e.preventDefault();
    setErrorBoxText("");
    setErrorBoxErrors([]);
    setEmailError("");
    setEmail("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // clear out error values
    await setEmailError("");

    // compile data into one object
    const formData = {
      email,
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
        errorsList.push(errors[error]);
      }

      // set the errors to the error list
      await setErrorBoxErrors(errorsList);
      await setErrorBoxText(
        `${t("errorSubmit1")} ${errorsList.length} ${t("errorSubmit2")}`
      );
      document.getElementById("error-box").scrollIntoView({
        behavior: "smooth",
      });
      document.querySelector(`#error-box-items > li > button`).focus();
    } else {
      //submit data to the api and then redirect to the thank you page
      const response = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // if the response is good, redirect to the thankyou page
      if (response.status === 201 || response.status === 200) {
        let maskedEmail = maskEmail(formData.email);
        await push({
          pathname: "/thankyou",
          query: { e: maskedEmail, ref: "unsubscribe" },
        });
      } else if (response.status === 400) {
        await setErrorBoxText(t("cantFindEMailError"));
      } else {
        await setErrorBoxText(t("errorUnknown"));
      }
    }
  };

  const handleScrollToError = (id) => {
    const input = document.getElementById(`${id}`);
    input.focus();
    const inputType = input.getAttribute("type");
    let parentDiv = input.parentNode;
    if (inputType === "radio") parentDiv = parentDiv.parentNode;
    else if (inputType === "checkbox") parentDiv = parentDiv.previousSibling;
    parentDiv.scrollIntoView({
      behavior: "smooth",
    });
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
        <meta name="dcterms.title" content={t("scLabsUnsubscribe")} />
        <meta
          name="dcterms.language"
          content={props.locale === "en" ? "eng" : "fra"}
        />
        <meta name="dcterms.creator" content={t("creator")} />
        <meta name="dcterms.accessRights" content="2" />
      </Head>
      <section className="layout-container mb-2 mt-12">
        <div className="xl:w-2/3 ">
          <h1 className="mb-12" id="pageMainTitle">
            {t("unsubscribe")}
          </h1>
          <p className="mb-10">{t("unsubscribeInfo")}</p>
        </div>
      </section>
      <section className="layout-container">
        {errorBoxText ? (
          <ErrorBox
            text={errorBoxText}
            errors={errorBoxErrors}
            onClick={handleScrollToError}
          />
        ) : (
          ""
        )}
        <form
          data-gc-analytics-formname="ESDC:ServiceCanadaLabsUnsubscribe"
          data-gc-analytics-collect='[{"value":"input","emptyField":"N/A"}]'
          onSubmit={handleSubmit}
          onReset={handlerClearData}
          noValidate
        >
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
          </div>
          <ActionButton
            id="signup-submit"
            className="rounded w-72"
            type="submit"
            dataCy="unsubscribe-submit"
            dataTestId="unsubscribe-submit"
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
