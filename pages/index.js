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
      <div className="bg-gray-light-200 py-6">
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
      </div>

      <section className="layout-container mb-8">
        <div className="flex flex-col           lg:grid lg:grid-cols-2 lg:gap-24">
          <div>
            <h1>Experiments and exploration</h1>
            <br></br>
            <p className="leading-normal text-left font-body">
              Our team within the Government of Canada is experimenting, and
              we’re inviting you into our labs to design and test with us.
            </p>
            <br></br>
            <p className="leading-normal text-left font-body">
              This web site showcases experiments and early models of features
              and services that we’re currently working on. These features and
              services are still in their early stages and are not ready for
              prime time just yet, but we’re inviting you behind the scenes to
              help us test and improve them as we go.
            </p>
            <br></br>
            <p className="leading-normal text-left font-body">
              You can see all of our ongoing experiments in one place, to make
              it easier for us to collaborate and show you what we’re working
              on. We’ve made these experiments publicly available in the spirit
              of working in the open.
            </p>
            <br></br>
          </div>
          <div className="lg:pt-32 mb-6 ">
            <div className="border-l-4 border-grey-600">
              <p className="pl-4">
                “With experimentation comes surprise and discovery.”
              </p>
              <p className="pl-4"> — Kim Lee Kho</p>
            </div>
          </div>
        </div>

        <ActionButton
          text="See the experiements"
          secondary
          dataCyButton={"see-the-experiements"}
        />
      </section>

      <section className="bg-footer-background-color  ">
        <div className="flex flex-col pt-8  layout-container     lg:grid lg:grid-cols-2 lg:gap-24">
          <div>
            <div className="grid grid-cols-4  gap-2">
              <div class="bg-circle-color opacity-40  rounded-full h-24 w-24 flex items-center justify-center text-white font-bold text-h1 ">
                1{" "}
              </div>
              <div className="col-span-3 self-center">
                <p>Showcasing our early work ready for prime time</p>
              </div>
            </div>
            <div class="bg-circle-color opacity-60 rounded-full h-24 w-24 flex items-center justify-center text-white font-bold text-h1">
              2
            </div>

            <div class="bg-circle-color opacity-80 rounded-full h-24 w-24 flex items-center justify-center text-white font-bold text-h1">
              3
            </div>

            <div class="bg-circle-color opacity-100 rounded-full h-24 w-24 flex items-center justify-center text-white font-bold text-h1 ">
              4
            </div>
          </div>

          <div className="">
            <h1>About this site</h1>
            <br></br>
            <p className="leading-normal text-left font-body">
              From the Digital Experience and Client Data (DECD) unit at
              Employment and Social Development Canada (ESDC), this web site is
              a digital “test kitchen” where anyone can see, test and provide
              feedback on new products under development.
            </p>
            <br></br>
            <p className="leading-normal text-left font-body">
              This will enable us to collect feedback which is vital in
              delivering useful products with excellent user experience.{" "}
            </p>
            <br></br>
            <p className="leading-normal text-left font-body">
              {" "}
              We need “taste testers” early and often so the dishes will taste
              good when they’re done.{" "}
            </p>
            <br></br>
          </div>
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
