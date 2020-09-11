import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    addText,
    endChangeTextContent, removeContentFunction,
    removeText,
    saveText,
    startChangeTextContent,
} from "../../actions/actions";

import './TextPage.scss'
import {statusChangeContentSelector, textListSelector} from "../../store/selectors";


export const TextPage = () => {
    const dispatch = useDispatch();
    const textList = useSelector(textListSelector);
    const statusChangeContent = useSelector(statusChangeContentSelector);
    const areaRef = useRef();
    const addTextFunction = () => {
        const copy = textList.slice();
        const stringArray = areaRef.current.value.split(' ');
        for (let element of stringArray) {
            copy.push({
                txt: element,
                fontSize: '16px',
                color: 'black',
                background: 'white'
            });
        }
        dispatch(addText(copy));
        areaRef.current.value = '';
    };
    const changeContentFunction = () => {
        dispatch(startChangeTextContent());
        const copy = textList.slice();
        for (let element of copy) {
            areaRef.current.value += element.txt + ' ';
        }
        console.log(textList);
    };
    const saveFunction = () => {
        const stringArray = areaRef.current.value.split(' ');
        const result = [];
        for (let word of stringArray) {
            result.push({
                txt: word,
                fontSize: '16px',
                color: 'black',
                background: 'white'
            })
        }
        dispatch(saveText(result));
        areaRef.current.value = '';
        dispatch(endChangeTextContent());
    };
    const remove = () => {
        const copy = [];
        dispatch(removeText(copy));
        dispatch(removeContentFunction());
    };

    return (
        <div className="text">
            <textarea className="area" id="" cols="10" rows="10" ref={areaRef}/>
            <div className='btn'>
                {!statusChangeContent && <button className="area-btn" onClick={addTextFunction}>add</button>}
                {!statusChangeContent &&
                <button className="area-btn" onClick={changeContentFunction}>change content</button>}
                {statusChangeContent && <button className="area-btn" onClick={saveFunction}>save changes</button>}
                <button className="area-btn" onClick={remove}>remove</button>
            </div>
        </div>
    );
}

