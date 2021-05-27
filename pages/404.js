import Head from "next/head";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
import { ReportAProblem } from "../components/organisms/ReportAProblem";

export default function About(props) {
  const { t } = useTranslation("common");
  const { asPath } = useRouter();

  return (
    <div>
      <Head>
        <title>{t("aboutTitle")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="layout-container">
        <img
          className="h-auto w-60 pt-6 xl:w-1/2 xl:mx-0"
          src={"/sig-blk-en.svg"}
          alt={"Symbol of the Government of Canada"}
        />
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-8">
          <div className="relative h-auto lg:w-400px lg:h-400px">
            <p className="text-h1 font-bold font-display mb-4">
              We couldn't find that Web page
            </p>
            <p className="font-bold font-body mb-8">Error 404</p>
            <p className="font-body text-sm mb-4">
              We're sorry you ended up here. Sometimes a page gets moved or
              deleted, but hopefully we can help you find what you're looking
              for. What next?
            </p>
            <p className="font-body text-sm error404-link">
              Return to the &nbsp;
              <Link href="/">
                <a className="underline hover:text-canada-footer-hover-font-blue text-canada-footer-font">
                  Service Canada Labs home page
                </a>
              </Link>
              ;
            </p>
            <div className="lg:absolute lg:top-full">
              <ReportAProblem />
            </div>
          </div>
          <div className="flex items-center justify-center circle-background my-8 lg:mt-0">
            <img
              className="w-68px lg:100px"
              src="/crackedbulb.svg"
              alt="Cracked lightbulb"
            />
          </div>
          <div className="relative h-auto lg:w-400px lg:h-400px">
            <p className="text-h1 font-bold font-display mb-4">
              Nous ne pouvons trouver cette page Web
            </p>
            <p className="font-bold font-body mb-8">Error 404</p>
            <p className="font-body text-sm mb-4">
              Nous sommes désolés que vous ayez abouti ici. Il arrive parfois
              qu'une page ait été déplacée ou supprimée. Heureusement, nous
              pouvons vous aider à trouver ce que vous cherchez. Que faire?
            </p>
            <p className="font-body text-sm error404-link">
              Retournez à la &nbsp;
              <Link href="/">
                <a className="underline hover:text-canada-footer-hover-font-blue text-canada-footer-font">
                  page d'accueil [Service Canada Labs]
                </a>
              </Link>
              ;
            </p>
            <div className="lg:absolute lg:top-full">
              <ReportAProblem />
            </div>
          </div>
        </div>
      </section>
      <section className="lg:absolute lg:bottom-0 w-screen h-100px bg-blue-100">
        <div className="layout-container pt-4 lg:pt-0 lg:mt-8">
          <img
            className="h-6 md:h-10 w-auto lg:h-auto lg:w-40 ml-auto"
            src="/wmms-blk.svg"
            alt="Symbol of the Government of Canada"
          />
        </div>
      </section>
    </div>
  );
}
