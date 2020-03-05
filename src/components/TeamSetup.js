import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import NumTeams from './NumTeams';
import TeamSetupForm from './TeamSetupForm';

const TeamSetup = ({ numTeams, handleTeamNameChange, setNumTeams }) => {

  const sendTeamInfo = (e) => {
    const inputs = document.querySelectorAll('input');
    const teams = [];
    for (const input of inputs) {
      teams.push(input.value);
    }
  }
  
  return (
    <div id="setupPage">
      <NumTeams setNumTeams={setNumTeams} />
      {new Array(numTeams).fill(1).map((undef, i) => <TeamSetupForm key={i} id={`${i}form`} handleTeamNameChange={handleTeamNameChange} sendTeamInfo={sendTeamInfo} />)}
      {numTeams ? (
      <Link to='/bracket'>
        <Button variant='contained' color='primary' onClick={sendTeamInfo}>Create Bracket</Button>
      </Link>
      ) : null}
    </div>
  )
}

export default TeamSetup;