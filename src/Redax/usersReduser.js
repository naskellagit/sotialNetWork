import {usersAPI} from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'
const SET_ACTIVE_PAGE = 'SET-ACTIVE-PAGE';
const SET_NUMBER_OF_USERS_ON_SERVER = 'SET-NUMBER-OF-USERS-ON_SERVER'
const CHANGE_IS_LOADING = 'CHANGE-IS-LOADING'

const numberOfUsersOnPage = 3;

const initialState = {
    users: [],
    numberOfUsersOnServer: 0,
    numberOfUsersOnPage: numberOfUsersOnPage,
    activePage: 1,
    isLoading: true
}

const usersReduser = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId){
                        return {...user, followed: true}
                    }
                    return user;
                }) 
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId){
                        return {...user, followed: false}
                    }
                    return user;
                }) 
            };
        case SET_USERS:
            return {...state, users: action.users}
        case SET_ACTIVE_PAGE:
            return {...state, activePage: action.page}
        case SET_NUMBER_OF_USERS_ON_SERVER:
            return {...state, numberOfUsersOnServer: action.numberOfUsersOnServer}
        case CHANGE_IS_LOADING:
            return {...state, isLoading: action.isLoading}
        default:
            return state;
    }
}

export const followActionCreater = (userId) => ({
    type: FOLLOW,
    userId
})

export const unfollowActionCreater = (userId) => ({
    type: UNFOLLOW,
    userId
})

export const setUsersActionCreater = (users) => ({
    type: SET_USERS,
    users
})

export const setActivePageActionCreater = (page) => ({
    type: SET_ACTIVE_PAGE,
    page
})

export const setNumberOfUsersOnServerActionCreater = (numberOfUsersOnServer) => ({
    type: SET_NUMBER_OF_USERS_ON_SERVER,
    numberOfUsersOnServer
})

export const changeIsLoadingActionCreater = (isLoading) => ({
    type: CHANGE_IS_LOADING,
    isLoading
})

export const getUsersThunkCreator = (activePage, numberOfUsersOnPage) => {
    return (dispatch) => {
        dispatch(changeIsLoadingActionCreater(true));
        usersAPI.getUsers(activePage, numberOfUsersOnPage)
        .then(data => {
            dispatch(changeIsLoadingActionCreater(false));
            dispatch(setUsersActionCreater(data.items));
            dispatch(setNumberOfUsersOnServerActionCreater(data.totalCount));
        })
    } 
}

export default usersReduser;