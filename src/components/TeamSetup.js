import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import NumTeams from './NumTeams';
import TeamSetupForm from './TeamSetupForm';
import TeamCard from './TeamCard';

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 20vw;
  border-right: 2px solid #0be9e9;
  box-shadow: 0px 0px 15px 5px #0be9e9;
  margin-right: 20px;
`;

const TopInfoContainer = styled.div`
  height: 8vh;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TeamInfoContainer = styled.div`
  height: 84vh;
  overflow-y: auto;
  width: 95%;
`;

const BottomButtonContainer = styled.div`
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
        <Button 
        variant='contained' 
        color='primary' 
        onClick={createBracket}>Create Bracket</Button>
      )
    } 
  }

  const teamSetupForms = new Array(numTeams).fill(1).map((undef, i) => <TeamSetupForm key={i} id={`${i}form`} handleTeamNameChange={handleTeamNameChange} />);
  const teamCards = teamArray.map((team, i) => <TeamCard key={i} team={team} />);

  return (
    <MainContainer>
      <TopInfoContainer>
        {setupComplete ? <h3>Round {round} / {totalRounds}</h3> : <NumTeams setNumTeams={setNumTeams} />}
      </TopInfoContainer>
      <TeamInfoContainer>
        {setupComplete ? teamCards : teamSetupForms}
      </TeamInfoContainer>
      <BottomButtonContainer>
        {infoPanel()}
        {/* {numTeams ? (!setupComplete ? (
          <Button className="leftPanelBottomButton" variant='contained' color='primary' onClick={createBracket}>Create Bracket</Button>
        ) : <Button variant='contained' color='primary'>Start Match</Button>) : null} */}
      </BottomButtonContainer>
    </MainContainer>
  )
}

export default TeamSetup;