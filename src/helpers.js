import _ from 'lodash';
import { Team, Match } from './classes';

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
    return rounds;
}

export default initializeRounds;
