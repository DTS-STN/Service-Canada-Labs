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
      // TODO not sure what the path is here
      breadcrumbItems={[{ text: "Service Canada Labs", link: "/home" }]}
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
          <h2 className="mb-8 text-h1l" tabIndex="-1" id="pageMainTitle">
            {t("vc:virtualAssistantTitle")}
          </h2>
          <div className="grid lg:grid-cols-2 gap-6  ">
            <div className=" bg-gradient-to-tr from-custom-blue-blue to-vc-blue-lt  p-4 ">
              <img
                className=" object-fill w-80 h-auto mx-auto"
                src="/virtualconcierge/VirtualConcierge.svg"
                alt="Virtual Assistant Logo"
              />
            </div>

            <p className="mb-4 px-1 lg:px-0 ">{t("vc:virtualAssistantBio")}</p>
          </div>
        </div>
        {/* the scenario section */}
        <div>
          <h1
            className="mb-6 mt-8 text-h1"
            tabIndex="-1"
            id="virtualAssistantTitle"
          >
            {t("vc:sectionTitle")}
          </h1>
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
            vcImageAltText={t("vc:altText1")}
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
            vcImageAltText={t("vc:altText2")}
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
            vcImageAltText={t("vc:altText3")}
          />
          <p className="pb-2 ">{t("vc:scenarioPart4")}</p>
          <p className="pb-2 ">{t("vc:scenarioPart4-1")}</p>
          <p className="pb-2 mb-6">{t("vc:scenarioPart4-2")}</p>
        </div>

        {/*TODO these are the buttons on the bottom of the page that can be added if needed.  */}
        {/* <div className="flex-col flex lg:flex lg:flex-row gap-1">
          <TextButtonField href="/experiments" buttonText={t("experimentsBtnTxt")} idButton="ExperimentsButton" dataCyButton="ExperimentsButton" className="flex" />
          <TextButtonField href="/about" buttonText={t("learnMoreAboutSCL")} idButton="AboutButton" dataCyButton="AboutButton" className="flex" />
        </div> */}
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

export const getStaticProps = async ({ locale }) => ({
  props: {
    locale: locale,
    ...(await serverSideTranslations(locale, ["common", "vc"])),
  },
});
