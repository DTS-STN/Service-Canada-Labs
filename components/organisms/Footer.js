import PropTypes from "prop-types";
import Image from "next/image";
import { ActionButton } from "../atoms/ActionButton";

/**
 * footer element for all pages
 */

export function Footer(props) {
  return (
    <div className="w-full">
      <div className="w-full h-auto footerBackground bg-custom-blue-dark">
        <div
          className="py-7 layout-container"
          role="navigation"
          aria-labelledby="footerNav1"
        >
          <h3 className="sr-only" id="footerNav1">
            {props.footerNav1}
          </h3>
          <ul className="flex flex-col text-xs lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3 lg:gap-1">
            {" "}
            {props.footerBoxLinks.map((value, index) => {
              return (
                <li
                  key={index}
                  className="text-white w-64 md:w-56 lg:w-80 my-2.5 hover:underline list-none"
                >
                  <a className="font-body" href={value.footerBoxlink}>
                    {value.footerBoxLinkText}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="w-full h-full bg-footer-background-color pb-4">
        <div className="h-auto bg-footer-white pt-5 layout-container flex flex-col xl:flex xl:flex-row md:justify-between">
          <div
            className="mt-3.5 xl:mt-5"
            role="navigation"
            aria-labelledby="footerNav2"
          >
            <h3 className="sr-only" id="footerNav2">
              {props.footerNav2}
            </h3>
            <ul className="flex flex-col md:grid md:grid-cols-2 xl:flex lg:flex-row">
              {props.links.map((value, index) => {
                return (
                  <li
                    key={index}
                    className={
                      index === 0
                        ? "lg:mb-4 mb-5 lg:list-inside list-disc xl:list-none text-xxs"
                        : "lg:mb-4 mb-5 lg:list-inside list-disc text-xxs"
                    }
                  >
                    <a
                      className="text-xs font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font"
                      data-cy="social-media-link"
                      href={value.link}
                    >
                      {value.linkText}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex items-center justify-between">
            <ActionButton
              id="TopOfPageButton"
              href="#"
              custom="text-left w-32 flex flex-col lg:hidden"
              text={props.topOfPage}
              icon="icon-up-caret"
              iconEnd
            />
            <span className="flex relative footer-logo">
              <Image
                src={props.footerLogoImage}
                alt={props.footerLogoAltText}
                layout="fill"
              />
            </span>
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
