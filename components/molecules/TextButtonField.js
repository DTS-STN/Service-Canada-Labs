import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";

/**
 *  component
 */
export function TextButtonField(props) {
  //Verification for styling
  let secondary;
  if (props.custom === undefined)
    props.secondary === undefined
      ? (secondary = true)
      : (secondary = props.secondary);

  return (
    <div className={props.className + " mb-4 mx-0"}>
      {props.html === undefined ? (
        <div className="textbuttonField">{props.children}</div>
      ) : (
        <div
          className="textbuttonField"
          dangerouslySetInnerHTML={{ __html: props.html }}
        />
      )}

      {props.buttonText ? (
        <ActionButton
          id={props.idButton}
          className={"mt-2 text-xs md:text-base"}
          text={props.buttonText}
          secondary={secondary}
          disabled={props.disabled}
          custom={props.custom}
          href={props.href}
          dataCyButton={props.dataCyButton}
        />
      ) : (
        ""
      )}
    </div>
  );
}

TextButtonField.propTypes = {
  /**
   * Option for styling component
   */
  className: PropTypes.string,

  /**
   * Option for html
   */
  html: PropTypes.string,

  /**
   * Contenty
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),

  /**
   * Button id
   */
  idButton: PropTypes.string,

  /**
   * Button link
   */
  href: PropTypes.string,

  /**
   * Button text
   */
  buttonText: PropTypes.string,

  /**
   * Button secondary
   */
  secondary: PropTypes.bool,

  /**
   * Button disabled
   */
  disabled: PropTypes.bool,

  /**
   * Button custom
   */
  custom: PropTypes.string,

  /**
   * Test id for cypress test for the button
   */
  dataCyButton: PropTypes.string,
};
