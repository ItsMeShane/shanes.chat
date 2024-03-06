import styled from 'styled-components';

export const QuizContainer = styled.div`
   background-color: #5555cc;
   position: relative;
   border-radius: 0px 0px 40px 40px;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const QuizHeader = styled.div`
   background-color: purple;
   width: 100%;
   height: 100%;
   min-height: 100px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

export const HeaderTitle = styled.span`
   font-size: 2.5rem;
   text-align: center;
`;

export const HeaderSubtitle = styled.span`
   text-align: center;
   font-size: 1.2rem;
`;

export const QuizContent = styled.div`
   width: 100%;
   height: 100%;
   background-color: palevioletred;
   overflow-y: auto;

   display:flex;
   justify-content:center;
   flex-direction:column;
   align-items:center;
   
`;

export const Question = styled.div`
   width: 70%;
   min-height:150px;
   margin:15px;
   background-color:royalblue;
`;
