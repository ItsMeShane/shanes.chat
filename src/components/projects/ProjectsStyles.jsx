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

export const Title = styled.h3`
   position: absolute;
   margin: 20px;
   cursor: auto;
   transition: 0.25s;
   transform: translateY(40px);
   opacity: 0;
   visibility: hidden;
   user-select: none;

   border-radius: 15px;
   padding: 10px;
   background: #e6e6e6e6;
   width: fit-content;
   align-self: flex-end;
`;
export const Description = styled.span`
   margin: 20px;
   padding: 10px;
   cursor: auto;
   position: absolute;
   transition: 0.25s;

   opacity: 0;
   visibility: hidden;
   user-select: none;

   border-radius: 15px;
   background: #e6e6e6e6;
   align-self: flex-start;

   right: 0px;
   width: 200px;
   height: fit-content;
`;
export const Links = styled.div`
   margin: 20px;
   padding: 10px;
   cursor: auto;
   position: absolute;
   transition: 0.25s;

   opacity: 0;
   visibility: hidden;
   user-select: none;

   border-radius: 15px;
   background: #e6e6e6e6;
   align-self: flex-start;

   left: 0px;
   width: fit-content;
   font-size: 1.5rem;
   max-height: 50%;

   display: flex;
   flex-direction: column;
   color: #000;

   & a, a:hover, a:active {
      color: #000f71;
   }
`;

export const Image = styled.img`
   cursor: pointer;
   width:100%;
   height:100%;
   border-radius: 20px;
   user-select:none;
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
   /* bounce effect */
   transform: translateY(-60%); 
   bottom: -185px;

   left: 400px;
   transition: 0.5s;
   box-shadow: 0 25px 50px #0006;
   opacity: 0;
   border-radius: 20px;
   display: flex;

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

      ${Title} {
         opacity: 1;
         transform: translateY(0px);
         transition-delay:0.5s;
         visibility: visible;
         user-select: auto;
      }
      ${Links}, ${Description} {
         transition: 0.25s;
         transition-delay:0.1s;
         opacity: 0;
         visibility: hidden;
         user-select: none;
      }
      &.flip {
         transform: scaleX(-1);
         opacity: 1;
         ${Title} {
            transform: scaleX(-1);
            transition-delay: 0s;
         }
         ${Links}, ${Description} {
            transform: scaleX(-1);
            opacity: 1;
            visibility: visible;
            user-select: auto;
         }
      }
      &.unflip {
         ${Links}, ${Description}, ${Title} {
            transition-delay: 0s;
         }
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
   font-size: 2.5rem;
   color: #e6e6e6;

   &:active {
      opacity: 0.5;
   }
`;
