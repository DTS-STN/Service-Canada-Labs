import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { ReportAProblem } from "../components/organisms/ReportAProblem";

export default function About() {
  return (
    <div>
      <Head>
        <title>404</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="layout-container mb-20">
        <img
          className="h-auto w-60 pt-6 xl:w-96 xxl:w-1/2"
          src={"/sig-blk-en.svg"}
          alt={"Symbol of the Government of Canada"}
        />
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-8">
          <div>
            <div className="relative h-auto xl:w-96 xxl:w-400px lg:w-72 xl:h-400px lg:h-500px mb-8 lg:mb-0">
              <p className="text-h1 font-bold font-display mb-4">
                We couldn't find that Web page
              </p>
              <p className="font-bold font-body mb-8">Error 404</p>
              <p className="font-body text-sm mb-4 leading-30px">
                We're sorry you ended up here. Sometimes a page gets moved or
                deleted, but hopefully we can help you find what you're looking
                for. What next?
              </p>
              <div className="flex">
                <span className="error404-link" />
                <p className="font-body text-sm leading-30px">
                  Return to the &nbsp;
                  <Link href="/">
                    <a className="underline hover:text-canada-footer-hover-font-blue text-canada-footer-font">
                      Service Canada Labs home page
                    </a>
                  </Link>
                  ;
                </p>
              </div>
            </div>
            <ReportAProblem language={"en"} />
          </div>
          <div className="flex items-center justify-center circle-background my-8 lg:mt-0">
            <img
              className="w-68px lg:w-12 xl:100px"
              src="/crackedbulb.svg"
              alt="Cracked lightbulb"
            />
          </div>
          <div>
            <div className="relative h-auto xl:w-96 xxl:w-400px lg:w-72 xl:h-400px lg:h-500px mb-8 lg:mb-0">
              <p className="text-h1 font-bold font-display mb-4">
                Nous ne pouvons trouver cette page Web
              </p>
              <p className="font-bold font-body mb-8">Error 404</p>
              <p className="font-body text-sm mb-4 leading-30px">
                Nous sommes désolés que vous ayez abouti ici. Il arrive parfois
                qu'une page ait été déplacée ou supprimée. Heureusement, nous
                pouvons vous aider à trouver ce que vous cherchez. Que faire?
              </p>
              <div className="flex">
                <span className="error404-link" />
                <p className="font-body text-sm leading-30px">
                  Retournez à la &nbsp;
                  <Link href="/fr">
                    <a className="underline hover:text-canada-footer-hover-font-blue text-canada-footer-font">
                      page d'accueil [Service Canada Labs]
                    </a>
                  </Link>
                  ;
                </p>
              </div>
            </div>
            <ReportAProblem language="fr" />
          </div>
        </div>
      </section>
      <footer className="h-100px bg-footer-background-color">
        <div className="layout-container flex justify-between lg:flex-row-reverse pt-4 lg:pt-0 lg:mt-8">
          <a
            href="#"
            className="block lg:hidden hover:cursor-pointer w-32 text-sm font-body"
          >
            <span>Top of page / Haut de la page</span>
            <img
              className="w-4 mt-4"
              src="/up-caret.svg"
              alt="Up Caret"
              href="#"
            />
          </a>
          <img
            className="h-6 w-auto lg:mt-8 lg:h-auto lg:w-40"
            src="/wmms-blk.svg"
            alt="Symbol of the Government of Canada"
          />
        </div>
      </footer>
    </div>
  );
}

export const getStaticProps = async () => ({
  props: {
    ...(await serverSideTranslations("en", ["common"])),
    ...(await serverSideTranslations("fr", ["common"])),
  },
});
