import React from "react";
import style from './Profile.module.css';

const Profile = () =>{
    return <div className={style.content}>
                <img src='https://torange.biz/photo/34/HD/autumn-rain-leaves-cover-social-networks-34674.jpg'/>
                <div>
                    <div>ava+ description</div>
                    <div>My posts</div>
                    <div>New Post</div>
                    <div className={style.item}>post 1</div>
                    <div className={style.item}>post 2</div>
                    <div className={style.item}>post 3</div>
                </div>
            </div>
}

export default Profile;