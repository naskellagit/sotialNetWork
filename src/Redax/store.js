import profilePageReduser from './profilePageReducer';
import mesagePageReducer from './mesagePageReducer';

let store = {
    _state: {
        mesagePage: {
            dialogsData: [
                {name: 'Димон', id: 1},
                {name: 'Быкон', id: 2},
                {name: 'Козлон', id: 3},
                {name: 'Кича', id: 4},
                {name: 'Шконарь', id: 5}
            ],
            mesageData: [
                {mesage: 'Задрот, пошел в очко!', id: 2},
                {mesage: 'Ебать вы все тупые!!', id: 3},
                {mesage: 'Конюшина ебливая!!!!!)))', id: 4},
                {mesage: 'Лох в обтруханных штанах!!!', id: 5}
            ],
            newMesageText: ''
        },
        profilePage: {
            posts: [
                {mesage:'Я запостил вообще крутой постец!!!', id: 1},
                {mesage: 'Я начал изучать Реакт и скоро буду крутейшим фронтэндером!!!', id: 2},
                {mesage: 'Очень крутой курс Реакта!', id: 3},
                {mesage: 'Мазафака щит!!!!', id: 4}
            ],
            newPostText: 'Фак мой мозг!'
        }
    },
    _callSubscriber(){},
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){
        this._state.profilePage = profilePageReduser(this._state.profilePage, action);
        this._state.mesagePage = mesagePageReducer(this._state.mesagePage, action);

        this._callSubscriber(this._state);
    }
}





export default store;