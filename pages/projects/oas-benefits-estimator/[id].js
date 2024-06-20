import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import PageHead from "../../../components/fragment_renderer/PageHead";
import { Layout } from "../../../components/organisms/Layout";
import { useEffect, useState } from "react";
import aemServiceInstance from "../../../services/aemServiceInstance";
import { getAllUpdateIds } from "../../../lib/utils/getAllUpdateIds";
import { createBreadcrumbs } from "../../../lib/utils/createBreadcrumbs";
import FragmentRender from "../../../components/fragment_renderer/FragmentRender";
import { Heading } from "../../../components/molecules/Heading";
import { filterItems } from "../../../lib/utils/filterItems";
import { ExploreUpdates } from "../../../components/organisms/ExploreUpdates";
import { sortUpdatesByDate } from "../../../lib/utils/sortUpdatesByDate";
import { getDictionaryTerm } from "../../../lib/utils/getDictionaryTerm";

export default function OASBenefitsEstimatorArticles({ key, ...props }) {
  const { t } = useTranslation("common");
  const [pageData] = useState(props.pageData);
  const [dictionary] = useState(props.dictionary);

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
          props.locale,
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
              excludeH1={true}
            />
          </div>
        </section>
        {props.updatesData.length !== 0 ? (
          <ExploreUpdates
            locale={props.locale}
            updatesData={props.updatesData}
            dictionary={props.dictionary}
            heading={
              "Benefits navigator project updates"
              // props.locale === "en"
              //   ? pageData.scFragments[4].scContentEn.json[0].content[0].value
              //   : pageData.scFragments[4].scContentFr.json[0].content[0].value
            }
            linkLabel={
              "See all updates about this project"
              // props.locale === "en"
              //   ? pageData.scFragments[5].scContentEn.json[0].content[0].value
              //   : pageData.scFragments[5].scContentFr.json[0].content[0].value
            }
            href={
              ""
              // props.locale === "en"
              //   ? pageData.scFragments[5].scContentEn.json[0].content[0].data.href
              //   : pageData.scFragments[5].scContentFr.json[0].content[0].data.href
            }
          />
        ) : null}
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  // Get pages data
  const { data } = await aemServiceInstance.getFragment(
    "oasBenefitsEstimatorArticlesQuery",
  );
  // Get paths for dynamic routes from the page name data
  const paths = getAllUpdateIds(data.sclabsPageV1List.items);
  // Remove characters preceding the page name itself i.e. change "/en/projects/oas-benefits-estimator/what-we-learned" to "what-we-learned"
  paths.map((path) => (path.params.id = path.params.id.split("/").at(-1)));
  return {
    paths,
    fallback: "blocking",
  };
}

export const getStaticProps = async ({ locale, params }) => {
  // Get pages data
  const { data: updatesData } = await aemServiceInstance.getFragment(
    "oasBenefitsEstimatorArticlesQuery",
  );
  // get dictionary
  const { data: dictionary } =
    await aemServiceInstance.getFragment("dictionaryQuery");
  const pages = updatesData.sclabsPageV1List.items;
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
      key: params.id,
      locale: locale,
      pageData: pageData[0],
      updatesData: sortUpdatesByDate(
        filterItems(updatesData.sclabsPageV1List.items, pageData[0].scId),
      ),
      dictionary: dictionary.dictionaryV1List.items,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL ?? null,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: process.env.ISR_ENABLED === "true" ? 10 : false,
  };
};
