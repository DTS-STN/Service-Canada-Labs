import PropTypes from "prop-types";
// import Head from "next/head";
import { Banner } from "../atoms/Banner";
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";
import Link from "next/link";
import { useTranslation } from "next-i18next";

/**
 * Component which defines the layout of the page for all screen sizes
 */
export const Layout = ({
  bannerText,
  bannerTitle,
  menu,
  children,
  locale,
  langUrl,
}) => {
  const { t } = useTranslation("common");
  const language = locale === "en" ? "fr" : "en";

  function onMenuClick() {
    document.getElementById("menuDropdown").classList.toggle("active");
  }

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

              <ul className="container w-max">
                <li className="py-3 pl-2 cursor-pointer">
                  <a href="#">Service Canada Labs</a>
                </li>
                <li className="py-3 pl-2 cursor-pointer">
                  <a href="#">Experiments</a>
                </li>
                <li className="py-3 pl-2 cursor-pointer">
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

      <main>
        <div>{children}</div>
      </main>

      <footer>
        <Footer
          footerLogoAltText="Symbol of the Government of Canada"
          footerLogoImage="/wmms-blk.svg"
          links={[
            {
              link: "https://www.canada.ca",
              linkText: "Social media",
            },
            {
              link: "https://www.canada.ca",
              linkText: "Mobile applications",
            },
            {
              link: "https://www.canada.ca/en/transparency/terms.html",
              linkText: "Terms and conditions",
            },
            {
              link: "https://www.canada.ca/en/transparency/terms.html",
              linkText: "Privacy",
            },
          ]}
          footerBoxLinks={[
            {
              footerBoxlink:
                "https://www.canada.ca/en/revenue-agency/corporate/contact-information.html",
              footerBoxLinkText: "Contact us",
            },
            {
              footerBoxlink: "https://www.canada.ca/en/news.html",
              footerBoxLinkText: "News",
            },
            {
              footerBoxlink: "https://pm.gc.ca/en",
              footerBoxLinkText: "Prime Minister",
            },
            {
              footerBoxlink: "https://www.canada.ca/en/government/dept.html",
              footerBoxLinkText: "Departments and agencies",
            },

            {
              footerBoxlink:
                "https://www.canada.ca/en/government/system/laws.html",
              footerBoxLinkText: "Treaties, laws and regulations",
            },
            {
              footerBoxlink: "https://www.canada.ca/en/government/system.html",
              footerBoxLinkText: "How goverment works",
            },
            {
              footerBoxlink:
                "https://www.canada.ca/en/government/publicservice.html",
              footerBoxLinkText: "Public service and military",
            },
            {
              footerBoxlink:
                "https://www.canada.ca/en/transparency/reporting.html",
              footerBoxLinkText: "Goverment-wide reporting",
            },
            {
              footerBoxlink: "https://open.canada.ca/en",
              footerBoxLinkText: "Open goverment",
            },
          ]}
        ></Footer>
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
