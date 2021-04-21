import PropTypes from "prop-types";
// import Head from "next/head";
import { Banner } from "../atoms/Banner";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ReportAProblem } from "./ReportAProblem";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { DateModified } from "../atoms/DateModified";

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
        <div className="layout-container ">
          <Link key={language} href={langUrl} locale={language}>
            <a data-cy="toggle-language-link">
              {language === "en" ? "English" : "Français"}
            </a>
          </Link>
          <Header
            headerLogoAltText="Symbol of the Government of Canada"
            headerLogoImage="/sig-blk-en.svg"
          />
        </div>

        <div className="mb-2 border-t pb-2 mt-4"></div>
        <nav className="layout-container">Menu</nav>
        {bannerText && bannerTitle ? (
          <Banner siteTitle={bannerTitle} headline={bannerText} />
        ) : null}
      </header>

      <main>
        <div>{children}</div>
      </main>
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
