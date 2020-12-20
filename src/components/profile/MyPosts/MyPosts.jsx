import React from "react";
import style from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
    return <div>
        <textarea></textarea>
        <button>Add Post</button>
        <Post message='привет как дела' like='4'/>
        <Post message='Это мой первый пост' like='45'/>
    </div>
}

export default MyPosts;