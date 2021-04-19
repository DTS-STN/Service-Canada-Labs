import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";
import { SearchBar } from "../atoms/SearchBar";
import { Banner } from "../atoms/Banner";
import Link from "next/link";
import { useTranslation } from "next-i18next";

/**
 * Component which defines the layout of the page for all screen sizes
 */
export const Layout = ({
  bannerText,
  bannerTitle,
  menu,
  locale,
  langUrl,
  children,
}) => {
  const { t } = useTranslation("common");
  const language = locale === "en" ? "fr" : "en";

  function onMenuClick() {
    document.getElementById("menuDropdown").classList.toggle("active");
  }

  return (
    <div className="overflow-x-hidden">
      <header>
        <div className="layout-container">
          <a href="#">
            <img src="#" alt="Governement of Canada" />
            <span lang="en">Government of Canada </span>
            <span lang="fr">Gouvernment du Canada</span>
          </a>
        </div>

        <div className="layout-container">
          <Link key={language} href={langUrl} locale={language}>
            <a data-cy="toggle-language-link">
              {language === "en" ? "English" : "Français"}
            </a>
          </Link>
          <SearchBar
            placeholder={t("searchBarPlaceholder")}
            dataCy={"search-bar"}
          />
        </div>

        {menu ? (
          <nav
            title="Menu"
            className="xl:container xl:mx-auto xl:px-6 xl:justify-end xl:flex font-body"
          >
            <div className="layout-container">
              <button onClick={onMenuClick} id="menuButton" className="text-h4">
                <span className="icon-menu" />
                <span className="pl-3">MENU</span>
              </button>
            </div>

            <div id="menuDropdown" className="menuDropdown">
              <div
                id="closeMenu"
                onClick={onMenuClick}
                className="cursor-pointer layout-container flex justify-end"
              >
                <span className="icon-cross mt-1 mr-2" />
                <span>Close</span>
              </div>

              <ul className="layout-container w-max">
                <li className="py-3 px-2 cursor-pointer">
                  <a href="#">Service Canada Labs</a>
                </li>
                <li className="py-3 px-2 cursor-pointer">
                  <a href="#">Experiments</a>
                </li>
                <li className="py-3 px-2 cursor-pointer">
                  <a href="#">About</a>
                </li>
              </ul>
            </div>
          </nav>
        ) : null}
        {bannerText && bannerTitle ? (
          <Banner siteTitle={bannerTitle} headline={bannerText} />
        ) : null}
      </header>
      <main>{children}</main>
      <footer className="layout-container mt-10">
        <div>
          <p>{t("footerReportProblem")}</p>
          <ActionButton
            text={t("footerReportProblemButtonString")}
            secondary
            dataCyButton={"report-problem-button"}
          />
        </div>

        <ul>
          <li>
            <a href="#" data-cy="social-media-link">
              {t("footerSocialMedia")}
            </a>
          </li>
          <li>
            <a href="#">{t("footerMobileApplications")}</a>
          </li>
          <li>
            <a href="#">{t("footerTermsAndConditions")}</a>
          </li>
          <li>
            <a href="#">{t("footerPrivacy")}</a>
          </li>
        </ul>

        <img src="#" alt="canada.jpg"></img>
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
   * menu bar
   */
  menu: PropTypes.bool,

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
