import {Link} from "react-router-dom";

import "./Navigation.css";



function Navigation() {

    return (
        <header className="header">
            <h1>
                <Link class="home" to="/">About</Link>
                <Link to="/search"><img className="search-symbol "src="logo-finder-symbol.png" alt="" srcset="" width="40"/></Link>
                
            </h1>
            <nav class="nav-buttons">
                <Link to="/wish">Create a wish</Link>
                <Link to="/auth/register">Register</Link>
                <Link to="/auth/login">Login</Link>
                <Link to="/auth/logout">Logout</Link>
            </nav>
        </header>
    );
}

export default Navigation;