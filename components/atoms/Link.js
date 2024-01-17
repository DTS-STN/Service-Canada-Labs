/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from "prop-types";

// Use this component for Footer link and use Next.js <Link>
// for all links within the site
export function Link(props) {
  //Styling for links based on Figma Design
  let basicStyle = "";
  switch (props.linkStyle) {
    case "basicStyleWithEmphasis":
      basicStyle =
        "underline text-multi-blue-blue70b font-body text-browserh5 font-bold text-mobileh5 leading-33px hover:text-multi-blue-blue50b";
      break;
    case "titleLink":
      basicStyle =
        "underline text-multi-blue-blue70b font-header text-browserh5 leading-23px font-bold hover:text-multi-blue-blue50b";
      break;
    case "smfooterBlue":
      basicStyle =
        "text-multi-blue-blue70b font-body leading-20px text-browserh7 hover:underline";
      break;
    case "smfooterWhite":
      basicStyle =
        "text-multi-neutrals-white font-body text-browserh7 leading-20px font-regular hover:text-multi-neutrals-white hover:underline focus:ring-1 focus:ring-white";
      break;
    case "smBreadcrumbs":
      basicStyle =
        "text-multi-blue-blue70b font-body text-browserh8 leading-23px font-regular hover:text-multi-blue-blue50b";
      break;
    case "cardActionLink":
      basicStyle =
        "text-multi-blue-blue70b font-body text-browserh5 underline leading-28px font-regular hover:text-multi-blue-blue50b";
      break;
    default:
      basicStyle =
        "underline text-multi-blue-blue70b font-body text-browserh5 leading-33px hover:text-multi-blue-blue50b";
      break;
  }

  const Component = props.component || "a";

  function onKeyDown() {
    true;
  }

  return Component !== "a" ? (
    <Component
      href={props.href}
      disabled={props.disabled}
      lang={props.lang}
      target={props.target}
      aria-label={props.ariaLabel || props.text}
      role="link"
    >
      <a
        href={props.href}
        locale={props.locale}
        onClick={props.onClick ? props.onClick : undefined}
        id={props.id}
        className={`${basicStyle}`}
        data-gc-analytics-customclick={props.dataGcAnalyticsCustomClick}
        onKeyDown={onKeyDown}
      >
        {/* <!-- English Text: English --> */}
        <span className={props.abbr ? "language-toggle-text" : ""}>
          {props.text}
        </span>
        {/* <!-- English Text: title="English", en --> */}
        <abbr className="language-toggle-abbr" title={props.text}>
          {props.abbr}
        </abbr>
      </a>
    </Component>
  ) : (
    <a
      href={props.href}
      className={`${basicStyle}`}
      id={props.id}
      disabled={props.disabled}
      lang={props.lang}
      target={props.target}
      aria-label={props.ariaLabel || props.text}
      locale={props.locale}
      onClick={props.onClick ? props.onClick : undefined}
      data-gc-analytics-customclick={props.dataGcAnalyticsCustomClick}
    >
      {/* <!-- English Text: English --> */}
      <span className={props.abbr ? "language-toggle-text" : ""}>
        {props.text}
      </span>
      {/* <!-- English Text: title="English", en --> */}
      <abbr className="language-toggle-abbr" title={props.text}>
        {props.abbr}
      </abbr>
    </a>
  );
}

Link.defaultProps = {
  target: "_self",
  href: "#",
};

Link.propTypes = {
  /**
   * The text that Text Link will display
   */
  text: PropTypes.string,
  /**
   * Abbrivation for text
   */
  abbr: PropTypes.string,
  /**
   * Style link as a Text Link when there's a href
   */
  href: PropTypes.string,
  /**
   * Target attribute to tell the browser where the linked document should be loaded.
   */
  target: PropTypes.string,
  /**
   * Identify which Text Link being clicked
   */
  id: PropTypes.string.isRequired,
  /**
   * Lang attribute for links that do not match the language of the top level document
   */
  lang: PropTypes.string,
  /**
   * css overrides for Link
   */
  className: PropTypes.string,

  /**
   * For tracking on click of forms for analytics
   */
  analyticsTracking: PropTypes.bool,

  /**
   * use ariaLabel to provide more descriptive text for a link (screen reader friendly)
   */
  ariaLabel: PropTypes.string,

  /**
   * Allow user to use configurable component, default is html anchor tag
   */
  component: PropTypes.elementType,
};
