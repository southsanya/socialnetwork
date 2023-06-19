import React from 'react';
import classes from './Header.module.css'

function Header() {
  return (
    <header className={classes.header__container}>
        <img src="https://f.hubspotusercontent30.net/hubfs/2235233/blog-import/2020/20-08-Aug/sm-icons-facebook-logo.png" className={classes.header__image_logo}></img>
        <div className={classes.header__button_container}>
            <button className={classes.button__basic}>Log In</button>
            <button className={classes.button__last}>Sign Up</button>
        </div>
    </header>
  );
}

export default Header;
