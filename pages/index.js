import Head from "next/head";
import { Layout } from "../components/organisms/Layout";
import { useI18n } from "next-rosetta";

export default function Home() {
  const { t } = useI18n();

  return (
    <div>
      <Head>
        <title>{t("siteTitle")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout
        bannerTitle={t("bannerTitle")}
        bannerText={t("bannerText")}
        bannerBecomeTesterText={t("bannerBecomeTester")}
        bannerStartTestingText={t("bannerStartTesting")}
      >
        <section>
          <h2>{t("aboutUsHeading")}</h2>
          <p>{t("aboutUsContent")}</p>

          <figure>Block</figure>

          <figure>
            Block
            <figcaption>{t("figCaption")}</figcaption>
          </figure>
        </section>

        <section>
          <h3>{t("contactUsHeading")}</h3>
          <p>{t("contactUsContent")}</p>
          <a href="#">john.doe@example.com</a>
          <figure>Block</figure>
        </section>

        <section>
          <h4>{t("featuredPrototypesHeading")}</h4>
          <figure>Block</figure>
          <figure>Block</figure>
          <figure>Block</figure>
        </section>
      </Layout>
    </div>
  );
}

export async function getStaticProps(context) {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`../i18n/${locale}`); // Import locale
  return { props: { table } }; // Passed to `/pages/_app.js`
}
