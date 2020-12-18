import React from "react";
import style from './Post.module.css';

const Post = () => {
    return <div>
        <div className={style.item}>
            <img src='https://cdn4.telesco.pe/file/FuhMbMJd2urkcis0Wrw_0FiFkcXzoNzS87JIXDhOn6ZZGHLCUYwA66zLi0f9zYZjfYe_5FUM96ym7EozaO4_5WCzOMPkSSgaBk0ppZY55mPuIPbMefz7lS-6kJPK6sxWdQnHZU_Evm4k0Fmk9UlknDV8vPV_pzRoa2dHvIyh9xO4_O922o-Uinba6cIbuJ0f9nYmsjOneFi8miz7Ukbh2HiJiUnD9mrPsY4tcItoRjJ5KFZFj-07eW5i3fSW60PlvP6aRvYcmFHgxKhJNSs7IHq5RJdMBpXjSMUInZjuBq2CRp3ZnfYYbzmjHC642dwvtv4BpIuHHgSsrYJO3DrjrA.jpg'/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    </div>
}

export default Post;