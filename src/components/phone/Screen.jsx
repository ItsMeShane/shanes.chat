import React from 'react';
import { ScreenContainer } from './ScreenStyles';
import Page from './Page';
import Navigation from '../navigation/Navigation';

const Screen = () => {

   return (
      <ScreenContainer>
         <Navigation />
         <Page />
      </ScreenContainer>
   );
};

export default Screen;
