import PropTypes from "prop-types";

export function Header(props) {
  return (
    <div className="w-full flex flex-col mt-6 mb-4">
      <div className="w-full flex justify-center">
        <div className="w-full md:w-2/3 ml-2 md:ml-0 mr-2 md:mr-0 flex justify-between items-center md:items-start mb-2">
          <img
            className="w-40 md:w-64"
            src="/sig-blk-en.svg"
            alt={props.headerCanadaCaAltText}
          />
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
  headerCanadaCaAltText: PropTypes.string.isRequired,
};
