import PropTypes from "prop-types";

/**
 *  component
 */
export function SearchBar(props) {
  return (
    <form
      className="w-full inline-flex h-9 lg:w-full xl:w-80 w-full border border-solid border-gray-light-100"
      onSubmit={props.onSubmit}
      data-cy={props.dataCy}
    >
      <input
        type="text"
        placeholder={props.placeholder}
        className="placeholder-text-gray text-text-gray font-body py-1 px-2 focus:outline-none w-full"
        onChange={props.onChange}
      />

      <button
        title="Search bar button"
        type="submit"
        className={
          "bg-custom-blue-dark text-white text-center text-base rounded-none pt-0.5 h-full w-10 hover:bg-gray-dark active:bg-gray-dark focus:bg-gray-dark"
        }
      >
        <span className="icon-search" />
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  /**
   * Placeholder for the search bar
   */
  placeholder: PropTypes.string.isRequired,

  /**
   * Action to do on input change
   */
  onChange: PropTypes.func,

  /**
   * Action to do on form submit
   */
  onSubmit: PropTypes.func,

  /**
   * Test id for cypress test
   */
  dataCy: PropTypes.string,
};
