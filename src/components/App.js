import React, { useState } from 'react';
import '../App.css';
import NumTeams from './NumTeams';
import TeamSetup from './TeamSetup'
import Bracket from './Bracket'
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import MatchModal from './MatchModal';

const App = () => {

  const [numTeams, changeNumTeams] = useState(0); 
  const [teamNames, setTeamNames] = useState([]);
  const [teamArray, changeTeamArray] = useState([]);

  const setNumTeams = (e) => {
    changeNumTeams(e.target.value)
  }

  const handleTeamNameChange = (index, text) => {
    const newTeamArray = teamArray.slice();
    newTeamArray[index] = text;
    changeTeamArray(newTeamArray);
  }

  return (
    // <Router>
    //   <Route path='/' exact render={(props) => <NumTeams setNumTeams={setNumTeams} />} />
    //   <Route path='/teams' render={(props) => <TeamSetup numTeams={numTeams} handleTeamNameChange={handleTeamNameChange} />} />
    //   <Route path='/bracket' render={(props) => <Bracket teamArray={teamArray} />} />
    // </Router>
    <MatchModal />
  )
}

export default App;
