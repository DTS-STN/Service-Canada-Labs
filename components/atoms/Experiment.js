import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "next-i18next";

/**
 * Displays an experiment card on the page
 */

export const Experiment = ({ title, tag, desc }) => {
  const { t } = useTranslation("common");
  return (
    <div
      className={
        "shadow-experiment-shadow p-4 border-b-4 " +
        (tag.id === 1
          ? "border-custom-blue-experiment-blue"
          : "border-gray-experiment")
      }
    >
      <h2 className="mb-2 text-p">{title}</h2>
      <span
        className={
          "inline-block py-2 px-2 uppercase font-body text-xxs text-white font-bold rounded " +
          (tag.id === 1
            ? "bg-custom-blue-experiment-blue"
            : "bg-gray-experiment")
        }
      >
        {t(tag.text)}
      </span>
      <p className="mt-2 text-sm">{desc}</p>
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
  tag: PropTypes.object.isRequired,

  /**
   * Description of the experiment card.
   */
  desc: PropTypes.string.isRequired,
};

export default Experiment;
