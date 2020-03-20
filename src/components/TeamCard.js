import React from 'react';
import { Card, CardContent } from '@material-ui/core';

const TeamCard = ({ team }) => {



  return (
    <Card className="teamCard" style={team.lost ? {backgroundColor: 'lightGray'} : null}>
      <CardContent style={team.lost ? {'textDecoration': 'line-through', 'textDecorationColor': 'red'} : null}>
        {team.name}
      </CardContent>
    </Card>
  )
}

export default TeamCard;