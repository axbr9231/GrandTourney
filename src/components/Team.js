import React from 'react';
import { Tooltip } from '@material-ui/core';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import TeamInfo from './TeamInfo';
import '../App.css';

const Container = styled(animated.div)`
    height: 50px;
    width: 50px;
    border-radius: 100%;
    position: absolute;
    z-index: 1;
    margin-left: -25px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Team = ({ team, matchHeight, openModal }) => {


    const props = useSpring({
        // config: {tension: 40}, 
        right: team.active ? '-25px' : '175px',
        top: team.isTop ? team.won ? `${matchHeight / 2 - 25}px` : '-25px' : '',
        bottom: !team.isTop ? team.won ? `${matchHeight / 2 - 25}px` : '-25px' : '',
        backgroundColor: team.lost ? 'rgba(255, 0, 0, 0.4)' : 'white',
        onRest: () => {
            if (team.active && !team.won && !team.lost) {
                openModal();
            }
        }
    });


    let initials;
    if (team.name) {
        initials = team.name.trim(' ').split(' ').map(word => word[0].toUpperCase()).join('');
    };

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