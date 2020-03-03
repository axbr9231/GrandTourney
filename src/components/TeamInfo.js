import React from 'react';

const TeamInfo = ({ teamName }) => {
  return (
    <div>
      {teamName.split(' ').map(name => name[0].toUpperCase() + name.substring(1)).join(' ')}
    </div>
  )
}

export default TeamInfo;