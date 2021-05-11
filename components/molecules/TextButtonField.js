import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";

/**
 *  component
 */
export function TextButtonField(props) {
  return (
    <div className={props.className + " mb-4"}>
      <h1>{props.title}</h1>

      {props.text.map((paragraph, key) => {
        return (
          <p
            key={key}
            className="my-7 text-sm md:text-p leading-normal text-left font-normal font-body"
          >
            {paragraph}
          </p>
        );
      })}

      {props.buttonText ? (
        <ActionButton
          id={props.idButton}
          className={"mt-2 text-xs md:text-base"}
          text={props.buttonText}
          secondary={props.secondary}
          disabled={props.disabled}
          custom={props.custom}
          href={props.href}
          dataCyButton={props.dataCyButton}
        />
      ) : null}
    </div>
  );
}

TextButtonField.propTypes = {
  /**
   * Option for styling component
   */
  className: PropTypes.string,

  /**
   * Title
   */
  title: PropTypes.string.isRequired,

  /**
   * Paragraph
   */
  text: PropTypes.array.isRequired,

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
