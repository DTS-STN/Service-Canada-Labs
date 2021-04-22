import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Layout } from "../components/organisms/Layout";
import { useRouter } from "next/router";

export default function experiments(props) {
  const { t } = useTranslation("common");
  const { asPath } = useRouter();

  return (
    <Layout locale={props.locale} langUrl={asPath}>
      <Head>
        <title>{t("experimentsTitle")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="layout-container">
        <h1>{t("experimentsAndExplorationTitle")}</h1>
        <p>Filter Experiments component goes here</p>
        <p>List of experiments.</p>
      </section>
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    locale: locale,
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
