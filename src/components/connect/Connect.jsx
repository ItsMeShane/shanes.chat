import React from 'react';
import {
   ConnectContainer,
   Banner,
   Name,
   Segment,
   SegmentLinks,
   SegmentTitle,
} from './ConnectStyles';

const Connect = () => {
   const copyText = (text) => {
      const c = async () => {
         try {
            await navigator.clipboard.writeText(text);
         } catch (error) {
            console.error('Failed to copy text to clipboard:', error);
         }
      };
      return c;
   };

   return (
      <ConnectContainer>
         <Banner>
            <Name>Shane Koester</Name>
         </Banner>
         <Segment>
            <SegmentTitle>Email</SegmentTitle>
            <SegmentLinks>
               <div onClick={copyText('shane.koester.contact@gmail.com')}>
                  <ion-icon name='copy-outline'></ion-icon>
               </div>
               <a href="mailto:shane.koester.contact@gmail.com">
                  <ion-icon name='open-outline'></ion-icon>
               </a>
            </SegmentLinks>
         </Segment>
         <Segment>
            <SegmentTitle>Mobile</SegmentTitle>
            <SegmentLinks>
               <span>(902) 754-1407</span>
               <div onClick={copyText('(902) 754-1407')}>
                  <ion-icon name='copy-outline'></ion-icon>
               </div>
            </SegmentLinks>
         </Segment>
         <Segment>
            <SegmentTitle>GitHub</SegmentTitle>
            <SegmentLinks>
               <div onClick={copyText('www.github.com/ItsMeShane')}>
                  <ion-icon name='copy-outline'></ion-icon>
               </div>
               <a href='https://www.github.com/ItsMeShane' target='_blank' rel="noopener noreferrer">
                  <ion-icon name='open-outline'></ion-icon>
               </a>
            </SegmentLinks>
         </Segment>
         <Segment>
            <SegmentTitle>Linkedin</SegmentTitle>
            <SegmentLinks>
               <div onClick={copyText('www.linkedin.com/in/shane-field/')}>
                  <ion-icon name='copy-outline'></ion-icon>
               </div>
               <a href='https://www.linkedin.com/in/shane-field/' target='_blank' rel="noopener noreferrer">
                  <ion-icon name='open-outline'></ion-icon>
               </a>
            </SegmentLinks>
         </Segment>
      </ConnectContainer>
   );
};

export default Connect;
