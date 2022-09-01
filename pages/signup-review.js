import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { Layout } from "../components/organisms/Layout";
import queryGraphQL from "../graphql/client";
import getSignupReviewPage from "../graphql/queries/signupReviewQuery.graphql";
import Head from "next/head";

export default function SignupReview(props) {
  const { t } = useTranslation("common");
  const [pageData] = useState(props.pageData.item);

  useEffect(() => {
    if (props.adobeAnalyticsUrl) {
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ event: "pageLoad" });
    }
    let formData = sessionStorage.getItem("formData");
    console.log(JSON.stringify(formData));
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
              <p className="font-display font-bold">Email Address</p>
            </div>
            <div className="p-1 border-x border-b lg:border-y lg:border-l-0 border-grey">
              <p className="font-display font-bold">email@address.com</p>
            </div>
            <div className="p-1 border-x border-b lg:border-y border-grey">
              <p className="font-display font-bold">Preferred Language</p>
            </div>
            <div className="p-1 border-x border-b lg:border-y lg:border-l-0 border-grey">
              <p className="font-display font-bold">English</p>
            </div>
            <div className="p-1 border-x border-b lg:border-y border-grey">
              <p className="font-display font-bold">Year of Birth</p>
            </div>
            <div className="p-1 border-x border-b lg:border-y lg:border-l-0 border-grey">
              <p className="font-display font-bold">1973</p>
            </div>
          </div>
          <h2 className="pb-6 border-b border-black">
            {props.locale === "en"
              ? pageData.scFragments[0].scContentEn.json[2].content[0].value
              : pageData.scFragments[0].scContentFr.json[2].content[0].value}
          </h2>
          <div className="mb-16 grid grid-cols-1 lg:grid-cols-2">
            <div className="p-1 border border-grey">
              <p className="font-display">
                What province or territory do you live in?
              </p>
            </div>
            <div className="p-1 border-x border-b lg:border-y lg:border-l-0 border-grey">
              <p className="font-display font-bold">NA</p>
            </div>
            <div className="p-1 border-x border-b lg:border-y border-grey">
              <p className="font-display">
                Which term best describes your gender identity?
              </p>
            </div>
            <div className="p-1 border-x border-b lg:border-y lg:border-l-0 border-grey">
              <p className="font-display font-bold">NA</p>
            </div>
            <div className="p-1 border-x border-b lg:border-y border-grey">
              <p className="font-display">
                Do you identify as Indigenous; that is First Nations, Métis, or
                Inuk (Inuit)?
              </p>
            </div>
            <div className="p-1 border-x border-b lg:border-y lg:border-l-0 border-grey">
              <p className="font-display font-bold">NA</p>
            </div>
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

  const data = res.data.sCLabsPageByPath;
  console.log(data.item.scFragments[0].scContentEn.json[0].content[0].value);
  return {
    props: {
      pageData: data,
      locale,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
