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
import { UpdateInfo } from "../../../components/atoms/UpdateInfo";
import { ExploreProjects } from "../../../components/organisms/ExploreProjects";

export default function IntegratedChannelStrategyArticles({ key, ...props }) {
  const { t } = useTranslation("common");
  const [pageData] = useState(props.pageData);
  const [projectData] = useState(props.projectData);
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
            <UpdateInfo
              projectLabel={`${getDictionaryTerm(
                dictionary,
                "PROJECT",
                props.locale,
              )}`}
              projectName={
                props.locale === "en"
                  ? pageData.scLabProject.scTermEn
                  : pageData.scLabProject.scTermFr
              }
              projectHref={
                props.locale === "en"
                  ? pageData.scLabProject.scDestinationURLEn
                  : pageData.scLabProject.scDestinationURLFr
              }
              postedOnLabel={`${getDictionaryTerm(
                dictionary,
                "POSTED-ON",
                props.locale,
              )}`}
              postedOn={pageData.scDateModifiedOverwrite}
              lastUpdatedLabel={`${getDictionaryTerm(
                dictionary,
                "LAST-UPDATED",
                props.locale,
              )}`}
              lastUpdated={pageData.scDateModifiedOverwrite}
            />
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
        {filterItems(props.updatesData, pageData.scId).length !== 0 ? (
          <ExploreUpdates
            locale={props.locale}
            updatesData={filterItems(props.updatesData, pageData.scId)}
            dictionary={dictionary}
            heading={`${
              props.locale === "en"
                ? projectData.scTitleEn
                : projectData.scTitleFr
            } ${getDictionaryTerm(
              dictionary,
              "PROJECT-UPDATES",
              props.locale,
            )}`}
            linkLabel={`${getDictionaryTerm(
              dictionary,
              "DICTIONARY-SEE-ALL-UPDATES-PROJECT",
              props.locale,
            )}`}
            href={
              props.locale === "en"
                ? `/en/updates?project=${pageData.scTitleEn}`
                : `/fr/mises-a-jour?projet=${pageData.scTitleFr}`
            }
          />
        ) : null}
        <ExploreProjects
          projects={[projectData]}
          heading={getDictionaryTerm(
            dictionary,
            "EXPLORE-THE-PROJECT",
            props.locale,
          )}
          locale={props.locale}
        />
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  // Get pages data
  const { data } = await aemServiceInstance.getFragment(
    "integratedChannelStrategyArticlesQuery",
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
    "integratedChannelStrategyArticlesQuery",
  );
  const { data: projectData } = await aemServiceInstance.getFragment(
    "integratedChannelStrategyQuery",
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
      updatesData: updatesData.sclabsPageV1List.items,
      projectData: projectData.sclabsPageV1ByPath.item,
      dictionary: dictionary.dictionaryV1List,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL ?? null,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: process.env.ISR_ENABLED === "true" ? 10 : false,
  };
};
