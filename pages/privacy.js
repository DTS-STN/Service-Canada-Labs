import { Layout } from "../components/organisms/Layout";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { CallToAction } from "../components/molecules/CallToAction";

export default function Privacy(props) {
  const { t } = useTranslation("common");
  const { asPath } = useRouter();

  return (
    <Layout
      locale={props.locale}
      langUrl={asPath}
      breadcrumbItems={[{ text: "Service Canada Labs", link: "/" }]}
    >
      <Head>
        <title>{t("scLabsPrivacy")}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="dcterms.title" content={t("scLabsPrivacy")} />
        <meta
          name="dcterms.language"
          content={props.locale === "en" ? "eng" : "fra"}
        />
        <meta name="dcterms.creator" content={t("creator")} />
        <meta name="dcterms.accessRights" content="2" />
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
          <ul className="ml-9 mb-4 text-p list-disc">
            <li>{t("privacyPolicyListItem1")}</li>
            <li>{t("privacyPolicyListItem2")}</li>
            <li>{t("privacyPolicyListItem3")}</li>
          </ul>
          <p className="mb-4">{t("privacyPolicyContent3")}</p>
          <ul className="ml-9 mb-4 text-p list-disc">
            <li>{t("privacyPolicyListItem4")}</li>
            <li>{t("privacyPolicyListItem5")}</li>
            <li>{t("privacyPolicyListItem6")}</li>
            <li>{t("privacyPolicyListItem7")}</li>
            <li>{t("privacyPolicyListItem8")}</li>
            <li>{t("privacyPolicyListItem9")}</li>
          </ul>
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
              {t("confirmationEmail")}
              {"."}
            </a>
          </p>
          <p className="mb-8">{t("privacyPolicyContent9")}</p>
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
              className="italic text-custom-blue-link underline"
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
              className="italic text-custom-blue-link underline"
            >
              {t("privacyPolicyPrivacyCommissioner")}
            </a>
            <span>{t("privacyPolicyContent17")}</span>
          </p>
        </div>
      </section>
      <CallToAction
        title={t("signupTitle")}
        description={t("becomeAParticipantDescription")}
        href={"/signup"}
        hrefText={t("signupTitle").slice(0, t("signupTitle").length - 1)}
      />
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
