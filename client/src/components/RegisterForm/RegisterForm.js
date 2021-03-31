
import { Link } from "react-router-dom";

import * as authServise from "../../services/authService"


import "./RegisterForm.css";



function RegisterForm({ history }) {


    function onRegisterSubmit(e) {
        e.preventDefault();
        
        const { email, password, repeatpassword } = e.target;


        authServise.registerUser(email.value, password.value)
            .then(result => {
                console.log(result);             
                history.push("/auth/login")
            });

    }


    return (
        <div className="container auth">
            <form onSubmit={onRegisterSubmit}>
                <fieldset>
                    <legend>Register</legend>

                    <p className="field email">
                        <input type="email" id="email" name="email" placeholder="Please, enter your e-mail here!" />
                        <label htmlFor="email">Email:</label>
                    </p>
                    <p className="field password">
                        <input type="password" name="password" id="register-pass" />
                        <label htmlFor="register-pass">Password:</label>
                    </p>
                    <p className="field password">
                        <input type="password" name="repeatpassword" id="repeatpassword" />
                        <label htmlFor="repeatpassword">Repeat password:</label>
                    </p>
                    <p className="field submit">
                        <button className="btn submit" type="submit">Register</button>
                    </p>
                    <p className="field">
                        <span>If you already have profile click <Link to="/auth/login">here</Link></span>
                    </p>
                </fieldset>
            </form>
        </div>

    );




}

export default RegisterForm;