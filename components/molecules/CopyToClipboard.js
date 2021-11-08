import PropTypes from "prop-types";
import Clipboard from "react-copy-to-clipboard";
import { ActionButton } from "../atoms/ActionButton";

export function CopyToClipboard(props) {
  const ifControlledProps = !props.uncontrolled
    ? {
        value: props.value,
      }
    : {};
  return (
    <div>
      <input
        className={`font-body w-full min-h-40px py-6px px-12px text-center ${props.textFieldStyle}`}
        id={props.id}
        aria-describedby={props.describedby}
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
        onChange={(e) => props.onChange(e.currentTarget.value)}
        {...ifControlledProps}
        data-testid={props.dataTestId}
        data-cy={props.dataCy}
      />
      <Clipboard text={props.value}>
        <ActionButton
          id={props.buttonId}
          className={`w-full ${props.buttonStyle}`}
        >
          {props.buttonText}
        </ActionButton>
      </Clipboard>
    </div>
  );
}

CopyToClipboard.defaultProps = {
  value: "",
  type: "text",
};

CopyToClipboard.propTypes = {
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
   * value of the text field
   */
  value: PropTypes.string,

  /**
   * placeholder for the text field,
   */
  placeholder: PropTypes.string,

  /**
   * the type of the input
   */
  type: PropTypes.string,

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

  /**
   * unit test selector
   */
  dataTestId: PropTypes.string,

  /**
   * cypress tests selector
   */
  dataCy: PropTypes.string,

  /**
   * aria-describedby label id
   */
  describedby: PropTypes.string,

  /**
   * Text for ActionButton
   */
  buttonText: PropTypes.string,
  /**
   * id for ActionButton
   */
  buttonId: PropTypes.string,
  /**
   * Custom styling for the button
   */
  buttonStyle: PropTypes.string,
  /**
   * Custom styling for the text field
   */
  textFieldStyle: PropTypes.string,
};
