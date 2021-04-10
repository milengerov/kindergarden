import { Link, useHistory } from "react-router-dom";
// import { useCookies } from "react-cookie";
import { useContext, useState } from "react";
import { UserContext } from "../../userContext";


import "./Navigation.css";

import * as authService from "../../services/authService"



function Navigation() {

    const history = useHistory();
    const [user, setUser] = useContext(UserContext);
    console.log(user);




    // const [cookies, setCookie, removeCookie] = useCookies(["AUTH_SESSION"]);

    function logoutUserHandler() {
        authService.logoutUser()
            .then(res => res.json())
            .then(result => {
                // console.log(cookies);
                setUser({});
                localStorage.clear();
                history.push("/")
            });
    }


    return (
        <header className="header">

            <h1>
                <Link className="home" to="/">Home</Link>
                

            </h1>
            <nav className="nav-buttons">
                {user.hasOwnProperty("user")
                    ? (
                        <div>
                            <Link to="/search">Search</Link>
                            <Link to="/wish/create">Create a wish</Link>
                            <Link to="/auth/logout" onClick={logoutUserHandler}>Logout</Link>
                        </div>

                    )
                    : (
                        <div>
                            <Link to="/auth/register">Register</Link>
                            <Link to="/auth/login">Login</Link>
                        </div>
                    )
                }



            </nav>
        </header>
    );
}

export default Navigation;