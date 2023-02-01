import { Layout } from "../components/organisms/Layout";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { CallToAction } from "../components/molecules/CallToAction";
import { useEffect, useState } from "react";
import { Alert } from "../components/atoms/Alert";
import aemServiceInstance from "../services/aemServiceInstance";

export default function About(props) {
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
        langUrl={t("aboutPath")}
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
          <title>{`${t("aboutTitle")} — ${t("siteTitle")}`}</title>
          <meta name="description" content={`${t("aboutMetaDescription")}`} />
          <meta name="author" content="Service Canada" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="schema.dcterms" href="http://purl.org/dc/terms/" />
          <meta name="keywords" content={t("homeKeywords")} />

          {/* DCMI Meta Tags */}
          <meta
            name="dcterms.title"
            content={`${t("aboutTitle")} — ${t("siteTitle")}`}
          />
          <meta
            name="dcterms.language"
            content={props.locale === "en" ? "eng" : "fra"}
            title="ISO639-2/T"
          />
          <meta
            name="dcterms.description"
            content={t("aboutMetaDescription")}
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
          <meta name="dcterms.issued" title="W3CDTF" content="2021-05-11" />
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
              `${t("aboutRedirect")}`
            }
          />
          <meta
            property="og:title"
            content={`${t("aboutTitle")} — ${t("siteTitle")}`}
          />
          <meta
            property="og:description"
            content={`${t("aboutMetaDescription")}`}
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
              `${t("aboutRedirect")}`
            }
          />
          <meta
            property="twitter:title"
            content={`${t("aboutTitle")} — ${t("siteTitle")}`}
          />
          <meta name="twitter:creator" content="Service Canada" />
          <meta
            property="twitter:description"
            content={`${t("aboutMetaDescription")}`}
          />
          <meta property="twitter:image" content={`${t("metaImage")}`} />
          <meta property="twitter:image:alt" content={`${t("siteTitle")}`} />
        </Head>
        <section className="layout-container relative mb-10">
          <h1 id="pageMainTitle" tabIndex="-1" className="flex-wrap mb-2">
            {props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr}
          </h1>
          <div className="lg:flex">
            <span className="w-full py-4">
              <p>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[1].content[0].value
                  : pageData.scFragments[0].scContentFr.json[1].content[0]
                      .value}
              </p>
              <p className="my-4">
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[2].content[0].value
                  : pageData.scFragments[0].scContentFr.json[2].content[0]
                      .value}
              </p>
            </span>
            <span
              className="block mt-4 lg:ml-8 lg:w-3/4"
              style={{ maxWidth: "453px" }}
              role="presentation"
            >
              <img
                src={pageData.scFragments[2].scImageEn._publishUrl}
                alt=""
                height={
                  props.locale === "en"
                    ? pageData.scFragments[2].scImageEn.height
                    : pageData.scFragments[2].scImageFr.height
                }
                width={
                  props.locale === "en"
                    ? pageData.scFragments[2].scImageEn.width
                    : pageData.scFragments[2].scImageFr.width
                }
              />
            </span>
          </div>
        </section>
        <section className="layout-container relative mb-10">
          <h2 className="mb-5 text-h3 lg:text-h2">
            {props.locale === "en"
              ? pageData.scFragments[0].scContentEn.json[3].content[0].value
              : pageData.scFragments[0].scContentFr.json[3].content[0].value}
          </h2>
          <p className="my-4">
            {props.locale === "en"
              ? pageData.scFragments[0].scContentEn.json[4].content[0].value
              : pageData.scFragments[0].scContentFr.json[4].content[0].value}
          </p>
          <ul className="list-disc list-outside pl-4 mb-10 text-sm lg:text-p ml-6">
            <li className="whitespace-pre-line mb-3">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[5].content[0]
                    .content[0].value
                : pageData.scFragments[0].scContentFr.json[5].content[0]
                    .content[0].value}
            </li>
            <li className="whitespace-pre-line mb-3">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[5].content[1]
                    .content[0].value
                : pageData.scFragments[0].scContentFr.json[5].content[1]
                    .content[0].value}
            </li>
            <li className="whitespace-pre-line mb-3">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[5].content[2]
                    .content[0].value
                : pageData.scFragments[0].scContentFr.json[5].content[2]
                    .content[0].value}
            </li>
            <li className="whitespace-pre-line mb-3">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[5].content[3]
                    .content[0].value
                : pageData.scFragments[0].scContentFr.json[5].content[3]
                    .content[0].value}
            </li>
          </ul>
        </section>
        <section className="layout-container" id="contact-us">
          <h2 className="mb-5 text-h3 lg:text-h2">
            {props.locale === "en"
              ? pageData.scFragments[0].scContentEn.json[6].content[0].value
              : pageData.scFragments[0].scContentFr.json[6].content[0].value}
          </h2>
          <p className="my-4">
            {props.locale === "en"
              ? pageData.scFragments[0].scContentEn.json[7].content[0].value
              : pageData.scFragments[0].scContentFr.json[7].content[0].value}
          </p>
        </section>
        <Alert
          title={
            props.locale === "en"
              ? pageData.scFragments[1].scTitleEn
              : pageData.scFragments[1].scTitleFr
          }
          text={
            props.locale === "en" ? (
              <>
                {pageData.scFragments[1].scContentEn.json[0].content[0].value}
                <a
                  className="underline text-canada-footer-font hover:text-canada-footer-hover-font-blue"
                  href={
                    pageData.scFragments[1].scContentEn.json[0].content[1].data
                      .href
                  }
                >
                  {pageData.scFragments[1].scContentEn.json[0].content[1].value}
                </a>
              </>
            ) : (
              <>
                {pageData.scFragments[1].scContentFr.json[0].content[0].value}
                <a
                  className="underline text-canada-footer-font hover:text-canada-footer-hover-font-blue"
                  href={
                    pageData.scFragments[1].scContentFr.json[0].content[1].data
                      .href
                  }
                >
                  {pageData.scFragments[1].scContentFr.json[0].content[1].value}
                </a>
              </>
            )
          }
        />
        <CallToAction
          title={
            props.locale === "en"
              ? pageData.scFragments[3].scTitleEn
              : pageData.scFragments[3].scTitleFr
          }
          description={
            props.locale === "en"
              ? pageData.scFragments[3].scContentEn.json[0].content[0].value
              : pageData.scFragments[3].scContentFr.json[0].content[0].value
          }
          disclaimer={
            props.locale === "en"
              ? pageData.scFragments[3].scContentEn.json[1].content[0].value
              : pageData.scFragments[3].scContentFr.json[1].content[0].value
          }
          lang={props.locale}
          href={
            props.locale === "en"
              ? pageData.scFragments[3].scLabsButton[0].scDestinationURLEn
              : pageData.scFragments[3].scLabsButton[0].scDestinationURLFr
          }
          hrefText={
            props.locale === "en"
              ? pageData.scFragments[3].scLabsButton[0].scTitleEn
              : pageData.scFragments[3].scLabsButton[0].scTitleFr
          }
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
  const { data } = await aemServiceInstance.getFragment("aboutPageQuery");

  return {
    props: {
      locale: locale,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL,
      pageData: data.scLabsPagev1ByPath,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
