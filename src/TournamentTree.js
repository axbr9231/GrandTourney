import React, {useState} from 'react';
import './App.css';
import Match from './Match.js';



const Tree = (props) => {

    return (
        <div>
            <div id="tree-container">
                <Match />
            </div>
        </div>
    )
}

export default Tree;