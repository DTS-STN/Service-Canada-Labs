import PropTypes from "prop-types";
import { ErrorLabel } from "./ErrorLabel";
import { useTranslation } from "next-i18next";

/**
 * multi line text field
 */
export function MultiTextField({ spellCheck = true, wrap = "soft", ...props }) {
  const { t } = useTranslation("common");

  return (
    <div
      className={`block leading-tight${
        props.className ? " " + props.className : " mb-12"
      }`}
    >
      <label
        className={`block leading-tight text-sm lg:text-p font-body mb-5px ${
          props.boldLabel ? "font-bold" : ""
        }`}
        htmlFor={props.id}
      >
        {props.required ? (
          <b className="text-error-border-red" aria-hidden="true">
            *
          </b>
        ) : undefined}{" "}
        {props.label}{" "}
      </label>
      <p id={props.describedby} className="text-sm lg:text-g mb-5 leading-30px">
        {t("doNotInclude")}
      </p>
      {props.error ? <ErrorLabel message={props.error} /> : undefined}
      <textarea
        className={`text-input font-body w-full min-h-40px shadow-sm text-form-input-gray border-2 py-6px px-12px ${
          props.error ? "border-error-border-red" : "border-black"
        }`}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        onChange={(e) => props.onChange(e.currentTarget.value)}
        cols={props.cols}
        rows={props.rows}
        spellCheck={spellCheck}
        wrap={wrap}
        required={props.required}
        data-testid={props.dataTestId}
        data-cy={props.dataCy}
        aria-describedby={props.describedby}
      >
        {props.value}
      </textarea>
    </div>
  );
}

MultiTextField.propTypes = {
  /**
   * additional css for the component
   */
  className: PropTypes.string,

  /**
   * the id of the multi text field
   */
  id: PropTypes.string.isRequired,
  /**
   * the name of the multi text field
   */
  name: PropTypes.string.isRequired,
  /**
   * the label for the multi text field
   */
  label: PropTypes.string.isRequired,

  /**
   * the value for the multi text field
   */
  value: PropTypes.string,

  /**
   * message to display if there is an error
   */
  error: PropTypes.string,

  /**
   * whether or not the field is required
   */
  required: PropTypes.bool,

  /**
   * whether or not spellchecking is enabled for this field, by default it is
   */
  spellCheck: PropTypes.bool,

  /**
   * whether or not the label is bold
   */
  boldLabel: PropTypes.bool,
  /**
   * whether to soft wrap or hard wrap the field
   */
  wrap: PropTypes.oneOf(["soft", "hard"]),
  /**
   * the placeholder for the multi text field
   */
  placeholder: PropTypes.string,
  /**
   * how much lines should the multi text field show
   */
  rows: PropTypes.number,
  /**
   * how much columns should the multi text field show
   */
  cols: PropTypes.number,
  /**
   * the minimum length of characters for the multi text field
   */
  minLength: PropTypes.number,
  /**
   * the maximum length of characters for the multi text field
   */
  maxLength: PropTypes.number,
  /**
   * call back for when the value of the multi text field changes
   */
  onChange: PropTypes.func,
  /**
   * unit test selector
   */
  dataTestId: PropTypes.string,
  /**
   * cypress selector
   */
  dataCy: PropTypes.string,

  /**
   * aria-describedby label id
   */
  describedby: PropTypes.string,
};
