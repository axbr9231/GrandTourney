import React from 'react';
import { Button } from '@material-ui/core';
import NumTeams from './NumTeams';
import TeamSetupForm from './TeamSetupForm';

const TeamSetup = ({ numTeams, setNumTeams, handleTeamNameChange, createBracket }) => {
  
  return (
    <div id="setupPage">
      <NumTeams setNumTeams={setNumTeams} />
      {new Array(numTeams).fill(1).map((undef, i) => <TeamSetupForm key={i} id={`${i}form`} handleTeamNameChange={handleTeamNameChange} />)}
      {numTeams ? (
      <Button variant='contained' color='primary' onClick={createBracket}>Create Bracket</Button>
      ) : null}
    </div>
  )
}

export default TeamSetup;