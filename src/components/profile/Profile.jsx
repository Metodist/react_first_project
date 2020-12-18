import React from "react";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={style.content}>
        <img src='https://torange.biz/photo/34/HD/autumn-rain-leaves-cover-social-networks-34674.jpg'/>
        <div>
            <div>ava+ description</div>
            <div>My Posts</div>
            <MyPosts/>
        </div>
    </div>
}

export default Profile;