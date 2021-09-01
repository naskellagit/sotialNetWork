import React from 'react';
import myCSS from './Users.module.css';
import ava from '../../images/ava.jpg';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
    const pages = Math.ceil(props.numberOfUsersOnServer / props.numberOfUsersOnPage);
    const pagesOfNumber = Math.ceil(pages / props.numberOfNumbersOnPage);
        let arrayPages = [];
        if(props.activePageOfNumbersOnPage <= pagesOfNumber){
          for(let i = 1 + props.numberOfNumbersOnPage * (props.activePageOfNumbersOnPage - 1); i <= props.numberOfNumbersOnPage * props.activePageOfNumbersOnPage; i++){
            arrayPages.push(i);
          }
        }
        

    return (
        <div>
            <div className = {myCSS.cursor}>
                {arrayPages.map(page => {
                    return (<span className = {props.activePage === page && myCSS.selected} onClick = {(e) => props.onSpanClick(page)}>{page} </span>)
                })}
                <span onClick = {(e) => {props.onSpanClick2()}}>Далее</span>
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