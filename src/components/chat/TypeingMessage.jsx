import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const typingAnimation = keyframes`
  0%, 100% {
    opacity: 0.1;
  }
  50% {
    opacity: 1;
  }
`;

const TypeingMessageWrapper = styled.div`
   background-color: #e0e0e0;
   margin: 5px auto 5px 25px;
   border-radius: 10px 10px 10px 0px;
   width: 50px;
   height: 30px;
   display: flex;
   align-items: center;
`;

const Dot = styled.div`
   display: inline-block;
   width: 10px;
   height: 10px;
   border-radius: 50%;
   margin-left: 5px;
   background-color: #424242;
   animation: ${typingAnimation} 1s infinite;
   animation-delay: ${(props) => props.$delay};
`;

const TypeingMessage = React.forwardRef(() => {
   const [dots, setDots] = useState(['', '', '']);

   useEffect(() => {
      setDots((prevDots) => {
         return [prevDots[1], prevDots[2], prevDots[0]];
      });
   }, []);

   return (
      <TypeingMessageWrapper>
         {dots.map((dot, $index) => (
            <Dot key={$index} $delay={`${$index * 0.33}s`} />
         ))}
      </TypeingMessageWrapper>
   );
});

export default TypeingMessage;
