import React from 'react';
import { Button } from '@material-ui/core';
import NumTeams from './NumTeams';
import TeamSetupForm from './TeamSetupForm';
import TeamCard from './TeamCard';

const TeamSetup = ({ numTeams, setNumTeams, handleTeamNameChange, createBracket, round, totalRounds, setupComplete, startMatch, teamArray }) => {
  
  const infoPanel = () => {
    if (numTeams) {
      if (setupComplete) {
        return (
          <Button 
          variant='contained' 
          color='primary'
          onClick={startMatch}
          >Start Match</Button>
        )
      }
      return (
        <Button className="leftPanelBottomButton" 
        variant='contained' 
        color='primary' 
        onClick={createBracket}>Create Bracket</Button>
      )
    } 
  }

  const teamSetupForms = new Array(numTeams).fill(1).map((undef, i) => <TeamSetupForm key={i} id={`${i}form`} handleTeamNameChange={handleTeamNameChange} />);
  const teamCards = teamArray.map((team, i) => <TeamCard key={i} team={team} />);

  return (
    <div id="setupPage">
      <div id="leftPanelTopInfoDiv">
        {setupComplete ? <h3>Round {round} / {totalRounds}</h3> : <NumTeams setNumTeams={setNumTeams} />}
      </div>
      <div id="teamInfoDiv">
        {setupComplete ? teamCards : teamSetupForms}
      </div>
      <div id="leftPanelBottomButtonDiv">
        {infoPanel()}
        {/* {numTeams ? (!setupComplete ? (
          <Button className="leftPanelBottomButton" variant='contained' color='primary' onClick={createBracket}>Create Bracket</Button>
        ) : <Button variant='contained' color='primary'>Start Match</Button>) : null} */}
      </div>
    </div>
  )
}

export default TeamSetup;