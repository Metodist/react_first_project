import React from 'react';
import Style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";



const Dialogs = (props) =>{
    return(
        <div className={Style.messages}>
            <div className={Style.dialogs}>
                <div className={Style.dialogsItem + ' ' + Style.active}>
                    <NavLink to='/message/1'>name 1</NavLink>
                </div>
                <div className={Style.dialogsItem}>
                    <NavLink to='/message/2'>name 2</NavLink>
                </div>
                <div className={Style.dialogsItem}>
                    <NavLink to='/message/3'>name 3</NavLink>
                </div>
            </div>
            <div className={Style.dialog}>
                <div className={Style.dialogItem}>
                    text 1
                </div>
                <div className={Style.dialogItem}>
                    text 2
                </div>
                <div className={Style.dialogItem}>
                    text 3
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
