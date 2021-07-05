import { useState } from "react";
import { CheckBox } from "../atoms/CheckBox";
import { TextField } from "../atoms/TextField";
import { MultiTextField } from "../atoms/MultiTextField";
import { RadioField } from "../atoms/RadioField";
import PropTypes from "prop-types";

/**
 * An optional text box that is enabled by a checkbox
 */
export function OptionalTextField(props) {
  let [showTextField, setShowTextField] = useState(props.checked || false);
  let handleCheckChange = (wasChecked, name, value) => {
    if (wasChecked) {
      setShowTextField(false);
    } else {
      setShowTextField(true);
    }

    if (props.onControlChange) {
      props.onControlChange(wasChecked, name, value);
    }
  };
  return (
    <>
      {props.controlType === "checkbox" && (
        <CheckBox
          label={props.controlLabel}
          id={props.controlId}
          name={props.controlName}
          checked={props.checked}
          uncontrolled={props.uncontrolled}
          value={props.controlValue}
          onChange={handleCheckChange}
          dataTestId={props.controlDataTestId}
          required={props.controlRequired}
          dataCy={props.controlDataCy}
        />
      )}
      {props.controlType === "radiofield" && (
        <RadioField
          label={props.controlLabel}
          id={props.controlId}
          name={props.controlName}
          checked={props.checked}
          uncontrolled={props.uncontrolled}
          value={props.controlValue}
          onChange={handleCheckChange}
          required={props.controlRequired}
          dataTestId={props.controlDataTestId}
          dataCy={props.controlDataCy}
        />
      )}
      {(props.uncontrolled && showTextField) || props.checked ? (
        props.multiText ? (
          <MultiTextField
            label={props.textFieldLabel}
            placeholder={props.textFieldPlaceHolder}
            name={props.textFieldName}
            id={props.textFieldId}
            value={props.textFieldValue}
            boldLabel={props.textLabelBold}
            rows={props.rows}
            cols={props.cols}
            spellCheck={props.spellCheck}
            wrap={props.wrap}
            required={props.textFieldRequired}
            onChange={
              props.onTextFieldChange ? props.onTextFieldChange : () => {}
            }
            dataTestId={props.textFieldDataTestId}
            dataCy={props.textFieldDataCy}
            error={props.error}
          />
        ) : (
          <TextField
            label={props.textFieldLabel}
            placeholder={props.textFieldPlaceHolder}
            name={props.textFieldName}
            id={props.textFieldId}
            value={props.textFieldValue}
            boldLabel={props.textLabelBold}
            uncontrolled={props.uncontrolled}
            required={props.textFieldRequired}
            onChange={
              props.onTextFieldChange ? props.onTextFieldChange : () => {}
            }
            dataTestId={props.textFieldDataTestId}
            dataCy={props.textFieldDataCy}
          />
        )
      ) : undefined}
    </>
  );
}

OptionalTextField.defaultProps = {
  controlType: "checkbox",
};

OptionalTextField.propTypes = {
  /**
   * the type of field that should be used
   */
  controlType: PropTypes.oneOf(["checkbox", "radiofield"]),
  /**
   * the id for the checkbox
   */
  controlId: PropTypes.string.isRequired,

  /**
   * the id for the text field
   */
  textFieldId: PropTypes.string.isRequired,

  /**
   * the name for the checkbox
   */
  controlName: PropTypes.string.isRequired,

  /**
   * the name for the text field
   */
  textFieldName: PropTypes.string.isRequired,

  /**
   * the label for the checkbox
   */
  controlLabel: PropTypes.string.isRequired,

  /**
   * the label for the text field
   */
  textFieldLabel: PropTypes.string.isRequired,

  /**
   * whether or not the text label is bold
   */
  textLabelBold: PropTypes.bool,

  /**
   * the value for the checkbox
   */
  controlValue: PropTypes.string,

  /**
   * the value for the text field
   */
  textFieldValue: PropTypes.string,

  /**
   * text field placeholder
   */
  textFieldPlaceHolder: PropTypes.string,

  /**
   * whether or not the checkbox is checked
   */
  checked: PropTypes.bool,

  /**
   * boolean flag to denote whether or not the inputs are controlled
   */
  uncontrolled: PropTypes.bool,

  /**
   * whether or not the control is required
   */
  controlRequired: PropTypes.bool,

  /**
   * whether or not the text field is required
   */
  textFieldRequired: PropTypes.bool,

  /**
   * the test id for the checkbox to select in unit tests
   */
  controlDataTestId: PropTypes.string,

  /**
   * the test id for the text field to select in unit tests
   */
  textFieldDataTestId: PropTypes.string,

  /**
   * the cypress selector for the checkbox
   */
  controlDataCy: PropTypes.string,

  /**
   * the cypress selector for the text field
   */
  textFieldDataCy: PropTypes.string,

  /**
   * callback when the checkbox changes
   */
  onControlChange: PropTypes.func,

  /**
   * callback when the text field changes
   */
  onTextFieldChange: PropTypes.func,

  /**
   * whether or not its a multi text field
   */
  multiText: PropTypes.bool,

  /**
   * how much lines should the multi text field show
   */
  rows: PropTypes.number,

  /**
   * how much columns the multi text field has
   */
  cols: PropTypes.number,

  /**
   * the minimum amount of characters for the multi text field
   */
  minLength: PropTypes.number,

  /**
   * the maximum amount of characters for the multi text field
   */
  maxLength: PropTypes.number,

  /**
   * the wrap preference for the multi text field
   */
  wrap: PropTypes.oneOf(["hard", "soft"]),

  /**
   * whether or not to spellcheck for the multi text field
   */
  spellCheck: PropTypes.bool,

  /**
   * message to display if there is an error
   */
  error: PropTypes.string,
};
