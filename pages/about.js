import { Layout } from "../components/organisms/Layout";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { List } from "../components/molecules/List";
import { ActionButton } from "../components/atoms/ActionButton";
import { CallToAction } from "../components/molecules/CallToAction";

export default function About(props) {
  const { t } = useTranslation("common");
  const { asPath } = useRouter();

  return (
    <Layout
      locale={props.locale}
      langUrl={asPath}
      breadcrumbItems={[{ text: "Service Canada Labs", link: "/" }]}
    >
      <Head>
        <title>{t("scLabsAbout")}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="dcterms.title" content={t("scLabsAbout")} />
        <meta
          name="dcterms.language"
          content={props.locale === "en" ? "eng" : "fra"}
        />
        <meta name="dcterms.creator" content={t("creator")} />
        <meta name="dcterms.accessRights" content="2" />
      </Head>
      <section className="layout-container relative mb-10">
        <h1
          id="pageMainTitle"
          className="mb-10 text-h1l font-bold w-max"
          tabIndex="-1"
        >
          {t("aboutTitle")}
        </h1>
        <div className="xl:w-2/3">
          <p className="mb-4">{t("aboutThisSiteContent1")}</p>
          <p className="mb-4">{t("aboutThisSiteContent2")}</p>
          <p>{t("aboutThisSiteContent3")}</p>
          <p className="mb-4">
            {t("getInTouch")}&nbsp;
            <a
              className="underline hover:text-canada-footer-hover-font-blue text-canada-footer-font"
              href={`mailto: ${process.env.NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL}`}
            >
              {process.env.NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL}
            </a>
            .
          </p>
        </div>
      </section>
      <section className="bg-footer-background-color ">
        <div className="layout-container">
          <h2 className="mb-5 pt-10 text-h1l font-bold w-max">
            {t("howWeWork")}
          </h2>
          <div className="flex flex-col-reverse pt-8 xl:grid xl:grid-cols-2 xl:gap-8">
            <List
              items={[
                t("circleTxt1/4"),
                t("circleTxt2/4"),
                t("circleTxt3/4"),
                t("circleTxt4/4"),
              ]}
            />
          </div>
          <div className="xl:bg-footer-background-color  bg-white ">
            <div className="xl:invisible layout-container pt-6 xl:pt-0 xl:pb-0 pb-10 ">
              <ActionButton
                id="LearnMoreButtonSmScreen"
                text={t("learnMoreBtn")}
                className={"text-xs md:text-base"}
                secondary
                dataCyButton={"learn-more"}
              />
            </div>
          </div>
        </div>
      </section>
      <CallToAction
        title={t("signupTitle")}
        description={t("becomeAParticipantDescription")}
        href={"/signup"}
        hrefText={t("signupTitle").slice(0, t("signupTitle").length - 1)}
      />
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
