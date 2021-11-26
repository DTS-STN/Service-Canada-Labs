import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ActionButton } from "../components/atoms/ActionButton";
import { useEffect } from "react";
import { CopyToClipboard } from "../components/molecules/CopyToClipboard";
import { useState } from "react";

export default function error404(props) {
  const { t } = useTranslation("common");
  const [enCopied, setEnCopied] = useState(false);
  const [frCopied, setFrCopied] = useState(false);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL) {
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ event: "pageLoad" });
    }
  }, []);

  function onClickEn() {
    setEnCopied(true);
    setFrCopied(false);
  }

  function onClickFr() {
    setFrCopied(true);
    setEnCopied(false);
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
          <title data-gc-analytics-error="notSupported">
            {`Browser not supported — ${t("siteTitle")}`}
          </title>
          {/* Commented out until official descriptions are provided
          <meta
            name="description"
            content={`${t("404errorMetaDescription")}`}
          /> */}
          <meta name="author" content="Service Canada" />
          <link rel="icon" href="/favicon.ico" />

          {/* DCMI Meta Tags */}
          <meta
            name="dcterms.title"
            content={`Browser not supported — ${t("siteTitle")}`}
          />
          <meta
            name="dcterms.language"
            content={props.locale === "en" ? "eng" : "fra"}
          />
          <meta name="dcterms.creator" content={t("creator")} />
          <meta name="dcterms.accessRights" content="2" />
          <meta
            name="dcterms.service"
            content="ESDC-EDSC_SCLabs-LaboratoireSC"
          />
          <meta name="dcterms.issued" content="2021-06-01" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:locale" content={props.locale} />
          <meta
            property="og:url"
            content={
              "https://alpha.service.canada.ca/" +
              `${props.locale}` +
              "/notsupported"
            }
          />
          <meta
            property="og:title"
            content={`Browser not supported — ${t("siteTitle")}`}
          />
          {/* Commented out until official descriptions are provided
          <meta
            property="og:description"
            content={`${t("404errorMetaDescription")}`}
          /> */}
          <meta property="og:image" content={`${t("metaImage")}`} />
          <meta property="og:image:alt" content={`${t("siteTitle")}`} />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content={
              "https://alpha.service.canada.ca/" +
              `${props.locale}` +
              "/notsupported"
            }
          />
          <meta
            property="twitter:title"
            content={`Browser not supported — ${t("siteTitle")}`}
          />
          <meta name="twitter:creator" content={t("creator")} />
          {/* Commented out until official descriptions are provided
          <meta
            property="twitter:description"
            content={`${t("404errorMetaDescription")}`}
          /> */}
          <meta property="twitter:image" content={`${t("metaImage")}`} />
          <meta property="twitter:image:alt" content={`${t("siteTitle")}`} />
        </Head>
        <section className="xs:px-0 lg:mx-auto lg:px-6 container">
          <img
            className="canadaLogo pt-6"
            src={"/sig-blk-en.svg"}
            alt={"Symbol of the Government of Canada"}
          />
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-8">
            <div>
              <div className="relative h-auto xl:w-96 xxl:w-400px lg:w-72 xl:h-400px lg:h-500px mb-8 lg:mb-0">
                <h1 className="font-bold font-display mb-4">
                  Sorry, this site will not work with Internet Explorer
                </h1>
                <p className="font-body text-sm mb-4 leading-normal">
                  Please use one of the following Web browsers to visit Service
                  Canada Labs:
                </p>
              </div>
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
                  Désolé, ce site ne fonctionne pas avec Internet Explorer
                </h1>
                <p className="font-body text-sm mb-4 leading-normal">
                  Veuillez utiliser l'un des navigateurs Web suivants pour
                  accéder aux laboratoires de Service Canada:
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="-mt-0 lg:-mt-36 sm:-mt-4 pb-5">
          <div className="flex items-center justify-center">
            <figure className="mx-4">
              <img src="/chrome.png" alt="safari" width="98" height="98" />
              <figcaption className="flex items-center justify-center">
                Chrome
              </figcaption>
            </figure>
            <figure className="mx-4">
              <img src="/safari.png" alt="safari" width="98" height="98" />
              <figcaption className="flex items-center justify-center">
                Safari
              </figcaption>
            </figure>
            <figure className="mx-4">
              <img src="/edge.png" alt="safari" width="94" height="94" />
              <figcaption className="pt-1.5 flex items-center justify-center">
                Edge
              </figcaption>
            </figure>
            <figure className="mx-4">
              <img src="/firefox.svg" alt="safari" width="98" height="98" />
              <figcaption className="flex items-center justify-center">
                Firefox
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="xs:px-0 lg:mx-auto lg:px-6 container pb-44">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-8">
            <div className="relative h-auto xl:w-96 xxl:w-400px lg:w-72 mb-8 lg:mb-0">
              <p className="font-body text-sm mb-4 leading-normal">
                Copy the link below and paste in that <br />
                browser.
              </p>
              <CopyToClipboard
                buttonId="enClipboardButton"
                buttonText={enCopied ? "Copied!" : "Copy link"}
                buttonStyle={enCopied ? "ieButtonCopied" : "ieButton"}
                value="http://alpha.service.canada.ca/home"
                onClick={onClickEn}
                id="enClipboard"
                name="clipboard_en"
                textFieldStyle="ieTextField"
                aria_label="Copy the link below and paste in that browser."
              />
              <p className="font-body text-sm pt-6 leading-normal">
                If you do not have any of these browsers installed, you can
                download the one of your choice using the links below:
              </p>
              <ul className="underline pt-4 font-body text-sm ieLinksList">
                <li className="browser-item">
                  <a href={t("chromeLink")}>Download Chrome</a>
                </li>
                <li className="browser-item">
                  <a href={t("safariLink")}>Download Safari</a>
                </li>
                <li className="browser-item">
                  <a href={t("edgeLink")}>Download Edge</a>
                </li>
                <li className="browser-item">
                  <a href={t("firefoxLink")}>Download Firefox</a>
                </li>
              </ul>
            </div>
            <div>
              <div
                className="relative h-auto xl:w-96 xxl:w-400px lg:w-72 mb-8 lg:mb-0"
                lang="fr"
              >
                <p className="font-body text-sm mb-4 leading-normal">
                  Vous n'avez qu'à copier le lien ci-dessous et le coller dans
                  ce navigateur.
                </p>
                <CopyToClipboard
                  buttonText={frCopied ? "Copié!" : "Copier lien"}
                  buttonId="frClipboardButton"
                  buttonStyle={frCopied ? "ieButtonCopied" : "ieButton"}
                  value="http://alpha.service.canada.ca/fr/home"
                  onClick={onClickFr}
                  id="frClipboard"
                  name="clipboard_fr"
                  textFieldStyle="ieTextField"
                  aria_label="Vous n'avez qu'à copier le lien ci-dessous et le coller dans ce navigateur."
                />
                <p className="font-body text-sm pt-6 leading-normal">
                  Si aucun de ces navigateurs n'est installé, vous pouvez
                  télécharger celui de votre choix à l'aide des liens
                  ci-dessous:
                </p>
                <ul className="underline pt-4 font-body text-sm ieLinksList">
                  <li className="browser-item">
                    <a href={t("chromeLinkFR")}>Télécharger Chrome</a>
                  </li>
                  <li className="browser-item">
                    <a href={t("safariLinkFR")}>Télécharger Safari</a>
                  </li>
                  <li className="browser-item">
                    <a href={t("edgeLinkFR")}>Télécharger Edge</a>
                  </li>
                  <li className="browser-item">
                    <a href={t("firefoxLinkFR")}>Télécharger Firefox</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <footer className="h-100px w-screen bgGray absolute bottom-0">
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
