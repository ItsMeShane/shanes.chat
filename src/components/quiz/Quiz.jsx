import React, { useRef } from 'react';
import {
   Button,
   HeaderSubtitle,
   HeaderTitle,
   Hint,
   Question,
   QuizContainer,
   QuestionContainer,
   QuizHeader,
} from './QuizStyles';

const Quiz = () => {
   const headerRef = useRef(null);

   const handleStartClick = () => {
      headerRef.current.classList.add('top');
   };

   return (
      <QuizContainer>
         <QuizHeader ref={headerRef}>
            <HeaderTitle>Take My Quiz!</HeaderTitle>
            <HeaderSubtitle>
               Test What You Know And See How Well You Know Me
            </HeaderSubtitle>
            <Hint>
               <span>
                  <ion-icon name='information-circle-outline'></ion-icon>
               </span>
               <p>
                  <b>Hint:</b> You can find all the answers from my assistant.
               </p>
            </Hint>
            <Button id='start' onClick={handleStartClick}>Start Quiz</Button>
            <div id='quizInfo'>
               <span id='title'>Shane's Quiz</span>
               <span id='qNum'>Question: 1/5</span>
            </div>
         </QuizHeader>
         <QuestionContainer>
            <Question>
               <span id='prompt'>What is Shane's major?</span>
               <div id='options'>
                  <div className='option'>Option 1</div>
                  <div className='option'>Option 2</div>
                  <div className='option'>Option 3</div>
                  <div className='option'>Option 4</div>
               </div>
               <Button id='submit'>Submit Answer</Button>
            </Question>
         </QuestionContainer>
      </QuizContainer>
   );
};

export default Quiz;
