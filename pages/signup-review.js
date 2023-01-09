import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { Layout } from "../components/organisms/Layout";
import { ActionButton } from "../components/atoms/ActionButton";
import { useRouter } from "next/router";
import { maskEmail } from "../lib/utils/maskEmail";
import queryGraphQL from "../graphql/client";
import getSignupReviewPage from "../graphql/queries/signupReviewQuery.graphql";
import getSignupPage from "../graphql/queries/signupQuery.graphql";
import Head from "next/head";

export default function SignupReview(props) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [pageData] = useState(props.pageData.item);
  const [formFieldData] = useState(props.formFieldData.item);
  const [formData, setFormData] = useState({});
  const [formFields] = useState(
    props.locale === "en"
      ? formFieldData.scFragments[0].scLabFormFields.en
      : formFieldData.scFragments[0].scLabFormFields.fr
  );

  const provinceDictionary = {
    ON: "Ontario",
    QC: "Quebec",
    NL: "Newfoundland",
    PE: "Prince Edward Island",
    NS: "Nova Scotia",
    NB: "New Brunswick",
    MB: "Manitoba",
    SK: "Saskatchewan",
    AB: "Alberta",
    BC: "British Columbia",
    YT: "Yukon",
    NT: "Northwest Territory",
    NU: "Nunavut",
  };

  const minorityString = (minority, minorityGroup, minorityGroupOther) => {
    if (!minority) {
      return "NA";
    } else if (minority === "preferNotToAnswer") {
      return formFields.option.preferNotAnswer;
    } else if (!minorityGroup && !minorityGroupOther) {
      return (
        formFields.option.no.charAt(0).toUpperCase() +
        formFields.option.no.slice(1).toLowerCase()
      );
    } else {
      let minorityStatusString =
        formFields.option.yes.charAt(0).toUpperCase() +
        formFields.option.yes.slice(1).toLowerCase();
      minorityGroup.forEach((minority) => {
        if (minority === "southeastAsian") {
          minorityStatusString = `${minorityStatusString}, ${formFields.option.minority.sea}`;
        } else if (minority === "nonWhiteAAA") {
          minorityStatusString = `${minorityStatusString}, ${formFields.option.minority.nonWhite}`;
        } else if (minority !== "other") {
          minorityStatusString = `${minorityStatusString}, ${formFields.option.minority[minority]}`;
        }
      });
      if (minorityGroupOther) {
        minorityStatusString = `${minorityStatusString}, ${minorityGroupOther}`;
      }
      return minorityStatusString;
    }
  };

  const yearOfBirthString = (yobRange) => {
    if (!yobRange) {
      return "NA";
    } else if (yobRange.includes("before")) {
      let year = yobRange.slice(6);
      return props.locale === "en" ? `Before ${year}` : `Avant ${year}`;
    } else if (yobRange.includes("after")) {
      let year = yobRange.slice(5);
      return props.locale === "en" ? `After ${year}` : `Après ${year}`;
    } else {
      return yobRange;
    }
  };

  const genderString = (gender, genderDetails) => {
    if (!gender) {
      return "NA";
    } else if (gender === "preferNotToAnswer") {
      return formFields.option.preferNotAnswer;
    } else if (!genderDetails) {
      return formFields.option[gender];
    } else {
      return genderDetails;
    }
  };

  const disabilityString = (disability, disabilityDetails) => {
    if (!disability) {
      return "NA";
    } else if (disability === "preferNotToAnswer") {
      return formFields.option.preferNotAnswer;
    } else if (disability === "no") {
      return (
        formFields.option.no.charAt(0).toUpperCase() +
        formFields.option.no.slice(1).toLowerCase()
      );
    } else if (!disabilityDetails) {
      return formFields.option.notSure;
    } else {
      return `${
        formFields.option.yes.charAt(0).toUpperCase() +
        formFields.option.yes.slice(1).toLowerCase()
      }, ${disabilityDetails}`;
    }
  };

  const incomeString = (income) => {
    if (!income) {
      return "NA";
    } else if (income === "preferNotToAnswer") {
      return formFields.option.preferNotAnswer;
    } else {
      switch (income) {
        case "30kLess":
          return formFields.option.income1;
        case "30kto60k":
          return formFields.option.income2;
        case "60kto100k":
          return formFields.option.income3;
        case "100kto150k":
          return formFields.option.income4;
        case "150kMore":
          return formFields.option.income5;
        default:
          break;
      }
    }
  };

  const indigenousString = (nativeStatus) => {
    if (!nativeStatus || nativeStatus === "N/A") {
      return "NA";
    } else if (nativeStatus === "preferNotToAnswer") {
      return formFields.option.preferNotAnswer;
    } else {
      switch (nativeStatus) {
        case "firstNations":
          return formFields.option.firstNations;
        case "métis":
          return formFields.option.metis;
        case "inuit":
          return formFields.option.inuk;
        default:
          break;
      }
    }
  };

  const publicServantString = (publicServant) => {
    if (!publicServant) {
      return "NA";
    } else {
      return (
        formFields.option[publicServant].charAt(0).toUpperCase() +
        formFields.option[publicServant].slice(1).toLowerCase()
      );
    }
  };

  const handleSubmit = async (e) => {
    // submit data to the api and then redirect to the thank you page
    const response = await fetch("/api/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // if the response is good, redirect to the thankyou page
    if (response.status === 201 || response.status === 200) {
      sessionStorage.setItem("email", formData.email);
      // Remove form data from session storage since it's no longer needed
      delete formData["confirmEmail"];
      sessionStorage.removeItem("formData");
      let maskedEmail = maskEmail(formData.email);

      await router.push({
        pathname: "/thankyou",
        query: { e: maskedEmail, ref: "signup" },
      });
    } else if (response.status === 400 || 500) {
      await router.push("/500");
    }
  };

  useEffect(() => {
    if (props.adobeAnalyticsUrl) {
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ event: "pageLoad" });
    }
    setFormData(JSON.parse(sessionStorage.getItem("formData")));
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
          { text: t("signupLink"), link: t("breadCrumbsHref3") },
        ]}
      >
        <Head>
          {props.adobeAnalyticsUrl ? (
            <script src={props.adobeAnalyticsUrl} />
          ) : (
            ""
          )}

          {/* Primary HTML Meta Tags */}
          <title>{`${
            props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr
          } — ${t("siteTitle")}`}</title>
          <meta name="description" content={t("signupReviewMetaDescription")} />
          <meta name="author" content="Service Canada" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="schema.dcterms" href="http://purl.org/dc/terms/" />
          <meta name="keywords" content={t("signupReviewKeywords")} />

          {/* DCMI Meta Tags */}
          <meta
            name="dcterms.title"
            content={`${t("signupReviewTitle")} — ${t("siteTitle")}`}
          />
          <meta
            name="dcterms.description"
            content={t("signupReviewMetaDescription")}
          />
          <meta
            name="dcterms.subject"
            title="gccore"
            content={t("metaSubject")}
          />
          <meta
            name="dcterms.language"
            content={props.locale === "en" ? "eng" : "fra"}
            title="ISO639-2/T"
          />
          <meta name="dcterms.creator" content="Service Canada" />
          <meta name="dcterms.accessRights" content="2" />
          <meta
            name="dcterms.service"
            content="ESDC-EDSC_SCLabs-LaboratoireSC"
          />
          <meta name="dcterms.issued" title="W3CDTF" content="2021-12-10" />
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
              `${t("signupReviewRedirect")}`
            }
          />
          <meta
            property="og:title"
            content={`${t("signupReviewTitle")} — ${t("siteTitle")}`}
          />
          <meta
            property="og:description"
            content={`${t("signupReviewMetaDescription")}`}
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
              `${t("signupReviewRedirect")}`
            }
          />
          <meta
            property="twitter:title"
            content={`${t("signupReviewTitle")} — ${t("siteTitle")}`}
          />
          <meta name="twitter:creator" content="Service Canada" />
          <meta
            property="twitter:description"
            content={`${t("signupReviewMetaDescription")}`}
          />
          <meta property="twitter:image" content={`${t("metaImage")}`} />
          <meta property="twitter:image:alt" content={`${t("siteTitle")}`} />
        </Head>
        <section className="layout-container">
          <h1 className="mb-12" id="pageMainTitle" tabIndex="-1">
            {props.locale === "en"
              ? pageData.scFragments[0].scContentEn.json[0].content[0].value
              : pageData.scFragments[0].scContentFr.json[0].content[0].value}
          </h1>
          <h2 className="pb-6 mb-6 border-b border-black">
            {props.locale === "en"
              ? pageData.scFragments[0].scContentEn.json[1].content[0].value
              : pageData.scFragments[0].scContentFr.json[1].content[0].value}
          </h2>
          <div className="mb-16 grid grid-cols-1 lg:grid-cols-2">
            <div className="p-1 border border-grey">
              <p className="font-display">{formFields.label.email}</p>
            </div>
            <div className="p-1 border-x border-b lg:border-y lg:border-l-0 border-grey">
              <p className="font-display font-bold">
                {formData !== null ? formData.email : undefined}
              </p>
            </div>
            <div className="p-1 border-x border-b lg:border-y border-grey">
              <p className="font-display">{formFields.label.language}</p>
            </div>
            <div className="p-1 border-x border-b lg:border-y lg:border-l-0 border-grey">
              <p className="font-display font-bold">
                {formData !== null
                  ? formData.language === "en"
                    ? "English"
                    : "Français"
                  : undefined}
              </p>
            </div>
            <div className="p-1 border-x border-b lg:border-y border-grey">
              <p className="font-display">{formFields.label.yearOfBirth}</p>
            </div>
            <div className="p-1 border-x border-b lg:border-y lg:border-l-0 border-grey">
              <p className="font-display font-bold">
                {yearOfBirthString(
                  formData !== null ? formData.yearOfBirthRange : undefined
                )}
              </p>
            </div>
          </div>
          <h2 className="pb-6 border-b border-black">
            {props.locale === "en"
              ? pageData.scFragments[0].scContentEn.json[2].content[0].value
              : pageData.scFragments[0].scContentFr.json[2].content[0].value}
          </h2>
          <div className="mb-10 grid grid-cols-1 lg:grid-cols-2">
            <div className="p-1 border border-grey">
              <p className="font-display">{formFields.label.province}</p>
            </div>
            <div className="p-1 border-x border-b lg:border-y lg:border-l-0 border-grey">
              <p className="font-display font-bold">
                {formData !== null
                  ? formData.province === undefined
                    ? "NA"
                    : provinceDictionary[formData.province]
                  : undefined}
              </p>
            </div>
            <div className="p-1 border-x border-b lg:border-y border-grey">
              <p className="font-display">{formFields.label.gender}</p>
            </div>
            <div className="p-1 border-x border-b lg:border-y lg:border-l-0 border-grey">
              <p className="font-display font-bold">
                {formData !== null
                  ? genderString(formData.gender, formData.genderOtherDetails)
                  : undefined}
              </p>
            </div>
            <div className="p-1 border-x border-b lg:border-y border-grey">
              <p className="font-display">{formFields.label.disability}</p>
            </div>
            <div className="p-1 border-x border-b lg:border-y lg:border-l-0 border-grey">
              <p className="font-display font-bold">
                {formData !== null
                  ? disabilityString(
                      formData.disability,
                      formData.disabilityDetails
                    )
                  : undefined}
              </p>
            </div>
            <div className="p-1 border-x border-b lg:border-y border-grey">
              <p className="font-display">{formFields.label.income}</p>
            </div>
            <div className="p-1 border-x border-b lg:border-y lg:border-l-0 border-grey">
              <p className="font-display font-bold">
                {formData !== null
                  ? incomeString(formData.incomeLevel)
                  : undefined}
              </p>
            </div>
            <div className="p-1 border-x border-b lg:border-y border-grey">
              <p className="font-display">{formFields.label.indigenous}</p>
            </div>
            <div className="p-1 border-x border-b lg:border-y lg:border-l-0 border-grey">
              <p className="font-display font-bold">
                {formData !== null
                  ? indigenousString(formData.nativeStatus)
                  : undefined}
              </p>
            </div>
            <div className="p-1 border-x border-b lg:border-y border-grey">
              <p className="font-display">{formFields.label.minority}</p>
            </div>
            <div className="p-1 border-x border-b lg:border-y lg:border-l-0 border-grey">
              <p className="font-display font-bold">
                {formData !== null
                  ? minorityString(
                      formData.minority,
                      formData.minorityGroup,
                      formData.minorityGroupOther
                    )
                  : undefined}
              </p>
            </div>
            <div className="p-1 border-x border-b lg:border-y border-grey">
              <p className="font-display">{formFields.label.publicServant}</p>
            </div>
            <div className="p-1 border-x border-b lg:border-y lg:border-l-0 border-grey">
              <p className="font-display font-bold">
                {formData !== null
                  ? publicServantString(formData.publicServant)
                  : undefined}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 content-center">
            <ActionButton
              id="signup-review-submit"
              className="rounded w-full my-6 lg:my-12 md:w-80 md:mx-30 py-2 text-base"
              type="submit"
              dataCy="signup-review-submit"
              dataTestId="signup-review-submit"
              analyticsTracking
              onClick={handleSubmit}
            >
              {formFields.submit}
            </ActionButton>
            <ActionButton
              id="signup-review-back"
              className="rounded w-full my-6 lg:my-12 md:w-80 py-2 bg-[#EAEBED] text-base text-custom-blue-text focus:ring-inset focus:ring-2 focus:ring-black hover:bg-details-button-hover-gray text-center border-0"
              type="submit"
              dataCy="signup-review-back"
              dataTestId="signup-review-back"
              analyticsTracking
              secondary
              onClick={() => router.back()}
            >
              {formFields.back}
            </ActionButton>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  // get page data from AEM
  const res = await queryGraphQL(getSignupReviewPage).then((result) => {
    return result;
  });
  const res2 = await queryGraphQL(getSignupPage).then((result) => {
    return result;
  });

  const data = res.data.scLabsPagev1ByPath;
  const formFieldData = res2.data.scLabsPagev1ByPath;
  return {
    props: {
      pageData: data,
      formFieldData: formFieldData,
      locale,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
