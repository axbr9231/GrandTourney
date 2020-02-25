import React, {useState} from 'react';
import '../App.css';

const Team = (props) => {

    const [className, setClassName] = useState(props.teamPositionStart)
    const changeClassName = (e) => {
        if (!e.target.className.includes('end')) {
            setClassName(props.teamPositionEnd)
        } else {
            setClassName(props.winningTeamEnd);
        }
    }

    return (
        <div 
            className={'team ' + className}
            onClick={(e) => {changeClassName(e)}}
        >
            {props.initials}
        </div>
    )
}

export default Team;