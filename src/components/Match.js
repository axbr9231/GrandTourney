import React from 'react';
import '../App.css';
import Team from './Team.js'
import MatchModal from './MatchModal';

const Match = ({ round, match, index, updateNextRound }) => {

    console.log('match from round', round, 'match: ', match);

    let hideMatch = !match.topTeam && !match.bottomTeam && round === '1';
    let modalIsOpen = false;

    const setWinner = team => {
        if (!team.isTop) {
            updateNextRound(parseInt(round), parseInt(index), match.topTeam);
            match.setWinner(match.bottomTeam, match.topTeam)
        } else {
            updateNextRound(parseInt(round), parseInt(index), match.bottomTeam);
            match.setWinner(match.topTeam, match.bottomTeam)
        }
        match.topTeam = undefined;
        match.bottomTeam = undefined;
        match.isActive = false;
    }

    const openModal = () => {
        modalIsOpen = true;
    }

    const showMatchModal = () => {
        setTimeout(() => {
            openModal();
        }, 3500)
    }

    if (match.isActive) {
        openModal()
    }

    return (
        <div className={`round${round} match`} style={hideMatch ? {'visibility': 'hidden'} : null} >
            {match.topTeam ? <Team 
                setWinner={setWinner}
                team={match.topTeam}
                /> : null}
            {match.bottomTeam ? <Team 
                setWinner={setWinner}
                team={match.bottomTeam}
                /> : null}
            <MatchModal 
            isOpen={modalIsOpen} 
            topTeamName={match.topTeam ? match.topTeam.name : null} 
            bottomTeamName={match.bottomTeam ? match.bottomTeam.name : null}
            />
        </div>
    )
}

export default Match;