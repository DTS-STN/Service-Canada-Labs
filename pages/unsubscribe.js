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
import { useEffect } from "react";

export default function Unsubscribe(props) {
  const { t } = useTranslation("common");
  const { push } = useRouter();

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

  useEffect(() => {
    if (props.adobeAnalyticsUrl) {
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ event: "pageLoad" });
    }
  }, []);

  return (
    <>
      <Layout
        locale={props.locale}
        langUrl={t("unsubPath")}
        breadcrumbItems={[
          { text: t("siteTitle"), link: t("breadCrumbsHref1") },
        ]}
      >
        <Head>
          {props.adobeAnalyticsUrl ? (
            <script src={props.adobeAnalyticsUrl} />
          ) : (
            ""
          )}

          {/* Primary HTML Meta Tags */}
          <title>{`${t("unsubscribe")} — ${t("siteTitle")}`}</title>
          <meta
            name="description"
            content={`${t("unsubscribeMetaDescription")}`}
          />
          <meta name="author" content="Service Canada" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="schema.dcterms" href="http://purl.org/dc/terms/" />
          <meta name="keywords" content={t("homeKeywords")} />

          {/* DCMI Meta Tags */}
          <meta
            name="dcterms.title"
            content={`${t("unsubscribe")} — ${t("siteTitle")}`}
          />
          <meta
            name="dcterms.language"
            content={props.locale === "en" ? "eng" : "fra"}
            title="ISO639-2/T"
          />
          <meta
            name="dcterms.description"
            content={`${t("unsubscribeMetaDescription")}`}
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
          <meta name="dcterms.issued" title="W3CDTF" content="2021-07-08" />
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
              `${t("unsubRedirect")}`
            }
          />
          <meta
            property="og:title"
            content={`${t("unsubscribe")} — ${t("siteTitle")}`}
          />
          <meta
            property="og:description"
            content={`${t("unsubscribeMetaDescription")}`}
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
              `${t("unsubRedirect")}`
            }
          />
          <meta
            property="twitter:title"
            content={`${t("unsubscribe")} — ${t("siteTitle")}`}
          />
          <meta name="twitter:creator" content="Service Canada" />
          <meta
            property="twitter:description"
            content={`${t("unsubscribeMetaDescription")}`}
          />
          <meta property="twitter:image" content={`${t("metaImage")}`} />
          <meta property="twitter:image:alt" content={`${t("siteTitle")}`} />
        </Head>
        <section className="layout-container mb-2 mt-12">
          <div className="xl:w-2/3 ">
            <h1 className="mb-12" id="pageMainTitle">
              {t("unsubscribe")}
            </h1>
            <p className="mb-10 text-sm lg:text-p">{t("unsubscribeInfo")}</p>
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
            data-gc-analytics-formname="ESDC|EDSC:ServiceCanadaLabsUnsubscribe"
            data-gc-analytics-collect='[{"value":"input:not(.exclude),select","emptyField":"N/A"}]'
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
                describedby="emailDoNoInclude"
                required
                exclude
              />
            </div>
            <ActionButton
              id="signup-submit"
              className="rounded w-72"
              type="submit"
              dataCy="unsubscribe-submit"
              dataTestId="unsubscribe-submit"
              analyticsTracking
            >
              {t("reportAProblemSubmit")}
            </ActionButton>
            <ActionButton
              id="reset-bottom"
              custom="block font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font underline my-10 lg:text-p"
              type="reset"
            >
              {t("clear")}
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
  return {
    props: {
      locale,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
