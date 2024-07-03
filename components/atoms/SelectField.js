import PropTypes from "prop-types";
import { ErrorLabel } from "./ErrorLabel";
import { useTranslation } from "next-i18next";

export function SelectField({ value = "", ...props }) {
  const { t } = useTranslation("common");

  const ifControlledProps = !props.uncontrolled
    ? {
        value: value,
      }
    : {};

  if (!props.ignoreSort) {
    props.options.sort(function (a, b) {
      var collator = new Intl.Collator("fr");
      return collator.compare(a.name.toLowerCase(), b.name.toLowerCase());
    });
  }

  return (
    <div
      className={`block leading-tight${
        props.className ? " " + props.className : " mb-10px"
      }`}
    >
      <label
        className={`select-field-label block leading-tight text-sm lg:text-p font-body mb-5 ${
          props.boldLabel ? "font-bold" : ""
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
      <select
        className={`text-input select-field bg-white font-body w-full min-h-40px shadow-sm border-2 py-6px px-12px ${
          props.error ? "border-error-border-red" : "border-black"
        }`}
        id={props.id + "-choice"}
        name={props.name}
        aria-required={props.required}
        aria-invalid={props.error ? "true" : undefined}
        onChange={(e) => props.onChange(e.currentTarget.value)}
        {...ifControlledProps}
        data-testid={props.dataTestId + "-choice"}
        data-cy={props.dataCy + "-choice"}
      >
        <option
          key="default"
          value=""
          data-testid="default"
          data-cy="default"
        />
        {props.options.map(({ id, name, value }) => {
          return (
            <option key={id} value={value} data-testid={id} data-cy={id}>
              {name}
            </option>
          );
        })}
        {props.other ? (
          <option
            key={"other"}
            value={"other"}
            data-testid={"other"}
            data-cy={"other"}
          >
            {t("reportAProblemOther")}
          </option>
        ) : (
          ""
        )}
      </select>
    </div>
  );
}

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
