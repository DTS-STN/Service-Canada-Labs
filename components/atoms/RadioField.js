import PropTypes from "prop-types";

/**
 * radio field
 */
export function RadioField(props) {
  const ifControlledProps = !props.uncontrolled
    ? {
        checked: props.checked,
      }
    : {};
  return (
    <div className="block leading-tight relative pl-40px h-40px clear-left mb-20px">
      <input
        className="control-input cursor-pointer appearance-none w-40px h-40px absolute left-0 m-0 z-1 opacity-0"
        id={props.id}
        name={props.name}
        value={props.value}
        type="radio"
        onChange={(e) =>
          props.onChange(
            props.uncontrolled ? !e.currentTarget.checked : props.checked,
            props.name,
            props.value
          )
        }
        data-cy={props.dataCy}
        data-testid={props.dataTestId}
        {...ifControlledProps}
      />
      <label
        className="radio-field-label control-label inline-block cursor-pointer pt-4px pb-5px px-15px text-xs sm:text-sm leading-tight sm:leading-6 font-normal font-body"
        htmlFor={props.id}
        onClick={() => props.onChange(props.checked, props.name, props.value)}
      >
        {props.label}
      </label>
    </div>
  );
}

RadioField.defaultProps = {
  checked: false,
  value: "true",
};

RadioField.propTypes = {
  /**
   * whether or not the checkbox is checked
   */
  checked: PropTypes.bool.isRequired,

  /**
   * the value of the field when the checkbox is checked
   */
  value: PropTypes.string,

  /**
   * the name of the checkbox
   */
  name: PropTypes.string.isRequired,

  /**
   * the id of the checkbox
   */
  id: PropTypes.string.isRequired,

  /**
   * the label for the checkbox
   */
  label: PropTypes.string.isRequired,

  /**
   * callback to handle change in checked state, takes three arguments, the checked state, the name and the value
   */
  onChange: PropTypes.func,

  /**
   * boolean flag to specify that this input should not be controlled by react
   */
  uncontrolled: PropTypes.bool,

  /**
   * testing selector for cypress
   */
  dataCy: PropTypes.string,

  /**
   * testing selector for unit tests
   */
  dataTestId: PropTypes.string,
};
