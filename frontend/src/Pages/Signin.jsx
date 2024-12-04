import React from "react";
import classes from "./Signin.module.css";
import NavBar from "../Components/NavBar";
import { Link } from "react-router-dom";

function Signin()
{
    return (
        <>
            <NavBar />

            <div className={classes.MainContainer}>
                <form className={classes.FormContainer}>
                    <h1>Welcome Back!</h1>

                    <div className={classes.EmailInputSection}>
                        <label className={classes.EmailLabel}>Email:</label>
                        <input type="text" placeholder="example@gmail.com" className={classes.EmailInput}></input>
                    </div>

                    <div className={classes.PasswordInputSection}>
                        <label className={classes.PasswordLabel}>Password:</label>
                        <input type="password" placeholder="Password" className={classes.PasswordInput}></input>
                    </div>

                    <Link to="/" className={classes.SignInButtonLink}><button type="buttton" className={classes.SignInButton}>Sign in</button></Link>
                </form>
            </div>
        </>
    );
}

export default Signin;