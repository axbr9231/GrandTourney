import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const CardContainer = styled(animated(Card))`
  margin: 5px;
`;

const ContentContainer = animated(CardContent);

const TeamCard = ({ team }) => {

  const props = useSpring({
    backgroundColor: team.lost ? 'lightGray' : 'white'
  })

  const props2 = useSpring({
    textDecoration: team.lost ? 'line-through red' : 'none'
  })

  console.log('team: ', team);

  return (
    <CardContainer style={props}>
      <ContentContainer style={props2}>
        {team.name}
      </ContentContainer>
    </CardContainer>
  )
}

export default TeamCard;