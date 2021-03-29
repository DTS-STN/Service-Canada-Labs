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
      footerCanadaCaAltText={props.footerCanadaCaAltText}
    >
      {/* <div className=" w-1/2 md:p-8 md:w-5/6 h-full mb-4 ">
        <div className="flex flex-col">

          
          <p className="mb-4 mt-2 text-sm">
            {props.reportDescription}
            <br></br> {props.reportDescriptionContinue}
          </p>
          <div>
            <ActionButton
              text={props.reportBtnText}
              secondary
              dataCyButton={"report-problem-button"}
            />
          </div>
        </div>
      </div> */}

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
  reportDescription: PropTypes.string.isRequired,

  reportDescriptionContinue: PropTypes.string.isRequired,

  reportBtnText: PropTypes.string.isRequired,

  /**
   * social link href
   */
  socialMediaLink: PropTypes.string.isRequired,

  /**
   * text that is displayed for contact link
   */
  socialMediaText: PropTypes.string.isRequired,
  /**
   * contact link href
   */
  mobileLink: PropTypes.string.isRequired,

  /**
   * text that is displayed for contact link
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
  /**
   * array of objects containing the link text and link
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      linkText: PropTypes.string.isRequired,
    })
  ),
};
