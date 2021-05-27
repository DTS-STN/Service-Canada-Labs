import Head from "next/head";
import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Layout } from "../components/organisms/Layout";
import { Experiment } from "../components/molecules/Experiment";
import { useRouter } from "next/router";
import { Filter } from "../components/molecules/Filter";

export default function experiments(props) {
  const { t } = useTranslation("common");
  const { asPath } = useRouter();
  const [filter, setFilter] = useState("all");
  const [filteredExperiments, setFilteredExperiments] = useState(
    props.experimentData
  );

  // get the filters from the data
  const filters = props.filters.map((value) => {
    return {
      ...value,
      label: t(value.label),
      checked: value["id"] === filter,
    };
  });

  const displayExperiments = filteredExperiments.map((experiment) => (
    props.locale === 'en' ?
      <li key={experiment.id} className="flex items-stretch">
        <Experiment
          title={experiment.ExperimentTitle_EN}
          tag={experiment.ExperimentStatus}
          tagLabel={t(experiment.ExperimentStatus)}
          description={experiment.ExperimentDescription_EN}
          dataTestId={`${experiment.id}`}
          dataCy={`${experiment.id}`}
        />
      </li>
    :
      <li key={experiment.id} className="flex items-stretch">
        <Experiment
          title={experiment.ExperimentTitle_FR}
          tag={experiment.ExperimentStatus}
          tagLabel={t(experiment.ExperimentStatus)}
          description={experiment.ExperimentDescription_FR}
          dataTestId={`${experiment.id}`}
          dataCy={`${experiment.id}`}
        />
      </li>
  ));
  const handleFilter = (value) => {
    if (value === "all") {
      setFilter("all");
      setFilteredExperiments(props.experimentData);
    } else {
      setFilter(value);
      setFilteredExperiments(
        props.experimentData.filter((experiment) => experiment.tag === value)
      );
    }
  };

  return (
    <Layout locale={props.locale} langUrl={asPath}>
      <Head>
        <title>{t("experimentsTitle")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="layout-container mb-10">
        <h1>{t("experimentsAndExplorationTitle")}</h1>
        <Filter
          label={t("filterBy")}
          options={filters}
          onChange={handleFilter}
          dataCy={"filter-experiments"}
        />
        <ul
          className="grid gap-y-5 lg:grid-cols-2 lg:gap-x-11 lg:gap-y-12"
          data-cy="experiments-list"
        >
          {displayExperiments}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => {

  const res = await fetch("https://alphasite-api.dts-stn.com/experiments")
  const data = await res.json()

  const filters = Object.values(
    data.reduce(
      (filters, { ExperimentStatus }) => {
        if (!filters[ExperimentStatus]) {
          filters[ExperimentStatus] = {
            id: ExperimentStatus,
            label: ExperimentStatus,
            checked: false,
          };
        }
        return filters;
      },
      {
        all: {
          id: "all",
          label: "All",
          checked: true,
        },
      }
    )
  );

  return {
    props: {
      locale: locale,
      ...(await serverSideTranslations(locale, ["common"])),
      experimentData: data,
      filters,
    },
  };
};
