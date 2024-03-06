import styled from 'styled-components';

export const ProjectsContainer = styled.div`
   position: relative;
   width: 100%;
   height: 100%;
   overflow: hidden;
   border-radius: 0px 0px 40px 40px;
   background-color: #e6e6e6;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const Content = styled.div`
   position: relative;

   transition: 0.25s;
   transition-delay: 0s;
   transform: translateY(40px);
   opacity: 0;
   width: fit-content;
   margin: 20px;
   border-radius: 15px;
   background: #e6e6e6e6;
`;
export const Title = styled.h3`
   margin: 10px;
   font-family:'Poppins';
`
export const Slider = styled.div`
   position: absolute;
   inset: 50px 30px 200px 30px;
   border-radius: 20px;
`;

export const Slides = styled.div`
   position: absolute;
   transform: translateY(-50%);
   width: 75px;
   height: 100px;
   top: initial;
   bottom: -175px;
   left: 400px;
   background: var(--img);
   background-size: cover;
   background-position: center;
   transition: 0.5s;
   border-radius: 20px;
   box-shadow: 0 25px 50px #0006;
   display: flex;
   justify-content: flex-start;
   align-items: flex-end;
   opacity: 0;

   &:nth-child(1) {
      left: -125px;
   }

   &:nth-child(2) {
      left: 0;
      opacity: 1;
   }
   &:nth-child(3) {
      position: absolute;
      top: initial;
      bottom: 0px;
      left: 0;
      width: 100%;
      height: 100%;
      transform: translateY(0);
      box-shadow: 0 25px 50px #0000;
      opacity: 1;
      z-index: 1;

      ${Content} {
         opacity: 1;
         transform: translateY(0px);
         transition-delay: 0.5s;
      }
   }
   &:nth-child(4) {
      opacity: 1;
      left: 245px;
   }
   
`;

export const Buttons = styled.div`
   position: absolute;
   bottom: 75px;
   display: flex;
   gap: 20px;
`;

export const Button = styled.span`
   position: relative;
   width: 50px;
   height: 50px;
   background: #377c26;
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 50%;

   &:active {
      opacity: 0.5;
   }

   &::before {
      content: '';
      position: absolute;
      width: 15px;
      height: 15px;
      border-top: 4px solid #fff;
      border-left: 4px solid #fff;
      transform: rotate(315deg) translate(2px, 2px);
   }

   &:nth-child(2) {
      transform: rotate(180deg) translate(2px, 2px);
   }
`;
