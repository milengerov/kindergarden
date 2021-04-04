import { Route } from "react-router-dom";


import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LoginForm from "./components/LoginForm/LoginForm";
import Wish from "./components/Wish/Wish";
import About from "./components/About/About";


import './App.css';

function App() {
  return (
    <div>
      <Navigation />

      <Route path="/" exact component={About}></Route>
      <Route path="/auth/register" component={RegisterForm}></Route>
      <Route path="/auth/login" component={LoginForm}></Route>
      <Route path="/wish/create" component={Wish}></Route>

      <Footer />




    </div>
  );
}

export default App;
