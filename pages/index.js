import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ActionButton } from "../components/atoms/ActionButton";
import Link from "next/link";
import { useEffect } from "react";

export default function Index(props) {
  const { t } = useTranslation("common");

  useEffect(() => {
    if (props.adobeAnalyticsUrl) {
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ event: "pageLoad" });
    }
    document.documentElement.lang = "en";
  }, []);

  return (
    <>
      <div className="splash-bg splash-image bg-splash-img-mobile xs:bg-splash-img bg-no-repeat h-screen min-w-300px min-h-screen" />
      <Head>
        {props.adobeAnalyticsUrl ? (
          <script src={props.adobeAnalyticsUrl} />
        ) : (
          ""
        )}

        {/* Primary HTML Meta Tags */}
        <title>Service Canada Labs | Laboratoires de Service Canada</title>
        <meta
          name="description"
          content="Explore the Service Canada Labs in English or French."
        />
        <meta name="author" content="Service Canada" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="schema.dcterms" href="http://purl.org/dc/terms/" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="noindex, follow" />

        {/* DCMI Meta Tags */}
        <meta
          property="dcterms:title"
          lang="en"
          content="Service Canada Labs"
        />
        <meta
          property="dcterms:title"
          lang="fr"
          content="Laboratoires de Service Canada"
        />
        <meta
          name="dcterms.language"
          content={props.locale === "en" ? "eng" : "fra"}
          title="ISO639-2"
        />
        <meta property="dcterms:creator" lang="en" content="Service Canada" />
        <meta property="dcterms:creator" lang="fr" content="Service Canada" />
        <meta name="dcterms.accessRights" content="2" />
        <meta name="dcterms.service" content="ESDC-EDSC_SCLabs-LaboratoireSC" />
        <meta name="dcterms.issued" content="2021-05-06" />
        <meta property="dcterms:modified" content="2021-12-16" />
        <meta name="dcterms.issued" title="W3CDTF" content="2021-05-06" />
        <meta name="dcterms.modified" title="W3CDTF" content="2021-12-16" />
        <meta
          property="dcterms:description"
          lang="en"
          content="Explore the Service Canada Labs in English or French."
        />
        <meta
          property="dcterms:description"
          lang="fr"
          content="Explorez les laboratoires de Service Canda en français ou en anglais."
        />
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

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={props.locale} />
        <meta property="og:url" content={"https://alpha.service.canada.ca/"} />
        <meta
          property="og:title"
          content="Service Canada Labs | Laboratoires de Service Canada"
        />
        <meta
          property="og:description"
          content="Explore the Service Canada Labs in English or French."
        />
        <meta property="og:image" content={`${t("metaImage")}`} />
        <meta property="og:image:alt" content={`${t("siteTitle")}`} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={"https://alpha.service.canada.ca/"}
        />
        <meta
          property="twitter:title"
          content="Service Canada Labs | Laboratoires de Service Canada"
        />
        <meta name="twitter:creator" content="Service Canada" />
        <meta
          property="twitter:description"
          content="Explore the Service Canada Labs in English or French."
        />
        <meta property="twitter:image" content={`${t("metaImage")}`} />
        <meta property="twitter:image:alt" content={`${t("siteTitle")}`} />
      </Head>
      <main className="h-full flex justify-center">
        <div className="splash-cta fixed flex flex-col sm:justify-center sm:items-center">
          <div className="z-10 bg-white h-auto min-w-300px w-300px xl:w-500px bg-custom-gray-index">
            <h1 className="sr-only">alpha.service.canada.ca</h1>
            <div className="p-4">
              <img
                src={"/sig-blk-en.svg"}
                alt={"Government of Canada / Gouvernement du Canada"}
                width="300"
                height="35"
              />
            </div>
            <div className="flex w-max container mx-auto py-6 font-display">
              <h2
                className="text-p text-right xl:text-h4 mr-6 w-32 xl:w-40"
                lang="en"
              >
                Service Canada Labs
              </h2>
              <h2 className="text-p xl:text-h4 w-32 xl:w-40" lang="fr">
                Laboratoires de Service Canada
              </h2>
            </div>
            <div className="flex w-max container pb-6 mx-auto font-display">
              <ActionButton
                id="english-button"
                style="primary"
                text="English"
                lang="en"
                custom="justify-center w-7.5rem xl:w-138px mr-6"
                href="/en/home"
              />
              <ActionButton
                id="french-button"
                style="primary"
                text="Français"
                href="/fr/accueil"
                lang="fr"
                custom="justify-center w-7.5rem xl:w-138px"
              />
            </div>
          </div>
          <div className="relative py-7 bg-splash-page-bottom text-p h-auto min-w-300px w-300px flex justify-between container p-6 xl:w-500px xl:items-center">
            <div className="w-28 text-base xl:text-p xl:w-max font-body">
              <Link
                href="https://www.canada.ca/en/transparency/terms.html"
                className="inline-block w-28 xl:w-max mr-0 hover:text-canada-footer-hover-font-blue text-canada-footer-font splash-link"
              >
                Terms & conditions
              </Link>
              <Link
                href="https://www.canada.ca/fr/transparence/avis.html"
                className="inline-block hover:text-canada-footer-hover-font-blue text-canada-footer-font"
                lang="fr"
              >
                Avis
              </Link>
            </div>
            <img
              src="/wmms-blk.svg"
              alt="Symbol of the Government of Canada / Symbole du gouvernement du Canada"
              width="150"
              height="25"
            />
          </div>
        </div>
      </main>
      {props.adobeAnalyticsUrl ? (
        <script type="text/javascript">_satellite.pageBottom()</script>
      ) : (
        ""
      )}
    </>
  );
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    locale: locale ?? "en",
    adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL ?? "",
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
