/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import initializeRounds from '../helpers';
import TeamSetup from './TeamSetup';
import Bracket from './Bracket';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0be9e9'
    },
    secondary: {
      main: '#0be9e9'
    },
    error: {
      main: '#dae90b'
    },
    background: {
      paper: '#202a3f',
    },
    text: {
      primary: '#0be9e9',
      secondary: '#0be9e9'
    },
    action: {
      active: '#0be9e9'
    },
  },
  overrides: {
    MuiInput: {
      underline: {
        '&:before': {
          borderBottom: '1px solid #0be9e9'
        }
      }
    },
    MuiCard: {
      root: {
        overflow: 'visible'
      }
    }
  }
});

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
      if (rounds[roundId][matchIndex + 1]) {
        if (!rounds[roundId][matchIndex].topTeam) {
          setMatchIndex(matchIndex + 1);
        }
      } else if (rounds[roundId + 1]) {
        setRoundId(roundId + 1);
        setMatchIndex(0);
      }
    }
  }, [rounds, matchIndex]);

  //   useEffect(() => {
    
  //   console.log('useEffect(matchIndex) Variables: ', 'rounds: ', rounds, 'roundId: ', roundId, 'matchIndex: ', matchIndex)
  //   if (rounds[roundId]) {
  //     if (rounds[roundId][matchIndex + 1]) {
  //       if (!rounds[roundId][matchIndex].topTeam) {
  //         setMatchIndex(matchIndex + 1);
  //       }
  //     } else if (rounds[roundId + 1]) {
  //       setRoundId(roundId + 1);
  //       setMatchIndex(0);
  //     }
  //   }
  // }, [matchIndex]);

  useEffect(() => {
    if (rounds[roundId]) {
      if (rounds[roundId][matchIndex + 1]) {
          setMatchIndex(matchIndex + 1);
        } else {
          setMatchIndex(0);
          setRoundId(roundId + 1);
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
          if (team.isTop) {
            rounds[roundId][matchIndex].topTeam = undefined;
          } else {
            rounds[roundId][matchIndex].bottomTeam = undefined;
          }
          if (matchIndex % 2) {
            team.isTop = false;
            team.className = 'bottom-team';
            team.active = false;
            team.won = false;
            match.bottomTeam = team;
          } else {
            team.isTop = true;
            team.className = 'top-team';
            team.active = false;
            team.won = false;
            match.topTeam = team;
          }
          setRounds(newRounds);
      }
    }, 3000)
  }

  return (
    <ThemeProvider theme={theme}>
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
      <div id='bracket' style={{width: '70vw', overflow: 'auto', scrollBehavior: 'smooth'}}>
        <Bracket rounds={rounds} updateNextRound={updateNextRound} currentMatch={currentMatch}/>
      </div>
    </ThemeProvider>
  )
}

export default App;
