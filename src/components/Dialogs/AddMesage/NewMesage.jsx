import React from 'react';
import myCSS from './NewMesage.module.css';

const NewMesage = (props) => {
    const onButtonClick = () => {
        props.sendMesage();
    }
    const onNewMesageChange = (event) => {
       const text = event.target.value;
       props.updateNewMesage(text);
    }
    return (
        <div className = {myCSS.wrapper}>
            <div>
                <textarea rows = '13' cols = '30' placeholder = 'Введите Ваше сообщение...' 
                          value = {props.value} onChange = {onNewMesageChange}/>
            </div>
            <div>
                <button onClick = {onButtonClick}>Отправить</button>
            </div>
        </div>
    )
}

export default NewMesage;