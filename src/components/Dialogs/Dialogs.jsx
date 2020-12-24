import React from 'react';
import Style from './Dialogs.module.css';



const Dialogs = (props) =>{
    return(
        <div className={Style.messages}>
            <div className={Style.dialogs}>
                <div className={Style.dialogsItem + ' ' + Style.active}>
                    name 1
                </div>
                <div className={Style.dialogsItem}>
                    name 2
                </div>
                <div className={Style.dialogsItem}>
                    name 3
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
