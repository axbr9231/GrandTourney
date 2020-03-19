import React from 'react';
import { Button } from '@material-ui/core';
import NumTeams from './NumTeams';
import TeamSetupForm from './TeamSetupForm';

const TeamSetup = ({ numTeams, setNumTeams, handleTeamNameChange, createBracket, round, totalRounds, setupComplete, startMatch }) => {
  
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

  return (
    <div id="setupPage">
      <div id="leftPanelTopInfoDiv">
        {setupComplete ? <h3>Round {round} / {totalRounds}</h3> : <NumTeams setNumTeams={setNumTeams} />}
      </div>
      <div id="teamInfoDiv">
        {new Array(numTeams).fill(1).map((undef, i) => <TeamSetupForm key={i} id={`${i}form`} handleTeamNameChange={handleTeamNameChange} />)}
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