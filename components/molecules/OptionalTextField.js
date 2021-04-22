import { useState } from "react";
import { CheckBox } from "../atoms/CheckBox";
import { TextField } from "../atoms/TextField";
import { MultiTextField } from "../atoms/MultiTextField";
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

    if (props.onCheckBoxChange) {
      props.onCheckBoxChange(wasChecked, name, value);
    }
  };
  return (
    <>
      <CheckBox
        label={props.checkBoxLabel}
        id={props.checkBoxId}
        name={props.checkBoxName}
        checked={props.checked}
        uncontrolled={props.uncontrolled}
        value={props.checkBoxValue}
        onChange={handleCheckChange}
        dataTestId={props.checkBoxDataTestId}
        dataCy={props.checkBoxDataCy}
      />
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
            onChange={
              props.onTextFieldChange ? props.onTextFieldChange : () => {}
            }
            dataTestId={props.textFieldDataTestId}
            dataCy={props.textFieldDataCy}
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

OptionalTextField.propTypes = {
  /**
   * the id for the checkbox
   */
  checkBoxId: PropTypes.string.isRequired,

  /**
   * the id for the text field
   */
  textFieldId: PropTypes.string.isRequired,

  /**
   * the name for the checkbox
   */
  checkBoxName: PropTypes.string.isRequired,

  /**
   * the name for the text field
   */
  textFieldName: PropTypes.string.isRequired,

  /**
   * the label for the checkbox
   */
  checkBoxLabel: PropTypes.string.isRequired,

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
  checkBoxValue: PropTypes.string,

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
   * the test id for the checkbox to select in unit tests
   */
  checkBoxDataTestId: PropTypes.string,

  /**
   * the test id for the text field to select in unit tests
   */
  textFieldDataTestId: PropTypes.string,

  /**
   * the cypress selector for the checkbox
   */
  checkBoxDataCy: PropTypes.string,

  /**
   * the cypress selector for the text field
   */
  textFieldDataCy: PropTypes.string,

  /**
   * callback when the checkbox changes
   */
  onCheckBoxChange: PropTypes.func,

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
};
