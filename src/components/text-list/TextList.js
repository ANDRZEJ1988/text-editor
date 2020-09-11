import React from 'react';
import {useSelector} from "react-redux";
import {textListSelector} from "../../store/selectors";
import './TextList.scss'

export const TextList = () => {
    const textList = useSelector(textListSelector);
    const render = () => {
        return (
            textList.map((value, index) => {
                return (
                    <span  className="spans" key={index} style={{
                        color: value.color,
                        fontSize: value.fontSize,
                        background: value.background
                    }}>{value.txt + ' '}</span>
                )
            })
        )
    };

    return (
        <div className="spanss">
            {render()}
        </div>
    );
}

