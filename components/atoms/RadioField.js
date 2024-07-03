import PropTypes from "prop-types";

/**
 * radio field
 */
export function RadioField({ checked = false, value = "true", ...props }) {
  const ifControlledProps = !props.uncontrolled
    ? {
        checked: checked,
      }
    : {};
  return (
    <div
      className={`block leading-tight relative pl-40px h-40px clear-left mb-10px${
        props.className ? " " + props.className : ""
      }`}
    >
      <input
        className="control-input cursor-pointer appearance-none w-40px h-40px absolute left-0 m-0 z-1 opacity-0"
        id={props.id}
        name={props.name}
        value={value}
        type="radio"
        onChange={(e) =>
          props.onChange(
            props.uncontrolled ? !e.currentTarget.checked : checked,
            props.name,
            value
          )
        }
        aria-required={props.required}
        aria-invalid={props.error ? "true" : undefined}
        data-cy={props.dataCy}
        data-testid={props.dataTestId}
        {...ifControlledProps}
      />
      <label
        className={`radio-field-label control-label inline-block cursor-pointer pt-4px pb-5px px-15px text-sm lg:text-p leading-tight sm:leading-6 font-normal font-body${
          props.error ? " text-error-border-red" : undefined
        }`}
        htmlFor={props.id}
        onClick={() => props.onChange(checked, props.name, value)}
      >
        {props.label}
      </label>
    </div>
  );
}

RadioField.propTypes = {
  /**
   * additional css for the component
   */
  className: PropTypes.string,
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
   * whether or not there is an error
   */
  error: PropTypes.bool,

  /**
   * whether or not the field is required
   */
  required: PropTypes.bool,

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
