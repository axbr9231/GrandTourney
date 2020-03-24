import React from 'react';
import { Tooltip } from '@material-ui/core';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import TeamInfo from './TeamInfo';
import '../App.css';

const Team = ({ team }) => {

    const Container = styled(animated.div)`
        height: 50px;
        width: 50px;
        border-radius: 100%;
        position: absolute;
        background-color: white;
        z-index: 1;
        margin-left: -25px;
        display: flex;
        align-items: center;
        justify-content: center;
        ${team.isTop ? 'top: ' : 'bottom: '}-25px;
    `;

    const props = useSpring({config: {tension: 40}, right: team.active ? '-25px' : '175px'});

    let initials;
    if (team.name) {
        initials = team.name.trim(' ').split(' ').map(word => word[0].toUpperCase()).join('');
    };


    // const setWinner = (e) => {
    //             setTimeout(() => { 
    //                 props.setWinner(props.teamId);
    //             }, 2500);
    // }

    return (
        <Tooltip title={<TeamInfo teamName={team.name} />} interactive leaveDelay={1000}>
            <Container style={props}
                // className={team.className}
                // onClick={setWinner}
            >
                <h2>{initials}</h2>
            </Container>
        </Tooltip>
    )
}

export default Team;