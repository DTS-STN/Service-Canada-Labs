import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Layout } from "../components/organisms/Layout";
import { ActionButton } from "../components/atoms/ActionButton";
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
      {/* <div className="bg-gray-light-200 py-6">
        <div className="layout-container flex">
          <ActionButton
            text={t("buttonStartTesting")}
            secondary
            className={"mr-4"}
            dataCyButton={"start-testing-button"}
          />
          <ActionButton
            text={t("buttonBecomeTester")}
            dataCyButton={"become-tester-button"}
          />
        </div>
      </div> */}

      <section className="layout-container mb-8 mt-12">
        <div className="flex flex-col           lg:grid lg:grid-cols-2 lg:gap-24">
          <div>
            <h1>{t("experimentsAndExplorationTitle")}</h1>
            <br></br>
            {/* <p className="text-sm md:text-p leading-normal text-left font-normal font-body">Our team within the Government of Canada is experimenting, and we’re inviting you into our labs to design and test with us.</p>
            <br></br>
            <p className="text-sm md:text-p leading-normal text-left font-normal font-body">This web site showcases experiments and early models of features and services that we’re currently working on.
            These features and services are still in their early stages and are not ready for prime time just yet,
            but we’re inviting you behind the scenes to help us test and improve them as we go.</p>
            <br></br>
            <p className="text-sm md:text-p leading-normal text-left font-normal font-body">You can see all of our ongoing experiments in one place, to make it easier for us to
           collaborate and show you what we’re working on. We’ve made these experiments publicly available in the spirit of working in the open.</p>
            <br></br> */}
            <p className="text-sm md:text-p leading-normal text-left font-normal font-body">
              {t("experimentsAndExploration-1/3")} <br></br> <br></br>
              {t("experimentsAndExploration-2/3")}
              <br></br>
              <br></br> {t("experimentsAndExploration-3/3")}
            </p>
            <br></br>
          </div>
          <div className="lg:pt-32 mb-6 ">
            <div className="border-l-4">
              <p className="text-sm md:text-p pl-4 leading-normal text-left font-normal font-body">
                {t("experimentsComment")}
              </p>
              <p className="text-sm md:text-p pt-4 pl-4 text-gray-500 leading-normal text-left font-normal font-body">
                {" "}
                — Kim Lee Kho
              </p>
            </div>
          </div>
        </div>
        <ActionButton
          className={"text-xs md:text-base"}
          text={t("experimentsBtnTxt")}
          secondary
          dataCyButton={"see-the-experiements"}
        />
      </section>

      <section className="bg-footer-background-color  ">
        <div className="flex flex-col-reverse pt-8  layout-container   xl:grid xl:grid-cols-2 xl:gap-8">
          <div>
            <div className="flex flex-row ">
              <div
                className="bg-circle-color flex-shrink-0 opacity-40 mr-4 mb-2 rounded-full h-32 w-32 flex items-center justify-center
           text-white font-bold text-h1xl relative md:left-0 -left-14 "
              >
                1{" "}
              </div>
              <div className=" self-center -ml-14 md:ml-0">
                <p className="text-sm md:text-p leading-normal text-left font-normal font-body">
                  {t("circleTxt1/4")}
                </p>
              </div>
            </div>
            <div className="flex flex-row ">
              <div
                className="bg-circle-color flex-shrink-0 opacity-60 mr-4 mb-2  rounded-full h-32 w-32 flex items-center justify-center
           text-white font-bold text-h1xl  relative md:left-0 -left-14 "
              >
                2{" "}
              </div>
              <div className=" self-center -ml-14 md:ml-0">
                <p className="text-sm md:text-p leading-normal text-left font-normal font-body ">
                  {t("circleTxt2/4")}
                </p>
              </div>
            </div>
            <div className="flex flex-row ">
              <div
                className="bg-circle-color flex-shrink-0 opacity-80  mr-4 mb-2 rounded-full h-32 w-32  flex items-center justify-center
           text-white font-bold text-h1xl  relative md:left-0 -left-14"
              >
                3{" "}
              </div>
              <div className=" self-center -ml-14 md:ml-0">
                <p className="text-sm md:text-p leading-normal text-left font-normal font-body">
                  {t("circleTxt3/4")}
                </p>
              </div>
            </div>
            <div className="flex flex-row ">
              <div
                className="bg-circle-color flex-shrink-0 opacity-100  mr-4 mb-2  rounded-full h-32 w-32 flex items-center justify-center
           text-white font-bold text-h1xl  relative md:left-0 -left-14"
              >
                4{" "}
              </div>
              <div className=" self-center -ml-14 md:ml-0">
                <p className="text-sm md:text-p leading-normal text-left font-normal font-body">
                  {t("circleTxt4/4")}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h1>{t("aboutTitle")}</h1>
            <br></br>
            <p className="text-sm md:text-p  leading-normal text-left font-body  font-normal">
              {t("AboutThisSite1/3")}
              <br></br>
              <br></br>
              {t("AboutThisSite2/3")}
              <br></br>
              <br></br>
              {t("AboutThisSite2/3")}
            </p>
            <br></br>
            <div className="invisible xl:visible">
              <ActionButton
                text={t("learnMoreBtn")}
                className={"text-xs md:text-base"}
                secondary
                dataCyButton={"learn-more"}
              />
            </div>
          </div>
        </div>
        <div className="xl:invisible bg-white md:pl-16 lg:pl-32  pt-6 xl:pt-0 xl:pb-0 pb-10 pl-6">
          <ActionButton
            text={t("learnMoreBtn")}
            className={"text-xs md:text-base"}
            secondary
            dataCyButton={"learn-more"}
          />
        </div>
      </section>

      {/* <h2>{t("aboutUsHeading")}</h2>
        <p>{t("aboutUsContent")}</p>

        <figure>Block</figure>

        <figure>
          Block
          <figcaption>{t("figCaption")}</figcaption>
        </figure> */}

      {/* <section className="layout-container">
        <h3>{t("contactUsHeading")}</h3>
        <p>{t("contactUsContent")}</p>
        <a href="#">john.doe@example.com</a>
        <figure>Block</figure>
      </section>

      <section className="layout-container">
        <h4>{t("featuredPrototypesHeading")}</h4>
        <figure>Block</figure>
        <figure>Block</figure>
        <figure>Block</figure>
      </section> */}
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    locale: locale,
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
