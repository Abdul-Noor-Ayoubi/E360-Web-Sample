import React from "react";
import NavBar from "../Components/NavBar";
import classes from "./About.module.css"

function About()
{
    return (
        <>
            <NavBar />

            <div className={classes.MainContainer}>
                <h1>About</h1>
            </div>
        </>
    );
}

export default About