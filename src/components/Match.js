import React, {useState} from 'react';
import '../App.css';
import RealTeam from './Team.js'

const Match = (props) => {
    console.log('match props: ', props);
    const team1name = props.teams[0];
    const team2name = props.teams[1];
    const team1initials = team1name.trim(' ').split(' ').map(word => word[0].toUpperCase()).join('');
    const team2initials = team2name.trim(' ').split(' ').map(word => word[0].toUpperCase()).join('');

    // console.log(team1initials);
    // console.log(team2initials);

    return (
        <div className={props.round + ' match'}>
            <RealTeam 
                teamPositionStart="top-team" 
                teamPositionEnd="top-team-end" 
                winningTeamEnd="winning-team-top"
                losingTeamEnd="losing-team-top"
                initials={team1initials}
                />
            <RealTeam 
                teamPositionStart="bottom-team" 
                teamPositionEnd="bottom-team-end"
                winningTeamEnd="winning-team-bottom"
                losingTeamEnd="losing-team-bottom"
                initials={team2initials}
                />
        </div>
    )
}

export default Match;