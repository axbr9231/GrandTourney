import React, {useState} from 'react';
import '../App.css';
import Team from './Team.js'

const Match = ({ round, teams, index, updateNextRound }) => {

    let hideMatch = !teams[0] && !teams[1] && round === '1';

    const [teamsState, setTeamsState] = useState(teams);

    const setWinner = teamId => {
        if (teamId === 0) {
            updateNextRound(parseInt(round), parseInt(index), teams[0]);
        } else {
            updateNextRound(parseInt(round), parseInt(index), teams[1]);
        }
        setTeamsState([undefined, undefined]);
    }

    return (
        <div className={`round${round} match`} style={hideMatch ? {'visibility': 'hidden'} : null} >
            {teamsState[0] ? <Team 
                teamPositionStart="top-team" 
                teamPositionEnd="top-team-end" 
                winningTeamEnd="winning-team-top"
                losingTeamEnd="losing-team-top"
                teamId={0}
                setWinner={setWinner}
                name={teamsState[0]}
                /> : null}
            {teamsState[1] ? <Team 
                teamPositionStart="bottom-team" 
                teamPositionEnd="bottom-team-end"
                winningTeamEnd="winning-team-bottom"
                losingTeamEnd="losing-team-bottom"
                teamId={1}
                setWinner={setWinner}
                name={teamsState[1]}
                /> : null}
        </div>
    )
}

export default Match;