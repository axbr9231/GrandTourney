import React from 'react';
import '../App.css';
import Team from './Team.js'

const Match = ({ round, match, index, updateNextRound }) => {

    console.log(`match from round ${round} match ${index + 1}: ${match}`);

    let hideMatch = !match.topTeam && !match.bottomTeam && round === '1';

    const setWinner = teamId => {
        if (teamId === 0) {
            updateNextRound(parseInt(round), parseInt(index), match.topTeam);
        } else {
            updateNextRound(parseInt(round), parseInt(index), match.bottomTeam);
        }
        match.topTeam = undefined;
        match.bottomTeam = undefined;
    }

    return (
        <div className={`round${round} match`} style={hideMatch ? {'visibility': 'hidden'} : null} >
            {match.topTeam ? <Team 
                teamPositionStart="top-team" 
                teamPositionEnd="top-team-end" 
                winningTeamEnd="winning-team-top"
                losingTeamEnd="losing-team-top"
                teamId={0}
                setWinner={setWinner}
                team={match.topTeam}
                /> : null}
            {match.bottomTeam ? <Team 
                teamPositionStart="bottom-team" 
                teamPositionEnd="bottom-team-end"
                winningTeamEnd="winning-team-bottom"
                losingTeamEnd="losing-team-bottom"
                teamId={1}
                setWinner={setWinner}
                team={match.bottomTeam}
                /> : null}
        </div>
    )
}

export default Match;