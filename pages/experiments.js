import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Layout } from "../components/organisms/Layout";
import { useRouter } from "next/router";
import { FilterExperiments } from "../components/atoms/FilterExperiments";

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
        <FilterExperiments
          options={[
            { id: 1, text: "All" },
            { id: 2, text: "Active" },
            { id: 3, text: "Comming Soon" },
          ]}
        />
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
