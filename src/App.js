import React, {useState} from 'react';
import { Slider } from '@material-ui/core';
import './App.css';


const App = (props) => {

  const [numTeams, setNumTeams] = useState(0); 
  const [teamNames, setTeamNames] = useState([]);
  const [page, setPage] = useState(0)

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
      <Slider aria-label='Number of Teams' defaultValue={4} max={props.maxTeams} min={2} />
    </div>
  )
}

export default App;
