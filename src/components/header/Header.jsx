import React from "react";
import logo from "../../mage.png";
import style from './Header.module.css';


const Header = () => {
    return <header className={style.header}>
        <img src={logo} />
    </header>;
}

export default Header;