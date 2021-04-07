import PropTypes from "prop-types";
import Head from "next/head";
import { ActionButton } from "../atoms/ActionButton";
import { SearchBar } from "../atoms/SearchBar";
import { Banner } from "../atoms/Banner";

/**
 * Component which defines the layout of the page for all screen sizes
 */
export const Layout = ({
  bannerText,
  bannerTitle,
  children,
  bannerStartTestingText,
  bannerBecomeTesterText,
}) => {
  return (
    <div className="overflow-x-hidden">
      <header>
        <div className="layout-container">
          <div>
            <a href="#">
              <img src="#" alt="Governement of Canada "></img>
              <span lang="en">Government of Canada </span>
              <span lang="fr">Gouvernment du Canada</span>
            </a>
          </div>

          <div>
            <a href="#">Français</a>
            <SearchBar placeholder={"Search Canada.ca"} dataCy={"search-bar"} />
          </div>

          <nav>Menu</nav>
          {bannerText && bannerTitle ? (
            <Banner siteTitle={bannerTitle} headline={bannerText} />
          ) : null}
        </div>
      </header>
      <main className="layout-container mt-10">{children}</main>
      <footer className="layout-container mt-10">
        <div>
          <p>
            Experiencing an issue with this product or have you spotted an
            error?
          </p>
          <ActionButton
            text={"Report a problem"}
            secondary
            dataCyButton={"report-problem-button"}
          />
        </div>

        <ul>
          <li>
            <a href="#">Social media</a>
          </li>
          <li>
            <a href="#">Mobile applications</a>
          </li>
          <li>
            <a href="#">Terms and conditions</a>
          </li>
          <li>
            <a href="#">Privacy</a>
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
   * text for start testing button
   */
  bannerStartTestingText: PropTypes.string,

  /**
   * text for the become tester button
   */
  bannerBecomeTesterText: PropTypes.string,

  /**
   * child elements that will constitute the page
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
