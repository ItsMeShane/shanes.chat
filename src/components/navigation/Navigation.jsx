import React, { useState, useEffect } from 'react';
import {
   Icon,
   Indicator,
   Link,
   ListContainer,
   ListItem,
   NavigationContainer,
} from './NavigationStyles';

const Navigation = ({ onPageChange }) => {
   const [activeLink, setActiveLink] = useState(() => {
      // load active link from local storage or default to 2 (hat)
      const savedActiveLink = localStorage.getItem('activeLink');
      return savedActiveLink ? parseInt(savedActiveLink) : 2;
   });

   useEffect(() => {
      // save active link to local storage when it changes
      localStorage.setItem('activeLink', activeLink);
   }, [activeLink]);

   const handleLinkClick = (index) => {
      setActiveLink(index);
      const pages = ['About', 'Projects', 'Chat', 'Work', 'Quiz'];
      onPageChange(pages[index]);
   };

   return (
      <NavigationContainer>
         <ListContainer>
            <ListItem style={{ '--clr': '#267c7a' }}>
               <Link
                  className={activeLink === 0 ? 'active' : ''}
                  onClick={() => handleLinkClick(0)}
                  href='#about'
               >
                  <Icon>
                     <ion-icon name='planet-outline'></ion-icon>
                  </Icon>
               </Link>
            </ListItem>
            <ListItem style={{ '--clr': '#377c26' }}>
               <Link
                  className={activeLink === 1 ? 'active' : ''}
                  onClick={() => handleLinkClick(1)}
                  href='#projects'
               >
                  <Icon>
                     <ion-icon name='code-outline'></ion-icon>
                  </Icon>
               </Link>
            </ListItem>
            <ListItem style={{ '--clr': '#26547C' }}>
               <Link
                  className={activeLink === 2 ? 'active' : ''}
                  onClick={() => handleLinkClick(2)}
                  href='#chat'
               >
                  <Icon>
                     <ion-icon name='chatbox-ellipses-outline'></ion-icon>{' '}
                  </Icon>
               </Link>
            </ListItem>
            <ListItem style={{ '--clr': '#7c267a' }}>
               <Link
                  className={activeLink === 3 ? 'active' : ''}
                  onClick={() => handleLinkClick(3)}
                  href='#work'
               >
                  <Icon>
                     <ion-icon name='layers-outline'></ion-icon>
                  </Icon>
               </Link>
            </ListItem>
            <ListItem style={{ '--clr': '#2f267c' }}>
               <Link
                  className={activeLink === 4 ? 'active' : ''}
                  onClick={() => handleLinkClick(4)}
                  href='#quiz'
               >
                  <Icon>
                     <ion-icon name='people-outline'></ion-icon>
                  </Icon>
               </Link>
            </ListItem>
            <Indicator $activeLink={activeLink} />
         </ListContainer>
      </NavigationContainer>
   );
};

export default Navigation;
