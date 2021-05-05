import PropTypes from "prop-types";
import styles from "../../styles/filterExperiments.module.css";
import { useTranslation } from "next-i18next";

/**
 *  Filter Experiments component
 */
export function FilterExperiments(props) {
  const { t } = useTranslation("common");
  const createOptions = props.options.map((option) => (
    <div role="radio" key={option.id}>
      <input
        type="radio"
        className={`${styles.radioButton} absolute -left-full -top-full`}
        name="radioButtonFilter"
        defaultChecked={option.id === 0}
        value={option.text}
        id={option.id}
        onChange={props.onChange}
      />
      <label
        className={`${option.id === 0? "rounded-l-lg":option.id === 2? "rounded-r-lg":""} float-left text-xs px-4 py-3 cursor-pointer border-2 border-solid border-gray-600 border-opacity-50 mr-0`}
        htmlFor={option.id}
      >
        {t(option.text)}
      </label>
    </div>
  ));
  return (
    <div
      className="mt-2 md:flex md:mt-0"
      role="radiogroup"
      aria-labelledby="filterExperiments"
      data-cy={props.dataCy}
    >
      <label
        id="filterExperiments"
        htmlFor="radioButtonGroup"
        className="pb-3 pt-2 pr-4 text-sm md:text-base"
      >
        Filter by:
      </label>
      <div id="radioButtonGroup" className="mt-2 flex md:mt-0">
        {createOptions}
      </div>
    </div>
  );
}

FilterExperiments.propTypes = {
  /**
   * options for the filter
   */
  options: PropTypes.array.isRequired,

  /**
   * Action to do on input change
   */
  onChange: PropTypes.func,

  /**
   * Test id for cypress test
   */
  dataCy: PropTypes.string,
};
