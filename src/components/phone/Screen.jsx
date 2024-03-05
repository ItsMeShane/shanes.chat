import React from 'react';
import Page from './Page';
import Navigation from '../navigation/Navigation';
import styled from 'styled-components';

export const ScreenContainer = styled.div`
   width: 95%;
   height: 97.5%;
   border-radius: 40px;
   z-index: 1;

   display: flex;
   flex-direction: column;
`;


const Screen = () => {

   return (
      <ScreenContainer>
         <Navigation />
         <Page />
      </ScreenContainer>
   );
};

export default Screen;
