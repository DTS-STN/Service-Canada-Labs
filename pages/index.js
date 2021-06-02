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
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-24">
          <TextButtonField
            href="/experiments"
            buttonText={t("experimentsBtnTxt")}
            idButton="ExperimentsButton"
            dataCyButton="ExperimentsButton"
          >
            <h1>{t("experimentsAndExplorationTitle")}</h1>
            <p>{t("experimentsAndExploration-1/3")}</p>
            <p>{t("experimentsAndExploration-2/3")}</p>
            <p>{t("experimentsAndExploration-3/3")}</p>
          </TextButtonField>
          <div className="lg:pt-32">
            <Quote text={t("experimentsComment")} author="Kim Lee Kho" />
          </div>
        </div>
      </section>

      <section className="bg-footer-background-color  ">
        <div className="flex flex-col-reverse pt-8  layout-container   xl:grid xl:grid-cols-2 xl:gap-8">
          <List
            items={[
              t("circleTxt1/4"),
              t("circleTxt2/4"),
              t("circleTxt3/4"),
              t("circleTxt4/4"),
            ]}
          />
          <div>
            <h2 className="text-h1">{t("aboutTitle")}</h2>
            <p className="text-sm md:text-p leading-normal text-left font-body font-normal py-4">
              {t("AboutThisSite1/3")}
            </p>
            <p className="text-sm md:text-p leading-normal text-left font-body font-normal py-4">
              {t("AboutThisSite2/3")}
            </p>
            <p className="text-sm md:text-p leading-normal text-left font-body font-normal py-4">
              {t("AboutThisSite3/3")}
            </p>
            <div className="invisible xl:visible">
              <ActionButton
                id="LearnMoreButton"
                text={t("learnMoreBtn")}
                className={"text-xs md:text-base"}
                secondary
                dataCyButton={"learn-more"}
              />
            </div>
          </div>
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
