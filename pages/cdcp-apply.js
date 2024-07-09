import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Layout } from "../components/organisms/Layout";
import { ActionButton } from "../components/atoms/ActionButton";
import { createBreadcrumbs } from "../lib/utils/createBreadcrumbs";
import { useEffect } from "react";

export default function CDCPLanding(props) {
  const { t } = useTranslation("common");

  const breadCrumbs = [
    {
      scTitleEn: "Benefits",
      scTitleFr: "Prestations",
      scPageNameEn: "https://www.canada.ca/en/services/benefits.html",
      scPageNameFr: "https://www.canada.ca/fr/services/prestations.html",
    },
    {
      scTitleEn: "Dental coverage",
      scTitleFr: "Couverture dentaire",
      scPageNameEn: "https://www.canada.ca/en/services/benefits/dental.html",
      scPageNameFr:
        "https://www.canada.ca/fr/services/prestations/dentaire.html",
    },
    {
      scTitleEn: "Canadian Dental Care Plan",
      scTitleFr: "Régime canadien de soins dentaires",
      scPageNameEn:
        "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      scPageNameFr:
        "https://www.canada.ca/fr/services/prestations/dentaire/regime-soins-dentaires.html",
    },
  ];

  useEffect(() => {
    if (props.adobeAnalyticsUrl) {
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ event: "pageLoad" });
    }
  }, []);

  return (
    <Layout
      locale={props.locale}
      langUrl={props.locale === "en" ? "/rsdc-demander" : "/cdcp-apply"}
      dateModifiedOverride={"2024-04-30"}
      excludeFooterFeedback={true}
      breadcrumbItems={createBreadcrumbs(breadCrumbs, props.locale)}
      showDisclaimer
      preFooterTitle="Service Canada"
      preFooterLink={t("cdcp.cdcpPreFooterLinkUrl")}
      preFooterLinkText={t("cdcp.cdcpPreFooterLinkText")}
    >
      <Head>
        {/* Primary HTML Meta Tags */}
        <title>{t("cdcp.secondaryHeading")}</title>

        {/* DCMI Meta Tags */}
        <meta name="dcterms.title" content={t("cdcp.tertiaryHeading")} />
        <meta
          name="dcterms.language"
          content={props.locale === "en" ? "eng" : "fra"}
          title="ISO639-2/T"
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
        <meta name="dcterms.spatial" content="Canada" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={props.locale} />
      </Head>
      <section className="layout-container">
        <div className="grid grid-cols-12 gap-x-8">
          <div className="col-span-12">
            <p className="mt-12 text-multi-neutrals-grey85">
              {t("cdcp.secondaryHeading")}
            </p>
            <h1
              id="pageMainTitle"
              className="mt-0 mb-8 pb-2 border-b border-multi-red-red50a"
            >
              {t("cdcp.primaryHeading")}
            </h1>
          </div>
          <div className="col-span-12 xl:col-span-8">
            <p>{t("cdcp.toCompleteApplication")}</p>
            <ul className="list-disc mt-5">
              <li className="ml-10">
                <p>{t("cdcp.listItems.item1")}</p>
              </li>
              <li className="ml-10">
                <p>{t("cdcp.listItems.item2")}</p>
              </li>
              <li className="ml-10">
                <p>{t("cdcp.listItems.item3")}</p>
              </li>
              <li className="ml-10">
                <p>{t("cdcp.listItems.item4")}</p>
              </li>
              <li className="ml-10">
                <p>{t("cdcp.listItems.item5")}</p>
              </li>
            </ul>
            <h2 className="mt-10 mb-10">{t("cdcp.headingH2")}</h2>
            <p>{t("cdcp.clickButtonToApply")}</p>
            <div className="mt-10">
              <ActionButton
                id="cdcp-button"
                style="primary"
                href={t("cdcp.buttonLink")}
                custom="mb-8 !rounded-md"
                text={t("cdcp.buttonText")}
                icon="icon-chevron-right"
                iconStyle="mt-0.5 ml-4"
                iconEnd={true}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      locale: locale,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL ?? null,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
