import React from 'react';
import { Tooltip } from '@material-ui/core'
import TeamInfo from './TeamInfo';
import '../App.css';

const Team = ({ team, ...props }) => {

    let initials;
    if (team.name) {
        initials = team.name.trim(' ').split(' ').map(word => word[0].toUpperCase()).join('');
    };


    const setWinner = (e) => {
                setTimeout(() => { 
                    props.setWinner(props.teamId);
                }, 2500);
    }

    return (

        <Tooltip title={<TeamInfo teamName={team.name} />} interactive leaveDelay={1000}>
            <div 
                className={'team ' + team.className}
                onClick={setWinner}
            >
                <h2>{initials}</h2>
            </div>
        </Tooltip>
    )
}

export default Team;