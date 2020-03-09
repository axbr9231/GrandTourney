import React, {useState} from 'react';
import { Tooltip } from '@material-ui/core'
import TeamInfo from './TeamInfo';
import '../App.css';

const Team = ({ team, ...props }) => {

    console.log('team from Team: ', team);
    let initials;
    if (team.name) {
        initials = team.name.trim(' ').split(' ').map(word => word[0].toUpperCase()).join('');
    };

    const [className, setClassName] = useState(props.teamPositionStart)
    const changeClassName = (e) => {
        if (!e.target.className.includes('end')) {
            setClassName(props.teamPositionEnd)
        } else {
            setClassName(props.winningTeamEnd);
            setTimeout(() => { 
                props.setWinner(props.teamId);
            }, 2500);
        }
    }

    return (

        <Tooltip title={<TeamInfo teamName={props.name} />} interactive leaveDelay={1000}>
            <div 
                className={'team ' + className}
                onClick={changeClassName}
            >
                <h2>{initials}</h2>
            </div>
        </Tooltip>
    )
}

export default Team;