import {
    ADD_TEXT,
    END_CHANGE_TEXT_CONTENT, REMOVE_CONTENT,
    REMOVE_TEXT,
    SAVE_TEXT,
    START_CHANGE_TEXT_CONTENT
} from "./actions-type";

export const addText = (text) => {
    return ({
        type: ADD_TEXT,
        payload: text
    })
};
export const startChangeTextContent = () => {
    return ({
        type: START_CHANGE_TEXT_CONTENT,
        payload: true
    })
};
export const endChangeTextContent = () => {
    return ({
        type: END_CHANGE_TEXT_CONTENT,
        payload: false
    })
};

export const removeContentFunction = () => {
    return ({
        type: REMOVE_CONTENT,
        payload: false
    })
};

export const saveText = (text) => {
    return ({
        type: SAVE_TEXT,
        payload: text
    })
};
export const removeText = (text) => {
    return ({
        type: REMOVE_TEXT,
        payload: text
    })
};
