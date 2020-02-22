import React, { useState } from 'react';
import '../App.css';
import SetNumTeams from './SetNumTeams';
import TeamSetup from './TeamSetup'
import Bracket from './Bracket'
import { BrowserRouter as Router, Route } from 'react-router-dom'; 

const App = () => {

  const [numTeams, setNumTeams] = useState(0); 
  const [teamNames, setTeamNames] = useState([]);
  const [teamArray, addTeam] = useState([]);

  const saveImage = (team) => {
    setImages([...teamArray, team]); 
  }

  const setTeams = (e) => {
    e.preventDefault();
    // let input = document.getElementById('select');
    // console.log('e: ', e)
    setNumTeams(e.target.value)
  }

  const addTeam = (name) => {
    teamNames.push(name);
    setTeamNames(teamNames);
  }

  return (
    <Router>
      <Route path='/' exact render={(props) => <SetNumTeams setTeams={setTeams} />} />
      <Route path='/teams' render={(props) => <TeamSetup numTeams={numTeams} />} />
      <Route path='/bracket' render={(props) => <Bracket numTeams={numTeams} />} />
    </Router>
  )
}

export default App;
