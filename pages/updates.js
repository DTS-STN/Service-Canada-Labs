import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Layout } from "../components/organisms/Layout";
import { useEffect, useState } from "react";
import Card from "../components/molecules/Card";
import { sortUpdatesByDate } from "../lib/utils/sortUpdatesByDate";
import PageHead from "../components/fragment_renderer/PageHead";
import { MultiSelectField } from "../components/atoms/MultiSelectField";
import { createBreadcrumbs } from "../lib/utils/createBreadcrumbs";
import { getDictionaryTerm } from "../lib/utils/getDictionaryTerm";
import { useRouter } from "next/router";

export default function UpdatesPage(props) {
  const router = useRouter();
  const pageData = props.pageData?.item;
  const updatesData = props.updatesData;
  const dictionary = props.dictionary;
  const [selectedOptions, setSelectedOptions] = useState([]);

  const getSelectOptionsFromUpdateData = (arr) => {
    const seen = new Set();
    let reducedArray = arr.reduce((acc, obj) => {
      if (!seen.has(obj.scLabProject.scId)) {
        seen.add(obj.scLabProject.scId);
        acc.push(obj);
      }
      return acc;
    }, []);
    let optionsArray = reducedArray.map((option) => {
      return {
        id: option.scLabProject.scId,
        label:
          props.locale === "en"
            ? option.scLabProject.scTermEn
            : option.scLabProject.scTermFr,
        value: option.scLabProject.scId,
      };
    });
    return optionsArray;
  };

  const filterUpdates = (updates, selectedOptions) => {
    if (selectedOptions.length === 0) return updates;
    const selectedIds = new Set(selectedOptions.map((option) => option.id));
    return updates.filter((update) =>
      selectedIds.has(update.scLabProject.scId),
    );
  };

  const updatesCards = filterUpdates(
    sortUpdatesByDate(updatesData),
    selectedOptions,
  ).map((update) => {
    return (
      <li
        key={update.scId}
        className="grid col-span-12 bg-white list-none my-3"
      >
        <Card
          customStyling="pb-6 border-x-0 border-t-0 border-b-2 !shadow-none rounded-none"
          cardHeadingStyling="!text-h2l pl-0 no-underline"
          title={props.locale === "en" ? update.scTitleEn : update.scTitleFr}
          href={
            props.locale === "en" ? update.scPageNameEn : update.scPageNameFr
          }
          htmlDesc={
            <div className="flex flex-col pt-8">
              <span className="flex flex-row">
                <p className="text-multi-neutrals-grey100 font-semibold">
                  {props.locale === "en" ? "Project:" : "Projet :"}
                </p>
                <p className="mt-0 pl-1">
                  {props.locale === "en"
                    ? update.scLabProject.scTermEn
                    : update.scLabProject.scTermFr}
                </p>
              </span>
              <span className="flex flex-row">
                <p className="text-multi-neutrals-grey100 font-semibold">
                  {getDictionaryTerm(dictionary, "POSTED-ON", props.locale)}
                </p>
                <p className="mt-0 pl-1">{`${update.scDateModifiedOverwrite}`}</p>
              </span>
            </div>
          }
        />
      </li>
    );
  });

  useEffect(() => {
    if (props.adobeAnalyticsUrl) {
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ event: "pageLoad" });
    }
    const options = getSelectOptionsFromUpdateData(updatesData);
    if (router.isReady) {
      const routerQuery =
        props.locale === "en" ? router.query.project : router.query.projet;
      const selectedOptionsFromQueryString = options.filter(
        (option) => option.label === routerQuery,
      );
      console.log(
        "Selected options from query string:",
        selectedOptionsFromQueryString,
      );
      selectedOptionsFromQueryString;
      setSelectedOptions(selectedOptionsFromQueryString);
    }
  }, [router.isReady, setSelectedOptions]);

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
        <PageHead locale={props.locale} pageData={pageData} />
        <div
          id="pageMainTitle"
          className="flex flex-col justify-center content-center mt-16 h-[182px] bg-multi-blue-blue70 bg-no-repeat sm:bg-right-bottom"
          style={{
            backgroundImage: `url(/updates-projectsbanner.png)`,
          }}
        >
          <div className="layout-container text-white">
            <h1 className="m-0">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[0].content[0].value
                : pageData.scFragments[0].scContentFr.json[0].content[0].value}
            </h1>
            <p>
              {" "}
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[1].content[0].value
                : pageData.scFragments[0].scContentFr.json[1].content[0].value}
            </p>
          </div>
        </div>
        <div className="layout-container">
          <div className="my-12 max-w-[350px]">
            <MultiSelectField
              label={getDictionaryTerm(dictionary, "FILTER-BY", props.locale)}
              placeholder={getDictionaryTerm(dictionary, "ALL", props.locale)}
              boldLabel
              options={getSelectOptionsFromUpdateData(updatesData)}
              onChange={setSelectedOptions}
              selectedOptions={selectedOptions}
            />
          </div>
          <div className="grid grid-cols-12">
            <ul className="col-span-12 xl:col-span-8">{updatesCards}</ul>
          </div>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  // Get page data
  const { data: pageData } = await fetch(
    `${process.env.AEM_BASE_URL}/getSclUpdatesV1`,
  ).then((res) => res.json());
  // Get updates data
  const { data: updatesData } = await fetch(
    `${process.env.AEM_BASE_URL}/getSclAllUpdatesV1`,
  ).then((res) => res.json());
  // get dictionary
  const { data: dictionary } = await fetch(
    `${process.env.AEM_BASE_URL}/getSclDictionaryV1`,
  ).then((res) => res.json());

  return {
    props: {
      locale: locale,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL ?? null,
      pageData: pageData.sclabsPageV1ByPath,
      updatesData: updatesData.sclabsPageV1List.items,
      dictionary: dictionary.dictionaryV1List.items,
      ...(await serverSideTranslations(locale, ["common", "multiSelect"])),
    },
    revalidate: process.env.ISR_ENABLED === "true" ? 10 : false,
  };
};
