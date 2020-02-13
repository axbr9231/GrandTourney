import React, {useState} from 'react';
import '../App.css';
import Bracket from './Bracket.js'
import SetNumTeams from './SetNumTeams';

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

  let game = page === 0 ? <SetNumTeams setTeams={setTeams}/> : <Bracket numTeams={numTeams}/>;

  return (
    <div>
      {game}
    </div>
  )
}

export default App;
