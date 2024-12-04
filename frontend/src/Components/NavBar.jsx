import React from "react";
import { Link } from "react-router-dom"
import classes from "./NavBar.module.css"

function NavBar()
{
    return (
        <div className={classes.NavBarContainer}>
            <div className={classes.NavBarLeftSide}>
                <Link to="/" className={classes.NavBarHomeLink}><h1 className={classes.NavBarHomeLinkText}>Logo</h1></Link>
            </div>

            <div className={classes.NavBarRightSide}>
                <Link to="/about" className={classes.NavBarAboutLink}><p className={classes.NavBarAboutLinkText}>About</p></Link>
                <Link to="/signin" className={classes.NavBarSigninLink}><p className={classes.NavBarSigninLinkText}>Sign in</p></Link>
                <Link to="/signup" className={classes.NavBarSignupLink}><button className={classes.NavBarSignupLinkButton}>Sign Up</button></Link>
            </div>
        </div>
    );
}

export default NavBar