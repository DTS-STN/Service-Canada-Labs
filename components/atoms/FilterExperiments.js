import PropTypes from "prop-types";
import { useTranslation } from "next-i18next";

/**
 *  Filter Experiments component
 */
export function FilterExperiments(props) {
  const { t } = useTranslation("common");
  const createOptions = props.options.map((option) => (
    <div>
      <input
        type="radio"
        className="radioButton absolute -left-full -top-full"
        name="radioButtonFilter"
        defaultChecked={option.id === 0}
        value={option.text}
        id={option.id}
        onChange={props.onChange}
      />
      <label
        className={`font-body float-left text-xs px-5 py-3 cursor-pointer border border-solid border-gray-600 border-opacity-50 mr-0 mb-6 ${
          option.id === 0
            ? "rounded-l-lg"
            : option.id === 2
            ? "rounded-r-lg px-7"
            : ""
        } `}
        htmlFor={option.id}
      >
        {t(option.text)}
      </label>
    </div>
  ));
  return (
    <div
      className="mt-4 md:flex md:mt-6"
      role="radiogroup"
      aria-labelledby="filterExperiments"
      data-cy={props.dataCy}
    >
      <label
        id="filterExperiments"
        htmlFor="radioButtonGroup"
        className="font-body pb-3 pt-2 pr-4 text-sm md:text-base"
      >
        Filter by:
      </label>
      <div
        id="radioButtonGroup"
        className="mt-2 flex justify-self-stretch md:mt-0"
      >
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
