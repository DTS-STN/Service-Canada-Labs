import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Layout } from "../../../components/organisms/Layout";
import { ActionButton } from "../../../components//atoms/ActionButton";
import { useEffect } from "react";
import styles from '/styles/index.module.css';

//  On hold for now
//  import { VirtualConcierge } from "../../../components/organisms/VirtualConcierge";
// import { CallToAction } from "../../../components/molecules/CallToAction";

export default function Home(props) {
  const { t } = useTranslation(["common", "vc"]);
  const language = props.locale === "en" ? "fr" : "en";

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
          <title>{`${t("vc:virtualAssistantTitle")} — ${t(
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
            content={`${t("vc:virtualAssistantTitle")} — ${t("siteTitle")}`}
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
            content={`${t("vc:virtualAssistantTitle")} — ${t("siteTitle")}`}
          />
          <meta
            property="og:description"
            content={t("vc:virtualAssistantBioBody")}
          />
          <meta property="og:image" content={t("metaImage")} />
          <meta property="og:image:alt" content={t("siteTitle")} />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={t("vc:canonicalURL")} />
          <meta
            property="twitter:title"
            content={`${t("vc:virtualAssistantTitle")} — ${t("siteTitle")}`}
          />
          <meta name="twitter:creator" content="Service Canada" />
          <meta
            property="twitter:description"
            content={t("vc:virtualAssistantBioBody")}
          />
          <meta property="twitter:image" content={t("metaImage")} />
          <meta property="twitter:image:alt" content={t("siteTitle")} />
        </Head>

        {/* Virtual Assitant Demo section start -  with link to working prototype */}
        <div className="w-auto py-1 bg-custom-blue-lighter">
          <section className="layout-container my-6">
            <div className="w-auto h-auto">
              <div className="flex flex-col break-words lg:grid lg:grid-cols-2 gap-4 lg:gap-6">
                <h1 className="text-h1 border-h1-red-bar">{t("vc:virtualAssistantTitleStatic")}</h1>
                <div className="row-span-4 p-0 mx-4">
                  <div className="flex justify-center">
                    <img
                      className="object-fill h-auto w-auto max-w-450px"
                      src={language === "en"
                        ? "/1x_fr_canihelpyou.png"
                        : "/1x_canihelpyou.png"
                      }
                      scrset="/2x_canihelpyou.png 1000w"
                      alt={t("vc:virtualAssistantLogoAlt")}
                      width={200}
                      height={200}
                    />
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
            <h2 className={`mb-8 mt-2  ${styles.h2}`}>{t("vc:sectionTitle")}</h2>
            <div className="flex flex-col break-words lg:grid lg:grid-cols-3 gap-4 lg:gap-6">
              <div className="p-8 mr-4 rounded-24 border-2 focus:ring-1 focus:ring-black focus:ring-offset-2 active:border-custom-navy hover:border-custom-navy">
                <h3 className={`mb-1 ${styles.h3}`}>{t("vc:scenario1Title")}</h3>
                <p className="w-auto mb-8">
                  {t("vc:scenario1MaryIntro")}
                </p>
                <div className="flex justify-center">
                  <img
                    className="object-fill w-auto h-auto mx-auto mb-8"
                    src="/1x_mary.png"
                    img-src="/2x_mary.png"
                    alt={t("vc:scenario1MaryAlt")}
                    width={200}
                    height={200}
                  />
                </div>
                <div className="w-auto flex justify-center">
                  <p className="text-center">
                    <a
                      className="focus:ring-1 focus:ring-black focus:ring-offset-2 py-2 px-4 text-white bg-custom-green border border-custom-green active:bg-custom-navy hover:bg-custom-navy rounded font-bold text-center inline-block"
                      id="va-scenario1-link"
                      data-cy="va-scenario1-link"
                      role="button"
                      draggable="false"
                      href={language === "en"
                        ? "https://av-va.alpha.service.canada.ca/fr"
                        : "https://av-va.alpha.service.canada.ca/en"
                      }
                    >
                      {t("vc:scenario1MaryButton")}
                    </a>
                  </p>
                </div>
              </div>

              <div className="p-8 mr-4 inline-block rounded-24 border-2 focus:ring-1 focus:ring-black focus:ring-offset-2 active:border-custom-navy hover:border-custom-navy">
                <h3 className={`mb-1 ${styles.h3}`}>{t("vc:scenario2Title")}</h3>
                <p className="w-auto mb-8">{t("vc:scenario2HafsaIntro")}</p>
                <div className="flex justify-center">
                  <img
                    className="object-fill w-auto h-auto mx-auto mb-8"
                    src="/1x_hafsa.png"
                    alt={t("vc:scenario2HafsaAlt")}
                    width={200}
                    height={200}
                  />
                </div>
                <div className="w-auto flex justify-center">
                  <p className="text-center">
                    <a
                      className="focus:ring-1 focus:ring-black focus:ring-offset-2 py-2 px-4 text-white bg-custom-green border border-custom-green active:bg-custom-navy hover:bg-custom-navy rounded font-bold text-center inline-block"
                      id="va-scenario2-link"
                      data-cy="va-scenario2-link"
                      role="button"
                      draggable="false"
                      href={language === "en"
                        ? "/fr/hafsa"
                        : "en/hafsa"}
                    >
                      {t("vc:scenario2HafsaButton")}
                    </a>
                  </p>
                </div>
              </div>


              <div className="p-8 mr-4 inline-block rounded-24 border-2 focus:ring-1 focus:ring-black focus:ring-offset-2 active:border-custom-navy hover:border-custom-navy">
                <h3 className={`mb-1 ${styles.h3}`}>{t("vc:scenario3Title")}</h3>
                <p className="w-auto mb-8">{t("vc:scenario3RayIntro")}</p>
                <div className="flex justify-center">
                  <img
                    className="object-fill w-auto h-auto mx-auto mb-8"
                    src="/1x_ray.png"
                    alt={t("vc:scenario3RayAlt")}
                    width={200}
                    height={200}
                  />
                </div>
                <div className="w-auto flex justify-center">
                  <p className="text-center">
                    <a
                      className="focus:ring-1 focus:ring-black focus:ring-offset-2 py-2 px-4 text-white bg-custom-green border border-custom-green active:bg-custom-navy hover:bg-custom-navy rounded font-bold text-center inline-block"
                      id="va-scenario3-link"
                      data-cy="va-scenario3-link"
                      role="button"
                      draggable="false"
                      href={language === "en"
                        ? "/fr/ray"
                        : "en/ray"}
                    >
                      {t("vc:scenario3RayIntro")}
                    </a>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <aside>
          <div className="bg-circle-color text-white">
            <div className="layout-container pb-10 pt-10 mb-3 text-sm md:text-base">
              <h2>{t("vc:researchSessionTitle")}</h2>
              <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-24 gap-5">
                <div className="whitespace-pre-line">
                  {t("vc:researchSessionInfo")}
                  <a
                    href="https://alpha.service.canada.ca/unsubscribe"
                    className="underline"
                  >
                    {t("vc:researchUnsubscribeButton")}
                  </a>{' '}
                  {t("vc:researchSessionEndSentence")}
                </div>
                <div className="pt-10">
                  <p className="flex mb-4 text-center">
                    <a
                      className="focus:ring-1 focus:ring-black focus:ring-offset-2 py-2 px-4 rounded text-custom-blue-projects-link bg-details-button-gray hover:bg-gray-300 border border-custom-blue-blue active:bg-custom-blue-dark active:border-2 active:border-white hover:border-2 hover:border-white"
                      id="become-a-participant-btn"
                      data-cy="become-a-participant-btn"
                      role="button"
                      draggable="false"
                      href="https://alpha.service.canada.ca/signup"
                    >
                      {t("vc:signUpButton")}
                    </a>
                  </p>
                  <p>
                    <a
                      className="text-sm underline flex xl:inline lg:mr-10"
                      href="https://alpha.service.canada.ca/signup/privacy"
                    >
                      {t("vc:reviewPolicyButton")}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </aside>
        {/* END Virtual Assistant Demo section end for working prototype */}

        {/* <CallToAction
          title={t("signupTitleCallToAction")}
          html={t("becomeAParticipantDescription")}
          href={"/signup"}
          hrefText={t("signupBtn")}
        /> */}
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
