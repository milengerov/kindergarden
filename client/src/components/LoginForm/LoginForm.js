import { Link } from "react-router-dom"


import "./LoginForm.css";

import * as authService from "../../services/authService"



function LoginForm({
    history
}) {


    function onLoginSubmit(e) {
        e.preventDefault();
        const { email, password } = e.target;

        authService.loginUser(email.value, password.value)
            .then(res => res.json())
            .then( res => {
                console.log(res);
                localStorage.setItem("userInfo", JSON.stringify(res));
                localStorage.setItem("auth-token", res.token);
                localStorage.setItem("email", res.email);
                localStorage.setItem("_id", res._id);
                history.push("/")
            })
               

            
    }

    return (
        <div className="container auth">
            <form onSubmit={onLoginSubmit}>
                <fieldset>
                    <legend>Login</legend>

                    <p className="field email">
                        <input type="email" id="email" name="email" placeholder="Please, enter your e-mail here!" />
                        <label htmlFor="email">Email:</label>
                    </p>
                    <p className="field password">
                        <input type="password" name="password" id="register-pass" />
                        <label htmlFor="register-pass">Password:</label>
                    </p>
                    <p className="field submit">
                        <button className="btn submit" type="submit">Login</button>
                    </p>
                    <p className="field">
                        <span>If you don't have profile click <Link to="/auth/register">here</Link></span>
                    </p>
                </fieldset>
            </form>
        </div>



    );
}

export default LoginForm;