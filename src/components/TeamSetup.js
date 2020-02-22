import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core'
import TeamSetupForm from './TeamSetupForm';

const TeamSetup = ({ numTeams, handleTeamNameChange }) => {

  const sendTeamInfo = (e) => {
    const inputs = document.querySelectorAll('input');
    const teams = [];
    for (const input of inputs) {
      teams.push(input.value);
    }
    console.log('teams: ', teams);
  }
  
  return (
    <div>
      {new Array(numTeams).fill(1).map((undef, i) => <TeamSetupForm key={i} id={`${i}form`} handleTeamNameChange={handleTeamNameChange}/>)}
      <Link to='/bracket'>
        <Button variant='contained' color='primary' onClick={sendTeamInfo}>Create Bracket</Button>
      </Link>
    </div>
  )
}

export default TeamSetup;