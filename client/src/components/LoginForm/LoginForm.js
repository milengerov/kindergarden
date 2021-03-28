import "./LoginForm.css";



function LoginForm() {

    return (
        <div className="container auth">
            <form action="#" method="">
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
                        <span>If you don't have profile click <a href="#">here</a></span>
                    </p>
                </fieldset>
            </form>
        </div>



    );
}

export default LoginForm;