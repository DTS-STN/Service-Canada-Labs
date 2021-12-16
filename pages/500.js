import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { ReportAProblem } from "../components/organisms/ReportAProblem";
import { ActionButton } from "../components/atoms/ActionButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function error500(props) {
  const { t } = useTranslation("common");
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();

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
            The web site has reported an error (500) | Le site Web a signalé une
            erreur (500)
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
          <img
            className="h-auto w-60 pt-6 xl:w-96 xxl:w-1/2"
            src={"/sig-blk-en.svg"}
            alt={"Symbol of the Government of Canada"}
          />
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-8">
            <div>
              <div className="relative h-auto xl:w-96 xxl:w-400px lg:w-72 xl:h-400px lg:h-500px mb-8 lg:mb-0">
                <h1 className="font-bold font-display mb-4">
                  The web site has reported an error. Please try again later.
                </h1>
                <p className="font-bold font-body mb-8">Error 500</p>
                <p className="font-body text-sm mb-4 leading-30px">
                  It may be due to server trouble or an incorrect or expired
                  URL. If the problem persists, report the problem.
                </p>
                <div className="flex">
                  <span className="error404-link" />
                  <p className="font-body text-sm leading-30px">
                    Return to the &nbsp;
                    <Link href="/">
                      <a className="underline hover:text-canada-footer-hover-font-blue text-canada-footer-font">
                        Service Canada Labs home page
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
              <ReportAProblem language={"en"} />
            </div>
            <div className="flex items-center justify-center circle-background my-8 lg:mt-0">
              <img
                className="w-68px xl:w-24"
                src="/crackedbulb.svg"
                alt="Cracked lightbulb"
              />
            </div>
            <div>
              <div
                className="relative h-auto xl:w-96 xxl:w-400px lg:w-72 xl:h-400px lg:h-500px mb-8 lg:mb-0"
                lang="fr"
              >
                <h1 className="font-bold font-display mb-4">
                  Le site Web a signalé une erreur. Veuiller réessayer plus
                  tard.
                </h1>
                <p className="font-bold font-body mb-8">Erreur 500</p>
                <p className="font-body text-sm mb-4 leading-30px">
                  Cela peut être dû à un problème de serveur ou à une URL
                  incorrecte ou expirée. Si le problème persiste, signalez-le.
                </p>
                <div className="flex">
                  <span className="error404-link" />
                  <p className="font-body text-sm leading-30px">
                    Retournez à la &nbsp;
                    <Link href="/fr">
                      <a className="underline hover:text-canada-footer-hover-font-blue text-canada-footer-font">
                        page d'accueil des laboratoires de Service Canada
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
            <img
              className="h-6 w-auto lg:h-auto lg:w-40"
              src="/wmms-blk.svg"
              alt="Symbol of the Government of Canada"
            />
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

export const getStaticProps = async ({ locale }) => ({
  props: {
    locale: locale,
    ...(await serverSideTranslations("en", ["common"])),
    ...(await serverSideTranslations("fr", ["common"])),
  },
});
