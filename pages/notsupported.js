import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ActionButton } from "../components/atoms/ActionButton";
import { useEffect } from "react";
import { CopyToClipboard } from "../components/molecules/CopyToClipboard";
import { useState } from "react";
import aemServiceInstance from "../services/aemServiceInstance";

export default function notSupported(props) {
  const { t } = useTranslation("common");
  const [enCopied, setEnCopied] = useState(false);
  const [frCopied, setFrCopied] = useState(false);
  const [pageData] = useState(props.pageData.item);

  useEffect(() => {
    if (props.adobeAnalyticsUrl) {
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
      <Head>
        {/* Primary HTML Meta Tags */}
        <title data-gc-analytics-error="notSupported">
          {pageData.scContentEn.json[0].content[0].value} |{" "}
          {pageData.scContentFr.json[0].content[0].value}
        </title>
        <meta
          name="description"
          content="Error message stating that the site will not work with Internet Explorer."
        />
        <meta name="author" content="Service Canada" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="schema.dcterms" href="http://purl.org/dc/terms/" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />

        {/* DCMI Meta Tags */}
        <meta
          property="dcterms:title"
          lang="en"
          content="Sorry, this site will not work with Internet Explorer"
        />
        <meta
          property="dcterms:title"
          lang="fr"
          content="Désolé, ce site ne fonctionne pas avec Internet Explorer"
        />
        <meta
          property="dcterms:description"
          lang="en"
          content="Error message stating that the site will not work with Internet Explorer."
        />
        <meta
          property="dcterms:description"
          lang="fr"
          content="Message d'erreur indiquant que le site ne fonctionne pas avec Internet Explorer."
        />
        <meta
          name="dcterms.language"
          content={props.locale === "en" ? "eng" : "fra"}
          title="ISO639-2"
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
        <meta name="dcterms.service" content="ESDC-EDSC_SCLabs-LaboratoireSC" />
        <meta
          property="dcterms:subject"
          lang="fr"
          title="gccore"
          content="GV Gouvernement et vie politique;Services gouvernementaux"
        />
        <meta
          property="dcterms:subject"
          lang="en"
          title="gccore"
          content="GV Government and Politics;Government services"
        />
        <meta name="dcterms.issued" title="W3CDTF" content="2021-11-25" />
        <meta name="dcterms.modified" title="W3CDTF" content="2021-12-16" />
        <meta property="dcterms:issued" content="2021-11-25" />
        <meta property="dcterms:modified" content="2021-12-16" />

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
        <meta
          property="og:description"
          content="Sorry, this site will not work with Internet Explorer | Désolé, ce
            site ne fonctionne pas avec Internet Explorer"
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
            "/notsupported"
          }
        />
        <meta
          property="twitter:title"
          content={`Browser not supported — ${t("siteTitle")}`}
        />
        <meta name="twitter:creator" content="Service Canada" />
        <meta
          property="twitter:description"
          content="Sorry, this site will not work with Internet Explorer | Désolé, ce
            site ne fonctionne pas avec Internet Explorer"
        />
        <meta property="twitter:image" content={`${t("metaImage")}`} />
        <meta property="twitter:image:alt" content={`${t("siteTitle")}`} />
      </Head>
      <div className="min-h-screen relative">
        <section className="xs:px-0 lg:mx-auto lg:px-6 container">
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
                <p className="font-body text-sm mb-4 leading-normal">
                  {pageData.scContentEn.json[1].content[0].value}
                </p>
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
            <div>
              <div
                className="relative h-auto xl:w-96 xxl:w-400px lg:w-72 xl:h-400px lg:h-500px mb-8 lg:mb-0"
                lang="fr"
              >
                <h1 className="font-bold font-display mb-4">
                  {pageData.scContentFr.json[0].content[0].value}
                </h1>
                <p className="font-body text-sm mb-4 leading-normal">
                  {pageData.scContentFr.json[1].content[0].value}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="-mt-0 lg:-mt-36 sm:-mt-4 pb-5">
          <div className="flex items-center justify-center">
            <figure className="mx-4">
              <img
                src={`https://www.canada.ca${
                  props.locale === "en"
                    ? pageData.scImageList[1].scImageEn._path
                    : pageData.scImageList[1].scImageFr._path
                }`}
                alt={
                  props.locale === "en"
                    ? pageData.scImageList[1].scImageAltTextEn
                    : pageData.scImageList[1].scImageAltTextFr
                }
                width="98"
                height="98"
              />
              <figcaption className="flex items-center justify-center">
                Chrome
              </figcaption>
            </figure>
            <figure className="mx-4">
              <img
                src={`https://www.canada.ca${
                  props.locale === "en"
                    ? pageData.scImageList[2].scImageEn._path
                    : pageData.scImageList[2].scImageFr._path
                }`}
                alt={
                  props.locale === "en"
                    ? pageData.scImageList[2].scImageAltTextEn
                    : pageData.scImageList[2].scImageAltTextFr
                }
                width="98"
                height="98"
              />
              <figcaption className="flex items-center justify-center">
                Safari
              </figcaption>
            </figure>
            <figure className="mx-4">
              <img
                src={`https://www.canada.ca${
                  props.locale === "en"
                    ? pageData.scImageList[3].scImageEn._path
                    : pageData.scImageList[3].scImageFr._path
                }`}
                alt={
                  props.locale === "en"
                    ? pageData.scImageList[3].scImageAltTextEn
                    : pageData.scImageList[3].scImageAltTextFr
                }
                width="94"
                height="94"
              />
              <figcaption className="pt-1.5 flex items-center justify-center">
                Edge
              </figcaption>
            </figure>
            <figure className="mx-4">
              <img
                src={`https://www.canada.ca${
                  props.locale === "en"
                    ? pageData.scImageList[4].scImageEn._path
                    : pageData.scImageList[4].scImageFr._path
                }`}
                alt={
                  props.locale === "en"
                    ? pageData.scImageList[4].scImageAltTextEn
                    : pageData.scImageList[4].scImageAltTextFr
                }
                width="98"
                height="98"
              />
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
                {pageData.scCopyToClipboardLabelEn}
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
                {pageData.scBrowserDownloadLinksEn.json[0].content[0].value}
              </p>
              <ul className="underline pt-4 font-body text-sm ieLinksList">
                <li className="browser-item">
                  <a
                    href={
                      pageData.scBrowserDownloadLinksEn.json[1].content[0]
                        .content[0].data.href
                    }
                  >
                    {
                      pageData.scBrowserDownloadLinksEn.json[1].content[0]
                        .content[0].value
                    }
                  </a>
                </li>
                <li className="browser-item">
                  <a
                    href={
                      pageData.scBrowserDownloadLinksEn.json[1].content[1]
                        .content[0].data.href
                    }
                  >
                    {
                      pageData.scBrowserDownloadLinksEn.json[1].content[1]
                        .content[0].value
                    }
                  </a>
                </li>
                <li className="browser-item">
                  <a
                    href={
                      pageData.scBrowserDownloadLinksEn.json[1].content[2]
                        .content[0].data.href
                    }
                  >
                    {
                      pageData.scBrowserDownloadLinksEn.json[1].content[2]
                        .content[0].value
                    }
                  </a>
                </li>
                <li className="browser-item">
                  <a
                    href={
                      pageData.scBrowserDownloadLinksEn.json[1].content[3]
                        .content[0].data.href
                    }
                  >
                    {
                      pageData.scBrowserDownloadLinksEn.json[1].content[3]
                        .content[0].value
                    }
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div
                className="relative h-auto xl:w-96 xxl:w-400px lg:w-72 mb-8 lg:mb-0"
                lang="fr"
              >
                <p className="font-body text-sm mb-4 leading-normal">
                  {pageData.scCopyToClipboardLabelFr}
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
                  {pageData.scBrowserDownloadLinksFr.json[0].content[0].value}
                </p>
                <ul className="underline pt-4 font-body text-sm ieLinksList">
                  <li className="browser-item">
                    <a
                      href={
                        pageData.scBrowserDownloadLinksFr.json[1].content[0]
                          .content[0].data.href
                      }
                    >
                      {
                        pageData.scBrowserDownloadLinksFr.json[1].content[0]
                          .content[0].value
                      }
                    </a>
                  </li>
                  <li className="browser-item">
                    <a
                      href={
                        pageData.scBrowserDownloadLinksFr.json[1].content[1]
                          .content[0].data.href
                      }
                    >
                      {
                        pageData.scBrowserDownloadLinksFr.json[1].content[1]
                          .content[0].value
                      }
                    </a>
                  </li>
                  <li className="browser-item">
                    <a
                      href={
                        pageData.scBrowserDownloadLinksFr.json[1].content[2]
                          .content[0].data.href
                      }
                    >
                      {
                        pageData.scBrowserDownloadLinksFr.json[1].content[2]
                          .content[0].value
                      }
                    </a>
                  </li>
                  <li className="browser-item">
                    <a
                      href={
                        pageData.scBrowserDownloadLinksFr.json[1].content[3]
                          .content[0].data.href
                      }
                    >
                      {
                        pageData.scBrowserDownloadLinksFr.json[1].content[3]
                          .content[0].value
                      }
                    </a>
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
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  const { data } = await aemServiceInstance.getFragment("notsupportedQuery");

  return {
    props: {
      locale: locale,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL ?? null,
      ...(await serverSideTranslations("en", ["common"])),
      ...(await serverSideTranslations("fr", ["common"])),
      pageData: data.sclabsErrorpageV1ByPath,
    },
  };
};
