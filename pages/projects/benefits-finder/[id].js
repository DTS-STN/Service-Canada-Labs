import PageHead from "../../../components/fragment_renderer/PageHead";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Layout } from "../../../components/organisms/Layout";
import { useEffect, useState } from "react";
import aemServiceInstance from "../../../services/aemServiceInstance";
import { getAllUpdateIds } from "../../../lib/utils/getAllUpdateIds";
import { createBreadcrumbs } from "../../../lib/utils/createBreadcrumbs";
import FragmentRender from "../../../components/fragment_renderer/FragmentRender";
import { Heading } from "../../../components/molecules/Heading";
import { getDictionaryTerm } from "../../../lib/utils/getDictionaryTerm";

export default function BenefitFinderArticles(props) {
  const [pageData] = useState(props.pageData);
  const [dictionary] = useState(props.dictionary.items);

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
        breadcrumbItems={createBreadcrumbs(
          pageData.scBreadcrumbParentPages,
          props.locale
        )}
      >
        <PageHead pageData={pageData} locale={props.locale} />
        <section className="mb-12">
          <div className="layout-container">
            <Heading
              tabIndex="-1"
              id="pageMainTitle"
              title={
                props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr
              }
            />
            <div id="postedOnUpdatedOnSection" className="grid grid-cols-12">
              <p
                className={`col-span-6 sm:col-span-4 ${
                  props.locale === "en" ? "lg:col-span-2" : "lg:col-span-3"
                } font-bold`}
              >
                {getDictionaryTerm(dictionary, "POSTED-ON", props.locale)}
              </p>
              <p className="col-span-6 col-start-7 sm:col-start-5 lg:col-span-2 md:col-start-5 mt-0">
                {pageData.scDateModifiedOverwrite}
              </p>
              <p
                className={`row-start-2 col-span-6 sm:col-span-4 mt-0 ${
                  props.locale === "en" ? "lg:col-span-2" : "lg:col-span-3"
                } font-bold`}
              >
                {getDictionaryTerm(dictionary, "LAST-UPDATED", props.locale)}
              </p>
              <p className="row-start-2 col-span-6 col-start-7 sm:col-start-5 lg:col-span-2 md:col-start-5 mt-auto">
                {pageData.scDateModifiedOverwrite}
              </p>
            </div>
          </div>

          {/* Main */}
          <div id="mainContentSection">
            <FragmentRender
              fragments={props.pageData.scFragments}
              locale={props.locale}
            />
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  // Get pages data
  const { data } = await aemServiceInstance.getFragment(
    "benefitsNavigatorArticlesQuery"
  );
  // Get paths for dynamic routes from the page name data
  const paths = getAllUpdateIds(data.sclabsPageV1List.items);
  paths.map((path) => (path.params.id = path.params.id.split("/").at(-1)));
  return {
    paths,
    fallback: "blocking",
  };
}

export const getStaticProps = async ({ locale, params }) => {
  // Get pages data
  const { data } = await aemServiceInstance.getFragment(
    "benefitsFinderArticlesQuery"
  );
  // get dictionary
  const { data: dictionary } = await aemServiceInstance.getFragment(
    "dictionaryQuery"
  );
  const pages = data.sclabsPageV1List.items;
  // Return page data that matches the current page being built
  const pageData = pages.filter((page) => {
    return (
      (locale === "en" ? page.scPageNameEn : page.scPageNameFr)
        .split("/")
        .at(-1) === params.id
    );
  });

  if (!pageData || !pageData.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      locale: locale,
      pageData: pageData[0],
      dictionary: dictionary.dictionaryV1List,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL ?? null,
      ...(await serverSideTranslations(locale, ["common", "vc"])),
    },
    revalidate: process.env.ISR_ENABLED === "true" ? 10 : false,
  };
};
