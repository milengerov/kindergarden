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
import * as wishService from "./services/wishService"

import { UserContext } from "./userContext";
import { WishesContext } from "./wishesContext";
import './App.css';

function App() {

    const [user, setUser] = useState({});
    //wishes:
    const [wishes, setWishes] = useState([]);

    console.log(user, wishes);

    useEffect(() => {
        authService.authUser()
            .then(res => res.json())
            .then(user => {
                console.log(user);
                setUser(user)
            })
    }, [setUser])

    useEffect(() => {

        wishService.getAll()
            .then(res => res.json())
            .then(returnedWishes => setWishes(returnedWishes.reverse()))
    }, []);



    return (

        <div>
            <UserContext.Provider value={[user, setUser]}>

                <Navigation />

                <Route path="/auth/register" component={RegisterForm}></Route>
                <Route path="/auth/login" component={LoginForm}></Route>

                <WishesContext.Provider value={[wishes, setWishes]}>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/wish/create" component={WishCreate}></Route>
                    <Route path="/wish/details/:wishId/edit" exact component={WishCreate}></Route>
                </WishesContext.Provider>

                <Route path="/wish/details/:wishId" exact component={WishDetails}></Route>

                <Footer />

            </UserContext.Provider>
        </div>
    );
}

export default App;
