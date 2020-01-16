import React, {useState} from 'react';
import './App.css';
import Team from './Team.js';
import Team2 from './Team2.js';

const Match = (props) => {

    return (
        <div>
            <div className="match-container">
                {/* <div className="horizontal"></div> */}
                <Team className="team"/>
                <div className="round1" onClick={e => {
                    let top = e.target.offsetTop + e.target.offsetHeight;
                    console.log(top);
                    const $team2 = document.getElementsByClassName('team2');
                    // console.log($team2);
                    $team2[0].style.marginTop = `80%`;
                }}>
                </div>
                <Team2 className="team2"/>
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