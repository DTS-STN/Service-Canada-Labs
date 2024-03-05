import Head from "next/head";
import Link from "next/link";
import { ActionButton } from "../components/atoms/ActionButton";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import aemServiceInstance from "../services/aemServiceInstance";

export default function ErrorPage(props) {
  const { t } = useTranslation("common");
  const { query } = useRouter();
  const [pageData] = useState(props.pageData.item);

  const statusCode = query.statusCode || "";
  const errorTitle =
    query.errorTitle || pageData.scContentEn.json[0].content[0].value;
  const errorTitleFr =
    query.errorTitleFr || pageData.scContentFr.json[0].content[0].value;
  const errorMessage =
    query.errorMessage || pageData.scContentEn.json[1].content[0].value;
  const errorMessageFr =
    query.errorMessageFr || pageData.scContentFr.json[1].content[0].value;

  useEffect(() => {
    if (props.adobeAnalyticsUrl) {
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ event: "pageLoad" });
    }
  }, []);

  return (
    <>
      <main className="min-h-screen relative">
        <Head>
          {/* Primary HTML Meta Tags */}
          <title data-gc-analytics-error={props.statusCode}>
            {pageData.scContentEn.json[0].content[0].value} |{" "}
            {pageData.scContentFr.json[0].content[0].value}
          </title>
          <link rel="schema.dcterms" href="http://purl.org/dc/terms/" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta
            name="description"
            content={
              props.locale === "en"
                ? `${errorTitle}` + `${errorMessage}`
                : `${errorTitleFr}` + `${errorMessageFr}`
            }
          />
          <meta name="author" content="Service Canada" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="robots" content="noindex, nofollow" />

          {/* DCMI Meta Tags */}
          <meta
            property="dcterms:title"
            lang="en"
            content="The web site has reported an error"
          />
          <meta
            property="dcterms:title"
            lang="fr"
            content="Le site Web a signalé une erreur"
          />
          <meta
            name="dcterms.language"
            content={props.locale === "en" ? "eng" : "fra"}
            title="ISO639-2"
          />
          <meta property="dcterms:creator" lang="en" content="Service Canada" />
          <meta property="dcterms:creator" lang="fr" content="Service Canada" />

          <meta
            property="dcterms:subject"
            lang="en"
            title="gccore"
            content="GV Government and Politics;Government services"
          />
          <meta
            property="dcterms:subject"
            lang="fr"
            title="gccore"
            content="GV Gouvernement et vie politique;Services gouvernementaux"
          />
          <meta
            property="dcterms:description"
            lang="en"
            content="Error message stating that the site has reported an error."
          />
          <meta
            property="dcterms:description"
            lang="fr"
            content="Message d'erreur indiquant que le site a signalé une erreur."
          />
          <meta
            name="dcterms.creator"
            content={
              props.locale === "en"
                ? "Employment and Social Development Canada"
                : "Emploi et Développement social Canada"
            }
          />

          <meta name="dcterms.accessRights" content="2" />
          <meta
            name="dcterms.service"
            content="ESDC-EDSC_SCLabs-LaboratoireSC"
          />
          <meta name="dcterms.issued" title="W3CDTF" content="2021-06-28" />
          <meta name="dcterms.modified" title="W3CDTF" content="2021-12-16" />
          <meta property="dcterms:modified" content="2021-12-16" />
          <meta property="dcterms:issued" content="2021-06-28" />
          <meta
            name="dcterms.subject"
            content="GV Government and Politics;Government services"
          />
          <meta name="dcterms.language" title="ISO639-2" content="eng" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:locale" content={props.locale} />
          <meta
            property="og:url"
            content={
              "https://alpha.service.canada.ca/" + `${props.locale}` + "/error"
            }
          />
          <meta
            property="og:title"
            content="The web site has reported an error | Le site Web a signalé une erreur"
          />
          <meta
            property="og:description"
            content={
              props.locale === "en"
                ? `${errorTitle}` + `${errorMessage}`
                : `${errorTitleFr}` + `${errorMessageFr}`
            }
          />
          <meta property="og:image" content={`${t("metaImage")}`} />
          <meta property="og:image:alt" content={`${t("siteTitle")}`} />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content={
              "https://alpha.service.canada.ca/" + `${props.locale}` + "/error"
            }
          />
          <meta
            property="twitter:title"
            content="The web site has reported an error | Le site Web a signalé une erreur"
          />
          <meta name="twitter:creator" content="Service Canada" />
          <meta
            property="twitter:description"
            content={
              props.locale === "en"
                ? `${errorTitle}` + `${errorMessage}`
                : `${errorTitleFr}` + `${errorMessageFr}`
            }
          />
          <meta property="twitter:image" content={`${t("metaImage")}`} />
          <meta property="twitter:image:alt" content={`${t("siteTitle")}`} />
        </Head>
        <div>
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
              {/* Left Side (English section) */}
              <div>
                <div className="relative h-auto xl:w-96 xxl:w-400px lg:w-72 lg:h-500px mb-8 lg:mb-0">
                  <h1
                    className="font-bold font-display mb-4"
                    data-testid="heading-en"
                  >
                    {errorTitle}
                  </h1>
                  {statusCode ? (
                    <p
                      className="font-bold font-body mb-8"
                      data-testid="statuscode-en"
                    >
                      {pageData.scContentEn.json[2].content[0].value}{" "}
                      {statusCode}
                    </p>
                  ) : (
                    ""
                  )}
                  <p
                    className="font-body text-p font-bold mb-4 leading-30px"
                    data-testid="errormessage-en"
                  >
                    {errorMessage}
                  </p>
                  {errorMessage === "Wrong URL" ? (
                    <>
                      {/* Wrong URL English Section */}
                      <p className="font-body text-sm leading-30px mb-5">
                        {pageData.scContentEn.json[3].content[0].value}
                      </p>
                      <ul>
                        <li className="flex">
                          <span className="error404-link" />
                          <p className="font-body text-sm leading-30px">
                            {pageData.scContentEn.json[4].content[0].value}
                          </p>
                        </li>
                        <li className="flex">
                          <span className="error404-link" />
                          <p className="font-body text-sm leading-30px">
                            {pageData.scContentEn.json[5].content[0].value}
                            <a
                              href={`mailto:${process.env.NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL}`}
                              className="text-custom-blue-link underline"
                            >
                              {
                                process.env
                                  .NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL
                              }
                            </a>{" "}
                            {pageData.scContentEn.json[6].content[0].value}
                          </p>
                        </li>
                      </ul>
                      <p className="font-body text-sm leading-30px mt-5">
                        {pageData.scContentEn.json[7].content[0].value}
                      </p>
                    </>
                  ) : errorMessage === "Expired URL" ? (
                    <>
                      {/* Expired URL English Section */}
                      <p className="font-body text-sm leading-30px mb-5">
                        {pageData.scContentEn.json[8].content[0].value}
                      </p>
                      <ul>
                        <li className="flex">
                          <span className="error404-link" />
                          <p className="font-body text-sm leading-30px">
                            <Link
                              href="/en/home"
                              locale={false}
                              className="underline hover:text-canada-footer-hover-font-blue text-canada-footer-font"
                            >
                              {pageData.scContentEn.json[9].content[0].value}
                            </Link>{" "}
                            {pageData.scContentEn.json[9].content[1].value}
                          </p>
                        </li>
                      </ul>
                      <p className="font-body text-sm leading-30px mt-5">
                        {pageData.scContentEn.json[7].content[0].value}
                      </p>
                    </>
                  ) : (
                    /* General Error English Section */
                    <div className="flex">
                      <span className="error404-link" />
                      <p className="font-body text-sm leading-30px">
                        {pageData.scContentEn.json[10].content[0].value}
                        <Link
                          href="/en/home"
                          locale={false}
                          className="underline hover:text-canada-footer-hover-font-blue text-canada-footer-font"
                        >
                          {pageData.scContentEn.json[10].content[1].value}
                        </Link>
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-center circle-background my-8 lg:mt-0 lightbulb-bg">
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
              {/* Right Side (French section) */}
              <div>
                <div
                  className="relative h-auto xl:w-96 xxl:w-400px lg:w-72 lg:h-500px mb-8 lg:mb-0"
                  lang="fr"
                >
                  <h1
                    className="font-bold font-display mb-4"
                    data-testid="heading-fr"
                  >
                    {errorTitleFr}
                  </h1>
                  {statusCode ? (
                    <p
                      className="font-bold font-body mb-8"
                      data-testid="statuscode-fr"
                    >
                      {pageData.scContentFr.json[2].content[0].value}{" "}
                      {statusCode}
                    </p>
                  ) : (
                    ""
                  )}
                  <p
                    className="font-body text-p font-bold mb-4 leading-30px"
                    data-testid="errormessage-fr"
                  >
                    {errorMessageFr}
                  </p>
                  {errorMessageFr === "URL erronée" ? (
                    <>
                      {/* Wrong URL French Section */}
                      <p className="font-body text-sm leading-30px mb-5">
                        {pageData.scContentFr.json[3].content[0].value}
                      </p>
                      <ul>
                        <li className="flex">
                          <span className="error404-link" />
                          <p className="font-body text-sm leading-30px">
                            {pageData.scContentFr.json[4].content[0].value}
                          </p>
                        </li>
                        <li className="flex">
                          <span className="error404-link" />
                          <p className="font-body text-sm leading-30px">
                            {pageData.scContentFr.json[5].content[0].value}
                            <a
                              href={`mailto:${process.env.NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL}`}
                              className="text-custom-blue-link underline"
                            >
                              {
                                process.env
                                  .NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL
                              }
                            </a>{" "}
                            {pageData.scContentFr.json[6].content[0].value}
                          </p>
                        </li>
                      </ul>
                      <p className="font-body text-sm leading-30px mt-5">
                        {pageData.scContentFr.json[7].content[0].value}
                      </p>
                    </>
                  ) : errorMessageFr === "URL expirée" ? (
                    <>
                      {/* Expired URL French Section */}
                      <p className="font-body text-sm leading-30px mb-5">
                        {pageData.scContentFr.json[8].content[0].value}
                      </p>
                      <ul>
                        <li className="flex">
                          <span className="error404-link" />
                          <p className="font-body text-sm leading-30px">
                            <Link
                              href="/fr/accueil"
                              locale={false}
                              className="underline hover:text-canada-footer-hover-font-blue text-canada-footer-font"
                            >
                              {pageData.scContentFr.json[9].content[0].value}
                            </Link>
                            {pageData.scContentFr.json[9].content[1].value}
                          </p>
                        </li>
                      </ul>
                      <p className="font-body text-sm leading-30px mt-5">
                        {pageData.scContentFr.json[7].content[0].value}
                      </p>
                    </>
                  ) : (
                    /* General Error French Section */
                    <div className="flex">
                      <span className="error404-link" />
                      <p className="font-body text-sm leading-30px">
                        {pageData.scContentFr.json[10].content[0].value}
                        <Link
                          href="/fr/accueil"
                          locale={false}
                          className="underline hover:text-canada-footer-hover-font-blue text-canada-footer-font"
                        >
                          {pageData.scContentFr.json[10].content[1].value}
                        </Link>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
        <footer className="h-100px w-screen bg-footer-background-color absolute bottom-0">
          <div className="layout-container flex justify-between lg:flex-row-reverse pt-4 lg:pt-0 lg:mt-8">
            <ActionButton
              id="errorTopOfPageButton"
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
      </main>
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  const { data } = await aemServiceInstance.getFragment("customErrorQuery");

  return {
    props: {
      locale: locale,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL,
      ...(await serverSideTranslations("en", ["common"])),
      ...(await serverSideTranslations("fr", ["common"])),
      pageData: data.sclabsErrorpageV1ByPath,
    },
  };
};
