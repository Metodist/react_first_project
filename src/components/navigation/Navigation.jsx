import React from "react";
import style from './Navigation.module.css';

const Nav = () =>{
    return <nav className={style.nav}>
                <div className={`${style.item} ${style.active}`}>
                    <a href='profile'>Profiles</a>
                </div>
                <div className={style.item}>
                    <a href='message'>Messages</a>
                </div>
                <div className={style.item}>
                    <a href = 'news'>News</a>
                </div>
                <div className={style.item}>
                    <a href = 'music'>Music</a>
                </div>
                <div className={style.item}>
                    <a href = 'setting'>Settings</a>
                </div>
            </nav>
}

export default Nav;