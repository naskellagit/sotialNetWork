import React from 'react';
import myClass from './Post.module.css';

const Post = (props) => {
    return (
        <div className={myClass.wrapper}>
            <img src='https://windowsthemepack.com/themepack/_animals_wildlife/tigers/1.jpg'/>
            {props.mesage}
        </div>
    )
}
export default Post;