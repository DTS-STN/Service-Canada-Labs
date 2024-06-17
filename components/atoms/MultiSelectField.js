import PropTypes from "prop-types";
import { ErrorLabel } from "./ErrorLabel";
import { useTranslation } from "next-i18next";
import Select, { components } from "react-select";

export function MultiSelectField(props) {
  const { t } = useTranslation("common");

  const Option = (props) => {
    return (
      <div>
        <components.Option {...props}>
          <input
            aria-labelledby="optionLabel"
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
          />{" "}
          <label id="optionLabel">{props.label}</label>
        </components.Option>
      </div>
    );
  };

  return (
    <div
      className={`block leading-tight${
        props.className ? " " + props.className : " mb-10px"
      }`}
    >
      <label
        className={`select-field-label block leading-tight text-sm lg:text-p font-body mb-2 ${
          props.boldLabel ? "font-semibold" : ""
        }`}
        htmlFor={props.id + "-choice"}
      >
        {props.required ? (
          <b className="text-error-border-red" aria-hidden="true">
            *
          </b>
        ) : undefined}{" "}
        {props.label}{" "}
      </label>
      {props.error ? <ErrorLabel message={props.error} /> : undefined}
      <Select
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            borderWidth: "2px",
            borderColor: "black",
            borderRadius: "3px",
          }),
          dropdownIndicator: (baseStyles) => ({
            ...baseStyles,
            color: "black",
          }),
          indicatorSeparator: (baseStyles) => ({
            ...baseStyles,
            display: "none",
          }),
          placeholder: (baseStyles) => ({
            ...baseStyles,
            color: "black",
            fontSize: "20px",
          }),
          menu: (baseStyles) => ({
            ...baseStyles,
            marginTop: "0px",
            borderWidth: "1px",
            borderColor: "black",
            borderRadius: "3px",
          }),
          option: (baseStyles) => ({
            ...baseStyles,
            color: "black",
            fontWeight: "600",
            fontSize: "20px",
            lineHeight: "24px",
          }),
        }}
        isMulti
        options={props.options}
        onChange={props.onChange}
        components={{ Option }}
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
      />
    </div>
  );
}

MultiSelectField.defaultProps = {
  value: "",
};

MultiSelectField.propTypes = {
  /**
   * additional css for the component
   */
  className: PropTypes.string,

  /**
   * the id of the text field
   */
  id: PropTypes.string.isRequired,

  /**
   * the name of the text field
   */
  name: PropTypes.string.isRequired,

  /**
   * the label of the text field
   */
  label: PropTypes.string.isRequired,

  /**
   * whether ot not the field is required
   */
  required: PropTypes.bool,

  /**
   * value of the text field
   */
  value: PropTypes.string.isRequired,

  /**
   * call back for when the value of the text field changes
   */
  onChange: PropTypes.func,

  /**
   * message to display if there is an error
   */
  error: PropTypes.string,

  /**
   * Other option for dropdown
   */
  other: PropTypes.bool,

  /**
   * if label should be bold
   */
  boldLabel: PropTypes.bool,

  /**
   * boolean flag to specify that this input should be uncontrolled by react
   */
  uncontrolled: PropTypes.bool,

  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),

  /**
   * unit test selector
   */
  dataTestId: PropTypes.string,

  /**
   * cypress tests selector
   */
  dataCy: PropTypes.string,

  /**
   * if true, skip sorting the options
   */
  ignoreSort: PropTypes.bool,
};
