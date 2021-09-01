const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE = 'SET-PROFILE';

const initialState = {
    posts: [
        {mesage:'Я запостил вообще крутой постец!!!', id: 1},
        {mesage: 'Я начал изучать Реакт и скоро буду крутейшим фронтэндером!!!', id: 2},
        {mesage: 'Очень крутой курс Реакта!', id: 3},
        {mesage: 'Мазафака щит!!!!', id: 4}
    ],
    newPostText: 'Фак мой мозг!',
    profileData: null
}

const profilePageReduser = (state = initialState, action) => {
    if(action.type === ADD_POST){
        let newPost = {
            id: 5,
            mesage : state.newPostText
        }
        return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ''
        };
    }
    else if(action.type === UPDATE_NEW_POST_TEXT){
        return {
            ...state,
            newPostText: action.newText
        };
    }
    else if(action.type === SET_PROFILE){
        return {...state, profileData: action.profileData};
    }
    return state;
}

export const addPostActionCreater = () => ({
    type: ADD_POST
})

export const updateNewPostTextActionCreater = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export const setProfileActionCreater = (profileData) => ({
    type: SET_PROFILE,
    profileData
})

export default profilePageReduser;