import { Route } from "react-router-dom";
import { useState , useEffect} from "react";


import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LoginForm from "./components/LoginForm/LoginForm";
import Wish from "./components/Wish/Wish";
import Home from "./components/Home/Home";


import './App.css';

function App() {     

    // const [user, setUser] = useState(null);

    // useEffect(() => {
    //     const userEmail = localStorage.getItem("email");
    //     setUser(userEmail)
    // }, [])

    // const authInfo = {
    //     isAuthenticated: Boolean(user),
    //     user
    // };

    // console.log(authInfo);

    return (
        <div>
            <Navigation />

            <Route path="/" exact component={Home}></Route>
            <Route path="/auth/register" component={RegisterForm}></Route>
            <Route path="/auth/login" component={LoginForm}></Route>
            <Route path="/wish/create" component={Wish}></Route>

            <Footer />




        </div>
    );
}

export default App;
