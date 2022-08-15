import { Layout } from "../../components/organisms/Layout";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { HTMList } from "../../components/atoms/HTMList";
import { CallToAction } from "../../components/molecules/CallToAction";
import { useEffect, useState } from "react";
import { Alert } from "../../components/atoms/Alert";
import queryGraphQL from "../../graphql/client";
import getPrivacyPage from "../../graphql/queries/privacyPageQuery.graphql";
import { TableOfContents } from "../../components/atoms/TableOfContents";

export default function Privacy(props) {
  const { t } = useTranslation("common");
  const [pageData] = useState(props.pageData.item);
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("h2"))
      .filter((element) => element.id)
      .map((element) => ({
        id: element.id,
        text: element.textContent ?? "",
      }));
    setHeadings(headingElements);

    if (props.adobeAnalyticsUrl) {
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ event: "pageLoad" });
    }
  }, []);

  return (
    <>
      <Layout
        locale={props.locale}
        langUrl={t("privacyPath")}
        breadcrumbItems={[
          { text: t("siteTitle"), link: t("breadCrumbsHref1") },
          { text: t("signupHomeButton"), link: t("breadCrumbsHref3") },
        ]}
      >
        <Head>
          {props.adobeAnalyticsUrl ? (
            <script src={props.adobeAnalyticsUrl} />
          ) : (
            ""
          )}

          {/* Primary HTML Meta Tags */}
          <title>{`${t("privacyTitle")} — ${t("siteTitle")}`}</title>
          <meta name="description" content={`${t("privacyMetaDescription")}`} />
          <meta name="author" content="Service Canada" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="schema.dcterms" href="http://purl.org/dc/terms/" />
          <meta name="keywords" content={t("privacyKeywords")} />

          {/* DCMI Meta Tags */}
          <meta
            name="dcterms.title"
            content={`${t("privacyTitle")} — ${t("siteTitle")}`}
          />
          <meta
            name="dcterms.language"
            content={props.locale === "en" ? "eng" : "fra"}
            title="ISO639-2/T"
          />
          <meta
            name="dcterms.description"
            content={t("privacyMetaDescription")}
          />
          <meta
            name="dcterms.subject"
            title="gccore"
            content={t("privacyMetaSubject")}
          />
          <meta name="dcterms.creator" content="Service Canada" />
          <meta name="dcterms.accessRights" content="2" />
          <meta
            name="dcterms.service"
            content="ESDC-EDSC_SCLabs-LaboratoireSC"
          />
          <meta name="dcterms.issued" title="W3CDTF" content="2021-06-30" />
          <meta name="dcterms.modified" title="W3CDTF" content="2021-12-10" />
          <meta name="dcterms.spatial" content="Canada" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:locale" content={props.locale} />
          <meta
            property="og:url"
            content={
              "https://alpha.service.canada.ca/" +
              `${props.locale}` +
              `${t("privacyRedirect")}`
            }
          />
          <meta
            property="og:title"
            content={`${t("privacyTitle")} — ${t("siteTitle")}`}
          />
          <meta
            property="og:description"
            content={`${t("privacyMetaDescription")}`}
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
              `${t("privacyRedirect")}`
            }
          />
          <meta
            property="twitter:title"
            content={`${t("privacyTitle")} — ${t("siteTitle")}`}
          />
          <meta name="twitter:creator" content="Service Canada" />
          <meta
            property="twitter:description"
            content={`${t("privacyMetaDescription")}`}
          />
          <meta property="twitter:image" content={`${t("metaImage")}`} />
          <meta property="twitter:image:alt" content={`${t("siteTitle")}`} />
        </Head>
        <section className="layout-container relative mb-10">
          <h1
            id="pageMainTitle"
            className="mb-8 text-h1l font-bold flex-wrap"
            tabIndex="-1"
          >
            {props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr}
          </h1>
          <TableOfContents
            title={t("tableOfContentsTitle")}
            headings={headings}
          />
          <div className="lg:ml-4 pb-8 pt-4">
            <Alert
              title={
                props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[0].content[0].value
                  : pageData.scFragments[0].scContentFr.json[0].content[0].value
              }
              text={
                props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[1].content[0].value
                  : pageData.scFragments[0].scContentFr.json[1].content[0].value
              }
            />
          </div>
          <div className="xl:w-2/3">
            <h2 id="what-we-collect" className="mb-4 font-bold leading-10">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[2].content[0].value
                : pageData.scFragments[0].scContentFr.json[2].content[0].value}
            </h2>
            <p className="mb-4">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[3].content[0].value
                : pageData.scFragments[0].scContentFr.json[3].content[0].value}
            </p>
            <ul className="ml-9 mb-4 text-p list-disc">
              {pageData.scFragments[0].scContentEn.json[4].content.map(
                (item) => (
                  <li key={item.content[0].value}>{item.content[0].value}</li>
                )
              )}
            </ul>
            <p className="mb-4">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[5].content[0].value
                : pageData.scFragments[0].scContentFr.json[5].content[0].value}
            </p>
            <ul className="ml-9 mb-4 text-p list-disc">
              {pageData.scFragments[0].scContentEn.json[6].content.map(
                (item) => (
                  <li key={item.content[0].value}>{item.content[0].value}</li>
                )
              )}
            </ul>
            <p className="mb-4">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[7].content[0].value
                : pageData.scFragments[0].scContentFr.json[7].content[0].value}
              <span>
                {" "}
                <i>
                  {props.locale === "en"
                    ? pageData.scFragments[0].scContentEn.json[7].content[1]
                        .value
                    : pageData.scFragments[0].scContentFr.json[7].content[1]
                        .value}
                </i>{" "}
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[7].content[2].value
                  : pageData.scFragments[0].scContentFr.json[7].content[2]
                      .value}
                <i>
                  {props.locale === "en"
                    ? pageData.scFragments[0].scContentEn.json[7].content[3]
                        .value
                    : pageData.scFragments[0].scContentFr.json[7].content[3]
                        .value}
                </i>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[7].content[4].value
                  : pageData.scFragments[0].scContentFr.json[7].content[4]
                      .value}
              </span>
            </p>
            <p className="mb-8">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[8].content[0].value
                : pageData.scFragments[0].scContentFr.json[8].content[0].value}
            </p>
            <h2 id="how-we-use" className="mb-4 font-bold leading-10">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[9].content[0].value
                : pageData.scFragments[0].scContentFr.json[9].content[0].value}
            </h2>
            <p className="mb-4">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[10].content[0].value
                : pageData.scFragments[0].scContentFr.json[10].content[0].value}
            </p>
            <p className="mb-4">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[11].content[0].value
                : pageData.scFragments[0].scContentFr.json[11].content[0].value}
            </p>
            <p className="mb-8">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[12].content[0].value
                : pageData.scFragments[0].scContentFr.json[12].content[0].value}
            </p>
            <h2 id="how-to-withdraw" className="mb-4 font-bold leading-10">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[13].content[0].value
                : pageData.scFragments[0].scContentFr.json[13].content[0].value}
            </h2>
            <p className="mb-8">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[14].content[0].value
                : pageData.scFragments[0].scContentFr.json[14].content[0].value}
              <a
                href={
                  props.locale === "en"
                    ? pageData.scFragments[0].scContentEn.json[14].content[1]
                        .data.href
                    : pageData.scFragments[0].scContentFr.json[14].content[1]
                        .data.href
                }
                className="text-custom-blue-link underline"
              >
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[14].content[1]
                      .value
                  : pageData.scFragments[0].scContentFr.json[14].content[1]
                      .value}
              </a>
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[14].content[2].value
                : pageData.scFragments[0].scContentFr.json[14].content[2].value}
            </p>
            <h2 id="who-we-are" className="mb-4 font-bold leading-10">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[15].content[0].value
                : pageData.scFragments[0].scContentFr.json[15].content[0].value}
            </h2>
            <p className="mb-4">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[16].content[0].value
                : pageData.scFragments[0].scContentFr.json[16].content[0].value}
            </p>
            <p className="mb-4">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[17].content[0].value
                : pageData.scFragments[0].scContentFr.json[17].content[0].value}
              <span>
                <i>
                  {props.locale === "en"
                    ? pageData.scFragments[0].scContentEn.json[17].content[1]
                        .value
                    : pageData.scFragments[0].scContentFr.json[17].content[1]
                        .value}
                </i>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[17].content[2]
                      .value
                  : pageData.scFragments[0].scContentFr.json[17].content[2]
                      .value}
                <i>
                  {" "}
                  {props.locale === "en"
                    ? pageData.scFragments[0].scContentEn.json[17].content[3]
                        .value
                    : pageData.scFragments[0].scContentFr.json[17].content[3]
                        .value}
                </i>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[17].content[4]
                      .value
                  : pageData.scFragments[0].scContentFr.json[17].content[4]
                      .value}
                <i>
                  {props.locale === "en"
                    ? pageData.scFragments[0].scContentEn.json[17].content[5]
                        .value
                    : pageData.scFragments[0].scContentFr.json[17].content[5]
                        .value}
                </i>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[17].content[6]
                      .value
                  : pageData.scFragments[0].scContentFr.json[17].content[6]
                      .value}
              </span>
            </p>
            <p className="mb-4">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[18].content[0].value
                : pageData.scFragments[0].scContentFr.json[18].content[0].value}
            </p>
            <p className="mb-4">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[19].content[0].value
                : pageData.scFragments[0].scContentFr.json[19].content[0].value}
              <a
                href={
                  props.locale === "en"
                    ? pageData.scFragments[0].scContentEn.json[19].content[1]
                        .data.href
                    : pageData.scFragments[0].scContentFr.json[19].content[1]
                        .data.href
                }
                className="text-custom-blue-link underline"
              >
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[19].content[1]
                      .value
                  : pageData.scFragments[0].scContentFr.json[19].content[1]
                      .value}
              </a>
              {"."}
            </p>
            <p className="mb-8">
              <i>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[20].content[0]
                      .value
                  : pageData.scFragments[0].scContentFr.json[20].content[0]
                      .value}
              </i>
              <span>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[20].content[1]
                      .value
                  : pageData.scFragments[0].scContentFr.json[20].content[1]
                      .value}
              </span>
            </p>
            <h2 id="legal-rights" className="mb-4 font-bold leading-10">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[21].content[0].value
                : pageData.scFragments[0].scContentFr.json[21].content[0].value}
            </h2>
            <p className="mb-4">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[22].content[0].value
                : pageData.scFragments[0].scContentFr.json[22].content[0].value}
              <a
                href={
                  props.locale === "en"
                    ? pageData.scFragments[0].scContentEn.json[22].content[1]
                        .data.href
                    : pageData.scFragments[0].scContentFr.json[22].content[1]
                        .data.href
                }
                className="text-custom-blue-link underline"
              >
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[22].content[1]
                      .value
                  : pageData.scFragments[0].scContentFr.json[22].content[1]
                      .value}
              </a>
              <span>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[22].content[2]
                      .value
                  : pageData.scFragments[0].scContentFr.json[22].content[2]
                      .value}
              </span>
            </p>
          </div>
        </section>
        <CallToAction
          title={t("signupHomeButton")}
          description={t("signupBannerDescription")}
          disclaimer={t("signupBannerDisclaimer")}
          lang={props.locale}
          href={t("signupInfoRedirect")}
          hrefText={t("signupBannerBtnText")}
        />
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
  // get page data from AEM
  const res = await queryGraphQL(getPrivacyPage).then((result) => {
    return result;
  });

  const data = res.data.sCLabsPageByPath;
  return {
    props: {
      locale: locale,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL,
      pageData: data,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
