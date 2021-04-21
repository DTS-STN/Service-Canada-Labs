import React from "react";
import PropTypes from "prop-types";

/**
 * Displays an experiment card on the page
 */

export const Experiment = ({ title, tag, desc }) => {
  return (
    <div className="shadow-experimentShadow px-4 py-6 border-b-4 border-custom-blue-experimentBlue">
      <h3 className="mb-4">{title}</h3>
      <span className="py-2 px-1 text-white font-bold bg-custom-blue-experimentBlue rounded">
        {tag}
      </span>
      <p className="mt-2">{desc}</p>
    </div>
  );
};

Experiment.propTypes = {
  /**
   * Title of the experiment card.
   */
  title: PropTypes.string.isRequired,

  /**
   * Phase Tag of the experiment card.
   */
  tag: PropTypes.string.isRequired,

  /**
   * Description of the experiment card.
   */
  desc: PropTypes.string.isRequired,
};

export default Experiment;
