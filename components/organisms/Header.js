import PropTypes from "prop-types";

export function Header(props) {
  return (
    <div className="lg:pt-3 pt-2">
      <img
        className="h-4 w-auto  xs:h-8 sm:h-8 md:h-8 lg:h-7 xl:h-8 "
        src={props.headerLogoImage}
        alt={props.headerLogoAltText}
      />
    </div>
  );
}

Header.propTypes = {
  /**
   * header logo alt text
   */
  headerLogoAltText: PropTypes.string.isRequired,
  /**
   * header image path
   */
  headerLogoImage: PropTypes.string.isRequired,
};
