import React from 'react';
import styled from 'styled-components';
import { IconFacebook, IconTwitter } from './SocialIcons';

const Container = styled.div`
  display: grid;
  grid-column: 1 / 3;
  grid-gap: 30px;
  grid-template: 1fr / 1fr 1fr;

  @media (max-width: 480px) {
    grid-column: span 1;
  }
`;

const ShareBoxes = props => {
  return (
    <Container>
      <IconFacebook color="#ffffff" fill="#3b5998" height="24px" text="Share" width="24px" />
      <IconTwitter
        color="#ffffff"
        fill="#00b6f1"
        height="24px"
        message="See how much your paycheck will change under the Tax Cuts and Jobs Act"
        hashtags={['TCJA']}
        text="Tweet"
        width="24px"
      />
    </Container>
  );
};

export default ShareBoxes;
