import React, {useState} from 'react';
import { Tooltip } from '@material-ui/core'
import TeamInfo from './TeamInfo';
import '../App.css';

const Team = (props) => {
    let initials;
    if (props.name) {
        initials = props.name.trim(' ').split(' ').map(word => word[0].toUpperCase()).join('');
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
        <Tooltip title={<TeamInfo teamName={props.name} />}>
            <div 
                className={'team ' + className}
                onClick={changeClassName}
            >
                {initials}
            </div>
        </Tooltip>
    )
}

export default Team;