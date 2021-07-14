import { Layout } from "../components/organisms/Layout";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { ActionButton } from "../components/atoms/ActionButton";

export default function Confirmation(props) {
  const { t } = useTranslation("common");
  const { asPath, query } = useRouter();
  const maskedEmail = String(query.e);
  const referrer = query.ref || "";

  return (
    <Layout
      locale={props.locale}
      langUrl={asPath}
      breadcrumbItems={[{ text: "Service Canada Labs", link: "/" }]}
    >
      <Head>
        {process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL ? (
          <script src={process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL} />
        ) : (
          ""
        )}
        <title>{t("scLabsThankYou")}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="dcterms.title" content={t("scLabsThankYou")} />
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
          className="mb-10 text-h1l font-bold w-max"
          tabIndex="-1"
        >
          {t("pleaseCheckYourEmail")}
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
              {t("sentEmailTo")} {maskedEmail} {t("from")}{" "}
              <a
                className="underline hover:text-canada-footer-hover-font-blue text-canada-footer-font"
                href={`mailto: ${process.env.NEXT_PUBLIC_THANK_YOU_EMAIL}`}
              >
                {process.env.NEXT_PUBLIC_THANK_YOU_EMAIL}
              </a>{" "}
              {t("toCheckEmail")}
            </p>
            <p className="mb-4 text-sm lg:text-p leading-30px">
              {referrer === "signup"
                ? t("confirmationP2")
                : t("unsubscribeConfirmation")}
            </p>
            <p className="mb-4 text-sm lg:text-p leading-30px">
              {referrer === "signup"
                ? t("confirmationP3")
                : t("unsubscribeConfirmationP1")}
            </p>
            {referrer === "signup" ? (
              <p className="mb-4 text-sm lg:text-p leading-30px">
                {t("confirmationP4")}
              </p>
            ) : (
              ""
            )}
            <ActionButton id="resend_email" text={t("resendEmail")} tertiary />
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
