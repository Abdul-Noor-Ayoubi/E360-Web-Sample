import React from "react";
import classes from "./Signup.module.css";
import NavBar from "../Components/NavBar";
import { Link } from "react-router-dom";

function Signup()
{
    return (
        <>
            <NavBar />

            <div className={classes.MainContainer}>
                <form className={classes.FormContainer}>
                    <h1>Create an Account</h1>

                    <div className={classes.FullNameSection}>
                        <div className={classes.FirstNameSection}>
                            <label className={classes.FirstNameLabel}>First Name:</label>
                            <input type="text" className={classes.FirstNameInput} placeholder="First Name"></input>
                        </div>

                        <div className={classes.LastNameSection}>
                            <label className={classes.LastNameLabel}>Last Name:</label>
                            <input type="text" className={classes.LastNameInput} placeholder="Last Name"></input>
                        </div>
                    </div>

                    <div className={classes.EmailInputSection}>
                        <label className={classes.EmailLabel}>Email:</label>
                        <input type="text" placeholder="example@gmail.com" className={classes.EmailInput}></input>
                    </div>

                    <div className={classes.PasswordInputSection}>
                        <label className={classes.PasswordLabel}>Password:</label>
                        <input type="password" placeholder="Password" className={classes.PasswordInput}></input>
                    </div>

                    <div className={classes.PasswordConfirmationInputSection}>
                        <label className={classes.PasswordConfirmationLabel}>Confirm Password:</label>
                        <input type="password" placeholder="Confirm Password" className={classes.PasswordConfirmationInput}></input>
                    </div>

                    <Link to="/" className={classes.SignUpButtonLink}><button type="buttton" className={classes.SignUpButton}>Sign Up</button></Link>
                </form>
            </div>
        </>
    );
}

export default Signup;