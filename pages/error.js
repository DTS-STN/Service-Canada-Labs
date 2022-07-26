import Head from "next/head";
import Link from "next/link";
import { ReportAProblem } from "../components/organisms/ReportAProblem";
import { ActionButton } from "../components/atoms/ActionButton";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import queryGraphQL from "../graphql/client";
import getCustomErrorPage from "../graphql/queries/customErrorQuery.graphql";
import Image from "next/image";

export default function ErrorPage(props) {
  const { t } = useTranslation("common");
  const { query } = useRouter();
  const [pageData] = useState(props.pageData.item);

  const statusCode = query.statusCode || "";
  const errorTitle =
    query.errorTitle || pageData.sclContentEn.json[0].content[0].value;
  const errorTitleFr =
    query.errorTitleFr || pageData.sclContentFr.json[0].content[0].value;
  const errorMessage =
    query.errorMessage || pageData.sclContentEn.json[1].content[0].value;
  const errorMessageFr =
    query.errorMessageFr || pageData.sclContentFr.json[1].content[0].value;

  useEffect(() => {
    if (props.adobeAnalyticsUrl) {
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ event: "pageLoad" });
    }
  }, []);

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
          <title data-gc-analytics-error={props.statusCode}>
            {pageData.sclContentEn.json[0].content[0].value} |{" "}
            {pageData.sclContentFr.json[0].content[0].value}
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
            content="Message d’erreur indiquant que le site a signalé une erreur."
          />
          <meta name="dcterms.creator" content={t("creator")} />

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
        <main>
          <section className="layout-container pb-44">
            <div className="pt-6">
              <Image
                src={`https://www.canada.ca${pageData.sclGcImages[0]._path}`}
                alt={"Symbol of the Government of Canada"}
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
                      {pageData.sclContentEn.json[2].content[0].value}{" "}
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
                        {pageData.sclContentEn.json[3].content[0].value}
                      </p>
                      <ul>
                        <li className="flex">
                          <span className="error404-link" />
                          <p className="font-body text-sm leading-30px">
                            {pageData.sclContentEn.json[4].content[0].value}
                          </p>
                        </li>
                        <li className="flex">
                          <span className="error404-link" />
                          <p className="font-body text-sm leading-30px">
                            {pageData.sclContentEn.json[5].content[0].value}
                            <a
                              href={`mailto:${process.env.NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL}`}
                              className="text-custom-blue-link underline"
                            >
                              {
                                process.env
                                  .NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL
                              }
                            </a>{" "}
                            {pageData.sclContentEn.json[6].content[0].value}
                          </p>
                        </li>
                      </ul>
                      <p className="font-body text-sm leading-30px mt-5">
                        {pageData.sclContentEn.json[7].content[0].value}
                      </p>
                    </>
                  ) : errorMessage === "Expired URL" ? (
                    <>
                      {/* Expired URL English Section */}
                      <p className="font-body text-sm leading-30px mb-5">
                        {pageData.sclContentEn.json[8].content[0].value}
                      </p>
                      <ul>
                        <li className="flex">
                          <span className="error404-link" />
                          <p className="font-body text-sm leading-30px">
                            <Link
                              href={
                                pageData.sclContentEn.json[9].content[0].data
                                  .href
                              }
                            >
                              <a className="underline hover:text-canada-footer-hover-font-blue text-canada-footer-font">
                                {pageData.sclContentEn.json[9].content[0].value}
                              </a>
                            </Link>{" "}
                            {pageData.sclContentEn.json[9].content[1].value}
                          </p>
                        </li>
                      </ul>
                      <p className="font-body text-sm leading-30px mt-5">
                        {pageData.sclContentEn.json[7].content[0].value}
                      </p>
                    </>
                  ) : (
                    /* General Error English Section */
                    <div className="flex">
                      <span className="error404-link" />
                      <p className="font-body text-sm leading-30px">
                        {pageData.sclContentEn.json[10].content[0].value}
                        <Link
                          href={
                            pageData.sclContentEn.json[10].content[1].data.href
                          }
                        >
                          <a className="underline hover:text-canada-footer-hover-font-blue text-canada-footer-font">
                            {pageData.sclContentEn.json[10].content[1].value}
                          </a>
                        </Link>
                      </p>
                    </div>
                  )}
                </div>
                <ReportAProblem language="en" />
              </div>
              <div className="flex items-center justify-center circle-background my-8 lg:mt-0 lightbulb-bg">
                <span className="relative lightbulb">
                  <Image
                    src={`https://www.canada.ca${pageData.sclImagelist[0]._path}`}
                    alt="Cracked lightbulb"
                    layout="fill"
                    objectFit="cover"
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
                      {pageData.sclContentFr.json[2].content[0].value}{" "}
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
                        {pageData.sclContentFr.json[3].content[0].value}
                      </p>
                      <ul>
                        <li className="flex">
                          <span className="error404-link" />
                          <p className="font-body text-sm leading-30px">
                            {pageData.sclContentFr.json[4].content[0].value}
                          </p>
                        </li>
                        <li className="flex">
                          <span className="error404-link" />
                          <p className="font-body text-sm leading-30px">
                            {pageData.sclContentFr.json[5].content[0].value}
                            <a
                              href={`mailto:${process.env.NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL}`}
                              className="text-custom-blue-link underline"
                            >
                              {
                                process.env
                                  .NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL
                              }
                            </a>
                            {pageData.sclContentFr.json[6].content[0].value}
                          </p>
                        </li>
                      </ul>
                      <p className="font-body text-sm leading-30px mt-5">
                        {pageData.sclContentFr.json[7].content[0].value}
                      </p>
                    </>
                  ) : errorMessageFr === "URL expirée" ? (
                    <>
                      {/* Expired URL French Section */}
                      <p className="font-body text-sm leading-30px mb-5">
                        {pageData.sclContentFr.json[8].content[0].value}
                      </p>
                      <ul>
                        <li className="flex">
                          <span className="error404-link" />
                          <p className="font-body text-sm leading-30px">
                            <Link
                              href={
                                pageData.sclContentFr.json[9].content[0].data
                                  .href
                              }
                            >
                              <a className="underline hover:text-canada-footer-hover-font-blue text-canada-footer-font">
                                {pageData.sclContentFr.json[9].content[0].value}
                              </a>
                            </Link>{" "}
                            {pageData.sclContentFr.json[9].content[1].value}
                          </p>
                        </li>
                      </ul>
                      <p className="font-body text-sm leading-30px mt-5">
                        {pageData.sclContentFr.json[7].content[0].value}
                      </p>
                    </>
                  ) : (
                    /* General Error French Section */
                    <div className="flex">
                      <span className="error404-link" />
                      <p className="font-body text-sm leading-30px">
                        {pageData.sclContentFr.json[10].content[0].value}
                        <Link
                          href={
                            pageData.sclContentFr.json[10].content[1].data.href
                          }
                        >
                          <a className="underline hover:text-canada-footer-hover-font-blue text-canada-footer-font">
                            {pageData.sclContentFr.json[10].content[1].value}
                          </a>
                        </Link>
                      </p>
                    </div>
                  )}
                </div>
                <ReportAProblem language="fr" />
              </div>
            </div>
          </section>
        </main>
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
              <Image
                src={`https://www.canada.ca${pageData.sclGcImages[1]._path}`}
                alt="Symbol of the Government of Canada"
                layout="fill"
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
  // get page data from AEM
  const res = await queryGraphQL(getCustomErrorPage).then((result) => {
    return result;
  });

  const data = res.data.scLabsErrorPageByPath;

  return process.env.ISR_ENABLED
    ? {
        props: {
          locale: locale,
          adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL,
          ...(await serverSideTranslations("en", ["common"])),
          ...(await serverSideTranslations("fr", ["common"])),
          pageData: data,
        },
        revalidate: 60, // revalidate once an minute
      }
    : {
        props: {
          locale: locale,
          adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL,
          ...(await serverSideTranslations("en", ["common"])),
          ...(await serverSideTranslations("fr", ["common"])),
          pageData: data,
        },
      };
};
