import "./Navigation.css";



function Navigation() {

    return (
        <header className="header">
            <h1><a class="home" href="#">About</a></h1>
            <nav class="nav-buttons">
                <a href="#">Create a wish</a>
                <a href="#">Logout</a>
                <a href="#">Register</a>
            </nav>
        </header>
    );
}

export default Navigation;