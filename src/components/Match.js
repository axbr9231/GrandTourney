import React, { useState, useEffect } from 'react';
import '../App.css';
import Team from './Team.js'
import MatchModal from './MatchModal';

const Match = ({ round, match, index, currentMatch, updateNextRound }) => {

    // let hideMatch = !match.topTeam && !match.bottomTeam && round === '1';

    const [modalOpen, setModalOpen] = useState(false);

    let winningTeam;

    useEffect(() => {
        if (match === currentMatch) {
            setTimeout(() => {
                setModalOpen(true);

            }, 3000)
        }
    }, [currentMatch, match])

    const closeModal = (e) =>{
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
        setTimeout(() => {
            if (team === match.topTeam) {
                match.topTeam = undefined;
            } else {
                match.bottomTeam = undefined;
            }
        }, 2500);
        match.isActive = false;
    }

    return (
        <div className={`round${round} match`} style={!match.isVisible ? {'visibility': 'hidden'} : null} >
            {match.topTeam ? <Team 
                setWinner={setWinner}
                team={match.topTeam}
                /> : null}
            {match.bottomTeam ? <Team 
                setWinner={setWinner}
                team={match.bottomTeam}
                /> : null}
            <MatchModal 
            isOpen={modalOpen} 
            topTeam={match.topTeam ? match.topTeam : null} 
            bottomTeam={match.bottomTeam ? match.bottomTeam : null}
            closeModal={closeModal}
            setWinner={setWinner}
            />
        </div>
    )
}

export default Match;