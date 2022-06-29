import PropTypes from "prop-types";
import { RadioButton } from "../atoms/RadioButton";

/**
 *  Filter Experiments component
 */
export function Filter(props) {
  return (
    <form
      className="my-12"
      data-testid={props.dataTestId}
      data-cy={props.dataCy}
    >
      <fieldset>
        <legend className="md:float-left font-body pb-3 pt-2 pr-4 text-sm md:text-base">
          {props.label}
        </legend>
        <div className={"flex"}>
          {props.options.map(({ id, label, checked }, index) => (
            <RadioButton
              key={id}
              label={label}
              value={id}
              name={id}
              id={id}
              dataTestId={id}
              dataCy={id}
              onChange={props.onChange}
              checked={checked}
              roundedFront={index === 0}
              roundedBack={index === props.options.length - 1}
            />
          ))}
        </div>
      </fieldset>
    </form>
  );
}

Filter.propTypes = {
  /**
   * options for the filter
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      checked: PropTypes.bool,
    })
  ).isRequired,

  /**
   * filter label
   */
  label: PropTypes.string,

  /**
   * Action to do on input change
   */
  onChange: PropTypes.func,

  /**
   * Test id for unit tests
   */
  dataTestId: PropTypes.string,

  /**
   * Test id for cypress test
   */
  dataCy: PropTypes.string,
};
