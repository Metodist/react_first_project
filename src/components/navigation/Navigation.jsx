import React from "react";
import style from './Navigation.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return <nav className={style.nav}>
        <div className={`${style.item} ${style.active}`}>
            <NavLink to='profile' activeClassName={style.active}>Profiles</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='message' activeClassName={style.active}>Messages</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='news' activeClassName={style.active}>News</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='music' activeClassName={style.active}>Music</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='setting' activeClassName={style.active}>Settings</NavLink>
        </div>
    </nav>
}

export default Nav;