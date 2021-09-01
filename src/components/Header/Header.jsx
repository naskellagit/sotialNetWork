import React from 'react';
import myCSS from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={myCSS.header}>
            <img src='https://im-possible.info/images/art/misc/logo-projects/katrin-eleri-engel/icon.jpg'/>
            <div className = {myCSS.loginBlock}>
                {props.isAuth? props.login
                :<NavLink to = {'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;