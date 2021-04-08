import { Route } from "react-router-dom";
import { useState, useEffect } from "react";


import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LoginForm from "./components/LoginForm/LoginForm";
import WishCreate from "./components/Wish/WishCreate";
import WishDetails from "./components/Wish/WishDetails";
import Home from "./components/Home/Home";
import * as authService from "./services/authService"

import { UserContext } from "./userContext";
import './App.css';

function App() {

    const [user, setUser] = useState({});

    useEffect(() => {
        authService.authUser()
            .then(res => res.json())
            .then(user => {
                console.log(user);
                setUser(user)
            })
    }, [setUser])

    

    return (

        <div>
            <UserContext.Provider value={[user, setUser]}>

                <Navigation />

                <Route path="/" exact component={Home}></Route>
                <Route path="/auth/register" component={RegisterForm}></Route>
                <Route path="/auth/login" component={LoginForm}></Route>
                <Route path="/wish/create" component={WishCreate}></Route>
                <Route path="/wish/details/:wishId" component={WishDetails}></Route>

                <Footer />

            </UserContext.Provider>
        </div>
    );
}

export default App;
