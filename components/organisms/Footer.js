import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";
import Image from "next/image";

/**
 * footer element for all pages
 */

export function Footer(props) {
  return (
    <div className="w-full mt-4">
      <div className="w-full h-48 flex flex-col md:flex-row  bg-dk-blue bg-footer-parliament-image bg-no-repeat bg-right-bottom text-white">
        {/* <div className="w-full flex flex-col mt-2 mb-2 layout-container pt-4">
          <div className="w-full flex ">
            <div className="ml-2 md:ml-0 mr-2 md:mr-0 flex md:items-start mb-2">
              <p className="mb-4 mt-2 text-sm">
                {props.reportDescription}
              </p>
            </div>
          </div>
          <div className="w-full flex ">
            <div className="w-1/2  md:w-2/3 ml-2 md:ml-0 mr-2 md:mr-0 flex justify-between items-center md:items-start mb-2">
              <ActionButton
                text={props.reportBtnText}
                secondary
                dataCyButton={"report-problem-button"}
              />
            </div>
          </div>
        </div> */}
      </div>
      <div className="w-full h-auto flex flex-col md:flex-row  items-center bg-footer-white mt-6  justify-between layout-container  ">
        <div className="w-full flex flex-col md:flex-row  justify-between layout-container   ">
          {props.links.map((value, index) => {
            return (
              <ul>
                <li className="text-canada-ca-link-colour p-2 md:pt-4 md:pr-4  md:pb-4   hover:underline">
                  <a key={index} href={value.link}>
                    {value.linkText}
                  </a>
                </li>
              </ul>
            );
          })}
          <div className=" md:ml-32  md:pt-0 pt-6 ">
            <Image
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
