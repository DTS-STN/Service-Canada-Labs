import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ActionButton } from "../components/atoms/ActionButton";
import Link from "next/link";
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function Index(props) {
  const { t } = useTranslation("common");

  const setLanguage = (event) => {
    event.target.id === "french-button"
      ? Cookies.set("lang", "fr", { sameSite: "strict" })
      : Cookies.set("lang", "en", { sameSite: "strict" });
  };

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL) {
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ event: "pageLoad" });
    }
  }, []);

  return (
    <>
      <div className="z-0 fixed inset-0 bg-splash-img-mobile xs:bg-splash-img bg-cover bg-center h-screen min-w-300px min-h-screen" />
      <Head>
        {process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL ? (
          <script src={process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL} />
        ) : (
          ""
        )}

        {/* Primary HTML Meta Tags */}
        <title>Service Canada Labs | Laboratoires de Service Canada</title>
        <meta
          name="description"
          content={`${t("scLabsSplash")} — ${t("siteTitle")}`}
        />
        <meta name="author" content="Service Canada" />
        <link rel="icon" href="/favicon.ico" />

        {/* DCMI Meta Tags */}
        <meta
          name="dcterms.title"
          content={`${t("scLabsSplash")} — ${t("siteTitle")}`}
        />
        <meta
          name="dcterms.language"
          content={props.locale === "en" ? "eng" : "fra"}
        />
        <meta name="dcterms.creator" content={t("creator")} />
        <meta name="dcterms.accessRights" content="2" />
        <meta name="dcterms.service" content="ESDC-EDSC_SCLabs-LaboratoireSC" />
        <meta name="dcterms.issued" content="2021-05-06" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={props.locale} />
        <meta property="og:url" content={"https://alpha.service.canada.ca/"} />
        <meta
          property="og:title"
          content={`${t("scLabsSplash")} — ${t("siteTitle")}`}
        />
        <meta
          property="og:description"
          content={`${t("scLabsSplash")} — ${t("siteTitle")}`}
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
          content={`${t("scLabsSplash")} — ${t("siteTitle")}`}
        />
        <meta name="twitter:creator" content={t("creator")} />
        <meta
          property="twitter:description"
          content={`${t("scLabsSplash")} — ${t("siteTitle")}`}
        />
        <meta property="twitter:image" content={`${t("metaImage")}`} />
        <meta property="twitter:image:alt" content={`${t("siteTitle")}`} />
      </Head>
      <main>
        <div className="flex flex-col justify-center items-center m-auto v-xxs:h-screen">
          <div className="z-10 bg-white h-auto min-w-300px w-300px xl:w-500px">
            <h1 className="sr-only">alpha.service.canada.ca</h1>
            <img
              className="h-auto w-64 container mx-auto pt-6 xl:w-2/3 xl:mx-0 xl:px-6"
              src={"/sig-blk-en.svg"}
              alt={"Government of Canada / Gouvernement du Canada"}
            />
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
                text="English"
                lang="en"
                className="text-center text-sm w-7.5rem xl:w-138px py-3.5 mr-6 rounded leading-3"
                href="/home"
                onClick={setLanguage}
              />
              <ActionButton
                id="french-button"
                text="Français"
                className="text-center w-7.5rem xl:w-138px text-sm py-3.5 rounded leading-3"
                href="/fr/accueil"
                lang="fr"
                onClick={setLanguage}
              />
            </div>
          </div>
          <div className="relative py-7 bg-splash-page-bottom text-p h-auto min-w-300px w-300px flex justify-between container p-6 xl:w-500px xl:items-center">
            <div className="w-28 text-base xl:text-p xl:w-max font-body">
              <Link href="https://www.canada.ca/en/transparency/terms.html">
                <a className="inline-block w-28 xl:w-max mr-0 hover:text-canada-footer-hover-font-blue text-canada-footer-font splash-link">
                  Terms & conditions
                </a>
              </Link>
              <Link href="https://www.canada.ca/fr/transparence/avis.html">
                <a
                  className="inline-block hover:text-canada-footer-hover-font-blue text-canada-footer-font"
                  lang="fr"
                >
                  Avis
                </a>
              </Link>
            </div>
            <img
              className="h-auto w-24 xl:w-28"
              src="/wmms-blk.svg"
              alt="Symbol of the Government of Canada / Symbole du gouvernement du Canada"
            />
          </div>
        </div>
      </main>
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
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
