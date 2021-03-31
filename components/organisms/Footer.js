import { format } from "prettier";
import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";
import Image from "next/image";

/**
 * footer element for all pages
 */

export function Footer(props) {
  return (
    <footer className="w-full mt-2">
      <div className="w-full h-40 flex flex-col md:flex-row justify-center items-center bg-footer-blue bg-footer-parliament-image bg-no-repeat bg-right-bottom text-white">
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
      </div>
      <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center bg-footer-white mt-4">
        <nav className="w-1/2  md:w-2/3 flex flex-col md:flex-row">
          {props.links.map((value, index) => {
            return (
              <a
                className="text-canada-ca-link-colour p-2 md:p-4  hover:underline"
                key={index}
                href={value.link}
                style={{
                  height: "33%",
                }}
              >
                {value.linkText}
              </a>
            );
          })}
          <div className="md:ml-32  md:pt-0 pt-6">
            <Image
              src={props.footerLogoImage}
              width={200}
              height={200}
              alt={props.footerLogoAltText}
            />
          </div>
        </nav>
      </div>
    </footer>
  );
}

Footer.propTypes = {
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
   * alt text for footer canada-ca logo
   */
  footerLogoAltText: PropTypes.string.isRequired,

  /**
   * image path for footer logo
   */
  footerLogoImage: PropTypes.string.isRequired,
};
