import { Layout } from "../components/organisms/Layout";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

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
                <div className="flex">
                    <div className="w-96">
                        <p className="text-h1 font-bold font-display">We couldn't find that Web page</p>
                        <p className="font-bold font-body">Error 404</p>
                        <p className="font-body">We're sorry you ended up here. Sometimes a page gets moved or deleted, but hopefully we can help you find what you're looking for. What next?
                        Return to the Service Canada Labs home page;
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}