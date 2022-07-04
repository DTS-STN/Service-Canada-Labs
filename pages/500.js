import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { ReportAProblem } from "../components/organisms/ReportAProblem";
import { ActionButton } from "../components/atoms/ActionButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import queryGraphQL from "../graphql/client";
import get500Page from "../graphql/queries/error500Query.graphql";
import Image from "next/image";

export default function error500(props) {
  const { t } = useTranslation("common");
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();
  const [pageData] = useState(props.pageData.item);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL) {
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
          {process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL ? (
            <script src={process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL} />
          ) : (
            ""
          )}

          {/* Primary HTML Meta Tags */}
          <title data-gc-analytics-error="500">
            {pageData.sclContentEn.json[0].content[0].value} (500) |{" "}
            {pageData.sclContentFr.json[0].content[0].value} (500)
          </title>
          <meta
            name="description"
            content="Error message stating that the server is down, or the URL is incorrect or expired"
          />
          <meta name="author" content="Service Canada" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="schema.dcterms" href="http://purl.org/dc/terms/" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta name="robots" content="noindex, nofollow" />

          {/* DCMI Meta Tags */}
          <meta
            property="dcterms:title"
            lang="en"
            content="The web site has reported an error (500)"
          />
          <meta
            property="dcterms:title"
            lang="fr"
            content="Le site Web a signalé une erreur (500)"
          />
          <meta
            name="dcterms.language"
            content={props.locale === "en" ? "eng" : "fra"}
            title="ISO639-2"
          />
          <meta
            property="dcterms:description"
            lang="en"
            content="Error message stating that the server is down, or the URL is incorrect or expired."
          />
          <meta
            property="dcterms:description"
            lang="fr"
            content="Message d’erreur indiquant que le serveur est en panne ou l’URL est incorrecte ou expirée."
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
          <meta name="dcterms.accessRights" content="2" />
          <meta
            name="dcterms.service"
            content="ESDC-EDSC_SCLabs-LaboratoireSC"
          />
          <meta name="dcterms.issued" title="W3CDTF" content="2021-06-22" />
          <meta name="dcterms.modified" title="W3CDTF" content="2021-12-16" />
          <meta property="dcterms:issued" content="2021-06-22" />
          <meta property="dcterms:modified" content="2021-MM-DD" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:locale" content={props.locale} />
          <meta
            property="og:url"
            content={
              "https://alpha.service.canada.ca/" + `${props.locale}` + "/500"
            }
          />
          <meta
            property="og:title"
            content="The web site has reported an error (500) | Le site Web a signalé une
            erreur (500)"
          />
          <meta
            property="og:description"
            content="Error message stating that the server is down, or the URL is incorrect or expired"
          />
          <meta property="og:image" content={`${t("metaImage")}`} />
          <meta property="og:image:alt" content={`${t("siteTitle")}`} />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content={
              "https://alpha.service.canada.ca/" + `${props.locale}` + "/500"
            }
          />
          <meta
            property="twitter:title"
            content="Error message stating that the server is down, or the URL is incorrect or expired"
          />
          <meta name="twitter:creator" content="Service Canada" />
          <meta
            property="twitter:description"
            content="Error message stating that the server is down, or the URL is incorrect or expired"
          />
          <meta property="twitter:image" content={`${t("metaImage")}`} />
          <meta property="twitter:image:alt" content={`${t("siteTitle")}`} />
        </Head>
        <section className="layout-container pb-44">
          <div
            className="relative mt-6"
            style={{
              width: "375px",
              height: "35px",
            }}
          >
            <Image
              src={`https://www.canada.ca${pageData.sclGcImages[0]._path}`}
              alt={"Symbol of the Government of Canada"}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-8">
            <div>
              <div className="relative h-auto xl:w-96 xxl:w-400px lg:w-72 xl:h-400px lg:h-500px mb-8 lg:mb-0">
                <h1 className="font-bold font-display mb-4">
                  {pageData.sclContentEn.json[0].content[0].value}
                </h1>
                <p className="font-bold font-body mb-8">
                  {pageData.sclContentEn.json[1].content[0].value}
                </p>
                <p className="font-body text-sm mb-4 leading-30px">
                  {pageData.sclContentEn.json[2].content[0].value}
                </p>
                <div className="flex">
                  <span className="error404-link" />
                  <p className="font-body text-sm leading-30px">
                    {pageData.sclContentEn.json[3].content[0].content[0].value}
                    <Link
                      href={
                        pageData.sclContentEn.json[3].content[0].content[1].data
                          .href
                      }
                    >
                      <a className="underline hover:text-canada-footer-hover-font-blue text-canada-footer-font">
                        {
                          pageData.sclContentEn.json[3].content[0].content[1]
                            .value
                        }
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
              <ReportAProblem language={"en"} />
            </div>
            <div
              className="flex items-center justify-center circle-background my-8 lg:mt-0"
              style={{ width: "218px", height: "218px" }}
            >
              <span
                className="relative"
                style={{ width: "96.25px", height: "140px" }}
              >
                <Image
                  src={`https://www.canada.ca${pageData.sclImagelist[0]._path}`}
                  alt="Cracked lightbulb"
                  layout="fill"
                  objectFit="cover"
                />
              </span>
            </div>
            <div>
              <div
                className="relative h-auto xl:w-96 xxl:w-400px lg:w-72 xl:h-400px lg:h-500px mb-8 lg:mb-0"
                lang="fr"
              >
                <h1 className="font-bold font-display mb-4">
                  {pageData.sclContentFr.json[0].content[0].value}
                </h1>
                <p className="font-bold font-body mb-8">
                  {pageData.sclContentFr.json[1].content[0].value}
                </p>
                <p className="font-body text-sm mb-4 leading-30px">
                  {pageData.sclContentFr.json[2].content[0].value}
                </p>
                <div className="flex">
                  <span className="error404-link" />
                  <p className="font-body text-sm leading-30px">
                    {pageData.sclContentFr.json[3].content[0].content[0].value}
                    <Link
                      href={
                        pageData.sclContentFr.json[3].content[0].content[1].data
                          .href
                      }
                    >
                      <a className="underline hover:text-canada-footer-hover-font-blue text-canada-footer-font">
                        {
                          pageData.sclContentFr.json[3].content[0].content[1]
                            .value
                        }
                      </a>
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
            <span
              className="relative"
              style={{ width: "104px", height: "25px" }}
            >
              <Image
                src={`https://www.canada.ca${pageData.sclGcImages[1]._path}`}
                alt="Symbol of the Government of Canada"
                layout="fill"
                objectFit="cover"
              />
            </span>
          </div>
        </footer>
      </div>
      {process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL ? (
        <script type="text/javascript">_satellite.pageBottom()</script>
      ) : (
        ""
      )}
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  // get page data from AEM
  const res = await queryGraphQL(get500Page).then((result) => {
    return result;
  });

  const data = res.data.scLabsErrorPageByPath;

  return process.env.NEXT_PUBLIC_ISR_ENABLED
    ? {
        props: {
          locale: locale,
          ...(await serverSideTranslations("en", ["common"])),
          ...(await serverSideTranslations("fr", ["common"])),
          pageData: data,
        },
        revalidate: 60, // revalidate once an minute
      }
    : {
        props: {
          locale: locale,
          ...(await serverSideTranslations("en", ["common"])),
          ...(await serverSideTranslations("fr", ["common"])),
          pageData: data,
        },
      };
};
