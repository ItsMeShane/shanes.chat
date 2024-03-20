import styled from 'styled-components';

export const QuizContainer = styled.div`
   position: relative;
   border-radius: 0px 0px 40px 40px;
   max-height: 680px;
   display: flex;
   flex-direction: column;
   align-items: center;
   @media screen and (orientation: portrait) {
      border-radius: 0;
      max-height: calc(100vh - 100px);
   }
`;

export const HeaderTitle = styled.span`
   margin-top: 150px;
   flex: 1;
   font-size: 2.5rem;
   text-align: center;
`;

export const HeaderSubtitle = styled.span`
   flex: 1;
   width: 80%;
   text-align: center;
   font-size: 1.2rem;
`;

export const Hint = styled.div`
   flex: 1;
   font-size: 2rem;
   width: fit-content;
   height: fit-content;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   p {
      all: unset;
      background-color: #e6e6e6;
      border-radius: 10px;
      user-select: none;
      transition: opacity 0.25s;
      transition-delay:0.25s;
      font-size: 1rem;
      width: 220px;
      padding: 10px 20px;
      margin-bottom: 30px;
      opacity: 0;
   }

   span {
      height: 40px;
      cursor: help;
      &:hover + p {
         opacity: 1;
         transition-delay:0.1s;
      }
   }
`;

export const Button = styled.a`
   cursor: pointer;
   width: fit-content;
   background-color: #2f267c;
   color: #ffffff;
   border-radius: 3rem;
   padding: 10px 20px;

   &#start {
      margin-bottom: 250px;
   }
   &#submit {
      margin-top: 20px;
      margin-left:100px;
   }
`;

export const QuizHeader = styled.div`
   background-color: #e6e6e6;
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   transition: 0.75s;

   &.top {
      height: 100px;
      flex-direction: row;
      background-color: #d5d5d5;

      ${HeaderTitle}, ${Button}, ${Hint}, ${HeaderSubtitle} {
         display: none;
      }

      #quizInfo {
         width: 100%;
         display: flex;
         flex-direction: row;
         font-size: 1.3rem;
         font-weight: 400;
      }
      #title {
         flex: 1;
         margin-left: 30px;
         margin-top: 30px;
      }
      #qNum {
         flex: 0;
         margin-right: 30px;
         margin-top: 30px;
         white-space: nowrap;
      }
   }
`;

export const QuestionContainer = styled.div`
   width: 100%;
   height: 100%;
   background-color: #e6e6e6;
   overflow-y: auto;
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
`;

export const Question = styled.div`
   display: flex;
   flex-direction: column;
   width: 70%;
   height: 70%;
   padding: 5%;
   border-radius: 30px;
   background-color: #ffffff;
   background: linear-gradient(to bottom, #dddddd, #bbbbbb);
   box-shadow: 0 20px 70px #222;
   #prompt {
      flex: 1;
      font-size: 1.4rem;
   }

   #options {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
      .option {
         background-color: lightblue;
         border-radius:15px;
         padding: 10px;
         text-align: center;
      }
   }
`;
