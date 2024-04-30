import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Layout } from "../components/organisms/Layout";
import { ActionButton } from "../components/atoms/ActionButton";
import { createBreadcrumbs } from "../lib/utils/createBreadcrumbs";

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
      scTitleEn: "Dental Coverage",
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

  return (
    <Layout
      locale={props.locale}
      langUrl={props.locale === "en" ? "/rsdc-demander" : "/cdcp-apply"}
      dateModifiedOverride={"2024-04-30"}
      excludeFooterFeedback={true}
      breadcrumbItems={createBreadcrumbs(breadCrumbs, props.locale)}
      showDisclaimer
    >
      <Head>
        {/* Primary HTML Meta Tags */}
        <title>{t("cdcp.secondaryHeading")}</title>
      </Head>
      <section className="layout-container">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <p className="mt-12 text-multi-neutrals-grey85">
              {t("cdcp.secondaryHeading")}
            </p>
            <h1 className="mt-0 mb-8 pb-2 border-b border-multi-red-red50a">
              {t("cdcp.primaryHeading")}
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <p>{t("cdcp.toCompleteApplication")}</p>
            <ul className="mt-5">
              <li>{t("cdcp.listItems.item1")}</li>
              <li>{t("cdcp.listItems.item2")}</li>
              <li>{t("cdcp.listItems.item3")}</li>
              <li>{t("cdcp.listItems.item4")}</li>
              <li>{t("cdcp.listItems.item5")}</li>
            </ul>
            <h2 className="mt-10 mb-10">{t("cdcp.headingH2")}</h2>
            <p>{t("cdcp.clickButtonToApply")}</p>
            <div className="mt-10">
              <ActionButton
                style="primary"
                custom="space-x-4 mb-8"
                text={t("cdcp.buttonText")}
                icon="icon-chevron-right"
                iconStyle="mt-0.5"
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
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
