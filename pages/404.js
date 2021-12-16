import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { ReportAProblem } from "../components/organisms/ReportAProblem";
import { ActionButton } from "../components/atoms/ActionButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function error404(props) {
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
          <title data-gc-analytics-error="404">
            {`404 — ${t("siteTitle")}`}
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
          <img
            className="h-auto w-60 pt-6 xl:w-96 xxl:w-1/2"
            src={"/sig-blk-en.svg"}
            alt={"Symbol of the Government of Canada"}
          />
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-8">
            <div>
              <div className="relative h-auto xl:w-96 xxl:w-400px lg:w-72 xl:h-400px lg:h-500px mb-8 lg:mb-0">
                <h1 className="font-bold font-display mb-4">
                  We couldn't find that page
                </h1>
                <p className="font-bold font-body mb-8">Error 404</p>
                <p className="font-body text-sm mb-4 leading-30px">
                  We're sorry you ended up here. Sometimes a page gets moved or
                  deleted, but hopefully we can help you find what you're
                  looking for.
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
                  Nous ne trouvons pas cette page
                </h1>
                <p className="font-bold font-body mb-8">Erreur 404</p>
                <p className="font-body text-sm mb-4 leading-30px">
                  Nous sommes désolés que vous ayez abouti ici. Il arrive
                  parfois qu'une page ait été déplacée ou supprimée.
                  Heureusement, nous pouvons vous aider à trouver ce que vous
                  cherchez.
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
