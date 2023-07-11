import React from 'react';
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <header className={classes.header__container}>
        <img src="https://f.hubspotusercontent30.net/hubfs/2235233/blog-import/2020/20-08-Aug/sm-icons-facebook-logo.png" alt='logo' className={classes.header__image_logo}></img>
        <div className={classes.header__button_container}>
            <NavLink to={'/login'} className={classes.header__button}>
              {props.isAuth? 'Switch' : 'Login'}
            </NavLink>
        </div>
    </header>
  );
}

export default Header;
