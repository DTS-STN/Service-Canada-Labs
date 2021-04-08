import Head from "next/head";
import { Layout } from "../components/organisms/Layout";
import { useI18n } from "next-rosetta";
import { ActionButton } from "../components/atoms/ActionButton";

export default function Home() {
  const { t } = useI18n();

  return (
    <Layout bannerTitle={t("bannerTitle")} bannerText={t("bannerText")}>
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

export async function getStaticProps(context) {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`../i18n/${locale}`); // Import locale
  return { props: { table } }; // Passed to `/pages/_app.js`
}
