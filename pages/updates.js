import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Layout } from "../components/organisms/Layout";
import { useEffect } from "react";
import Card from "../components/molecules/Card";
import aemServiceInstance from "../services/aemServiceInstance";
import { Heading } from "../components/molecules/Heading";
import { ContextualAlert } from "../components/molecules/ContextualAlert";
import Image from "next/image";
import { Link as LinkWrapper } from "../components/atoms/Link";
import Link from "next/link";
import { ExploreUpdates } from "../components/organisms/ExploreUpdates";
import FragmentRender from "../components/fragment_renderer/FragmentRender";
import { sortUpdatesByDate } from "../lib/utils/sortUpdatesByDate";
import PageHead from "../components/fragment_renderer/PageHead";

export default function UpdatesPage(props) {
  const pageData = props.pageData?.item;
  const updatesData = props.updatesData;
  const dictionary = props.dictionary;

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
        dateModifiedOverride={pageData.scDateModifiedOverwrite}
      >
        <PageHead pageData={pageData} />
        <div
          id="pageMainTitle"
          className="flex flex-col justify-center content-center mt-16 h-[182px] bg-multi-blue-blue70 bg-no-repeat bg-clip-border sm:bg-right-bottom bg-bottom"
          style={{
            backgroundImage: `url(/updates-projectsbanner.png)`,
          }}
        >
          <div className="layout-container text-white">
            <h1 className="m-0">Main heading</h1>
            <p>Subtitle content</p>
          </div>
        </div>
        <div className="layout-container"></div>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  // Get page data
  const { data: pageData } = await fetch(
    `${process.env.AEM_BASE_URL}/getSclUpdatesV1`
  ).then((res) => res.json());
  // Get updates data
  const { data: updatesData } = await fetch(
    `${process.env.AEM_BASE_URL}/getSclAllUpdatesV1`
  ).then((res) => res.json());
  // get dictionary
  const { data: dictionary } = await fetch(
    `${process.env.AEM_BASE_URL}/getSclDictionaryV1`
  ).then((res) => res.json());

  return {
    props: {
      locale: locale,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL ?? null,
      pageData: pageData.sclabsPageV1ByPath,
      updatesData: updatesData.sclabsPageV1List.items,
      dictionary: dictionary.dictionaryV1List,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: process.env.ISR_ENABLED === "true" ? 10 : false,
  };
};
