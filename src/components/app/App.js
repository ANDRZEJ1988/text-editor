import React from 'react';
import './App.css';
import {TextPage} from "../text/TextPage";
import {ChangeStyle} from "../change-style/ChangeStyle";
import {TextList} from "../text-list/TextList";


export function App() {
    return (
        <>
            <TextPage/>
            <TextList/>
            <ChangeStyle/>
        </>
    );
}

export default App;
