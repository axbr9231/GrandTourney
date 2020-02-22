import React, {useState} from 'react';
import '../App.css';

const RealTeam = (props) => {

    const [className, setClassName] = useState(props.teamPositionStart)
    const changeClassName = (e) => {
        if (!e.target.className.includes('end')) {
            setClassName(props.teamPositionEnd)
        } else {
            setClassName(props.winningTeamEnd);
        }
    }

    return (
        <div className={'team ' + className}
        onClick={(e) => {changeClassName(e)}}
        >
            
        </div>
    )
}

export default RealTeam;