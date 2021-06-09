import PropTypes from "prop-types";
import { ErrorLabel } from "./ErrorLabel";
import { useTranslation } from "next-i18next";

export function SelectField(props) {
  const { t } = useTranslation("common");

  const ifControlledProps = !props.uncontrolled
    ? {
        value: props.value,
      }
    : {};
  return (
    <div
      className={`relative block leading-tight${
        props.className ? " " + props.className : " mb-10px"
      }`}
    >
      <label
        className={`select-field-label block leading-tight text-sm font-body mb-5px ${
          props.boldLabel ? "font-bold" : ""
        }`}
        htmlFor={props.id + "-choice"}
      >
        {props.required ? (
          <b className="text-error-border-red">*</b>
        ) : undefined}{" "}
        {props.label}{" "}
        {props.required ? (
          <b className="text-error-border-red">{t("signupFormrequired")}</b>
        ) : (
          <p className="inline text-form-input-gray text-sm">
            {t("signupFormOptional")}
          </p>
        )}
      </label>
      {props.error ? <ErrorLabel message={props.error} /> : undefined}
      <input
        className={`text-input select-field font-body w-full min-h-40px shadow-sm text-form-input-gray border-2 py-6px px-12px ${
          props.error ? "border-error-border-red" : "border-black"
        }`}
        list={props.id}
        id={props.id + "-choice"}
        name={props.name}
        required={props.required}
        onChange={(e) => props.onChange(e.currentTarget.value)}
        {...ifControlledProps}
        data-testid={props.dataTestId + "-choice"}
        data-cy={props.dataCy + "-choice"}
      />
      <datalist id={props.id}>
        {props.options.map(({ id, name, value }) => {
          return (
            <option key={id} value={value} data-testid={id} data-cy={id}>
              {name}
            </option>
          );
        })}
      </datalist>
    </div>
  );
}

SelectField.defaultProps = {
  value: "",
};

SelectField.propTypes = {
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
};
