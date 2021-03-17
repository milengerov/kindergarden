import "./Navigation.css";



function Navigation() {

    return (
        <header className="header">
            <h1>
                <a class="home" href="#">About</a>
                <a href=""><img className="search-symbol "src="logo-finder-symbol.png" alt="" srcset="" width="40"/></a>
                
            </h1>
            <nav class="nav-buttons">
                <a href="#">Create a wish</a>
                <a href="#">Register</a>
                <a href="#">Login</a>
                <a href="#">Logout</a>
            </nav>
        </header>
    );
}

export default Navigation;