import {createStore} from "redux";

const initialState = {
    text: [
        {
            txt: 'Lorem',
            fontSize: '16px',
            color: 'black',
            background: 'white'
        },
        {
            txt: 'dolorsit',
            fontSize: '16px',
            color: 'black',
            background: 'white'
        },
        {
            txt: 'ametLoremipsumdolorsit',
            fontSize: '16px',
            color: 'black',
            background: 'white'
        }
    ],
    statusChahgeContent: false,
    statusContent: false,

}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TEXT':
            return {...state, text: action.payload};
        case 'START_CHANGE_TEXT_CONTENT':
            return {...state, statusChahgeContent: action.payload};
        case 'END_CHANGE_TEXT_CONTENT':
            return {...state, statusChahgeContent: action.payload};
        case 'SAVE_TEXT':
            return {...state, text: action.payload};
        case 'REMOVE_TEXT':
            return {...state, text: action.payload};
        case 'REMOVE_CONTENT':
            return {...state, statusContent: action.payload};
        case 'CHANGE_TEXT_FOR_COLOR':
            return {...state, changeText: action.payload};
        case 'CHANGE_COLOR':
            return {...state, text: action.payload};
        default:
            return state;
    }
}
export const store = createStore(reducer);