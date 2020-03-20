/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, Fragment, useEffect } from 'react';
import _ from 'lodash';
import '../App.css';
import TeamSetup from './TeamSetup';
import Bracket from './Bracket';

class Team {
  constructor(name, isTop) {
    this.name = name;
    this.isTop = isTop;
    this.className = isTop ? 'top-team' : 'bottom-team';
    this.lost = false;
  }

  activateTeam() {
    this.className = this.isTop ? 'top-team-end' : 'bottom-team-end';
  }

  setWinner() {
    this.className = this.isTop ? `winning-team-top` : `winning-team-bottom`;
  }

  setLoser() {
    this.className += ' losing-team';
    this.lost = true;
  }
}

class Match {
  constructor(round, teams) {
    this.round = round;
    this.topTeam = teams && teams[0] ? new Team(teams[0], true) : undefined;
    this.bottomTeam = teams && teams[1] ? new Team(teams[1], false) : undefined;
    this.isActive = false;
    this.isVisible = true;
  }

  activateMatch() {
    this.topTeam.activateTeam()
    this.bottomTeam.activateTeam();
    this.isActive = true;
  }

  setWinner(winningTeam, losingTeam) {
    winningTeam.setWinner();
    losingTeam.setLoser();
  }


}

const getRound2MatchCount = (length) => {
    let lastPowerOfTwo = length - 1;
    while ((Math.log2(lastPowerOfTwo) % 1)) {
        lastPowerOfTwo--;
    }
    return Math.floor(lastPowerOfTwo / 2);
}

const getRound2TeamCount = (length) => {
    let nextPowerOfTwo = length;
    while ((Math.log2(nextPowerOfTwo) % 1)) { 
        nextPowerOfTwo++;
    }
    return nextPowerOfTwo - length;
}

const initializeRounds = (inputArray, mutatedArray) => {
    const rounds = {};
    if (!inputArray.length) {
      return rounds;
    }
    const teams = _.shuffle(inputArray);
    const numRounds = Math.ceil(Math.log2(teams.length));
    rounds[2] = new Array(getRound2MatchCount(teams.length));
    for (let i = 0; i < rounds[2].length; i++) {
      rounds[2][i] = new Match(2);
    }
    rounds[1] = Array(rounds[2].length * 2);
    for (let i = 0; i < rounds[1].length; i++) {
      rounds[1][i] = new Match(1);
    }
    for (let i = 3; i <= numRounds; i++) {
      rounds[i] = Array(rounds[i - 1].length / 2);
      for (let j = 0; j < rounds[i].length; j++) {
        rounds[i][j] = new Match(i);
      }
    }
    const round2TeamCount = getRound2TeamCount(teams.length);
    const round2Teams = teams.splice(0, round2TeamCount);
    const round1Teams = teams;
    const round2Matches = rounds[2].slice();
    let singleTeamByeCount = rounds[1].length - round2TeamCount;
    while (round2Teams.length) {
        const randomMatchIndex = Math.floor(Math.random() * round2Matches.length);
        const match = round2Matches[randomMatchIndex];
        if (singleTeamByeCount) {
            const isTop = Math.floor(Math.random() * 2) ? false : true;
            if (isTop) {
              match.topTeam = new Team(round2Teams.pop(), true);
              mutatedArray.push(match.topTeam);
            } else {
              match.bottomTeam = new Team(round2Teams.pop(), false);
              mutatedArray.push(match.bottomTeam);
            }
            singleTeamByeCount--;
        } else {
          match.topTeam = new Team(round2Teams.pop(), true);
          match.bottomTeam = new Team(round2Teams.pop(), false);
          mutatedArray.push(match.topTeam);
          mutatedArray.push(match.bottomTeam);
        }
        round2Matches.splice(randomMatchIndex, 1);
    }
    for (let i = 0; i < rounds[2].length; i++) {
      const round2Match = rounds[2][i];
      if (!round2Match.topTeam) {
        const round1Match = rounds[1][i * 2];
        round1Match.topTeam = new Team(round1Teams.pop(), true);
        round1Match.bottomTeam = new Team(round1Teams.pop(), false);
        mutatedArray.push(round1Match.topTeam);
        mutatedArray.push(round1Match.bottomTeam);
      } 
      if (!round2Match.bottomTeam) {
        const round1Match = rounds[1][(i * 2) + 1];
        round1Match.topTeam = new Team(round1Teams.pop(), true);
        round1Match.bottomTeam = new Team(round1Teams.pop(), false);
        mutatedArray.push(round1Match.topTeam);
        mutatedArray.push(round1Match.bottomTeam);
      }
    }
    for (const match of rounds[1]) {
      if (!match.topTeam) {
        match.isVisible = false;
      }
    }
    console.log('mutatedArray: ', mutatedArray);
    return rounds;
}

