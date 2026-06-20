import { NavLink } from "react-router-dom";

function Navbar() {
    return(
        <>
        <nav className="navbar">
            <section className="logo">
                <h2>🐶🐾 Petshop </h2>
            </section>

        <section>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/perros">Perros</NavLink>
            <NavLink to="/gatos">Gatos</NavLink>
        </section>
        </nav>
        </>
    );
}
export default Navbar;