import PropTypes from "prop-types";

/**
 * Menu component
 */
export function Menu(props) {
  //Function for changing menu state
  function onMenuClick() {
    const menuButton = document.getElementById("menuButton");
    document.getElementById("menuDropdown").classList.toggle("active");

    menuButton.getAttribute("aria-expanded") === "true"
      ? document
          .getElementById("menuButton")
          .setAttribute("aria-expanded", false)
      : document
          .getElementById("menuButton")
          .setAttribute("aria-expanded", true);
  }

  return (
    <nav
      title="Menu"
      className="layout-container lg:justify-end lg:flex"
      data-cy="menu"
    >
      <div id="menuButtonDiv" className="pb-4 pt-2">
        <button
          id="menuButton"
          onClick={onMenuClick}
          className="text-h4 text-canada-footer-font focus:outline-none focus:ring-2 focus:ring-black"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="icon-menu" />
          <span className="pl-3">{props.menuButtonTitle}</span>
        </button>
      </div>

      <div id="menuDropdown" className="menuDropdown">
        <ul role="menu">
          {props.items.map((item, key) => {
            return (
              <li
                key={key}
                className="py-3 lg:py-0 cursor-pointer"
                role="menuitem"
              >
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
