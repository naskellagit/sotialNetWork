import React from 'react';
import myCSS from './Users.module.css';
import ava from '../../images/ava.jpg';
import { NavLink } from 'react-router-dom';

const Users = (props) => {

    const pages = Math.ceil(props.numberOfUsersOnServer / props.numberOfUsersOnPage)
        let arrayPages = [];
        for(let i = 1; i <= pages && i < 50; i++){
            arrayPages.push(i);
        }

    return (
        <div>
            <div className = {myCSS.cursor}>
                {arrayPages.map(page => {
                    return (<span className = {props.activePage === page && myCSS.selected} onClick = {(e) => props.onSpanClick(page)}>{page} </span>)
                })}
            </div>
            {
                props.users.map(user => {
                    return (
                      <div key={user.id} className={myCSS.wrapper}>
                        <div>
                          <NavLink to = {`/profile/${user.id}`}>
                            <div>
                              <img
                                src={
                                  user.photos.small != null
                                    ? user.photos.small
                                    : ava
                                }
                                alt="Здесь будет изображение"
                              />
                            </div>
                          </NavLink>
                          <div>
                            {user.followed ? (
                              <button onClick={() => props.unfollow(user.id)}>
                                Отписаться
                              </button>
                            ) : (
                              <button onClick={() => props.follow(user.id)}>
                                Подписаться
                              </button>
                            )}
                          </div>
                        </div>
                        <div>
                          <div>{user.id}</div>
                          <div>{user.name}</div>
                          <div>{user.status}</div>
                          <div>{user.uniqueUrlName}</div>
                        </div>
                      </div>
                    );
                })
            }
        </div>
    )
}

export default Users;