const teamObjectsArray = [];

const App = () => {

  const [numTeams, changeNumTeams] = useState(0); 
  const [teamArray, changeTeamArray] = useState([]);
  const [rounds, setRounds] = useState({});
  const [matchIndex, setMatchIndex] = useState(0);
  const [roundId, setRoundId] = useState(1)
  const [currentMatch, setCurrentMatch] = useState({});
  const [teamSetupComplete, setTeamSetupComplete] = useState(false);
 

  
  useEffect(() => {
    
    console.log('useEffect Variables: ', 'rounds: ', rounds, 'roundId: ', roundId, 'matchIndex: ', matchIndex)
    if (rounds[roundId]) {
      if (rounds[roundId][matchIndex]) {
        if (!rounds[roundId][matchIndex].topTeam) {
        setMatchIndex(matchIndex + 1);
        }
      } else {
        setRoundId(roundId + 1);
        setMatchIndex(0);
      }
    }
  }, [rounds, roundId, matchIndex]);

  useEffect(() => {
    if (rounds[roundId]) {
      console.log('Match index before change: ', matchIndex)
      if (rounds[roundId][matchIndex + 1]) {
          console.log('match index after increment (should exist): ', matchIndex + 1);
          setMatchIndex(matchIndex + 1);
        } else {
          setMatchIndex(0);
          setRoundId(roundId + 1);
          console.log('Match index after restting: ', 0)
        }
    }
  }, [currentMatch]);

  const startMatch = () => {
    rounds[roundId][matchIndex].activateMatch();
    setCurrentMatch(rounds[roundId][matchIndex]);
  }
  
  const setNumTeams = e => {
    changeNumTeams(e.target.value)
  }

  const handleTeamNameChange = (index, text) => {
    const newTeamArray = teamArray.slice();
    newTeamArray[index] = text;
    changeTeamArray(newTeamArray);
  }

  const createBracket = () => {
    setRounds(initializeRounds(teamArray, teamObjectsArray));
    setTeamSetupComplete(true);
  }

  const updateNextRound = (roundId, matchIndex, team) => {
    setTimeout(() => {
      if (rounds[roundId + 1]) {
          const newRounds = Object.assign({}, rounds);
          // newRounds[roundId + 1][Math.floor(matchIndex / 2)][matchIndex % 2 ? 1 : 0] = teamName;
          const match = newRounds[roundId + 1][Math.floor(matchIndex / 2)];
          if (matchIndex % 2) {
            team.isTop = false;
            team.className = 'bottom-team';
            match.bottomTeam = team;
          } else {
            team.isTop = true;
            team.className = 'top-team';
            match.topTeam = team;
          }
          console.log('next round Match: ', match, ', matchINdex: ', matchIndex)
          setRounds(newRounds);
      }
    }, 3000)
  }

console.log('Teamobjects array: ', teamObjectsArray)
  return (
    <Fragment>
      <TeamSetup 
      startMatch={startMatch}
      numTeams={numTeams} 
      setNumTeams={setNumTeams} 
      handleTeamNameChange={handleTeamNameChange} 
      createBracket={createBracket} 
      round={roundId}
      totalRounds={Object.keys(rounds).length}
      setupComplete={teamSetupComplete}
      teamArray={teamObjectsArray}
      />
      <Bracket rounds={rounds} updateNextRound={updateNextRound} currentMatch={currentMatch}/>
    </Fragment>
  )
}

export default App;
