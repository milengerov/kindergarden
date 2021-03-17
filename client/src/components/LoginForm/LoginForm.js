import "./LoginForm.css";



function LoginForm() {

    return (
        <div class="container auth">
            <form action="#" method="">
                <fieldset>
                    <legend>Login</legend>
                    
                    <p class="field email">
                        <input type="email" id="email" name="email" placeholder="Please, enter your e-mail here!" />
                        <label for="email">Email:</label>
                    </p>
                    <p class="field password">
                        <input type="password" name="password" id="register-pass" />
                        <label for="register-pass">Password:</label>
                    </p>
                    <p class="field submit">
                        <button class="btn submit" type="submit">Register</button>
                    </p>
                    <p class="field">
                        <span>If you don't have profile click <a href="#">here</a></span>
                    </p>
                </fieldset>
            </form>
        </div>



    );
}

export default LoginForm;