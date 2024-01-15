/* eslint-disable no-prototype-builtins */
import PropTypes from "prop-types";
import { MainBand } from "../molecules/MainBand";
import { SubFooterBand } from "../molecules/SubFooterBand";

const landscapeLinkKeys = [
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

export const Footer = ({ error, id, brandLinks, target, onClick, btnLink }) => {
  return (
    <footer id={id} data-testid="footer">
      <div
        className="bg-multi-blue-blue70 bg-no-repeat bg-clip-border sm:bg-right-bottom bg-bottom"
        style={{
          backgroundImage: `url(/footer_bg_img.svg)`,
        }}
      >
        <section className="lg:container mx-auto px-6">
          <MainBand landscapeLinks={landscapeLinkKeys} target={target} />
        </section>
      </div>
      <SubFooterBand
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
};

Footer.defaultProps = {
  contactLink: "https://www.canada.ca/en/contact.html",
  withMainBand: true,
  brandLinks: [
    {
      href: "https://www.canada.ca/en/social.html",
      text: "Social media",
    },
    {
      href: "https://www.canada.ca/en/mobile.html",
      text: "Mobile applications",
    },
    {
      href: "https://www.canada.ca/en/government/about.html",
      text: "About Canada.ca",
    },
    {
      href: "https://www.canada.ca/en/transparency/terms.html",
      text: "Terms and conditions",
    },
    {
      href: "https://www.canada.ca/en/transparency/privacy.html",
      text: "Privacy",
    },
  ],
};

Footer.propTypes = {
  /**
   * id of this component
   */
  id: PropTypes.string.isRequired,
  /**
   * Add the path Link to the top of your page for the "to the Top" button in mobile
   */
  btnLink: PropTypes.string.isRequired,

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
    }).isRequired
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
