import React from "react";
import NavBar from "../Components/NavBar";
import classes from "./Home.module.css"

function Home()
{
    return (
        <>
            <NavBar />

            <div className={classes.MainContainer}>
                <h1>Content</h1>
            </div>
        </>
    );
}

export default Home