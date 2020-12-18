import React from "react";
import style from './Navigation.module.css';

const Nav = () =>{
    return <nav className={style.nav}>
                <div className={`${style.item} ${style.active}`}>
                    <a>Profiles</a>
                </div>
                <div className={style.item}>
                    <a>Messages</a>
                </div>
                <div className={style.item}>
                    <a>News</a>
                </div>
                <div className={style.item}>
                    <a>Music</a>
                </div>
                <div className={style.item}>
                    <a>Settings</a>
                </div>
            </nav>
}

export default Nav;