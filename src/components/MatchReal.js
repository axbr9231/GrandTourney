import React, {useState} from 'react';
import '../App.css';
import RealTeam from './RealTeam.js'

const MatchReal = (props) => {

    const [teamPosition, moveTeam] = useState()

    return (
        <div className={props.round + ' match'}>
            <RealTeam 
                teamPositionStart="top-team" 
                teamPositionEnd="top-team-end" 
                winningTeamEnd="winning-team-top"
                losingTeamEnd="losing-team-top"
                />
            <RealTeam 
                teamPositionStart="bottom-team" 
                teamPositionEnd="bottom-team-end"
                winningTeamEnd="winning-team-bottom"
                losingTeamEnd="losing-team-bottom"
                />
        </div>
    )
}

export default MatchReal;