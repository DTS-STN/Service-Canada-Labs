import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";

/**
 * Menu component
 */
export function Menu(props) {
  //Router
  const { asPath } = useRouter();

  //Function for changing menu state
  function onMenuClick() {
    const menuButton = document.getElementById("menuButton");
    const menuDropdown = document.getElementById("menuDropdown");

    menuDropdown.classList.toggle("active");
    menuButton.getAttribute("aria-expanded") === "true"
      ? menuButton.setAttribute("aria-expanded", false)
      : menuButton.setAttribute("aria-expanded", true);

    menuDropdown.getAttribute("aria-hidden") === "true"
      ? menuDropdown.setAttribute("aria-hidden", false)
      : menuDropdown.setAttribute("aria-hidden", true);
  }

  return (
    <nav
      title="Menu"
      className="layout-container lg:justify-end lg:flex"
      data-cy="menu"
    >
      <button
        id="menuButton"
        onClick={onMenuClick}
        className="text-h4 text-canada-footer-font focus:outline-none focus:ring-2 focus:ring-black mb-4 py-1"
        aria-haspopup="true"
        aria-expanded="false"
        aria-controls="menuDropdown"
      >
        <span className="icon-menu" />
        <span className="pl-3">{props.menuButtonTitle}</span>
      </button>

      <ul id="menuDropdown" className="menuDropdown" role="menu" aria-hidden="true">
        {props.items.map((item, key) => {
          var itemClass = "py-3 lg:py-0 cursor-pointer menuLink";

          {
            asPath === item.link
              ? (itemClass = "py-3 lg:py-0 cursor-pointer activePage")
              : null;
          }

          return (
            <li key={key} className={itemClass} role="menuitem">
              <Link href={item.link}>
                <a>{item.text}</a>
              </Link>
            </li>
          );
        })}
      </ul>
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
