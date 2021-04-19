import PropTypes from "prop-types";

/**
 * check box component for forms
 */
export function CheckBox(props) {
  const ifControlledProps = !props.uncontrolled
    ? {
        checked: props.checked,
      }
    : {};
  return (
    <div className="block leading-tight relative pl-40px min-h-40px clear-left mb-10px">
      <input
        className="checkbox-input cursor-pointer appearance-none w-44px h-44px absolute -top-2px -left-2px m-0 z-1 opacity-0"
        id={props.id}
        name={props.name}
        value={props.value}
        type="checkbox"
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
        className="checkbox-label inline-block cursor-pointer pt-8px pb-5px px-15px text-base leading-tight font-normal font-body"
        htmlFor={props.id}
        onClick={() => props.onChange(props.checked, props.name, props.value)}
      >
        {props.label}
      </label>
    </div>
  );
}

CheckBox.defaultProps = {
  checked: false,
  value: "true",
};

CheckBox.propTypes = {
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
