import PropTypes from "prop-types";

/**
 *  component
 */
export function SearchBar(props) {
  return (
    <div className="inline-flex">
      <form className="inline-flex py-0.5">
        <input
          type="text"
          placeholder={props.placeholder}
          className="border border-custom-gray-light text-search-text-gray focus:outline-none"
        />

        <button
          title="Search bar button"
          type="submit"
          className={
            "bg-custom-blue-dark text-white text-center text-sm h-full w-9 hover:bg-search-button-gray active:bg-search-button-gray focus:bg-search-button-gray"
          }
        >
          <span className={"icon-magnifying"} />
        </button>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  /**
   * Placeholder for the search bar
   */
  placeholder: PropTypes.string.isRequired,
};
