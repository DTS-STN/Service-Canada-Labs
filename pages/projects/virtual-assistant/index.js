import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Layout } from "../../../components/organisms/Layout";
import { useEffect } from "react";
import styles from "./index.module.css";

export default function Home(props) {
  const { t } = useTranslation(["common", "vc"]);
  const language = props.locale === "en" ? "en" : "fr";

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL) {
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ event: "pageLoad" });
    }
  }, []);

  return (
    <>
      <Layout
        locale={props.locale}
        langUrl={t("virtualAssistantPath")}
        breadcrumbItems={[
          { text: t("siteTitle"), link: t("breadCrumbsHref1") },
          { text: t("menuLink1"), link: t("breadCrumbsHref2") },
        ]}
      >
        <Head>
          {process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL ? (
            <script src={process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL} />
          ) : (
            ""
          )}

          {/* Primary HTML Meta Tags */}
          <title>{`${t("vc:virtualAssistantTitleStatic")} — ${t(
            "siteTitle"
          )}`}</title>
          <meta name="description" content={`${t("vc:metaDescription")}`} />
          <meta name="author" content="Service Canada" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href={t("vc:canonicalURL")} />
          <link rel="schema.dcterms" href="http://purl.org/dc/terms/" />
          <meta name="keywords" content={t("vc:keywords")} />

          {/* DCMI Meta Tags */}
          <meta
            name="dcterms.title"
            content={`${t("vc:virtualAssistantTitleStatic")} — ${t(
              "siteTitle"
            )}`}
          />
          <meta
            name="dcterms.language"
            content={props.locale === "en" ? "eng" : "fra"}
            title="ISO639-2/T"
          />
          <meta name="dcterms.creator" content="Service Canada" />
          <meta name="dcterms.accessRights" content="2" />
          <meta
            name="dcterms.service"
            content="ESDC-EDSC_SCLabs-LaboratoireSC"
          />
          <meta name="dcterms.issued" title="W3CDTF" content="2021-07-20" />

          <meta name="dcterms.modified" title="W3CDTF" content="2021-12-16" />
          <meta name="dcterms.description" content={t("vc:metaDescription")} />
          <meta
            name="dcterms.subject"
            title="gccore"
            content={`${t("vc:metaSubject")}`}
          />
          <meta name="dcterms.spatial" content="Canada" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:locale" content={props.locale} />
          <meta property="og:url" content={t("vc:canonicalURL")} />
          <meta
            property="og:title"
            content={`${t("vc:virtualAssistantTitleStatic")} — ${t(
              "siteTitle"
            )}`}
          />
          <meta
            property="og:description"
            content={t("vc:virtualAssistantBioStatic")}
          />
          <meta property="og:image" content={t("metaImage")} />
          <meta property="og:image:alt" content={t("siteTitle")} />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={t("vc:canonicalURL")} />
          <meta
            property="twitter:title"
            content={`${t("vc:virtualAssistantTitleStatic")} — ${t(
              "siteTitle"
            )}`}
          />
          <meta name="twitter:creator" content="Service Canada" />
          <meta
            property="twitter:description"
            content={t("vc:virtualAssistantBioStatic")}
          />
          <meta property="twitter:image" content={t("metaImage")} />
          <meta property="twitter:image:alt" content={t("siteTitle")} />
        </Head>

        {/* Virtual Assitant Demo section start -  with link to working prototype */}

        <div className="w-auto py-1 bg-custom-blue-lighter" id="pageMainTitle">
          <section className="layout-container my-6">
            <div className="w-auto h-auto">
              <div className="flex flex-col break-words lg:grid lg:grid-cols-2 gap-4 lg:gap-6">
                <h1 className="text-h1 border-h1-red-bar">
                  {t("vc:virtualAssistantTitleStatic")}
                </h1>
                <div className="row-span-4 p-0 mx-4">
                  <div className="flex justify-center">
                    <div className="object-fill h-auto w-auto max-w-450px">
                      <img
                        src={
                          language === "en"
                            ? "/1x_canihelpyou.png"
                            : "/1x_fr_canihelpyou.png"
                        }
                        width={468}
                        height={462}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <p className="font-body text-lg pb-0 px-1 lg:px-0">
                  {t("vc:virtualAssistantBioStatic")}
                </p>
                <h2 className="mt-0 mb-0 pt-0 pb-0 text-h2">
                  {t("vc:virtualAssistantInfoTitleStatic")}
                </h2>
                <ul className="list-outside list-disc pl-4 pr-2">
                  <li className="font-body text-lg mt-0 my-4 leading-tight">
                    {t("vc:virtualAssistantInfo1")}
                  </li>
                  <li className="font-body text-lg my-4 leading-tight">
                    {t("vc:virtualAssistantInfo2")}
                  </li>
                  <li className="font-body text-lg mt-4 mb-2 leading-tight">
                    {t("vc:virtualAssistantInfo3")}
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <section className="layout-container my-6">
          <div className="w-auto mb-6">
            <h2 className={`mb-8 mt-2  ${styles.h2}`}>
              {t("vc:sectionTitle")}
            </h2>
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-6">
              <a
                className={`p-8 mr-4 inline-block rounded-[24px] border-2 focus:ring-1 focus:ring-black focus:ring-offset-2 active:border-custom-blue-hover hover:border-custom-blue-hover ${styles.card}`}
                data-testid="va-scenario2-link"
                id="va-scenario2-link"
                data-cy="va-scenario2-link"
                role="button"
                draggable="false"
                href={
                  language === "en"
                    ? "https://va-av-bot.alpha.service.canada.ca/en/hafsa"
                    : "https://va-av-bot.alpha.service.canada.ca/fr/hafsa"
                }
              >
                <h3 className={`mb-1 ${styles.h3}`}>
                  {t("vc:scenario2Title")}
                </h3>
                <p className="w-auto mb-8 text-[17px]">
                  {t("vc:scenario2HafsaIntro")}
                </p>
                <div className="flex justify-center">
                  <div className="object-fill w-auto h-auto mx-auto mb-8 mt-9">
                    <img src="/1x_hafsa.png" alt="" width={284} height={203} />
                  </div>
                </div>
                <div className="w-auto flex justify-center">
                  <p className="text-center font-bold underline text-sm text-page-navigation-link">
                    {t("vc:scenario2HafsaButton")}
                  </p>
                </div>
              </a>

              <a
                className={`p-8 mr-4 inline-block rounded-[24px] border-2 focus:ring-1 focus:ring-black focus:ring-offset-2 active:border-custom-blue-hover hover:border-custom-blue-hover ${styles.card}`}
                data-testid="va-scenario4-link"
                id="va-scenario4-link"
                data-cy="va-scenario4-link"
                role="button"
                draggable="false"
                href={
                  language === "en"
                    ? "https://va-av-bot.alpha.service.canada.ca/en/alwaysonbot"
                    : "https://va-av-bot.alpha.service.canada.ca/fr/alwaysonbot"
                }
              >
                <h3 className={`mb-1 ${styles.h3}`}>
                  {t("vc:scenario4Title")}
                </h3>
                <p className="w-auto mb-8 text-[17px]">
                  {t("vc:scenario4AlwaysOnBotIntro")}
                </p>
                <div className="flex justify-center">
                  <div className="object-fill w-auto h-auto mx-auto mb-8 mt-9">
                    <img
                      src="/1x_alwaysOnBot.jpg"
                      alt=""
                      width={284}
                      height={203}
                    />
                  </div>
                </div>
                <div className="w-auto flex justify-center">
                  <p className="text-center font-bold underline text-sm text-page-navigation-link">
                    {t("vc:scenario4AlwaysOnBotButton")}
                  </p>
                </div>
              </a>

              <a
                className={`p-8 mr-4 inline-block rounded-[24px] border-2 focus:ring-1 focus:ring-black focus:ring-offset-2 active:border-custom-blue-hover hover:border-custom-blue-hover ${styles.card}`}
                data-testid="va-scenario3-link"
                id="va-scenario3-link"
                data-cy="va-scenario3-link"
                role="button"
                draggable="false"
                href={
                  language === "en"
                    ? "https://va-av-bot.alpha.service.canada.ca/en/ray"
                    : "https://va-av-bot.alpha.service.canada.ca/fr/ray"
                }
              >
                <h3 className={`mb-1 ${styles.h3}`}>
                  {t("vc:scenario3Title")}
                </h3>
                <p className="w-auto mb-8 text-[17px]">
                  {t("vc:scenario3RayIntro")}
                </p>
                <div className="flex justify-center">
                  <div className="object-fill w-auto h-auto mx-auto mb-8 mt-9">
                    <img src="/1x_ray.png" alt="" width={284} height={203} />
                  </div>
                </div>
                <div className="w-auto flex justify-center">
                  <p className="text-center font-bold underline text-sm text-page-navigation-link">
                    {t("vc:scenario3RayButton")}
                  </p>
                </div>
              </a>

              <a
                className={`p-8 mr-4 inline-block rounded-[24px] border-2 focus:ring-1 focus:ring-black focus:ring-offset-2 active:border-custom-blue-hover hover:border-custom-blue-hover ${styles.card}`}
                data-testid="va-scenario1-link"
                id="va-scenario1-link"
                data-cy="va-scenario1-link"
                role="button"
                draggable="false"
                href={
                  language === "en"
                    ? "https://va-av-bot.alpha.service.canada.ca/en/mary"
                    : "https://va-av-bot.alpha.service.canada.ca/fr/mary"
                }
              >
                <h3 className={`mb-1 ${styles.h3}`}>
                  {t("vc:scenario1Title")}
                </h3>
                <p className="w-auto mb-8 text-[17px]">
                  {t("vc:scenario1MaryIntro")}
                </p>
                <div className="flex justify-center">
                  <div className="object-fill w-auto h-auto mx-auto mb-8 mt-9">
                    <img src="/1x_mary.png" alt="" width={284} height={203} />
                  </div>
                </div>
                <div className="w-auto flex justify-center">
                  <p className="text-center font-bold underline text-sm text-page-navigation-link">
                    {t("vc:scenario1MaryButton")}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
        {/* END Virtual Assistant Demo section end for working prototype */}
      </Layout>
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
    ...(await serverSideTranslations(locale, ["common", "vc"])),
  },
});
