import PropTypes from "prop-types";

export function Heading(props) {
  const { title, fromLink, fromText, id, className } = props;

  return (
    <>
      <h1 className={`mb-0 pb-2 leading-heading1 ${className}`} id={id}>
        {title}
      </h1>
      <div className="mb-11 border-b-[6px] border-b-multi-red-red50a w-[72px]"></div>
      {fromLink && fromText && (
        <p className="">
          <strong>From: </strong>
          <a
            href={fromLink}
            className="underline text-multi-blue-blue70b font-body lg:text-browserh5 font-bold text-mobileh5 leading-[33px] hover:text-multi-blue-blue50b"
          >
            {fromText}
          </a>
        </p>
      )}
    </>
  );
}

Heading.propTypes = {
  /**
   * The text / title that will be displayed as heading
   */
  title: PropTypes.string.isRequired,
  /**
   * Link that should be dispayed under the main heading level
   */
  fromLink: PropTypes.string,
  /**
   * Text that will be displyed as text link
   */
  fromText: PropTypes.string,
  /**
   * css overrides for button
   */
  className: PropTypes.string,
  /**
   * To identify the heading element
   */
  id: PropTypes.string.isRequired,
  /**
   * Test id for unit test
   */
  dataTestId: PropTypes.string,
};
