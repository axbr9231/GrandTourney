import React, {useState} from 'react';
import '../App.css';
import Team from './Team.js'

const Match = ({ round, teams, index, updateNextRound }) => {
    
    let team1name, team2name, team1initials, team2initials;
    if (teams[0]) {
        team1name = teams[0];
        team1initials = team1name.trim(' ').split(' ').map(word => word[0].toUpperCase()).join('');
    };
    if (teams[1]) {
        team2name = teams[1];
        team2initials = team2name.trim(' ').split(' ').map(word => word[0].toUpperCase()).join('');
    }
    let hideMatch = !teams[0] && !teams[1] && round === '1';

    const setWinner = team => {
        if (team === 0) {
            updateNextRound(parseInt(round) + 1, parseInt(index), team1name);
        } else {
            updateNextRound(parseInt(round) + 1, parseInt(index), team2name);
        }
    }

    return (
        <div className={`round${round} match`} style={hideMatch ? {'visibility': 'hidden'} : null} >
            {teams[0] ? <Team 
                teamPositionStart="top-team" 
                teamPositionEnd="top-team-end" 
                winningTeamEnd="winning-team-top"
                losingTeamEnd="losing-team-top"
                which={0}
                setWinner={setWinner}
                initials={team1initials || null}
                /> : null}
            {teams[1] ? <Team 
                teamPositionStart="bottom-team" 
                teamPositionEnd="bottom-team-end"
                winningTeamEnd="winning-team-bottom"
                losingTeamEnd="losing-team-bottom"
                which={1}
                setWinner={setWinner}
                initials={team2initials || null}
                /> : null}
        </div>
    )
}

export default Match;