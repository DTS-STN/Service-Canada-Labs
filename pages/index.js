import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Layout } from "../components/organisms/Layout";
import { ActionButton } from "../components/atoms/ActionButton";
import { TextButtonField } from "../components/molecules/TextButtonField";
import { Quote } from "../components/molecules/Quote";
import { List } from "../components/molecules/List";
import { useRouter } from "next/router";

export default function Home(props) {
  const { t } = useTranslation("common");
  const { asPath } = useRouter();

  return (
    <Layout
      bannerTitle={t("bannerTitle")}
      bannerText={t("bannerText")}
      locale={props.locale}
      langUrl={asPath}
    >
      <Head>
        <title>{t("siteTitle")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="layout-container mb-2 mt-12">
        <div className="xl:w-2/3">
          <h1 className="mb-10">{t("experimentsAndExplorationTitle")}</h1>
          <p className="mb-4">{t("experimentsAndExploration-1/3")}</p>
          <p className="mb-4">{t("experimentsAndExploration-2/3")}</p>
          <p className="mb-10">{t("experimentsAndExploration-3/3")}</p>
        </div>
        <div className="flex-col flex lg:flex lg:flex-row gap-4">
          <TextButtonField
            href="/experiments"
            buttonText={t("experimentsBtnTxt")}
            idButton="ExperimentsButton"
            dataCyButton="ExperimentsButton"
          />
          <TextButtonField
            href="/about"
            buttonText={t("learnMoreAboutSCL")}
            idButton="AboutButton"
            dataCyButton="AboutButton"
          />
        </div>
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
