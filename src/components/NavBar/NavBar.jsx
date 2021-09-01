import React from 'react';
import myCSS from './NavBar.module.css';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={myCSS.nav}>
            <div>
                <NavLink to='/profile' activeClassName={myCSS.active}>Профиль</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' activeClassName={myCSS.active}>Сообщения</NavLink>
            </div>
            <div>
                <NavLink to='/users' activeClassName={myCSS.active}>Пользователи</NavLink>
            </div>
            <div>
                <NavLink to='/news' activeClassName={myCSS.active}>Новости</NavLink>
            </div>
            <div>
                <NavLink to='/music' activeClassName={myCSS.active}>Музыка</NavLink>
            </div>
            <div>
                <NavLink to='settings' activeClassName={myCSS.active}>Настройки</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;