import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { Layout } from "../components/organisms/Layout";
import Head from "next/head";
import { TextButtonField } from "../components/molecules/TextButtonField";

export default function Confirmation(props) {
  const { t } = useTranslation("common");
  const { asPath, query } = useRouter();
  const referrer = query.ref || "";

  return (
    <Layout
      locale={props.locale}
      langUrl={asPath}
      breadcrumbItems={[{ text: "Service Canada Labs", link: "/" }]}
    >
      <Head>
        <title>
          {referrer === "unsubscribe"
            ? t("scLabsUnsubscribeConfirmation")
            : t("scLabsConfirmation")}
        </title>
        {process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL ? (
          <script src={process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL} />
        ) : (
          ""
        )}
        <title>{t("scLabsConfirmation")}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="dcterms.title"
          content={
            referrer === "unsubscribe"
              ? t("scLabsUnsubscribeConfirmation")
              : t("scLabsConfirmation")
          }
        />
        <meta
          name="dcterms.language"
          content={props.locale === "en" ? "eng" : "fra"}
        />
        <meta name="dcterms.creator" content={t("creator")} />
        <meta name="dcterms.accessRights" content="2" />
        <meta name="dcterms.service" content="ESDC-EDSC_SCLabs-LaboratoireSC" />
      </Head>
      <section className="layout-container mb-12">
        <h1
          id="pageMainTitle"
          className="mb-10 text-p xl:text-h1l font-bold sm:w-max"
          tabIndex="-1"
        >
          {referrer === "unsubscribe"
            ? t("unsubscribeConfirmationTitle")
            : t("emailConfirmationTitle")}
        </h1>
        <div className="lg:flex lg:flex-row-reverse">
          <span className="w-full flex justify-center lg:w-1/3">
            <img
              className="w-80px mb-10 lg:mb-0 lg:ml-24 lg:w-160px"
              src="/circle-check.svg"
              alt="Circle with checkmark"
            />
          </span>
          {referrer === "unsubscribe" ? (
            <div className="lg:w-2/3">
              <p className="mb-4 text-sm lg:text-p leading-30px">
                {t("unsubscribeConfirmationP1")}
              </p>
              <p className="mb-4 text-sm lg:text-p leading-30px">
                {t("unsubscribeConfirmationP2")}
              </p>
            </div>
          ) : (
            <div className="lg:w-2/3">
              <p className="mb-4 text-sm lg:text-p leading-30px">
                {t("emailConfirmationP1")}
              </p>
              <p className="mb-4 text-sm lg:text-p leading-30px">
                {t("emailConfirmationP2")}
                <TextButtonField
                  href="/experiments"
                  buttonText={t("experimentsBtnTxt")}
                  idButton="ExperimentsButton"
                  dataCyButton="ExperimentsButton"
                  className="flex mt-5"
                />
              </p>
            </div>
          )}
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
