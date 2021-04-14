import { ActionButton } from "../atoms/ActionButton"

/**
 * Button component
 */
export function Menu() {

    function onMenuClick() {
        document.getElementById("menuBar").classList.toggle("active");
    };

    return (
        <nav className="relative inline-block layout-container">
            <div>
                <button onClick={onMenuClick}>
                    <span className={"icon-menu"} />
                    <span>Menu</span>
                </button>
            </div>

            <ul id="menuBar" className="menuDropdown">
                <li>
                    <a>Service Canada Labs</a>
                </li>
                <li>
                    <a>Experiments</a>
                </li>
                <li>
                    <a>About</a>
                </li>
                <li>
                    <ActionButton text="Sign up"/>
                </li>
            </ul>
        </nav>
    )
}