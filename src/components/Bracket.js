import React from 'react';
import styled from 'styled-components';
import '../App.css';
import Round from './Round.js';

const Container = styled.div`
    min-height: 100vh;
    padding-left: 25px;
    display: flex;
`;

const Bracket = ({ rounds, updateNextRound, currentMatch }) => {    
    return (
        <Container>
            {Object.keys(rounds).map(round => <Round key={round} round={round} matches={rounds[round]} updateNextRound={updateNextRound} currentMatch={currentMatch} />)}
        </Container>
    )
}

export default Bracket;