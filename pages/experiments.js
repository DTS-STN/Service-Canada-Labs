import Head from "next/head";
import {useState} from 'react';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Layout } from "../components/organisms/Layout";
import { Experiment } from "../components/atoms/Experiment";
import { useRouter } from "next/router";

export default function experiments(props) {
  const { t } = useTranslation("common");
  const { asPath } = useRouter();
  const [experimentList, setExperimentList] = useState([
    {id:1, title:"Title Placeholder", tag:"Active", desc:"This experiment is a placeholder for when the real content comes in. experiment is a placeholder for when the real content comes in"},
    {id:2, title:"Title Placeholder", tag:"Active", desc:"This experiment is a placeholder for when the real content gggggg dffef iment is a placeholder for when the real content comes in"},
    {id:3, title:"Title Placeholder", tag:"Comming Soon", desc:"This experiment is a placeholder for when the real content comes in. experiment is a placeholder for when the real content comes in"},
    {id:4, title:"Title Placeholder", tag:"Active", desc:"tent comes in. experiment is a placeholder for when the real content comes in"},
    {id:5, title:"Title Placeholder", tag:"Comming Soon", desc:"This experiment is a placeholder for when the re placeholder for when the real content comes in"},
  ]);
  

    const displayExperiments = experimentList.map((experiment) => <Experiment key={experiment.id} title={experiment.title} tag={experiment.tag} desc={experiment.desc} />);
  return (
    <Layout locale={props.locale} langUrl={asPath}>
      <Head>
        <title>{t("experimentsTitle")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="layout-container">
        <h1>{t("experimentsAndExplorationTitle")}</h1>
        <p>Filter Experiments component goes here</p>
        
        <div className="">
        {displayExperiments}
        {/* <Experiment title="Title placeholder" tag="Active" desc="This experiment is a placeholder for when the real content comes in. experiment is a placeholder for when the real content comes in" />
        <Experiment title="Title placeholder" tag="Active" desc="This experiment is a placeholder for when the real content comes in. xperiment is a placeholder for when the real content comes in" />
        <Experiment title="Title placeholder" tag="Comming Soon" desc="This experiment is a placeholder for when the real content comes in xperiment is a placeholder for when the real content comes in." />
        <Experiment title="Title placeholder" tag="Active" desc="This experiment is a placeholder for when the real content comes in." />
        <Experiment title="Title placeholder" tag="Comming Soon" desc="This experiment is a placeholder for when the real content comes in. xperiment is a placeholder for when the real content comes in" /> */}
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    locale: locale,
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
