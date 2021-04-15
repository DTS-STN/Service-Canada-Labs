/**
 * Button component
 */
export function Menu() {

    function onMenuClick() {
        document.getElementById("menuDropdown").classList.toggle("active");
    };

    return (
        <nav className="xl:justify-end xl:flex layout-container font-body">
            <button onClick={onMenuClick} id="menuButton" className="text-h4">
                <span className="icon-menu"/>
                <span className="pl-3">MENU</span>
            </button>

            <ul id="menuDropdown" className="menuDropdown">
                <li className="py-3 px-2 cursor-pointer">
                    <a href="#">Service Canada Labs</a>
                </li>
                <li className="py-3 px-2 cursor-pointer">
                    <a href="#">Experiments</a>
                </li>
                <li className="py-3 px-2 cursor-pointer">
                    <a href="#">About</a>
                </li>
            </ul>
        </nav>
    )
}