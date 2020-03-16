import React from 'react';
import '../App.css';
import Round from './Round.js';

const Bracket = ({ rounds, updateNextRound, currentMatch }) => {

    console.log('rounds from Bracket: ', rounds);
    
    

    return (
        <div id="bracket">
            {Object.keys(rounds).map(round => <Round key={round} round={round} matches={rounds[round]} updateNextRound={updateNextRound} currentMatch={currentMatch} />)}
        </div>
    )
}

export default Bracket;