import React, { useState, Fragment } from 'react';
import _ from 'lodash';
import '../App.css';
import TeamSetup from './TeamSetup';
import Bracket from './Bracket';

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

const initializeRounds = array => {
    const rounds = {};
    const teams = _.shuffle(array);
    const numRounds = Math.ceil(Math.log2(teams.length));
    rounds[2] = new Array(getRound2MatchCount(teams.length)).fill(1).map(() => [undefined, undefined]);
    rounds[1] = new Array(rounds[2].length * 2).fill(1).map(() => [undefined, undefined]);
    for (let i = 3; i <= numRounds; i++) {
        rounds[i] = new Array(rounds[i - 1].length / 2).fill(1).map(() => [undefined, undefined]);
    };
    const round2TeamCount = getRound2TeamCount(teams.length);
    const round2Teams = teams.splice(0, round2TeamCount);
    const round1Teams = teams;
    const round2Matches = rounds[2].slice();
    let singleTeamByeCount = rounds[1].length - round2TeamCount;
    while (round2Teams.length) {
        const randomMatchIndex = Math.floor(Math.random() * round2Matches.length);
        if (singleTeamByeCount) {
            round2Matches[randomMatchIndex][Math.floor(Math.random() * 2)] = round2Teams.pop();
            singleTeamByeCount--;
        } else {
            round2Matches[randomMatchIndex][0] = round2Teams.pop();
            round2Matches[randomMatchIndex][1] = round2Teams.pop();
        }
        round2Matches.splice(randomMatchIndex, 1);
    }
    const round2MatchesFlat = rounds[2].flat();
    for (let i = 0; i < round2MatchesFlat.length; i++) {
        if (!round2MatchesFlat[i]) {
            rounds[1][i][0] = round1Teams.pop();
            rounds[1][i][1] = round1Teams.pop();
        }
    }
    return rounds;
}

const App = () => {

  const [numTeams, changeNumTeams] = useState(0); 
  const [teamArray, changeTeamArray] = useState([]);
  const [rounds, setRounds] = useState({});

  const setNumTeams = e => {
    changeNumTeams(e.target.value)
  }

  const handleTeamNameChange = (index, text) => {
    const newTeamArray = teamArray.slice();
    newTeamArray[index] = text;
    changeTeamArray(newTeamArray);
  }

  const createBracket = () => {
    setRounds(initializeRounds(teamArray));
  }

  const updateNextRound = (roundId, matchIndex, teamName) => {
        if (rounds[roundId + 1]) {
            const newRounds = Object.assign({}, rounds);
            newRounds[roundId + 1][Math.floor(matchIndex / 2)][matchIndex % 2 ? 1 : 0] = teamName;
            setRounds(newRounds);
        }
    }

  return (
    <Fragment>
      <TeamSetup numTeams={numTeams} setNumTeams={setNumTeams} handleTeamNameChange={handleTeamNameChange} createBracket={createBracket} />
      <Bracket rounds={rounds} updateNextRound={updateNextRound} />
    </Fragment>
  )
}

export default App;
