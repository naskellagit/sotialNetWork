import React from 'react';
import myCSS from './NewPost.module.css';

const NewPost = (props) => {
    const newPost = React.createRef();
    const onButtonClick = () => {
        props.addPost();
    }
    const onPostChange = () => {
        const text = newPost.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className = {myCSS.wrapper}>
            <div>
                <textarea onChange = {onPostChange} ref = {newPost} value = {props.value}/>
            </div>
            <div>
                <button onClick = {onButtonClick}>Добавить</button>
            </div>
        </div>
    )
}

export default NewPost;