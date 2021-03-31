import PropTypes from "prop-types";
import Image from "next/image";

export function Header(props) {
  return (
    <div className="w-full flex flex-col mt-6 ">
      <div className="w-full flex justify-center">
        <div className="w-full md:w-2/3 ml-2 md:ml-0 mr-2 md:mr-0 flex justify-between items-center md:items-start relative ">
          <div className="md:h-9 h-6 w-40 ">
            <Image
              className="h-full absolute bottom-0 left-0"
              layout="fill"
              src={props.headerLogoImage}
              alt={props.headerLogoAltText}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 divide-y divide-black-500">
        <div className="mt-4"></div>
        <div></div>
      </div>
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
