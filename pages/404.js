import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { ReportAProblem } from "../components/organisms/ReportAProblem";
import { ActionButton } from "../components/atoms/ActionButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import aemServiceInstance from "../services/aemServiceInstance";

export default function error404(props) {
  const { t } = useTranslation("common");
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();
  const [pageData] = useState(props.pageData.item);

  useEffect(() => {
    if (props.adobeAnalyticsUrl) {
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ event: "pageLoad" });
    }

    //If using Internet Explorer, redirect to /notsupported
    if (window.document.documentMode) {
      router.push("/notsupported");
    } else {
      setLoaded(true);
    }
  }, []);

  //If using Internet Explorer, render empty page so page doesn't flash before redirect
  if (!loaded) {
    return <div></div>;
  }

  return (
    <>
      <div className="min-h-screen relative">
        <Head>
          {props.adobeAnalyticsUrl ? (
            <script src={props.adobeAnalyticsUrl} />
          ) : (
            ""
          )}

          {/* Primary HTML Meta Tags */}
          <title data-gc-analytics-error="404">
            {pageData.scContentEn.json[0].content[0].value} (404) |{" "}
            {pageData.scContentFr.json[0].content[0].value} (404)
          </title>
          <meta
            name="description"
            content={`${t("404errorMetaDescription")}`}
          />
          <meta name="author" content="Service Canada" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="schema.dcterms" href="http://purl.org/dc/terms/" />

          {/* DCMI Meta Tags */}
          <meta name="dcterms.title" content={`404 — ${t("siteTitle")}`} />
          <meta
            name="dcterms.language"
            content={props.locale === "en" ? "eng" : "fra"}
            title="ISO639-2/T"
          />
          <meta
            name="dcterms.description"
            content={`${t("404errorMetaDescription")}`}
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
          <meta name="dcterms.issued" title="W3CDTF" content="2021-06-01" />
          <meta name="dcterms.modified" title="W3CDTF" content="2021-12-16" />
          <meta name="dcterms.spatial" content="Canada" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:locale" content={props.locale} />
          <meta
            property="og:url"
            content={
              "https://alpha.service.canada.ca/" + `${props.locale}` + "/404"
            }
          />
          <meta property="og:title" content={`404 — ${t("siteTitle")}`} />
          <meta
            property="og:description"
            content={`${t("404errorMetaDescription")}`}
          />
          <meta property="og:image" content={`${t("metaImage")}`} />
          <meta property="og:image:alt" content={`${t("siteTitle")}`} />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content={
              "https://alpha.service.canada.ca/" + `${props.locale}` + "/404"
            }
          />
          <meta property="twitter:title" content={`500 — ${t("siteTitle")}`} />
          <meta name="twitter:creator" content="Service Canada" />
          <meta
            property="twitter:description"
            content={`${t("404errorMetaDescription")}`}
          />
          <meta property="twitter:image" content={`${t("metaImage")}`} />
          <meta property="twitter:image:alt" content={`${t("siteTitle")}`} />
        </Head>
        <section className="layout-container pb-44">
          <div className="pt-6">
            <img
              src={`https://www.canada.ca${
                props.locale === "en"
                  ? pageData.scGcImages[0].scImageEn._path
                  : pageData.scGcImages[0].scImageFr._path
              }`}
              alt={
                props.locale === "en"
                  ? pageData.scGcImages[0].scImageAltTextEn
                  : pageData.scGcImages[0].scImageAltTextFr
              }
              width={575}
              height={59}
            />
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-8">
            <div>
              <div className="relative h-auto xl:w-96 xxl:w-400px lg:w-72 xl:h-400px lg:h-500px mb-8 lg:mb-0">
                <h1 className="font-bold font-display mb-4">
                  {pageData.scContentEn.json[0].content[0].value}
                </h1>
                <p className="font-bold font-body mb-8">
                  {pageData.scContentEn.json[1].content[0].value}
                </p>
                <p className="font-body text-sm mb-4 leading-30px">
                  {pageData.scContentEn.json[2].content[0].value}
                </p>
                <div className="flex">
                  <span className="error404-link" />
                  <p className="font-body text-sm leading-30px">
                    {pageData.scContentEn.json[3].content[0].value}
                    <Link
                      href={pageData.scContentEn.json[3].content[1].data.href}
                      className="underline hover:text-canada-footer-hover-font-blue text-canada-footer-font"
                    >
                      {pageData.scContentEn.json[3].content[1].value}
                    </Link>
                  </p>
                </div>
              </div>
              <ReportAProblem language={"en"} />
            </div>
            <div className="flex items-center justify-center circle-background my-8 mx-4 lg:mt-0 lightbulb-bg shrink-0">
              <span className="relative lightbulb">
                <img
                  src={`https://www.canada.ca${
                    props.locale === "en"
                      ? pageData.scImageList[0].scImageEn._path
                      : pageData.scImageList[0].scImageFr._path
                  }`}
                  alt=""
                />
              </span>
            </div>
            <div>
              <div
                className="relative h-auto xl:w-96 xxl:w-400px lg:w-72 xl:h-400px lg:h-500px mb-8 lg:mb-0"
                lang="fr"
              >
                <h1 className="font-bold font-display mb-4">
                  {pageData.scContentFr.json[0].content[0].value}
                </h1>
                <p className="font-bold font-body mb-8">
                  {pageData.scContentFr.json[1].content[0].value}
                </p>
                <p className="font-body text-sm mb-4 leading-30px">
                  {pageData.scContentFr.json[2].content[0].value}
                </p>
                <div className="flex">
                  <span className="error404-link" />
                  <p className="font-body text-sm leading-30px">
                    {pageData.scContentFr.json[3].content[0].value}
                    <Link
                      href={pageData.scContentFr.json[3].content[1].data.href}
                      className="underline hover:text-canada-footer-hover-font-blue text-canada-footer-font"
                    >
                      {pageData.scContentFr.json[3].content[1].value}
                    </Link>
                  </p>
                </div>
              </div>
              <ReportAProblem language="fr" />
            </div>
          </div>
        </section>
        <footer className="h-100px w-screen bg-footer-background-color absolute bottom-0">
          <div className="layout-container flex justify-between lg:flex-row-reverse pt-4 lg:pt-0 lg:mt-8">
            <ActionButton
              id="404TopOfPageButton"
              href="#"
              custom="text-left w-32 flex flex-col lg:hidden"
              text="Top of page / Haut de la page"
              icon="icon-up-caret"
              iconEnd
            />
            <span className="relative footer-logo">
              <img
                src={`https://www.canada.ca${
                  props.locale === "en"
                    ? pageData.scGcImages[1].scImageEn._path
                    : pageData.scGcImages[1].scImageFr._path
                }`}
                alt={
                  props.locale === "en"
                    ? pageData.scGcImages[1].scImageAltTextEn
                    : pageData.scGcImages[1].scImageAltTextFr
                }
              />
            </span>
          </div>
        </footer>
      </div>
      {props.adobeAnalyticsUrl ? (
        <script type="text/javascript">_satellite.pageBottom()</script>
      ) : (
        ""
      )}
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  const { data } = await aemServiceInstance.getFragment("error404Query");

  return {
    props: {
      locale: locale,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL,
      ...(await serverSideTranslations("en", ["common"])),
      ...(await serverSideTranslations("fr", ["common"])),
      pageData: data.scLabsErrorPagev1ByPath,
    },
  };
};
