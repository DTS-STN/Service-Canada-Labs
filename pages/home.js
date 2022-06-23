import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Layout } from "../components/organisms/Layout";
import { CallToAction } from "../components/molecules/CallToAction";
import { ActionButton } from "../components/atoms/ActionButton";
import { HTMList } from "../components/atoms/HTMList";
import { useEffect } from "react";

export default function Home(props) {
  const { t } = useTranslation("common");

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL) {
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ event: "pageLoad" });
    }
  }, []);

  return (
    <>
      <Layout
        bannerTitle={t("siteTitle")}
        bannerText={t("bannerText")}
        locale={props.locale}
        langUrl={t("homePath")}
      >
        <Head>
          {process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL ? (
            <script src={process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL} />
          ) : (
            ""
          )}

          {/* Primary HTML Meta Tags */}
          <title>{`${t("scLabsHome")} — ${t("siteTitle")}`}</title>
          <meta name="description" content={`${t("homeMetaDescription")}`} />
          <meta name="author" content="Service Canada" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="schema.dcterms" href="http://purl.org/dc/terms/" />
          <meta name="keywords" content={t("homeKeywords")} />

          {/* DCMI Meta Tags */}
          <meta
            name="dcterms.title"
            content={`${t("scLabsHome")} — ${t("siteTitle")}`}
          />
          <meta
            name="dcterms.language"
            content={props.locale === "en" ? "eng" : "fra"}
            title="ISO639-2/T"
          />
          <meta name="dcterms.description" content={t("homeMetaDescription")} />
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
          <meta name="dcterms.issued" title="W3CDTF" content="2021-03-18" />
          <meta name="dcterms.modified" title="W3CDTF" content="2021-12-16" />
          <meta name="dcterms.spatial" content="Canada" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:locale" content={props.locale} />
          <meta
            property="og:url"
            content={
              "https://alpha.service.canada.ca/" +
              `${props.locale}` +
              `${t("homeMetaPath")}`
            }
          />
          <meta
            property="og:title"
            content={`${t("scLabsHome")} — ${t("siteTitle")}`}
          />
          <meta
            property="og:description"
            content={`${t("homeMetaDescription")}`}
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
              `${t("homeMetaPath")}`
            }
          />
          <meta
            property="twitter:title"
            content={`${t("scLabsHome")} — ${t("siteTitle")}`}
          />
          <meta name="twitter:creator" content="Service Canada" />
          <meta
            property="twitter:description"
            content={`${t("homeMetaDescription")}`}
          />
          <meta property="twitter:image" content={`${t("metaImage")}`} />
          <meta property="twitter:image:alt" content={`${t("siteTitle")}`} />
        </Head>
        <section className="layout-container my-12">
          <div className="xl:w-2/3">
            <ActionButton
              href={t("signupInfoRedirect")}
              id="signup-home-page"
              dataCy="signup-home-page"
              className="rounded !px-6 !py-4 font-bold text-center inline-block"
            >
              {t("signupHomeButton")}
            </ActionButton>
            <h2 className="my-10">{t("projectsAndExplorationTitle")}</h2>
            <p className="mb-4 whitespace-pre-line">
              {t("experimentsAndExploration-1/4")}
            </p>
            <p className="mb-4">{t("experimentsAndExploration-2/4")}</p>
            <HTMList
              listClassName={"mb-4 pl-10 text-p list-disc"}
              content={t("experimentsAndExplorationList")}
            />
            <p className="mb-4">{t("experimentsAndExploration-3/4")}</p>
            <p className="mb-10">{t("experimentsAndExploration-4/4")}</p>
            <p className="mb-10">{t("projectsDisclaimerBody")}</p>
          </div>
          <div className="flex flex-col gap-6 lg:gap-10 lg:flex-row ">
            <ActionButton
              href={t("projectRedirect")}
              text={t("menuLink1")}
              id="ProjectsButton"
              dataCy="ProjectsButton"
              className="flex py-2 !px-6 justify-center font-bold rounded"
              secondary
            />
            <ActionButton
              href={t("aboutRedirect")}
              text={t("learnMoreAboutSCL")}
              id="AboutButton"
              dataCy="AboutButton"
              className="flex py-2 !px-6 justify-center font-bold rounded"
              secondary
            />
          </div>
        </section>
        <CallToAction
          title={t("signupTitleCallToAction")}
          html={t("becomeAParticipantDescription")}
          lang={props.locale}
          href={t("signupInfoRedirect")}
          hrefText={t("signupBtn")}
        />
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
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
