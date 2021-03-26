import "./RegisterForm.css";



function RegisterForm() {

    return (
        <div class="container auth">
            <form action="#" method="">
                <fieldset>
                    <legend>Register</legend>

                    <p class="field email">
                        <input type="username" id="username" name="username" placeholder="Please, enter your username here!" />
                        <label for="username">Username:</label>
                    </p>
                    <p class="field email">
                        <input type="email" id="email" name="email" placeholder="Please, enter your e-mail here!" />
                        <label for="email">Email:</label>
                    </p>
                    <p class="field password">
                        <input type="password" name="password" id="register-pass" />
                        <label for="register-pass">Password:</label>
                    </p>
                    <p class="field password">
                        <input type="password" name="repeatpassword" id="repeatpassword" />
                        <label for="repeatpassword">Repeat password:</label>
                    </p>
                    <p class="field submit">
                        <button class="btn submit" type="submit">Register</button>
                    </p>
                    <p class="field">
                        <span>If you already have profile click <a href="#">here</a></span>
                    </p>
                </fieldset>
            </form>
        </div>



    );
}

export default RegisterForm;