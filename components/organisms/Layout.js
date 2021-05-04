import PropTypes from "prop-types";
// import Head from "next/head";
import { Banner } from "../atoms/Banner";
import { Menu } from "../molecules/Menu";
import { PhaseBanner } from "../atoms/PhaseBanner";
import { Footer } from "./Footer";
import { ReportAProblem } from "./ReportAProblem";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { DateModified } from "../atoms/DateModified";
import { SearchBar } from "../atoms/SearchBar";

/**
 * Component which defines the layout of the page for all screen sizes
 */
export const Layout = ({
  bannerText,
  bannerTitle,
  children,
  locale,
  langUrl,
}) => {
  const { t } = useTranslation("common");
  const language = locale === "en" ? "fr" : "en";

  return (
    <div className="overflow-x-hidden">
      <header>
        <PhaseBanner phase={t("Alpha")}>{t("alphaText")}</PhaseBanner>
        <div className="layout-container flex-col flex lg:flex lg:flex-row justify-between  mt-2">
          <div className="flex flex-row justify-between items-center lg:mt-7 mt-1.5">
            <img
              className="h-5 w-auto xs:h-6 sm:h-8 md:h-8 lg:h-7 xl:h-8"
              src={language === "en" ? "/sig-blk-en.svg" : "/sig-blk-fr.svg"}
              alt="Symbol of the Government of Canada"
            />
            <Link key={language} href={langUrl} locale={language}>
              <a className="visible lg:invisible ml-6 sm:ml-16 underline font-body font-bold text-canada-footer-font lg:text-sm text-base hover:text-canada-footer-hover-font-blue ">
                {language === "en" ? "EN" : "FR"}
              </a>
            </Link>
          </div>
          <div className="flex-col flex">
            <Link key={language} href={langUrl} locale={language}>
              <a
                className="lg:visible invisible pb-0 lg:pb-2 self-end underline font-body text-canada-footer-font hover:text-canada-footer-hover-font-blue "
                data-cy="toggle-language-link"
              >
                {language === "en" ? "English" : "Français"}
              </a>
            </Link>
            <SearchBar
              placeholder={t("searchBarPlaceholder")}
              dataCy={"search-bar"}
            />
          </div>
        </div>

        <div className="mb-2 border-t pb-2 mt-4"></div>
        <Menu
          menuButtonTitle={t("menuTitle")}
          items={[
            {
              link: "/",
              text: t("menuLink1"),
            },
            {
              link: "/experiments",
              text: t("menuLink2"),
            },
            {
              link: "#",
              text: t("menuLink3"),
            },
          ]}
        />
        {bannerText && bannerTitle ? (
          <Banner siteTitle={bannerTitle} headline={bannerText} />
        ) : null}
      </header>

      <main>
        <div>{children}</div>
      </main>

      <footer>
        <div className="layout-container my-3">
          <ReportAProblem />
        </div>
        <div className="layout-container">
          <DateModified date={process.env.NEXT_PUBLIC_BUILD_DATE} />
        </div>
        <Footer
          footerLogoAltText="Symbol of the Government of Canada"
          footerLogoImage="/wmms-blk.svg"
          links={[
            {
              link: "https://www.canada.ca",
              linkText: t("footerSocialMedia"),
            },
            {
              link: "https://www.canada.ca",
              linkText: t("footerMobileApp"),
            },
            {
              link: "https://www.canada.ca/en/transparency/terms.html",
              linkText: t("footerTermsAndCondition"),
            },
            {
              link: "https://www.canada.ca/en/transparency/terms.html",
              linkText: t("footerPrivacy"),
            },
          ]}
          footerBoxLinks={[
            {
              footerBoxlink:
                "https://www.canada.ca/en/revenue-agency/corporate/contact-information.html",
              footerBoxLinkText: t("footerContactUs"),
            },
            {
              footerBoxlink: "https://www.canada.ca/en/news.html",
              footerBoxLinkText: t("footerNews"),
            },
            {
              footerBoxlink: "https://pm.gc.ca/en",
              footerBoxLinkText: t("footerPm"),
            },
            {
              footerBoxlink: "https://www.canada.ca/en/government/dept.html",
              footerBoxLinkText: t("footerDepartmentAgencies"),
            },

            {
              footerBoxlink:
                "https://www.canada.ca/en/government/system/laws.html",
              footerBoxLinkText: t("footerTreaties"),
            },
            {
              footerBoxlink: "https://www.canada.ca/en/government/system.html",
              footerBoxLinkText: t("footerHowGovWorks"),
            },
            {
              footerBoxlink:
                "https://www.canada.ca/en/government/publicservice.html",
              footerBoxLinkText: t("footerPublicService"),
            },
            {
              footerBoxlink:
                "https://www.canada.ca/en/transparency/reporting.html",
              footerBoxLinkText: t("footerGovReporting"),
            },
            {
              footerBoxlink: "https://open.canada.ca/en",
              footerBoxLinkText: t("footerOpenGov"),
            },
          ]}
        />
      </footer>
    </div>
  );
};

Layout.propTypes = {
  /**
   * text for the banner
   */
  bannerText: PropTypes.string,

  /**
   * title of the banner
   */
  bannerTitle: PropTypes.string,

  /**
   * child elements that will constitute the page
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),

  /**
   * currently active locale
   */
  locale: PropTypes.string,

  /**
   * URL to use for navigation when changing locales
   */
  langUrl: PropTypes.string,
};
