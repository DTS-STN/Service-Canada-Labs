import PropTypes from "prop-types";

/**
 * multi line text field
 */
export function MultiTextField(props) {
  return (
    <div className="block leading-tight mb-10px">
      <label
        className={`block leading-tight text-base font-body mb-5px ${
          props.boldLabel ? "font-bold" : ""
        }`}
        htmlFor={props.id}
      >
        {props.label}
      </label>
      <textarea
        className="text-input font-body w-full min-h-40px rounded shadow-sm text-form-input-gray border border-form-input-border-gray py-6px px-12px"
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        onChange={(e) => props.onChange(e.currentTarget.value)}
        cols={props.cols}
        rows={props.rows}
        spellCheck={props.spellCheck}
        wrap={props.wrap}
        data-testid={props.dataTestId}
        data-cy={props.dataCy}
      >
        {props.value}
      </textarea>
    </div>
  );
}

MultiTextField.defaultProps = {
  spellCheck: true,
  wrap: "soft",
};

MultiTextField.propTypes = {
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
};
