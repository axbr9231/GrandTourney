import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Bracket from './Bracket.js'

const App = () => {

  const [numTeams, setNumTeams] = useState(0); 
  const [teamNames, setTeamNames] = useState([]);
  const [page, setPage] = useState(0);

  const handleNumTeams = () => {
    setNumTeams(numTeams + 1)
  }

  const addTeam = (name) => {
    teamNames.push(name);
    setTeamNames(teamNames);
  }

  return (
    <div>
      {/* <p onClick={() => handleNumTeams()}>{numTeams}</p> */}
      <Bracket />
    </div>
  )
}

export default App;
