import React, {useState} from 'react';
import '../App.css';
import Team from './Team.js'

const Match = ({ round, teams }) => {
    let team1name, team2name, team1initials, team2initials;
    if (teams.length) {
        team1name = teams[0];
        team2name = teams[1];
        team1initials = team1name.trim(' ').split(' ').map(word => word[0].toUpperCase()).join('');
        team2initials = team2name.trim(' ').split(' ').map(word => word[0].toUpperCase()).join('');
    };

    // console.log(team1initials);
    // console.log(team2initials);

    return (
        <div className={`round${round} match`}>
            {teams.length ? <Team 
                teamPositionStart="top-team" 
                teamPositionEnd="top-team-end" 
                winningTeamEnd="winning-team-top"
                losingTeamEnd="losing-team-top"
                initials={team1initials || null}
                /> : null}
            {teams.length ? <Team 
                teamPositionStart="bottom-team" 
                teamPositionEnd="bottom-team-end"
                winningTeamEnd="winning-team-bottom"
                losingTeamEnd="losing-team-bottom"
                initials={team2initials || null}
                /> : null}
        </div>
    )
}

export default Match;