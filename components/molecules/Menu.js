import PropTypes from "prop-types";

/**
 * Menu component
 */
export function Menu(props) {
  //Function for changing menu state
  function onMenuClick() {
    document.getElementById("menuDropdown").classList.toggle("active");
    document.getElementById("menuButton").classList.toggle("active");
  }

  return (
    <nav
      title="Menu"
      className="layout-container lg:justify-end lg:flex"
      data-cy="menu"
    >
      <div id="menuButton" className="pb-4 pt-2">
        <button
          onClick={onMenuClick}
          className="text-h4 text-canada-footer-font focus:outline-none focus:ring-2 focus:ring-black"
        >
          <span className="icon-menu" />
          <span className="pl-3">{props.menuButtonTitle}</span>
        </button>
      </div>

      <div id="menuDropdown" className="menuDropdown">
        <ul>
          {props.items.map((item, key) => {
            return (
              <li key={key} className="py-3 pl-2 lg:py-0 cursor-pointer">
                <a href={item.link}>{item.text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

Menu.propTypes = {
  /**
   * Menu title for small screens
   */
  menuButtonTitle: PropTypes.string.isRequired,

  /**
   * Array of Items for the menu
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Text for the menu
       */
      text: PropTypes.string,

      /**
       * Link for the menu
       */
      link: PropTypes.string,
    })
  ).isRequired,
};
