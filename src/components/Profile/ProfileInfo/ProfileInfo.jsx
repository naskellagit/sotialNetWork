import React from 'react';
import myCSS from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
      <div className={myCSS.flexElem}>
        <div>
          <img src={props.photos.large} alt="Аватар" />
        </div>
        <div className = {myCSS.key}>
            <ul>
                <li>Имя</li>
                <li>Id профиля</li>
                <li>Обо мне</li>
                <li>* * * * *</li>
                <li>Контактная информация</li>
                <li>Face Book</li>
                <li>Веб сайт</li>
                <li>Вконтакте</li>
                <li>Твиттер</li>
                <li>Инстаграм</li>
                <li>Гит Хаб</li>
            </ul>
        </div>
        <div>
        <ul>
                <li>{props.fullName}</li>
                <li>{props.userId}</li>
                <li>{props.aboutMe}</li>
                <li>* * * * *</li>
                <li>.....</li>
                <li>{props.contacts.facebook}</li>
                <li>{props.contacts.website}</li>
                <li>{props.contacts.vk}</li>
                <li>{props.contacts.twitter}</li>
                <li>{props.contacts.instagram}</li>
                <li>{props.contacts.github}</li>
            </ul>
        </div>
      </div>
    );
}
export default ProfileInfo;

// Фото пантеры
//https://img2.goodfon.ru/original/320x240/7/50/leopard-chernyy-oskal-ugroza.jpg