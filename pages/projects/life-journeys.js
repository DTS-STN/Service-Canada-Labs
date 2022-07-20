import { Layout } from "../../components/organisms/Layout";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { HTMList } from "../../components/atoms/HTMList";
import { CallToAction } from "../../components/molecules/CallToAction";
import { useEffect } from "react";

export default function LifeJourneys(props) {
  const { t } = useTranslation("common", "lj");
  const { asPath } = useRouter();

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
        langUrl={asPath}
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
          <title>{`${t("lj:lifeJourneysTitle")} — ${t("siteTitle")}`}</title>
          <meta
            name="description"
            content={`${t("lj:lifeJourneysContent2")} ${t(
              "lj:lifeJourneysContent3"
            )}`}
          />
          <meta name="author" content="Service Canada" />
          <link rel="icon" href="/favicon.ico" />

          {/* DCMI Meta Tags */}
          <meta
            name="dcterms.title"
            content={`${t("lj:lifeJourneysTitle")} — ${t("siteTitle")}`}
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

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:locale" content={props.locale} />
          <meta
            property="og:url"
            content={
              "https://alpha.service.canada.ca/" +
              `${props.locale}` +
              `${t("projectRedirect")}` +
              "/life-journeys"
            }
          />
          <meta
            property="og:title"
            content={`${t("lj:lifeJourneysTitle")} — ${t("siteTitle")}`}
          />
          <meta
            property="og:description"
            content={`${t("lj:lifeJourneysContent2")} ${t(
              "lj:lifeJourneysContent3"
            )}`}
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
              `${t("projectRedirect")}` +
              "/life-journeys"
            }
          />
          <meta
            property="twitter:title"
            content={`${t("lj:lifeJourneysTitle")} — ${t("siteTitle")}`}
          />
          <meta name="twitter:creator" content={t("creator")} />
          <meta
            property="twitter:description"
            content={`${t("lj:lifeJourneysContent2")} ${t(
              "lj:lifeJourneysContent3"
            )}`}
          />
          <meta property="twitter:image" content={`${t("metaImage")}`} />
          <meta property="twitter:image:alt" content={`${t("siteTitle")}`} />
        </Head>
        <section className="layout-container relative mb-10">
          <h1
            id="pageMainTitle"
            className="mb-8 text-h1l flex-wrap"
            tabIndex="-1"
          >
            {t("lj:lifeJourneysTitle")}
          </h1>
          <h2 className="mb-6 leading-10">{t("lj:lifeJourneysHeading1")}</h2>
          <p className="mb-6">{t("lj:lifeJourneysContent1")}</p>
          <p className="mb-6">{t("lj:lifeJourneysContent2")}</p>
          <p className="mb-6">{t("lj:lifeJourneysContent3")}</p>
          <p className="mb-6">{t("lj:lifeJourneysContent4")}</p>
          <h2 className="mb-6 leading-10">{t("lj:lifeJourneysHeading2")}</h2>
          <figure className="mb-6 lg:w-2/3 border shadow-experiment-shadow">
            <img
              src={t("lj:lifeJourneysImg1")}
              alt={t("lj:lifeJourneysImgAltText1")}
            ></img>
            <figcaption className="p-6 text-sm font-display border-t">
              {t("lj:lifeJourneysImgCaption1")}
            </figcaption>
          </figure>
          <p className="mb-6">{t("lj:lifeJourneysContent5")}</p>
          <p className="mb-6">{t("lj:lifeJourneysContent6")}</p>
          <p>{t("lj:lifeJourneysContent7")}</p>
          <HTMList
            tag="ol"
            listClassName={"ml-9 mb-6 text-p list-disc"}
            content={t("lj:lifeJourneysListItems1")}
          />
          <h2 className="mb-6 leading-10">{t("lj:lifeJourneysHeading3")}</h2>
          <figure className="mb-6 lg:w-2/3 border shadow-experiment-shadow">
            <img
              src="/life-journey-map.png"
              alt={t("lj:lifeJourneysImgAltText2")}
            ></img>
            <figcaption className="p-6 text-sm font-display border-t">
              {t("lj:lifeJourneysImgCaption2")}
            </figcaption>
          </figure>
          <p className="mb-6">{t("lj:lifeJourneysContent8")}</p>
          <p className="mb-6">{t("lj:lifeJourneysContent9")}</p>
          <p>{t("lj:lifeJourneysContent10")}</p>
          <HTMList
            tag="ol"
            listClassName={"ml-9 mb-6 text-p list-disc"}
            content={t("lj:lifeJourneysListItems2")}
          />
          <p className="mb-6">{t("lj:lifeJourneysContent11")}</p>
          <h2 className="mb-6 leading-10">{t("lj:lifeJourneysHeading4")}</h2>
          <p className="mb-6">{t("lj:lifeJourneysContent12")}</p>
          <p className="my-6">
            <strong>{t("projectsDisclaimer")}</strong>
          </p>
        </section>

        <CallToAction
          title={t("signupTitleCallToAction")}
          html={t("becomeAParticipantDescription")}
          href={"/signup"}
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
    ...(await serverSideTranslations(locale, ["common", "lj"])),
  },
});
