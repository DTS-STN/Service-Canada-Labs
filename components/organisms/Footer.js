/* eslint-disable no-prototype-builtins */
import PropTypes from "prop-types";
import { MainBand } from "../molecules/MainBand";
import { SubFooterBand } from "../molecules/SubFooterBand";

let landscapeLinkKeys = [
  "contacts",
  "departments",
  "about",
  "jobs",
  "taxes",
  "canadaAndWorld",
  "immigration",
  "environment",
  "finance",
  "travel",
  "nationalSecurity",
  "innovation",
  "business",
  "culture",
  "indigenous",
  "benefit",
  "policing",
  "veterans",
  "health",
  "transport",
  "youth",
];

export function Footer(props) {
  const {
    error,
    lang,
    id,
    isAuthenticated,
    brandLinks,
    target,
    onClick,
    btnLink,
  } = props;

  return (
    <footer id={id} data-testid="footer">
      <div
        className="bg-multi-blue-blue70 bg-no-repeat bg-clip-border sm:bg-right-bottom bg-bottom"
        style={{
          backgroundImage: `url(/footer_bg_img.svg)`,
        }}
      >
        <section className="lg:container mx-auto px-6">
          <MainBand
            lang={lang}
            landscapeLinks={landscapeLinkKeys}
            target={target}
          />
        </section>
      </div>
      <SubFooterBand
        lang={lang}
        isAuthenticated={isAuthenticated}
        container="container"
        brandLinks={brandLinks}
        onClick={onClick}
        target={target}
        logo="/wmms-blk.svg"
        error={error}
        btnLink={btnLink}
      />
    </footer>
  );
}

Footer.defaultProps = {
  lang: "en",
  contactLink: "https://www.canada.ca/en/contact.html",
  withMainBand: true,
};

Footer.propTypes = {
  /**
   * id of this component
   */
  id: PropTypes.string.isRequired,
  /**
   * isAuthenticated: bool to switch between authenticated and non authenticated menus
   **/
  isAuthenticated: PropTypes.bool,
  /**
   * Switch between english and french footer. Pass in "en" or "fr"
   */
  lang: PropTypes.oneOf(["en", "fr"]),
  /**
   * Add the path Link to the top of your page for the "to the Top" button in mobile
   */
  btnLink: PropTypes.string.isRequired,

  /**
   * containerClass: Customized container class name. If pass a existing class name, then 'ds-container' will be
   * replaced by the passed in class name.
   **/
  containerClass: PropTypes.string,

  /**
   * If true will display the error page version of the footer component
   */
  error: PropTypes.bool,

  /**
   * Allow user to pass in their own contact link
   */
  contactLink: PropTypes.string,

  /**
   * List of links to display on the footer
   */
  brandLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      href: PropTypes.string,
    })
  ),

  /**
   * Specifies where to open the linked document
   */
  target: PropTypes.string,

  /**
   * Handle onclick on the footer media link
   */
  onClick: PropTypes.func,

  /**
   * List of menu items to display in dropdown with links
   */
  contextualBandLinks: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      text: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};
