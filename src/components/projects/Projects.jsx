import React, { useCallback, useRef } from 'react';
import {
   Button,
   Buttons,
   Content,
   ProjectsContainer,
   ProjectsWrapper,
   Slider,
   Slides,
   Title,
} from './ProjectsStyles';

const Work = () => {
   const sliderRef = useRef(null);

   const cycleSlide = useCallback((offset) => {
      const slider = sliderRef.current;
      if (!slider) return;
      const slides = Array.from(slider.children);
      if (offset > 0) {
         slider.appendChild(slides[0]);
      } else {
         slider.prepend(slides[slides.length - 1]);
      }
   }, []);

   const handleSliderClick = useCallback(
      (event) => {
         const slider = sliderRef.current;
         const clickedSlide = event.target.closest('.slides');
         if (!slider || !clickedSlide) return;

         const slides = Array.from(slider.children);
         const clickedIndex = slides.indexOf(clickedSlide);

         if (clickedIndex === 1) {
            cycleSlide(-1);
         } else if (clickedIndex === 3) {
            cycleSlide(1);
         }
      },
      [cycleSlide]
   );
   const projectData = [
      { imgPath: 'images/projects/pj0.png', title: 'Project 1' },
      { imgPath: 'images/projects/pj1.png', title: 'Project 2' },
      { imgPath: 'images/projects/pj2.png', title: 'Project 3' },
      { imgPath: 'images/projects/pj3.png', title: 'Project 4' },
      { imgPath: 'images/projects/pj4.png', title: 'Project 5' },
      { imgPath: 'images/projects/pj5.png', title: 'Project 6' },
      { imgPath: 'images/projects/pj6.png', title: 'Project 7' },
      { imgPath: 'images/projects/pj7.png', title: 'Project 8' },
      { imgPath: 'images/projects/pj8.png', title: 'Project 9' },
      { imgPath: 'images/projects/pj9.png', title: 'Project 10' },
   ];
   return (
      <ProjectsWrapper>
         <ProjectsContainer>
            <Slider ref={sliderRef}  className='slider' onClick={handleSliderClick}>
               {projectData.map((project, index) => (
                  <Slides
                     key={index}
                     className='slides'
                     style={{ '--img': `url(${project.imgPath})` }}
                  >
                     <Content>
                        <Title>{project.title}</Title>
                     </Content>
                  </Slides>
               ))}
            </Slider>
            <Buttons>
               <Button className='prev' onClick={() => cycleSlide(-1)}>
                  <ion-icon name='return-down-back-outline'></ion-icon>
               </Button>
               <Button className='next' onClick={() => cycleSlide(1)}>
                  <ion-icon name='return-down-forward-outline'></ion-icon>
               </Button>
            </Buttons>
         </ProjectsContainer>
      </ProjectsWrapper>
   );
};

export default Work;
