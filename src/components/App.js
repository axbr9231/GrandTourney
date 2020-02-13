import React, { useState } from 'react';
import '../App.css';
import SetNumTeams from './SetNumTeams';
import TeamSetup from './TeamSetup'
import Bracket from './Bracket'
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {

  const [numTeams, setNumTeams] = useState(0); 
  const [teamNames, setTeamNames] = useState([]);
  const [page, setPage] = useState(0);

  const handlePageForward = () => {
    setPage(page + 1)
  }

  const handlePageBackward = () => {
    setPage(page - 1);
  }

  const setTeams = (e) => {
    e.preventDefault();
    // let input = document.getElementById('select');
    // console.log('e: ', e)
    setNumTeams(e.target.value)
    handlePageForward();
  }

  const addTeam = (name) => {
    teamNames.push(name);
    setTeamNames(teamNames);
  }

  // let game = page === 0 ? <SetNumTeams setTeams={setTeams}/> : <Bracket numTeams={numTeams}/>;

  return (
    <Router>
      <Route path='/' exact render={(props) => <SetNumTeams setTeams={setTeams} />} />
      <Route path='/teams' component={TeamSetup} />
      <Route path='/bracket' render={(props) => <Bracket numTeams={numTeams} />} />
      {/* {game} */}
    </Router>
  )
}

export default App;
