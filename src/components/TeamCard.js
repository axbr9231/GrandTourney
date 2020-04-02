import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const CardContainer = styled(Card)`
  margin: 15px 20px;
`;

const TeamCard = ({ team }) => {

  console.log('team: ', team);

  return (
    <CardContainer>
      <CardContent style={{borderRadius: '8px', boxShadow: '0px 0px 15px 8px #0be9e9', textDecoration: team.lost ? 'line-through red' : 'none'}}>
        {team.name}
      </CardContent>
    </CardContainer>
  )
}

export default TeamCard;