import { NavLink } from "react-router-dom";

import "./styles.css"

const NavBar = () => {
    return (
        <menu className="navbar-container">
            <NavLink to="/" className="navbar-logo">Null<span>Pointer</span>Exception</NavLink>

            <div style={{flexGrow: 1}}></div>

            <NavLink to="/pergunta" className="navbar-menu">Criar Pergunta</NavLink>
            <NavLink to="/tags" className="navbar-menu">Tags</NavLink>
        </menu>
    )
}

export default NavBar
