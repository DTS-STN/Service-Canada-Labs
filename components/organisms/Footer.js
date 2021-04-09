import PropTypes from "prop-types";

/**
 * footer element for all pages
 */

export function Footer(props) {
  return (
    <div className="w-full mb-4">
      <div className="w-full h-auto  bg-dk-blue bg-footer-parliament-image bg-no-repeat bg-right-bottom ">
        <div className="w-full  py-6 layout-container  ">
          <ul className="flex flex-wrap justify-between ">
            {" "}
            {props.footerBoxLinks.map((value, index) => {
              return (
                <li
                  key={index}
                  className="text-white w-64 md:w-56 lg:w-80   my-2   hover:underline"
                >
                  <a href={value.footerBoxlink}>{value.footerBoxLinkText}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="w-full h-auto flex flex-col md:flex-row  items-center bg-footer-white mt-6  justify-between layout-container ">
        <div className="w-full flex flex-col md:flex-row  justify-between mr-6  ">
          <ul className="w-full flex flex-col md:flex-row  list-inside md:list-outside list-disc  ">
            {" "}
            {props.links.map((value, index) => {
              return (
                <li
                  key={index}
                  className="text-canada-ca-link-colour p-2 md:pt-4 md:pr-4  md:pb-4  w-full hover:underline "
                >
                  <a href={value.link}>{value.linkText}</a>
                </li>
              );
            })}
          </ul>
          <div className="md:pt-0 pt-6 ">
            <img
              src={props.footerLogoImage}
              width={200}
              height={200}
              alt={props.footerLogoAltText}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {
  /**
   * array of objects containing the link text and link
   */
  footerBoxLinks: PropTypes.arrayOf(
    PropTypes.shape({
      footerBoxlink: PropTypes.string.isRequired,
      footerBoxLinkText: PropTypes.string.isRequired,
    })
  ),
  /**
   * array of objects containing the link text and link
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      linkText: PropTypes.string.isRequired,
    })
  ),

  /**
   * alt text for footer canada-ca logo
   */
  footerLogoAltText: PropTypes.string.isRequired,

  /**
   * image path for footer logo
   */
  footerLogoImage: PropTypes.string.isRequired,
};
