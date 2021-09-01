const UPDATE_NEW_MESAGE_TEXT = 'UPDATE-NEW-MESAGE-TEXT';
const SEND_MESAGE = 'SEND-MESAGE';

const initialState = {
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
}

const mesagePageReducer = (state = initialState, action) => {
    if(action.type === UPDATE_NEW_MESAGE_TEXT){
       return {
            ...state,
            newMesageText: action.newText
        }
    }
    else if(action.type === SEND_MESAGE){
        const text = state.newMesageText;
        return {
            ...state,
            newMesageText: '',
            mesageData: [...state.mesageData, {mesage: text, id: 6}]
        };
    }
    return state;
}

export const sendMesageCreater = () => ({
    type: SEND_MESAGE
})

export const updateNewMesageCreater = (text) => ({
    type: UPDATE_NEW_MESAGE_TEXT,
    newText: text
})

export default mesagePageReducer;