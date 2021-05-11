import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";

/**
 *  component
 */
export function TextButtonField(props) {
  return (
    <div className={props.className}>
      <h1>{props.title}</h1>
      <p className="text-sm md:text-p leading-normal text-left font-normal font-body">
        {props.text}
      </p>
      <ActionButton
        id={props.idButton}
        className={"text-xs md:text-base"}
        text={props.buttonText}
        secondary={props.secondary}
        disabled={props.disabled}
        custom={props.custom}
        href={props.href}
        dataCyButton={props.dataCyButton}
      />
    </div>
  );
}

TextButtonField.propTypes = {
  /**
   * Option for styling component
   */
  className: PropTypes.string,

  /**
   * Button link
   */
  title: PropTypes.string,

  /**
   * Paragraph
   */
  text: PropTypes.oneOfType([
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
