import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Layout } from "../../../components/organisms/Layout";
import { useRouter } from "next/router";
import { VirtualConcierge } from "../../../components/organisms/VirtualConcierge";
import { CallToAction } from "../../../components/molecules/CallToAction";
import { ActionButton } from "../../../components//atoms/ActionButton";

export default function Home(props) {
  const { t } = useTranslation(["common", "vc"]);
  const { asPath } = useRouter();

  return (
    <>
      <Layout
        locale={props.locale}
        langUrl={asPath}
        breadcrumbItems={[
          { text: t("siteTitle"), link: t("breadCrumbsHref1") },
          { text: t("menuLink1"), link: t("breadCrumbsHref2") },
        ]}
      >
        <Head>
          {process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL ? (
            <script src={process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL} />
          ) : (
            ""
          )}
          <title>{`${t("vc:virtualAssistantTitle")} — ${t(
            "siteTitle"
          )}`}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="dcterms.title"
            content={`${t("vc:virtualAssistantTitle")} — ${t("siteTitle")}`}
          />
          <meta
            name="dcterms.language"
            content={props.locale === "en" ? "eng" : "fra"}
          />
          <meta name="dcterms.creator" content={t("creator")} />
          <meta name="dcterms.accessRights" content="2" />
          <meta
            name="dcterms.service"
            content="ESDC-EDSC_SCLabs-LaboratoireSC"
          />
          <meta name="dcterms.issued" content="2021-07-20" />
        </Head>

        {/* Virtual Assitant Demo section start -  with link to working prototype */}
        <section className="layout-container mb-10">
          <h1 className="mb-8 text-h1l" tabIndex="-1" id="pageMainTitle">
            {t("vc:virtualAssistantTitle")}
          </h1>
          {/* the scenario section */}
          <div className="whitespace-pre-line ">
            <h2 className="mb-6 mt-8 text-h1" id="virtualAssistantTitle">
              {t("vc:scenarioTitle")}
            </h2>
            <p
              className="mb-6 lg:col-span-2 px-1 lg:px-0 "
              dangerouslySetInnerHTML={{ __html: t("vc:scenarioBody") }}
            >
              {/* {t("vc:scenarioDemoBody")} */}
            </p>
            <p className="flex mb-16 text-center">
              <ActionButton
                href="https://virtual-assistant.toadfor.ca/en"
                id="meet-va-link"
                dataCy="meet-va-link"
                className="rounded px-6 py-4 font-bold text-center inline-block"
              >
                {t("vc:meetAssistant")}
              </ActionButton>
            </p>
          </div>

          <div className="w-auto mb-6 ">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-6 ">
              <h2 className="mb-0 text-h1" id="virtualAssistantTitle">
                {t("vc:virtualAssistantBioTitle")}
              </h2>

              <div className="row-span-2 bg-gradient-to-tr from-custom-blue-blue to-vc-blue-lt  p-4 ">
                <img
                  className=" object-fill w-64 h-auto mx-auto"
                  src="/virtualconcierge/VirtualConcierge.svg"
                  alt={t("vc:virtualAssistantLogoAlt")}
                />
              </div>
              <p className=" font-body text-lg px-1 lg:px-0 ">
                {t("vc:virtualAssistantBioBody")}
              </p>
            </div>
          </div>
        </section>
        {/* END Virtual Assistant Demo section end for working prototype */}

        {/* Original section start */}

        {/* <section className="layout-container mb-10">
          <div className="w-auto mb-6">
            <h1 className="mb-8 text-h1l" tabIndex="-1" id="pageMainTitle">
              {t("vc:virtualAssistantTitleStatic")}
            </h1>
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 gap-4 lg:gap-6 ">
              <p className="lg:col-span-2 px-1 lg:px-0 ">
                {t("vc:virtualAssistantBioStatic")}
              </p>

              <div className=" bg-gradient-to-tr from-custom-blue-blue to-vc-blue-lt  p-4 ">
                <img
                  className=" object-fill w-64 h-auto mx-auto"
                  src="/virtualconcierge/VirtualConcierge.svg"
                  alt={t("vc:virtualAssistantLogoAlt")}
                />
              </div>
            </div>
          </div> */}
        {/* the scenario section */}
        {/* <div>
            <h2 className="mb-6 mt-8 text-h1" id="virtualAssistantTitle">
              {t("vc:sectionTitle")}
            </h2>
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
            /> */}

        {/* <VirtualConcierge
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
            /> */}
        {/* <VirtualConcierge
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
            <p className="my-6">
              <strong>{t("projectsDisclaimer")}</strong>
            </p>
          </div>
        </section> */}
        {/* Original section end */}

        <CallToAction
          title={t("signupTitleCallToAction")}
          html={t("becomeAParticipantDescription")}
          href={"/signup"}
          hrefText={t("signupBtn")}
        />
      </Layout>
      {process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL ? (
        <script type="text/javascript">_satellite.pageBottom()</script>
      ) : (
        ""
      )}
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    locale: locale,
    ...(await serverSideTranslations(locale, ["common", "vc"])),
  },
});
