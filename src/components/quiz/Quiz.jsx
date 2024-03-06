import React from 'react';
import { HeaderSubtitle, HeaderTitle, Question, QuizContainer, QuizContent, QuizHeader } from './QuizStyles';

const Quiz = () => {
   return (
      <QuizContainer id='projects'>
         <QuizHeader>
            <HeaderTitle>Take My Quiz!</HeaderTitle>
            <HeaderSubtitle>Test What You Learned And See How Well You Know Me </HeaderSubtitle>
            <HeaderSubtitle>PS: If there's a question you dont know, ask my assistant! </HeaderSubtitle>
         </QuizHeader>
         <QuizContent>

            <Question>?</Question>
            <Question>?</Question>
            <Question>?</Question>
            <Question>?</Question>
            <Question>?</Question>

         </QuizContent>
      </QuizContainer>
   );
};

export default Quiz;
