import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

/**
 * Menu component
 */
export function Menu(props) {
  //Router
  const { asPath } = useRouter();
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav
      title="Menu"
      className="layout-container lg:justify-end lg:flex"
      data-cy="menu"
      role="navigation"
      aria-labelledby="mainSiteNav"
    >
      <h3 className="sr-only" id="mainSiteNav">
        Menu
      </h3>
      <div className="flex justify-between">
        <button
          id="menuButton"
          onClick={() => setShowMenu(!showMenu)}
          className="text-h4 text-canada-footer-font focus:outline-none focus:ring-2 focus:ring-black mb-4 py-1"
          aria-haspopup="true"
          aria-expanded={showMenu}
          aria-controls="menuDropdown"
          data-testid="menuButton"
        >
          <span className="inline-block align-middle icon-menu" />
          <span className="inline-block align-middle pl-3 font-body text-p leading-none">
            {props.menuButtonTitle}
          </span>
        </button>

        <button
          id="menuClose"
          onClick={() => setShowMenu(!showMenu)}
          className={`${
            showMenu ? "" : "hidden"
          } sr-only mb-4 text-canada-footer-font outline-none focus:not-sr-only focus:outline-black-solid lg:invisible`}
          aria-expanded={showMenu}
          aria-controls="menuDropdown"
          aria-label="Close the expanded menu options"
          data-testid="menuCloseButton"
        >
          <img src="/close-x-menu.svg" alt="Close button"></img>
        </button>
      </div>

      <ul
        id="menuDropdown"
        className={`menuDropdown mt-2 ${showMenu ? "active" : ""}`}
        role="menu"
        aria-expanded={showMenu}
      >
        {props.items.map((item, key) => {
          const exactURL = asPath === item.link; // it's exactly this url
          const includesURL = asPath.includes(item.link); // it's a child of this url (eg, "/projects/app" includes "/projects")

          return (
            <li
              key={key}
              className={`py-3 lg:py-0 cursor-pointer text-custom-blue-projects-link list-none -my-2 -ml-2`}
              role="menuitem"
              aria-current={exactURL ? "page" : null}
            >
              <Link
                href={item.link}
                className={`font-body text-base ${
                  includesURL
                    ? router.pathname !== "/signup/privacy"
                      ? "activePage"
                      : "menuLink underline"
                    : "menuLink underline"
                }`}
              >
                {item.text}
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
   * text for sign up button
   */
  signUpText: PropTypes.string.isRequired,

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
