import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Layout } from "../../../components/organisms/Layout";
import { ActionButton } from "../../../components//atoms/ActionButton";
import { useEffect } from "react";

//  On hold for now
//  import { VirtualConcierge } from "../../../components/organisms/VirtualConcierge";
// import { CallToAction } from "../../../components/molecules/CallToAction";

export default function Home(props) {
  const { t } = useTranslation(["common", "vc"]);
  const language = props.locale === "en" ? "fr" : "en";

  useEffect(() => {
    if (props.adobeAnalyticsUrl) {
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
          {props.adobeAnalyticsUrl ? (
            <script src={props.adobeAnalyticsUrl} />
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
        <section className="layout-container mb-10">
          <h1 className="mb-8 text-h1l" tabIndex="-1" id="pageMainTitle">
            {t("vc:virtualAssistantTitle")}
          </h1>
          {/* the scenario section */}
          <div className="whitespace-pre-line ">
            <h2 className="mb-6 mt-8 text-h1" id="virtualAssistantScenario">
              {t("vc:scenarioTitle")}
            </h2>
            <p
              className="mb-6 lg:col-span-2 px-1 lg:px-0 xl:w-3/4"
              dangerouslySetInnerHTML={{ __html: t("vc:scenarioBody") }}
            >
              {/* {t("vc:scenarioDemoBody")} */}
            </p>
            <p className="flex mb-16 text-center">
              <ActionButton
                href={
                  language === "en"
                    ? "https://av-va.alpha.service.canada.ca/fr"
                    : "https://av-va.alpha.service.canada.ca/en"
                }
                id="meet-va-link"
                dataCy="meet-va-link"
                className="rounded px-6 py-4 font-bold text-center inline-block"
              >
                {t("vc:meetAssistant")}
              </ActionButton>
              {/* href="https://av-va.alpha.service.canada.ca" */}
            </p>
          </div>

          <div className="w-auto mb-6 ">
            <div className="flex flex-col break-words lg:grid lg:grid-cols-2 gap-4 lg:gap-6 ">
              <h2 className="mb-0 text-h1" id="virtualAssistantTitle">
                {t("vc:virtualAssistantBioTitle")}
              </h2>

              <div className="row-span-2 bg-gradient-to-tr from-custom-blue-blue to-vc-blue-lt  p-4 ">
                <img
                  className=" object-fill w-64 h-auto mx-auto"
                  src="/virtualconcierge/VirtualConcierge.svg"
                  alt={t("vc:virtualAssistantLogoAlt")}
                />
              </div>
              <p className=" font-body text-lg px-1 lg:px-0 ">
                {t("vc:virtualAssistantBioBody")}
              </p>
            </div>
          </div>
        </section>
        {/* END Virtual Assistant Demo section end for working prototype */}

        {/* <CallToAction
          title={t("signupTitleCallToAction")}
          html={t("becomeAParticipantDescription")}
          href={"/signup"}
          hrefText={t("signupBtn")}
        /> */}
      </Layout>
      {props.adobeAnalyticsUrl ? (
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
    adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL,
    ...(await serverSideTranslations(locale, ["common", "vc"])),
  },
});
