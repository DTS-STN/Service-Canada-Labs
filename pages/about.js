import { Layout } from "../components/organisms/Layout";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function About(props) {
  const { t } = useTranslation("common");
  const { asPath } = useRouter();

  return (
    <Layout locale={props.locale} langUrl={asPath}>
      <Head>
        <title>{t("aboutTitle")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="layout-container relative mb-28">
        <div className="hidden lg:block">
          <img
            className="absolute right-0 h-96"
            src="/lightbulb_gradient.png"
          />
        </div>
        <h1 className="mb-8 text-h1l font-bold">{t("aboutTitle")}</h1>
        <h2 className="mb-6 text-h1 font-bold">{t("aboutThisSiteHeader")}</h2>
        <div className="lg:w-2/3">
          <p className="mb-4">{t("aboutThisSiteContent1")}</p>
          <p>{t("aboutThisSiteContent2")}</p>
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
