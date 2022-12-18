import "./NavBar.css";
import CardWidget from "./CardWidget";

function NavBar() {
    return(
        <>
            <nav className="navBar">
                <ul class="navBar__links">
                    <li><a href="/">Calzado</a></li>
                    <li><a href="/">Ropa</a></li>
                    <li><a href="/">Accesorios</a></li>
                    <li><a href="/">Deportes</a></li>
                    <li><a href="/">Destacados</a></li>
                </ul>
                <CardWidget/>
            </nav>
        </>
    );
}

export default NavBar;