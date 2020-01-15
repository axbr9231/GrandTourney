import React, {useState} from 'react';
import './App.css';
import Team from './Team.js';

const Match = (props) => {

    return (
        <div>
            <div className="match-container">
                {/* <div className="horizontal"></div> */}
                <Team />
                <div className="round1">
                </div>
            </div>
        </div>
    )
}

export default Match;

        // <div>
        //     <div className="match-container">
        //         <div className="top-container">
        //             <div className="horizontal-top"></div>
        //             <div className="vertical-top"></div> 
        //         </div>
        //         <div className="bottom-container">
        //             <div className="horizontal-bottom"></div>
        //             <div className="vertical-bottom"></div>
        //         </div>
        //     </div>
        // </div>