import React from 'react';
import { Button } from '@material-ui/core';
import NumTeams from './NumTeams';
import TeamSetupForm from './TeamSetupForm';

const TeamSetup = ({ numTeams, setNumTeams, handleTeamNameChange, createBracket }) => {
  
  return (
    <div id="setupPage">
      <div id="leftPanelTopInfoDiv">
        <NumTeams setNumTeams={setNumTeams} />
      </div>
      <div id="teamInfoDiv">
        {new Array(numTeams).fill(1).map((undef, i) => <TeamSetupForm key={i} id={`${i}form`} handleTeamNameChange={handleTeamNameChange} />)}
      </div>
      <div id="leftPanelBottomButtonDiv">
        {numTeams ? (
          <Button className="leftPanelBottomButton" variant='contained' color='primary' onClick={createBracket}>Create Bracket</Button>
        ) : null}
      </div>
    </div>
  )
}

export default TeamSetup;