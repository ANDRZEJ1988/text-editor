import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {textListSelector} from "../../store/selectors";
import {addText} from "../../actions/actions";
import {myFunction} from "../../functions/functions";
import {backs, col, sizz} from "../../assets";
import './ChangeStyle.scss'

export const ChangeStyle = () => {
    const textList = useSelector(textListSelector);
    const dispatch = useDispatch();
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const [back, setBack] = useState('');
    const chooseColor = (event) => {
        const color = event.target.value;
        setColor(color);
    };
    const chooseSize = (event) => {
        const size = event.target.value;
        setSize(size);
    };
    const chooseBackground = (event) => {
        const back = event.target.value;
        setBack(back);
    };

    document.onselectionchange = function () {
        let selection = document.getSelection().toString();
        return selection
    };
    const changeColor = () => {
        const tence = document.onselectionchange();
        const copy = myFunction(textList, tence, color);
        dispatch(addText(copy));
    };
    const changeSize = () => {
        const tence = document.onselectionchange();
        const copy = myFunction(textList, tence, null, size);
        dispatch(addText(copy));
    };
    const changeBackground = () => {
        const tence = document.onselectionchange();
        const copy = myFunction(textList, tence, null, null, back);
        dispatch(addText(copy));
    };
    const makeJSON = () => {
        const copy = textList.slice();
        const arr = [];
        if (textList.length !== 0) {
            const a = copy.reduce((previousValue, currentValue) => {
                    if ((previousValue.color === currentValue.color) &&
                        (previousValue.fontSize === currentValue.fontSize) &&
                        (previousValue.background === currentValue.background)) {
                        return (previousValue = {
                            txt: previousValue.txt + ' ' + currentValue.txt,
                            fontSize: previousValue.fontSize,
                            color: previousValue.color,
                            background: previousValue.background
                        })
                    }
                    {
                        if ((previousValue.color !== currentValue.color) &&
                            (previousValue.fontSize === currentValue.fontSize) &&
                            (previousValue.background === currentValue.background)) {
                            previousValue = {
                                txt: previousValue.txt,
                                fontSize: previousValue.fontSize,
                                color: previousValue.color,
                                background: previousValue.background
                            };
                            currentValue = {
                                txt: currentValue.txt,
                                fontSize: previousValue.fontSize,
                                color: currentValue.color,
                                background: previousValue.background
                            }
                            arr.push(previousValue);
                            return (currentValue)
                        }
                    }

                    {
                        if ((previousValue.color === currentValue.color) &&
                            (previousValue.fontSize !== currentValue.fontSize) &&
                            (previousValue.background === currentValue.background)) {
                            previousValue = {
                                txt: previousValue.txt,
                                fontSize: previousValue.fontSize,
                                color: previousValue.color,
                                background: previousValue.background
                            };
                            currentValue = {
                                txt: currentValue.txt,
                                fontSize: currentValue.fontSize,
                                color: previousValue.color,
                                background: previousValue.background
                            }
                            arr.push(previousValue);
                            return (currentValue)
                        }
                    }

                    {
                        if ((previousValue.color === currentValue.color) &&
                            (previousValue.fontSize === currentValue.fontSize) &&
                            (previousValue.background !== currentValue.background)) {
                            previousValue = {
                                txt: previousValue.txt,
                                fontSize: previousValue.fontSize,
                                color: previousValue.color,
                                background: previousValue.background
                            };
                            currentValue = {
                                txt: currentValue.txt,
                                fontSize: previousValue.fontSize,
                                color: previousValue.color,
                                background: currentValue.background
                            }
                            arr.push(previousValue);
                            return (currentValue)
                        }
                    }
                    {
                        if ((previousValue.color === currentValue.color) &&
                            (previousValue.fontSize !== currentValue.fontSize) &&
                            (previousValue.background !== currentValue.background)) {
                            previousValue = {
                                txt: previousValue.txt,
                                fontSize: previousValue.fontSize,
                                color: previousValue.color,
                                background: previousValue.background
                            };
                            currentValue = {
                                txt: currentValue.txt,
                                fontSize: currentValue.fontSize,
                                color: previousValue.color,
                                background: currentValue.background
                            }
                            arr.push(previousValue);
                            return (currentValue)
                        }
                    }
                    {
                        if ((previousValue.color !== currentValue.color) &&
                            (previousValue.fontSize === currentValue.fontSize) &&
                            (previousValue.background !== currentValue.background)) {
                            previousValue = {
                                txt: previousValue.txt,
                                fontSize: previousValue.fontSize,
                                color: previousValue.color,
                                background: previousValue.background
                            };
                            currentValue = {
                                txt: currentValue.txt,
                                fontSize: previousValue.fontSize,
                                color: currentValue.color,
                                background: currentValue.background
                            }
                            arr.push(previousValue);
                            return (currentValue)
                        }
                    }
                    {
                        if ((previousValue.color !== currentValue.color) &&
                            (previousValue.fontSize !== currentValue.fontSize) &&
                            (previousValue.background === currentValue.background)) {
                            previousValue = {
                                txt: previousValue.txt,
                                fontSize: previousValue.fontSize,
                                color: previousValue.color,
                                background: previousValue.background
                            };
                            currentValue = {
                                txt: currentValue.txt,
                                fontSize: currentValue.fontSize,
                                color: currentValue.color,
                                background: previousValue.background
                            }
                            arr.push(previousValue);
                            return (currentValue)
                        }
                    }
                    {
                        if ((previousValue.color !== currentValue.color) &&
                            (previousValue.fontSize !== currentValue.fontSize) &&
                            (previousValue.background !== currentValue.background)) {
                            previousValue = {
                                txt: previousValue.txt,
                                fontSize: previousValue.fontSize,
                                color: previousValue.color,
                                background: previousValue.background
                            };
                            currentValue = {
                                txt: currentValue.txt,
                                fontSize: currentValue.fontSize,
                                color: currentValue.color,
                                background: currentValue.background
                            }
                            arr.push(previousValue);
                            return (currentValue)
                        }
                    }
                }
            );
            arr.push(a);
        }
        return (JSON.stringify(arr));
    };
    const answer = makeJSON();

    return (
        <div>
            <div className="div">
                <button onClick={changeColor}>Change color</button>
                <select name="" id="" onChange={chooseColor}>
                    {
                        col.map((value, index) => {
                            return (
                                <option value={value} key={index}>{value}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="div">
                <button onClick={changeSize}>Change fontSize</button>
                <select name="" id="" onChange={chooseSize}>
                    {
                        sizz.map((value, index) => {
                            return (
                                <option value={value} key={index + 1}>{value}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="div">
                <button onClick={changeBackground}>Change background</button>
                <select name="" id="" onChange={chooseBackground}>
                    {
                        backs.map((value, index) => {
                            return (
                                <option value={value} key={index + 2}>{value}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="div">{textList.length !== 0 ? answer : ''}</div>
        </div>
    );
}

