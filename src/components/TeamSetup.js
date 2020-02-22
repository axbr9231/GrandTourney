import React from 'react';
import { Link } from 'react-router-dom';
import TeamSetupForm from './TeamSetupForm';

const TeamSetup = ({ numTeams }) => {
  return (
    <div>
      {new Array(numTeams).fill(1).map((undef, i) => <TeamSetupForm id={`form${i}`}/>)}
      <Link to='/bracket'>
        <h1>Create Bracket</h1>
      </Link>
    </div>
  )
}

export default TeamSetup;