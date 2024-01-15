import PropTypes from "prop-types";

export function Image(props) {
  const { src, alt, rounded = "", className = "" } = props;

  return (
    <>
      <img src={src} alt={alt} className={`${className} ${rounded}`} />
    </>
  );
}

Image.propTypes = {
  /**
   * The text that the image tag will display
   */
  id: PropTypes.string,

  /**
   * Alternate text will be displayed in place of an image.
   */
  alt: PropTypes.string,

  /**
   * Identify source of image
   */
  src: PropTypes.string.isRequired,

  /**
   * css overrides for image
   */
  className: PropTypes.string,

  /**
   * Enables rounded corners for image
   */
  rounded: PropTypes.string,
};
