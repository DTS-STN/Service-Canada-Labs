import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { Layout } from "../components/organisms/Layout";
import Head from "next/head";

export default function UnsubscribeConfirmation(props) {
  const { t } = useTranslation("common");
  const { asPath } = useRouter();

  return (
    <Layout
      locale={props.locale}
      langUrl={asPath}
      breadcrumbItems={[{ text: "Service Canada Labs", link: "/" }]}
    >
      <Head>
        <title>{t("scLabsUnsubscribeConfirmation")}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="dcterms.title"
          content={t("scLabsUnsubscribeConfirmation")}
        />
        <meta
          name="dcterms.language"
          content={props.locale === "en" ? "eng" : "fra"}
        />
        <meta name="dcterms.creator" content={t("creator")} />
        <meta name="dcterms.accessRights" content="2" />
      </Head>
      <section className="layout-container mb-12">
        <h1
          id="pageMainTitle"
          className="mb-10 text-p xl:text-h1l font-bold w-max"
          tabIndex="-1"
        >
          {t("unsubscribeConfirmationTitle")}
        </h1>
        <div className="lg:flex lg:flex-row-reverse">
          <span className="w-full flex justify-center lg:w-1/3">
            <img
              className="w-80px mb-10 lg:mb-0 lg:ml-24 lg:w-160px"
              src="/circle-check.svg"
              alt="Circle with checkmark"
            />
          </span>
          <div className="lg:w-2/3">
            <p className="mb-4 text-sm lg:text-p leading-30px">
              {t("unsubscribeConfirmationP1")}
            </p>
            <p className="mb-4 text-sm lg:text-p leading-30px">
              {t("unsubscribeConfirmationP2")}
            </p>
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
