import React from "react";
import PropTypes from "prop-types";

/**
 * Displays the virtual concierge page
 */

export const VirtualConcierge = (props) => {
  return (
    <div
      className="flex flex-col w-full "
      data-testid={props.dataTestId}
      data-cy={props.dataCy}
    >
      <p className="pb-2 text-sm">{props.description}</p>
      <p className="pb-2 text-sm">{props.description1}</p>
      <p className="pb-2 text-sm">{props.description2}</p>
      {/* TODO the aspect ratio for mobile needs to be resolved. this is just temp */}
      <img
        className="mb-5 object-fill max-h-auto p-4 lg:w-1/3 lg:h-500px bg-gray-200"
        src={props.vcImage}
        alt={props.vcImageAltText}
      />
    </div>
  );
};

VirtualConcierge.propTypes = {
  /**
   * VC image
   */
  vcImage: PropTypes.string,

  /**
   * Image alt text
   */
  vcImageAltText: PropTypes.string,

  /**
   * Description of the experiment card.
   */
  description: PropTypes.string,
  description1: PropTypes.string,
  description2: PropTypes.string,

  /**
   * the test id for unit tests
   */
  dataTestId: PropTypes.string,

  /**
   * the test id for cypress test
   */
  dataCy: PropTypes.string,
};

export default VirtualConcierge;
