import { useState } from "react";
import { CheckBox } from "../atoms/CheckBox";
import { RadioField } from "../atoms/RadioField";
import PropTypes from "prop-types";

/**
 * An optional list field (radio, checkbox) that is enabled by a checkbox
 */
export function OptionalListField({ controlType = "checkbox", ...props }) {
  let [showListField, setShowListField] = useState(props.checked || false);
  let handleCheckChange = (wasChecked, name, value) => {
    if (wasChecked) {
      setShowListField(false);
    } else {
      setShowListField(true);
    }

    if (props.onControlChange) {
      props.onControlChange(wasChecked, name, value);
    }
  };
  let sortedChildren = [...props.children].sort((a, b) => {
    if (a.props.label < b.props.label) {
      return -1;
    }
    if (b.props.label < a.props.label) {
      return 1;
    }
    return 0;
  });
  return (
    <>
      {controlType === "checkbox" ? (
        <CheckBox
          label={props.controlLabel}
          id={props.controlId}
          name={props.controlName}
          checked={props.checked || false}
          uncontrolled={props.uncontrolled}
          value={props.controlValue}
          onChange={handleCheckChange}
          dataTestId={props.controlDataTestId}
          required={props.controlRequired}
          dataCy={props.controlDataCy}
        />
      ) : (
        <RadioField
          label={props.controlLabel}
          id={props.controlId}
          name={props.controlName}
          checked={props.checked || false}
          uncontrolled={props.uncontrolled}
          value={props.controlValue}
          onChange={handleCheckChange}
          required={props.controlRequired}
          dataTestId={props.controlDataTestId}
          dataCy={props.controlDataCy}
        />
      )}
      {(props.uncontrolled && showListField) || props.checked ? (
        <fieldset className="mb-10px">
          <legend className="block leading-tight text-sm font-body mb-5px font-bold">
            {props.listFieldRequired ? (
              <b className="text-error-border-red" aria-hidden="true">
                *
              </b>
            ) : (
              ""
            )}
            {props.listLabel}
          </legend>
          <div className="gap-4">{sortedChildren}</div>
        </fieldset>
      ) : undefined}
    </>
  );
}

OptionalListField.propTypes = {
  /**
   * the type of field that should be used
   */
  controlType: PropTypes.oneOf(["checkbox", "radiofield"]),
  /**
   * the id for the checkbox
   */
  controlId: PropTypes.string.isRequired,

  /**
   * the name for the checkbox
   */
  controlName: PropTypes.string.isRequired,

  /**
   * the label for the checkbox
   */
  controlLabel: PropTypes.string.isRequired,

  /**
   * the value for the checkbox
   */
  controlValue: PropTypes.string,

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
   * the test id for the checkbox to select in unit tests
   */
  controlDataTestId: PropTypes.string,

  /**
   * the cypress selector for the checkbox
   */
  controlDataCy: PropTypes.string,

  /**
   * callback when the checkbox changes
   */
  onControlChange: PropTypes.func,

  /**
   * whether or not the list field is required
   */
  listFieldRequired: PropTypes.bool,

  /**
   * list items to display
   */
  children: PropTypes.arrayOf(PropTypes.element),

  /**
   * legend text for the list items
   */
  listLabel: PropTypes.string,
};
