import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";

/**
 * error box to be used to summarise error in forms
 */
export function ErrorBox({ errors = [], ...props }) {
  return (
    <div
      id="error-box"
      className="relative border-l-4 border-error-border-red min-h-40px my-10"
      data-cy="error-box"
      role="alert"
      aria-atomic="true"
    >
      <span className="icon-error absolute top-1 -left-2.5 bg-white" />
      <p className="font-bold ml-4 text-p mb-2 lg:text-h4">{props.text}</p>
      <ul
        className="w-full list-disc list-outside leading-loose pl-8 text-sm lg:text-p"
        data-cy="error-box-items"
        id="error-box-items"
      >
        {errors.map(({ id, text }) => {
          return (
            <li key={`${id}-${text}`} className="mb-2">
              <ActionButton
                id={`${id}-${text}`}
                custom="font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font underline inline-block text-left"
                onClick={() => props.onClick(id)}
                dataCy={`error-item-${id}`}
                className="" // This is to avoid all the "undefined" class names applied.
              >
                {text}
              </ActionButton>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

ErrorBox.propTypes = {
  /**
   * An array of error messages to display. Each object contains the id of the element which
   * when the text is clicked the browser will scroll too
   */
  text: PropTypes.string.isRequired,
  errors: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * the id of the element on the page to scroll too
       */
      id: PropTypes.string.isRequired,
      /**
       * the text to display for the error component
       */
      text: PropTypes.string.isRequired,
    })
  ),
  /**
   * onClick callback
   */
  onClick: PropTypes.func,
};
