import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Layout } from "../../../components/organisms/Layout";
import { TextButtonField } from "../../../components/molecules/TextButtonField";
import { useRouter } from "next/router";
import { VirtualConcierge } from "../../../components/organisms/VirtualConcierge";

export default function Home(props) {
  const { t } = useTranslation("common");
  const { asPath } = useRouter();

  return (
    <Layout
      locale={props.locale}
      langUrl={asPath}
      // TODO not sure what the path is here
      breadcrumbItems={[{ text: "Service Canada Labs", link: "/" }]}
    >
      <Head>
        {process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL ? (
          <script src={process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL} />
        ) : (
          ""
        )}
        <title>{t("scLabsHome")}</title>
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
          <h2 className="mb-8" tabIndex="-1" id="virtualAssistantTitle">
            {t("vc.virtualAssistantTitle")}
          </h2>
          <div className="grid lg:grid-cols-2 gap-6  ">
            <div className=" bg-gradient-to-tr from-custom-blue-blue to-vc-blue-lt  p-4 ">
              <img
                className=" object-fill w-80 h-auto mx-auto"
                src="/virtualconcierge/VirtualConcierge.svg"
                alt="Virtual Assistant Logo"
              />
            </div>

            <p className="mb-4 px-1 lg:px-0 ">{t("vc.virtualAssistantBio")}</p>
          </div>
        </div>
        {/* the scenario section */}
        <div>
          <h2 className="mb-6 mt-8 " tabIndex="-1" id="virtualAssistantTitle">
            {t("vc.sectionTitle")}
          </h2>
          <VirtualConcierge
            dataTestId="scenario1"
            dataCy="scenario1"
            description={t("vc.scenarioPart1")}
            description1={t("vc.scenarioPart1-1")}
            vcImage="/virtualconcierge/VirtualConcierge.svg"
            vcImageAltText={t("vc.altText1")}
          />

          <VirtualConcierge
            dataTestId="scenario2"
            dataCy="scenario2"
            description={t("vc.scenarioPart2")}
            vcImage="/virtualconcierge/VirtualConcierge.svg"
            vcImageAltText={t("vc.altText2")}
          />
          <VirtualConcierge
            dataTestId="scenario3"
            dataCy="scenario3"
            description={t("vc.scenarioPart2")}
            vcImage="/virtualconcierge/VirtualConcierge.svg"
            vcImageAltText={t("vc.altText3")}
          />
          <VirtualConcierge
            dataTestId="scenario4"
            dataCy="scenario4"
            description={t("vc.scenarioPart4")}
            description1={t("vc.scenarioPart4-1")}
            description2={t("vc.scenarioPart4-2")}
            vcImage="/virtualconcierge/VirtualConcierge.svg"
            vcImageAltText={t("vc.altText4")}
          />
        </div>
        {/* these are the buttons on the bottom of the page that can be added if wanted.  */}
        {/* <div className="flex-col flex lg:flex lg:flex-row gap-1">
          <TextButtonField href="/experiments" buttonText={t("experimentsBtnTxt")} idButton="ExperimentsButton" dataCyButton="ExperimentsButton" className="flex" />
          <TextButtonField href="/about" buttonText={t("learnMoreAboutSCL")} idButton="AboutButton" dataCyButton="AboutButton" className="flex" />
        </div> */}
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
