import PropTypes from "prop-types";

export function Header(props) {
  return (
    <img
      className="h-4 w-auto  xs:h-8 sm:h-8 md:h-8 lg:h-7 xl:h-8 "
      src={props.headerLogoImage}
      alt={props.headerLogoAltText}
    />
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
