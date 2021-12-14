import PropTypes from "prop-types";
import { useTranslation } from "next-i18next";

/**
 * check box component for forms
 */
export function CheckBox(props) {
  const { t } = useTranslation("common");

  const ifControlledProps = !props.uncontrolled
    ? {
        checked: props.checked,
      }
    : {};
  return (
    <div
      className={`block leading-tight relative pl-40px h-46px clear-left${
        props.className ? " " + props.className : " mb-4"
      }`}
    >
      <input
        className="control-input cursor-pointer appearance-none w-40px h-40px absolute left-0 m-0 z-1 opacity-0"
        id={props.id}
        name={props.name}
        value={props.value}
        type="checkbox"
        aria-label={props.ariaLabel}
        onChange={(e) =>
          props.onChange(
            props.uncontrolled ? !e.currentTarget.checked : props.checked,
            props.name,
            props.value
          )
        }
        required={props.required}
        data-cy={props.dataCy}
        data-testid={props.dataTestId}
        {...ifControlledProps}
      />
      <label
        className={`checkbox-label control-label inline-block cursor-pointer pt-4px pb-5px px-15px text-sm lg:text-p leading-tight sm:leading-6 font-normal font-body${
          props.error ? " text-error-border-red" : undefined
        }`}
        htmlFor={props.id}
      >
        {props.showRequiredLabel ? (
          <b className="text-error-border-red">*</b>
        ) : undefined}{" "}
        {props.label}{" "}
        {props.showRequiredLabel ? (
          <b className="text-error-border-red">{t("required")}</b>
        ) : undefined}
      </label>
    </div>
  );
}

CheckBox.defaultProps = {
  checked: false,
  value: "true",
  showRequiredLabel: false,
};

CheckBox.propTypes = {
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
   * the id of the checkbox
   */
  id: PropTypes.string.isRequired,

  /**
   * the label for the checkbox
   */
  label: PropTypes.string.isRequired,

  /**
   * whether or not there is an error
   */
  error: PropTypes.bool,

  /**
   * whether or not the field is required
   */
  required: PropTypes.bool,

  /**
   * show the "* ... (required)" in the label. in lists, this isn't necessary, but for an individual checkbox without a parent fieldset this is required
   */
  showRequiredLabel: PropTypes.bool,

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
