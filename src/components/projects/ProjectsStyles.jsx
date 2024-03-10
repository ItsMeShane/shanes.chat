import styled from 'styled-components';
export const ProjectsWrapper = styled.div`
   overflow: hidden;
`;

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
   width: fit-content;
   margin: 20px;
   border-radius: 15px;
   background: #e6e6e6e6;
   opacity: 0;
   visibility: hidden;
   user-select: none;
`;
export const Title = styled.h3`
   margin: 10px;
`;
export const Slider = styled.div`
   position: absolute;
   inset: 50px 30px 200px 30px;
   border-radius: 20px;
`;

export const Slides = styled.div`
   position: absolute;
   width: 75px;
   height: 100px;
   top: initial;
   transform: translateY(-60%); /* give transition effect */
   bottom: -185px;
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
      cursor: pointer;
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
         visibility: visible;
         user-select: auto;
      }
   }
   &:nth-child(4) {
      cursor: pointer;
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
   font-size: 2.5rem;
   color: #e6e6e6;

   &:active {
      opacity: 0.5;
   }
`;
