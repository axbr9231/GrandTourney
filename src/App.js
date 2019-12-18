import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


const App = () => {

  const [numTeams, setNumTeams] = useState(0); 
  const [teamNames, setTeamNames] = useState([]);

  const handleNumTeams = () => {
    setNumTeams(numTeams + 1)
  }

  const addTeam = (name) => {
    teamNames.push(name);
    setTeamNames(teamNames);
  }

  return (
    <div>
      <p onClick={() => handleNumTeams()}>{numTeams}</p>

    </div>
  )
}

export default App;
