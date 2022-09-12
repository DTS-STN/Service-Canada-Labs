import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Layout } from "../../../components/organisms/Layout";
import { ActionButton } from "../../../components//atoms/ActionButton";
import { useEffect, useState } from "react";
import queryGraphQL from "../../../graphql/client";
import getVirtualAssistantPage from "../../../graphql/queries/virtualAssistantQuery.graphql";
import Image from "next/image";
import Card from "../../../components/molecules/Card";
import { Alert } from "../../../components/atoms/Alert";

//  On hold for now
//  import { VirtualConcierge } from "../../../components/organisms/VirtualConcierge";
// import { CallToAction } from "../../../components/molecules/CallToAction";

export default function Home(props) {
  const { t } = useTranslation(["common", "vc"]);
  const [pageData] = useState(props.pageData.item);

  useEffect(() => {
    if (props.adobeAnalyticsUrl) {
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ event: "pageLoad" });
    }
  }, []);

  return (
    <>
      <Layout
        locale={props.locale}
        langUrl={
          props.locale === "en" ? pageData.scPageNameFr : pageData.scPageNameEn
        }
        breadcrumbItems={[
          { text: t("siteTitle"), link: t("breadCrumbsHref1") },
          { text: t("menuLink1"), link: t("breadCrumbsHref2") },
        ]}
      >
        <Head>
          {props.adobeAnalyticsUrl ? (
            <script src={props.adobeAnalyticsUrl} />
          ) : (
            ""
          )}

          {/* Primary HTML Meta Tags */}
          <title>{`${
            props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr
          } — ${t("siteTitle")}`}</title>
          <meta name="description" content={`${t("vc:metaDescription")}`} />
          <meta name="author" content="Service Canada" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href={t("vc:canonicalURL")} />
          <link rel="schema.dcterms" href="http://purl.org/dc/terms/" />
          <meta name="keywords" content={t("vc:keywords")} />

          {/* DCMI Meta Tags */}
          <meta
            name="dcterms.title"
            content={`${t("vc:virtualAssistantTitle")} — ${t("siteTitle")}`}
          />
          <meta
            name="dcterms.language"
            content={props.locale === "en" ? "eng" : "fra"}
            title="ISO639-2/T"
          />
          <meta name="dcterms.creator" content="Service Canada" />
          <meta name="dcterms.accessRights" content="2" />
          <meta
            name="dcterms.service"
            content="ESDC-EDSC_SCLabs-LaboratoireSC"
          />
          <meta name="dcterms.issued" title="W3CDTF" content="2021-07-20" />

          <meta name="dcterms.modified" title="W3CDTF" content="2021-12-16" />
          <meta name="dcterms.description" content={t("vc:metaDescription")} />
          <meta
            name="dcterms.subject"
            title="gccore"
            content={`${t("vc:metaSubject")}`}
          />
          <meta name="dcterms.spatial" content="Canada" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:locale" content={props.locale} />
          <meta property="og:url" content={t("vc:canonicalURL")} />
          <meta
            property="og:title"
            content={`${t("vc:virtualAssistantTitle")} — ${t("siteTitle")}`}
          />
          <meta
            property="og:description"
            content={t("vc:virtualAssistantBioBody")}
          />
          <meta property="og:image" content={t("metaImage")} />
          <meta property="og:image:alt" content={t("siteTitle")} />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={t("vc:canonicalURL")} />
          <meta
            property="twitter:title"
            content={`${t("vc:virtualAssistantTitle")} — ${t("siteTitle")}`}
          />
          <meta name="twitter:creator" content="Service Canada" />
          <meta
            property="twitter:description"
            content={t("vc:virtualAssistantBioBody")}
          />
          <meta property="twitter:image" content={t("metaImage")} />
          <meta property="twitter:image:alt" content={t("siteTitle")} />
        </Head>

        {/* Virtual Assitant Demo section start -  with link to working prototype */}
        <section className="layout-container mb-10">
          <h1 className="mb-16 text-h1l" tabIndex="-1" id="pageMainTitle">
            {props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr}
          </h1>
          <div className="w-auto mb-12">
            <div className="flex flex-col break-words lg:grid lg:grid-cols-2 gap-4 lg:gap-6 ">
              <h2 className="mb-0 text-h1" id="virtualAssistantTitle">
                {props.locale === "en"
                  ? pageData.scFragments[1].scContentEn.json[0].content[0].value
                  : pageData.scFragments[1].scContentFr.json[0].content[0]
                      .value}
              </h2>

              <div className="row-span-2 bg-gradient-to-tr from-custom-blue-blue to-vc-blue-lt p-4 flex justify-center">
                <Image
                  src={`https://www.canada.ca${
                    props.locale === "en"
                      ? pageData.scFragments[2].scImageEn._path
                      : pageData.scFragments[2].scImageFr._path
                  }`}
                  alt={
                    props.locale === "en"
                      ? pageData.scFragments[2].scImageAltTextEn
                      : pageData.scFragments[2].scImageAltTextFr
                  }
                  width={260}
                  height={260}
                />
              </div>
              <p className=" font-body text-lg px-1 lg:px-0 ">
                {props.locale === "en"
                  ? pageData.scFragments[1].scContentEn.json[1].content[0].value
                  : pageData.scFragments[1].scContentFr.json[1].content[0]
                      .value}
              </p>
            </div>
          </div>
          <div className="mb-12">
            <h2>Project updates</h2>
            <Card
              href="/projects"
              title="What we learned building the Service Canada Virtual Assistant"
              description="Our goal with the Virtual Assistant was to start with user needs and build a prototype that shows how a user-friendly chatbot experience could be. From there, we can work backwards to identify what else needs to be in place to make it possible."
              btnText="Read more about the Virtual Assistant"
              btnHref="/projects"
              btnId=""
              blog
            />
          </div>
          <div>
            <h2>Explore the Virtual Assistant</h2>
            <Alert
              title="This project is no longer collecting feedback."
              text="We are not actively working on this project and are not collecting feedback to improve it at this time. This may change in the future."
            />
            <p className="flex mb-4 text-center">
              <ActionButton
                id="become-a-participant-btn"
                custom={`py-1.5 px-3 rounded text-white text-base lg:text-p font-display bg-custom-blue-dark hover:bg-custom-blue-light border border-custom-blue-darker active:bg-custom-blue-darker hover:ring-2 hover:ring-white`}
                className=""
                href={"/tryitout"}
                text={"Explore the Virtual Assistant"}
                ariaExpanded={props.ariaExpanded}
              />
            </p>
          </div>
        </section>
        {/* END Virtual Assistant Demo section end for working prototype */}

        {/* <CallToAction
          title={t("signupTitleCallToAction")}
          html={t("becomeAParticipantDescription")}
          href={"/signup"}
          hrefText={t("signupBtn")}
        /> */}
      </Layout>
      {props.adobeAnalyticsUrl ? (
        <script type="text/javascript">_satellite.pageBottom()</script>
      ) : (
        ""
      )}
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  // get page data from AEM
  const res = await queryGraphQL(getVirtualAssistantPage).then((result) => {
    return result;
  });

  const data = res.data.sCLabsPageByPath;
  return {
    props: {
      locale: locale,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL,
      pageData: data,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
