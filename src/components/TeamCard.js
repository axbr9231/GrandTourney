import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const CardContainer = styled(Card)`
  margin: 15px 20px;
`;

const ContentContainer = animated(CardContent);

const TeamCard = ({ team }) => {

  const props = useSpring({
    config: { tension: 40 },
    borderRadius: '8px',
    boxShadow: team.lost ? '0px 0px 15px 8px red'  : '0px 0px 15px 8px #0be9e9'
  })

  return (
    <CardContainer>
      <ContentContainer style={props}>
        {team.name}
      </ContentContainer>
    </CardContainer>
  )
}

export default TeamCard;