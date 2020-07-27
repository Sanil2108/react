import React from 'react'
import classes from './NavBar.css';

function NavBar(props) {
    return (
        <div className={classes.NavBar}>
            <span style={{ padding: '10px'}} >Burger Builder</span>

            <span className={classes["NavBar__Button-Container"]}>
                <button className={classes["NavBar__Button--highlighted"]}>Builder</button>
                <button className={classes["NavBar__Button"]}>Burgers</button>
            </span>
        </div>
    );
}

export default NavBar;
