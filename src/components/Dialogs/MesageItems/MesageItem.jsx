import React from 'react';
import myCSS from './../Dialogs.module.css';
const Mesage = (props) => {
    return (
        <div className = {myCSS.dialog}>{props.mesage}</div>
    )
}

export default Mesage;