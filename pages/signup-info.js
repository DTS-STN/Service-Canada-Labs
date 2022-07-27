import { Layout } from "../components/organisms/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { ActionButton } from "../components/atoms/ActionButton";
import Link from "next/link";
import Head from "next/head";
import queryGraphQL from "../graphql/client";
import getSignupInfoPage from "../graphql/queries/signupInfoQuery.graphql";

export default function SignupInfo(props) {
  const { t } = useTranslation("common");
  const [pageData] = useState(props.pageData.item);

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
          <meta name="description" content={t("signupInfoMetaDescription")} />
          <meta name="author" content="Service Canada" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="schema.dcterms" href="http://purl.org/dc/terms/" />
          <meta name="keywords" content={t("signupInfoKeywords")} />

          {/* DCMI Meta Tags */}
          <meta
            name="dcterms.title"
            content={`${t("signupInfoTitle")} — ${t("siteTitle")}`}
          />
          <meta
            name="dcterms.description"
            content={t("signupInfoMetaDescription")}
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
              `${t("signupInfoRedirect")}`
            }
          />
          <meta
            property="og:title"
            content={`${t("signupInfoTitle")} — ${t("siteTitle")}`}
          />
          <meta
            property="og:description"
            content={`${t("signupInfoMetaDescription")}`}
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
              `${t("signupInfoRedirect")}`
            }
          />
          <meta
            property="twitter:title"
            content={`${t("signupInfoTitle")} — ${t("siteTitle")}`}
          />
          <meta name="twitter:creator" content="Service Canada" />
          <meta
            property="twitter:description"
            content={`${t("signupInfoMetaDescription")}`}
          />
          <meta property="twitter:image" content={`${t("metaImage")}`} />
          <meta property="twitter:image:alt" content={`${t("siteTitle")}`} />
        </Head>
        <section className="layout-container mb-2 mt-12">
          <div className="xl:w-2/3 ">
            <h1 className="mb-12" id="pageMainTitle" tabIndex="-1">
              {props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr}
            </h1>
            <p className="mb-5 text-sm lg:text-p">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[0].content[0].value
                : pageData.scFragments[0].scContentFr.json[0].content[0].value}
            </p>
            <ol className="ml-8 text-lg">
              <li>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[1].content[0]
                      .content[0].value
                  : pageData.scFragments[0].scContentFr.json[1].content[0]
                      .content[0].value}
              </li>
              <li>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[1].content[1]
                      .content[0].value
                  : pageData.scFragments[0].scContentFr.json[1].content[1]
                      .content[0].value}
              </li>
            </ol>
            <p className="mb-5 text-sm lg:text-p">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[2].content[0].value
                : pageData.scFragments[0].scContentFr.json[2].content[0].value}
            </p>
            <h2 className="mb-5 text-h3 lg:text-h2">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[3].content[0].value
                : pageData.scFragments[0].scContentFr.json[3].content[0].value}
            </h2>
            <p className="mb-3">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[4].content[0].value
                : pageData.scFragments[0].scContentFr.json[4].content[0].value}
            </p>
            <p className="mb-3">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[5].content[0].value
                : pageData.scFragments[0].scContentFr.json[5].content[0].value}
            </p>
            <ul className="list-disc list-outside pl-4 mb-10 text-sm lg:text-p ml-6">
              <li className="whitespace-pre-line mb-3">
                <b>
                  {props.locale === "en"
                    ? pageData.scFragments[0].scContentEn.json[6].content[0]
                        .content[0].value
                    : pageData.scFragments[0].scContentFr.json[6].content[0]
                        .content[0].value}
                </b>
                <p>
                  {props.locale === "en"
                    ? pageData.scFragments[0].scContentEn.json[6].content[0]
                        .content[1].content[0].value
                    : pageData.scFragments[0].scContentFr.json[6].content[0]
                        .content[1].content[0].value}
                </p>
              </li>
              <li className="whitespace-pre-line mb-3">
                <b>
                  {props.locale === "en"
                    ? pageData.scFragments[0].scContentEn.json[6].content[1]
                        .content[0].value
                    : pageData.scFragments[0].scContentFr.json[6].content[1]
                        .content[0].value}
                </b>
                <p>
                  {props.locale === "en"
                    ? pageData.scFragments[0].scContentEn.json[6].content[1]
                        .content[1].content[0].value
                    : pageData.scFragments[0].scContentFr.json[6].content[1]
                        .content[1].content[0].value}
                </p>
              </li>
              <li className="whitespace-pre-line mb-3">
                <b>
                  {props.locale === "en"
                    ? pageData.scFragments[0].scContentEn.json[6].content[2]
                        .content[0].value
                    : pageData.scFragments[0].scContentFr.json[6].content[2]
                        .content[0].value}
                </b>
                <p>
                  {props.locale === "en"
                    ? pageData.scFragments[0].scContentEn.json[6].content[2]
                        .content[1].content[0].value
                    : pageData.scFragments[0].scContentFr.json[6].content[2]
                        .content[1].content[0].value}
                </p>
              </li>
            </ul>
            <h2 className="mb-5 text-h3 lg:text-h2">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[7].content[0].value
                : pageData.scFragments[0].scContentFr.json[7].content[0].value}
            </h2>
            <ol className="ml-8 text-lg">
              <li>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[8].content[0]
                      .content[0].value
                  : pageData.scFragments[0].scContentFr.json[8].content[0]
                      .content[0].value}
              </li>
              <li>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[8].content[1]
                      .content[0].value
                  : pageData.scFragments[0].scContentFr.json[8].content[1]
                      .content[0].value}
              </li>
              <li>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[8].content[2]
                      .content[0].value
                  : pageData.scFragments[0].scContentFr.json[8].content[2]
                      .content[0].value}
              </li>
              <li>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[8].content[3]
                      .content[0].value
                  : pageData.scFragments[0].scContentFr.json[8].content[3]
                      .content[0].value}
              </li>
            </ol>

            <Link
              href={
                props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[9].content[0].data
                      .href
                  : pageData.scFragments[0].scContentFr.json[9].content[0].data
                      .href
              }
              locale={props.locale}
            >
              <a className="block font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font underline mb-10 text-sm lg:text-p">
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[9].content[0].value
                  : pageData.scFragments[0].scContentFr.json[9].content[0]
                      .value}
              </a>
            </Link>

            <h2 className="mb-5 text-h3 lg:text-h2">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[10].content[0].value
                : pageData.scFragments[0].scContentFr.json[10].content[0].value}
            </h2>
            <p className="mb-3">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[11].content[0].value
                : pageData.scFragments[0].scContentFr.json[11].content[0].value}
            </p>
            <ol className="ml-8 text-lg">
              <li>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[12].content[0]
                      .content[0].value
                  : pageData.scFragments[0].scContentFr.json[12].content[0]
                      .content[0].value}
              </li>
              <li>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[12].content[1]
                      .content[0].value
                  : pageData.scFragments[0].scContentFr.json[12].content[1]
                      .content[0].value}
              </li>
              <li>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[12].content[2]
                      .content[0].value
                  : pageData.scFragments[0].scContentFr.json[12].content[2]
                      .content[0].value}
              </li>
            </ol>
            <p className="mb-3 text-sm lg:text-p">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[13].content[0].value
                : pageData.scFragments[0].scContentFr.json[13].content[0].value}
            </p>
            <ol className="ml-8 text-lg">
              <li>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[14].content[0]
                      .content[0].value
                  : pageData.scFragments[0].scContentFr.json[14].content[0]
                      .content[0].value}
              </li>
              <li>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[14].content[1]
                      .content[0].value
                  : pageData.scFragments[0].scContentFr.json[14].content[1]
                      .content[0].value}
              </li>
              <li>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[14].content[2]
                      .content[0].value
                  : pageData.scFragments[0].scContentFr.json[14].content[2]
                      .content[0].value}
              </li>
              <li>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[14].content[3]
                      .content[0].value
                  : pageData.scFragments[0].scContentFr.json[14].content[3]
                      .content[0].value}
              </li>
              <li>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[14].content[4]
                      .content[0].value
                  : pageData.scFragments[0].scContentFr.json[14].content[4]
                      .content[0].value}
              </li>
              <li>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[14].content[5]
                      .content[0].value
                  : pageData.scFragments[0].scContentFr.json[14].content[5]
                      .content[0].value}
              </li>
            </ol>

            <p className="mt-2 mb-4 text-sm lg:text-p">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[15].content[0].value
                : pageData.scFragments[0].scContentFr.json[15].content[0].value}
            </p>
          </div>
          <div className="my-16 mb-36">
            <ActionButton
              id="signupInfo-continue"
              className="text-base xxs:px-16 font-bold xs:px-24 py-3 rounded bg-custom-blue-blue text-white border border-custom-blue-blue active:bg-custom-blue-dark hover:bg-custom-blue-light"
              dataCy="signupInfo-continue"
              dataTestId="signupInfo-continue"
              href={
                props.locale === "en"
                  ? pageData.scFragments[1].scDestinationURLEn
                  : pageData.scFragments[1].scDestinationURLFr
              }
              analyticsTracking
            >
              {props.locale === "en"
                ? pageData.scFragments[1].scTitleEn
                : pageData.scFragments[1].scTitleFr}
            </ActionButton>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  // get page data from AEM
  const res = await queryGraphQL(getSignupInfoPage).then((result) => {
    return result;
  });

  const data = res.data.sCLabsPageByPath;
  return {
    props: {
      pageData: data,
      locale,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
