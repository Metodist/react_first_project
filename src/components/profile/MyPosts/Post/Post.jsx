import React from "react";
import style from './Post.module.css';
import ava from './avatar.png'

const Post = (props) => {

    return <div>
        <div className={style.item}>
            <img src={ava}/>
            {props.message}
            <div>
                <span>like {props.like}</span>
            </div>
        </div>
    </div>
}

export default Post;