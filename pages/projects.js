import Head from "next/head";
import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Layout } from "../components/organisms/Layout";
import { Experiment } from "../components/molecules/Experiment";
import { Filter } from "../components/molecules/Filter";
import { CallToAction } from "../components/molecules/CallToAction";
import { useEffect } from "react";

export default function Projects(props) {
  const { t } = useTranslation("common");
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
    <li key={experiment.id} className="flex items-stretch">
      <Experiment
        title={
          props.locale === "fr"
            ? experiment.ExperimentTitle_FR
            : experiment.ExperimentTitle_EN
        }
        tag={experiment.ExperimentStatus}
        tagLabel={t(experiment.ExperimentStatus)}
        description={
          props.locale === "fr"
            ? experiment.ExperimentDescription_FR
            : experiment.ExperimentDescription_EN
        }
        href={
          props.locale === "fr"
            ? experiment.ExperimentLink_FR
            : experiment.ExperimentLink_EN
        }
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
        props.experimentData.filter(
          (experiment) => experiment.ExperimentStatus === value
        )
      );
    }
  };

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL) {
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ event: "pageLoad" });
    }
  }, []);

  return (
    <>
      <Layout
        locale={props.locale}
        langUrl={props.locale === "en" ? "/projets" : "/projects"}
        breadcrumbItems={[
          { text: t("siteTitle"), link: t("breadCrumbsHref1") },
        ]}
      >
        <Head>
          {process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL ? (
            <script src={process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL} />
          ) : (
            ""
          )}
          <title>{`${t("projectsTitle")} — ${t("siteTitle")}`}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="dcterms.title"
            content={`${t("projectsTitle")} — ${t("siteTitle")}`}
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
          <meta name="dcterms.issued" content="2021-04-22" />
        </Head>
        <section className="layout-container mb-10">
          <h1 id="pageMainTitle" tabIndex="-1" className="flex-wrap mb-10">
            {t("projectsTitle")}
          </h1>
          <p className="whitespace-pre-line">{t("projectsText")}</p>
          <Filter
            label={t("filterBy")}
            options={filters}
            onChange={handleFilter}
            dataCy={"filter-projects"}
          />
          <ul
            className="grid gap-y-5 lg:grid-cols-2 lg:gap-x-11 lg:gap-y-12"
            data-cy="projects-list"
          >
            {displayExperiments}
          </ul>
        </section>
        <CallToAction
          title={t("signupTitleCallToAction")}
          html={t("becomeAParticipantDescription")}
          href={props.locale === "fr" ? "/inscription" : "/signup"}
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

export const getStaticProps = async ({ locale }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_BACKEND_URL}/experiments`
  ).catch((e) => {
    console.error(e);
  });
  const data = await res.json();

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

  return process.env.NEXT_PUBLIC_ISR_ENABLED
    ? {
        props: {
          locale: locale,
          ...(await serverSideTranslations(locale, ["common"])),
          experimentData: data,
          filters,
        },
        revalidate: 60, // revalidate once an minute
      }
    : {
        props: {
          locale: locale,
          ...(await serverSideTranslations(locale, ["common"])),
          experimentData: data,
          filters,
        },
      };
};
