import { format } from "prettier";
import PropTypes from "prop-types";
import { FooterBox } from "../molecules/FooterBox.js";
import { ActionButton } from "../atoms/ActionButton";

/**
 * footer element for all pages
 */

export function Footer(props) {
  return (
    <FooterBox
      socialMediaLink={props.socialMediaLink}
      socialMediaText={props.socialMediaText}
      mobileLink={props.mobileLink}
      mobileText={props.mobileText}
      termsAndConditionsLink={props.termsAndConditionsLink}
      termsAndConditionsText={props.termsAndConditionsText}
      privacyLink={props.privacyLink}
      privacyText={props.privacyText}
      footerLogoAltText={props.footerCanadaCaAltText}
      footerLogoImage={props.footerLogoImage}
    >
      <div className="w-full flex flex-col mt-2 mb-2">
        <div className="w-full flex justify-center">
          <div className="w-1/2 md:w-2/3 ml-2 md:ml-0 mr-2 md:mr-0 flex justify-between items-center md:items-start mb-2">
            <p className="mb-4 mt-2 text-sm">
              {props.reportDescription}
              <br></br> {props.reportDescriptionContinue}
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-1/2  md:w-2/3 ml-2 md:ml-0 mr-2 md:mr-0 flex justify-between items-center md:items-start mb-2">
            <ActionButton
              text={props.reportBtnText}
              secondary
              dataCyButton={"report-problem-button"}
            />
          </div>
        </div>
      </div>
    </FooterBox>
  );
}

Footer.propTypes = {
  /**
   * report description
   */
  reportDescription: PropTypes.string.isRequired,

  /**
   * report description continue with line break between
   */
  reportDescriptionContinue: PropTypes.string.isRequired,

  /**
   * report button text
   */
  reportBtnText: PropTypes.string.isRequired,

  /**
   * social link href
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
  footerLogoAltText: PropTypes.string.isRequired,

  /**
   * image path for footer logo
   */
  footerLogoImage: PropTypes.string.isRequired,
};
