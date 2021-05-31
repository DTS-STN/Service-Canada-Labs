import PropTypes from "prop-types";

/**
 * Radio input styled as a button
 **/
export function RadioButton(props) {
  const ifControlledProps = !props.uncontrolled
    ? {
        checked: props.checked,
      }
    : {
        defaultChecked: props.checked || false,
      };
  return (
    <div className="inline-block relative">
      <input
        type="radio"
        className="radio-button absolute top-0 left-0 w-full h-full appearance-none cursor-pointer"
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={(e) => {
          props.onChange(props.value, e);
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            if (props.uncontrolled) {
              e.currentTarget.checked = true;
            }
            props.onChange(props.value, e);
          }
        }}
        data-testid={props.dataTestId}
        data-cy={props.dataCy}
        required={props.required}
        {...ifControlledProps}
      />
      <label
        className={`radio-button-label font-body float-left text-xs px-5 py-3 border border-solid border-gray-600 border-opacity-50${
          props.roundedFront ? " rounded-l-lg" : ""
        }${props.roundedBack ? " rounded-r-lg" : ""}`}
        htmlFor={props.id}
      >
        {props.label}
      </label>
    </div>
  );
}

RadioButton.defaultProps = {
  checked: false,
};

RadioButton.propTypes = {
  /**
   * the id for the input
   */
  id: PropTypes.string.isRequired,

  /**
   * the name for the input
   */
  name: PropTypes.string.isRequired,

  /**
   * the value for the input
   */
  value: PropTypes.string.isRequired,

  /**
   * the label for the radio button
   */
  label: PropTypes.string.isRequired,

  /**
   * whether or not the field is required
   */
  required: PropTypes.bool,

  /**
   * whether the radio button is checked or not
   */
  checked: PropTypes.bool,

  /**
   * Should the button be rounded in the front
   */
  roundedFront: PropTypes.bool,

  /**
   * Should the button be rounded in the back
   */
  roundedBack: PropTypes.bool,

  /**
   * if the input is controlled by react or not
   */
  uncontrolled: PropTypes.bool,

  /**
   * onChange callback
   */
  onChange: PropTypes.func,

  /**
   * unit test selector
   */
  dataTestId: PropTypes.string,

  /**
   * cypress test selector
   */
  dataCy: PropTypes.string,
};
