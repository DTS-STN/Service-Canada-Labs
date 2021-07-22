import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Layout } from "../../../components/organisms/Layout";
import { useRouter } from "next/router";
import { VirtualConcierge } from "../../../components/organisms/VirtualConcierge";
import { CallToAction } from "../../../components/molecules/CallToAction";

export default function Home(props) {
  const { t } = useTranslation(["common", "vc"]);
  const { asPath } = useRouter();

  return (
    <Layout
      locale={props.locale}
      langUrl={asPath}
      breadcrumbItems={[
        { text: t("bannerTitle"), link: t("breadCrumbsHref1") },
        { text: t("menuLink1"), link: t("breadCrumbsHref2") },
      ]}
    >
      <Head>
        {process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL ? (
          <script src={process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL} />
        ) : (
          ""
        )}
        <title>{t("vc:virtualAssistantTitle")}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="dcterms.title" content={t("scLabsHome")} />
        <meta
          name="dcterms.language"
          content={props.locale === "en" ? "eng" : "fra"}
        />
        <meta name="dcterms.creator" content={t("creator")} />
        <meta name="dcterms.accessRights" content="2" />
        <meta name="dcterms.service" content="ESDC-EDSC_SCLabs-LaboratoireSC" />
        <meta name="dcterms.issued" content="2021-03-18" />
      </Head>

      <section className="layout-container mb-2 mt-12 ">
        <div className="w-auto mb-6">
          <h1 className="mb-8 text-h1l" tabIndex="-1" id="pageMainTitle">
            {t("vc:virtualAssistantTitle")}
          </h1>
          <div className="grid lg:grid-cols-2 gap-6  ">
            <div className=" bg-gradient-to-tr from-custom-blue-blue to-vc-blue-lt  p-4 ">
              <img
                className=" object-fill w-80 h-auto mx-auto"
                src="/virtualconcierge/VirtualConcierge.svg"
                alt={t("vc:virtualAssistantLogoAlt")}
              />
            </div>

            <p className="mb-4 px-1 lg:px-0 ">{t("vc:virtualAssistantBio")}</p>
          </div>
        </div>
        {/* the scenario section */}
        <div>
          <p
            className="mb-6 mt-8 text-h1 font-display font-bold"
            tabIndex="-1"
            id="virtualAssistantTitle"
          >
            {t("vc:sectionTitle")}
          </p>
          <VirtualConcierge
            dataTestId="scenario1"
            dataCy="scenario1"
            description={t("vc:scenarioPart1")}
            description1={t("vc:scenarioPart1-1")}
            className=" bg-gray-200"
            vcImage={
              props.locale === "fr"
                ? "/virtualconcierge/fr/virtual-concierge1.png"
                : "/virtualconcierge/en/virtual-concierge1.png"
            }
            vcImageAltText={t("vc:altTextfigure1")}
            figureCaption={t("vc:figureCaption1")}
          />

          <VirtualConcierge
            dataTestId="scenario2"
            dataCy="scenario2"
            description={t("vc:scenarioPart2")}
            className=" bg-gray-200"
            vcImage={
              props.locale === "fr"
                ? "/virtualconcierge/fr/virtual-concierge2.png"
                : "/virtualconcierge/en/virtual-concierge2.png"
            }
            vcImageAltText={t("vc:altTextfigure2")}
            figureCaption={t("vc:figureCaption2")}
          />
          <VirtualConcierge
            dataTestId="scenario3"
            dataCy="scenario3"
            description={t("vc:scenarioPart3")}
            className=" bg-gray-200"
            vcImage={
              props.locale === "fr"
                ? "/virtualconcierge/fr/virtual-concierge3.png"
                : "/virtualconcierge/en/virtual-concierge3.png"
            }
            vcImageAltText={t("vc:altTextfigure3")}
            figureCaption={t("vc:figureCaption3")}
          />
          <p className="pb-2 xl:w-3/4">{t("vc:scenarioPart4")}</p>
          <p className="pb-2 xl:w-3/4">{t("vc:scenarioPart4-1")}</p>
          <p className="pb-2 mb-6 font-bold xl:w-3/4">
            {t("vc:scenarioPart4-2")}
          </p>
        </div>
      </section>
      <CallToAction
        title={t("signupTitle")}
        html={t("becomeAParticipantDescription")}
        href={"/signup"}
        hrefText={t("signupBtn")}
      />
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    locale: locale,
    ...(await serverSideTranslations(locale, ["common", "vc"])),
  },
});
