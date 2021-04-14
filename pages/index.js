import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Layout } from "../components/organisms/Layout";
import { ActionButton } from "../components/atoms/ActionButton";
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
      <div className="bg-gray-light-200 py-6">
        <div className="layout-container flex">
          <ActionButton
            text={t("buttonStartTesting")}
            secondary
            className={"mr-4"}
            dataCyButton={"start-testing-button"}
          />
          <ActionButton
            text={t("buttonBecomeTester")}
            dataCyButton={"become-tester-button"}
          />
        </div>
      </div>

      <section className="layout-container">
        <h2>{t("aboutUsHeading")}</h2>
        <p>{t("aboutUsContent")}</p>

        <figure>Block</figure>

        <figure>
          Block
          <figcaption>{t("figCaption")}</figcaption>
        </figure>
      </section>

      <section className="layout-container">
        <h3>{t("contactUsHeading")}</h3>
        <p>{t("contactUsContent")}</p>
        <a href="#">john.doe@example.com</a>
        <figure>Block</figure>
      </section>

      <section className="layout-container">
        <h4>{t("featuredPrototypesHeading")}</h4>
        <figure>Block</figure>
        <figure>Block</figure>
        <figure>Block</figure>
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
