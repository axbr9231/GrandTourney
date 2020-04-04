import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '../App.css';
import Team from './Team.js'
import MatchModal from './MatchModal';

const Container = styled.div`
    width: 200px;
    border-top: 2px solid #0be9e9;
    border-right: 2px solid #0be9e9;
    border-bottom: 2px solid #0be9e9;
    position: relative;
    box-shadow: 5px 0px 8px #0be9e9, -5px 0px 8px #0be9e9 inset;
`;

const Match = ({ round, match, index, currentMatch, updateNextRound, bracketRef }) => {

    const ref = React.useRef();
    if (match.isActive) {
        ref.current.scrollIntoView({
            bahavior: 'smooth',
            block: 'center',
            inline: 'nearest'
        });
    }

    const [modalOpen, setModalOpen] = useState(false);

    let winningTeam;

    useEffect(() => {
        if (match === currentMatch) {
            setTimeout(() => {
                setModalOpen(true);

            }, 3000)
        }
    }, [currentMatch, match])

    const openModal = () => {
        if (match.isActive && match === currentMatch) {
            console.log('open');
            setModalOpen(true);
        }
    }
 
    const closeModal = (e) =>{
        console.log('close');
        match.isActive = false;
        setModalOpen(false);
        activateWinner(winningTeam);
    }

    const setWinner = (team) => {
        winningTeam = team;
    }

    const activateWinner = (team) => {
        if (!team.isTop) {
            match.setWinner(match.bottomTeam, match.topTeam)
            updateNextRound(parseInt(round), parseInt(index), match.bottomTeam);
        } else {
            match.setWinner(match.topTeam, match.bottomTeam)
            updateNextRound(parseInt(round), parseInt(index), match.topTeam);
        }
        // match.isActive = false;
    }

    const style = {
        visibility: match.isVisible ? 'visible' : 'hidden',
        height: `${match.height}px`,
        marginTop: round === '1' ? '50px' : `${match.height / 2}px`,
        marginBottom: round === '1' ? '100px' : `${match.height}px`
    }

    return (
        <Container style={style} ref={ref}>
            {match.topTeam ? <Team 
                setWinner={setWinner}
                openModal={openModal}
                team={match.topTeam}
                matchHeight={match.height}
                /> : null}
            {match.bottomTeam ? <Team 
                setWinner={setWinner}
                openModal={openModal}
                team={match.bottomTeam}
                matchHeight={match.height}
                /> : null}
            <MatchModal 
            isOpen={modalOpen} 
            topTeam={match.topTeam ? match.topTeam : null} 
            bottomTeam={match.bottomTeam ? match.bottomTeam : null}
            closeModal={closeModal}
            setWinner={setWinner}
            />
        </Container>
    )
}

export default Match;