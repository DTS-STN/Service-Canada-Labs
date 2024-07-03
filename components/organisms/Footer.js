/* eslint-disable no-prototype-builtins */
import PropTypes from "prop-types";
import { MainBand } from "../molecules/MainBand";
import { SubFooterBand } from "../molecules/SubFooterBand";
import { Link } from "../atoms/Link";

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

export const Footer = ({
  error,
  id,
  brandLinks,
  target,
  onClick,
  btnLink,
  preFooterTitle,
  preFooterLink,
  preFooterLinkText,
  lang,
}) => {
  return (
    <footer id={id} data-testid="footer">
      {preFooterTitle && preFooterLink ? (
        <div className="bg-multi-blue-blue70c">
          <div className="lg:container mx-auto px-6 pb-[22px]">
            <h3 className="pt-[22px] text-multi-neutrals-white font-body font-bold text-[19px]">
              {preFooterTitle}
            </h3>
            <Link
              id=""
              href={preFooterLink}
              text={preFooterLinkText}
              linkStyle="smfooterWhite"
            />
          </div>
        </div>
      ) : (
        ""
      )}
      <div
        className="bg-multi-blue-blue70 bg-no-repeat bg-clip-border sm:bg-right-bottom bg-bottom"
        style={{
          backgroundImage: `url(/footer_bg_img.svg)`,
        }}
      >
        <div className="lg:container mx-auto px-6">
          <MainBand landscapeLinks={landscapeLinkKeys} target={target} />
        </div>
      </div>
      <SubFooterBand
        locale={lang}
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
  preFooterTitle: PropTypes.string,
  preFooterLink: PropTypes.string,
  preFooterLinkText: PropTypes.string,
};
