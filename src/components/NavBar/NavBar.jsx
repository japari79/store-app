import "./NavBar.css";
import CardWidget from "./CardWidget";
import NavItem from "./NavItem";

function NavBar() {
    return(
        <header className="header">
            <nav className="navBar">
                <ul className="navBar__links">
                    <NavItem nav="/">Home</NavItem>
                    <NavItem nav="/category/smartphone">Celulares</NavItem>
                    <NavItem nav="/category/laptop">Portátiles</NavItem>
                    <NavItem nav="/category/tablet">Tablets</NavItem>
                    <NavItem nav="/category/tv">Televisores</NavItem>
                </ul>
                <CardWidget/>
            </nav>
        </header>
    );
}

export default NavBar;