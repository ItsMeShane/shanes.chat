import React, { useState, useEffect } from 'react';
import Navigation from '../navigation/Navigation';
import styled from 'styled-components';
import Chat from '../chat/Chat';
import Projects from '../projects/Projects';

const Screen = () => {
   const [activePage, setActivePage] = useState(() => {
      // Load active page from local storage or default to 'Chat'
      const savedPage = localStorage.getItem('activePage');
      return savedPage || 'Chat';
   });

   useEffect(() => {
      // Save active page to local storage when it changes
      localStorage.setItem('activePage', activePage);
   }, [activePage]);

   const handlePageChange = (pageName) => {
      setActivePage(pageName);
   };

   return (
      <ScreenContainer>
         <Navigation onPageChange={handlePageChange} />
         <PageContainer>
            {activePage === 'Chat' && <Chat />}
            {activePage === 'Projects' && <Projects />}
         </PageContainer>
      </ScreenContainer>
   );
};

export default Screen;

const ScreenContainer = styled.div`
   width: 95%;
   height: 97.5%;
   border-radius: 40px;
   z-index: 1;

   display: flex;
   flex-direction: column;
`;

export const PageContainer = styled.div`
   width: 100%;
   flex: 1;
   > * {
      width: 100%;
      height: 100%;
      max-height: 680px;
      overflow: scroll;
   }
`;
