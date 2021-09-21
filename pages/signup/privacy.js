import { Layout } from "../../components/organisms/Layout";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { HTMList } from "../../components/atoms/HTMList";
import { CallToAction } from "../../components/molecules/CallToAction";
import { useEffect } from "react";

export default function Privacy(props) {
  const { t } = useTranslation("common");
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
          { text: t("signupHomeButton"), link: t("breadCrumbsHref3") },
        ]}
      >
        <Head>
          {process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL ? (
            <script src={process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL} />
          ) : (
            ""
          )}
          <title>{`${t("privacyTitle")} — ${t("siteTitle")}`}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="dcterms.title"
            content={`${t("privacyTitle")} — ${t("siteTitle")}`}
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
          <meta name="dcterms.issued" content="2021-06-30" />
        </Head>
        <section className="layout-container relative mb-10">
          <h1
            id="pageMainTitle"
            className="mb-8 text-h1l font-bold flex-wrap"
            tabIndex="-1"
          >
            {t("privacyTitle")}
          </h1>
          <div className="xl:w-2/3">
            <p className="mb-8">{t("privacyPolicyContent1")}</p>
            <h2 className="mb-4 font-bold leading-10">
              {t("privacyPolicyHeading1")}
            </h2>
            <p className="mb-4">{t("privacyPolicyContent2")}</p>
            <HTMList
              listClassName={"ml-9 mb-4 text-p list-disc"}
              content={t("privacyPolicyList1")}
            />
            <p className="mb-4">{t("privacyPolicyContent3")}</p>
            <HTMList
              listClassName={"ml-9 mb-4 text-p list-disc"}
              content={t("privacyPolicyList2")}
            />
            <p className="mb-4">
              {t("privacyPolicyContent4")}
              <span>
                {" "}
                <i>{t("privacyPolicyAct1")}</i> {t("privacyPolicyAnd")}{" "}
                <i>{t("privacyPolicyAct2")}</i>
                {". "} {t("privacyPolicyContent5")}
              </span>
            </p>
            <p className="mb-8">{t("privacyPolicyContent6")}</p>
            <h2 className="mb-4 font-bold leading-10">
              {t("privacyPolicyHeading2")}
            </h2>
            <p className="mb-4">{t("privacyPolicyContent7")}</p>
            <p className="mb-4">
              {t("privacyPolicyContent8")}
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL}`}
                className="text-custom-blue-link underline"
              >
                experience@service.gc.ca
              </a>
              {props.locale === "en" ? " address." : "."}
            </p>
            <p className="mb-8">{t("privacyPolicyContent9")}</p>
            <h2 className="mb-4 font-bold leading-10">{t("withdraw")}</h2>
            <p className="mb-8">
              {t("privacyWithdraw")}
              <a
                href={
                  props.locale === "en" ? "/unsubscribe" : "/fr/unsubscribe"
                }
                className="text-custom-blue-link underline"
              >
                {t("unsubscribeWord")}
              </a>
              {t("privacyWithdraw2")}
            </p>
            <h2 className="mb-4 font-bold leading-10">
              {t("privacyPolicyHeading3")}
            </h2>
            <p className="mb-4">{t("privacyPolicyContent10")}</p>
            <p className="mb-4">
              {t("privacyPolicyContent11")}
              <span>
                <i>{t("privacyPolicyAct3")}</i>
                {", "}
                {t("privacyPolicyThe")}
                <i> {t("privacyPolicyAct1")}</i>
                {", "}
                {t("privacyPolicyThe")}
                <i> {t("privacyPolicyAct2")}</i>
                {t("privacyPolicyContent12")}
              </span>
            </p>
            <p className="mb-4">{t("privacyPolicyContent13")}</p>
            <p className="mb-4">
              {t("privacyPolicyContent14")}
              <a
                href={t("privacyPolicyInfoHoldingsURL")}
                className="text-custom-blue-link underline"
              >
                {" "}
                {t("privacyPolicyInfoHoldings")}
              </a>
              {"."}
            </p>
            <p className="mb-8 italic">
              {t("privacyPolicyInfoHoldings")}
              <span className="not-italic">{t("privacyPolicyContent15")}</span>
            </p>
            <h2 className="mb-4 font-bold leading-10">
              {t("privacyPolicyHeading4")}
            </h2>
            <p className="mb-4">
              {t("privacyPolicyContent16")}
              <a
                href={t("privacyPolicyPrivacyCommissionerURL")}
                className="text-custom-blue-link underline"
              >
                {t("privacyPolicyPrivacyCommissioner")}
              </a>
              <span>{t("privacyPolicyContent17")}</span>
            </p>
          </div>
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

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      locale: locale,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
