import PropTypes from "prop-types";
import footerImage from "../../assets/images/wmms-blk.svg";
import Image from "next/image";

/**
 * container for footer navigation
 */
export function FooterBox(props) {
  return (
    <footer className="w-full mt-2">
      <div className="w-full h-40 flex flex-col md:flex-row justify-center items-center bg-footer-blue bg-footer-parliament-image bg-no-repeat bg-right-bottom text-white">
        {props.children}
      </div>
      <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center bg-footer-white">
        <nav className="w-auto flex flex-col md:flex-row">
          <a
            href={props.socialMediaLink}
            className="text-canada-ca-link-colour p-2 md:p-4 hover:underline"
          >
            {props.socialMediaText}
          </a>
          <a
            href={props.mobileLink}
            className="text-canada-ca-link-colour p-2 md:p-4 hover:underline"
          >
            {props.mobileText}
          </a>
          <a
            href={props.termsAndConditionsLink}
            className="text-canada-ca-link-colour p-2 md:p-4 hover:underline"
          >
            {props.termsAndConditionsText}
          </a>
          <a
            href={props.privacyLink}
            className="text-canada-ca-link-colour p-2 md:p-4 hover:underline"
          >
            {props.privacyText}
          </a>
        </nav>
        {/* <Image
        src="/../../assets/images/wmms-blk.svg"
        className="ml-0 md:ml-32"
        width={200}
        height={200}
        alt={props.footerCanadaCaAltText}
        >

        </Image> */}
        <Image
          className="ml-0 md:ml-32"
          src={footerImage}
          width={200}
          height={200}
          alt={props.footerCanadaCaAltText}
        />
      </div>
    </footer>
  );
}

FooterBox.propTypes = {
  /**
   * children elements of the box
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),

  /**
   * social Media link href
   */
  socialMediaLink: PropTypes.string.isRequired,

  /**
   * text that is displayed for social link
   */
  socialMediaText: PropTypes.string.isRequired,

  /**
   * mobile link href
   */
  mobileLink: PropTypes.string.isRequired,

  /**
   * text that is displayed for mobile link
   */
  mobileText: PropTypes.string.isRequired,

  /**
   * terms and conditions href
   */
  termsAndConditionsLink: PropTypes.string.isRequired,

  /**
   * text that is displayed for terms and conditions link
   */
  termsAndConditionsText: PropTypes.string.isRequired,

  /**
   * privacy link href
   */
  privacyLink: PropTypes.string.isRequired,

  /**
   * text that is displayed for privacy link
   */
  privacyText: PropTypes.string.isRequired,

  /**
   * alt text for footer canada-ca logo
   */
  footerCanadaCaAltText: PropTypes.string.isRequired,
};
