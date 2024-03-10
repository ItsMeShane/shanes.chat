import React, { useCallback, useRef } from 'react';
import {
   Button,
   Buttons,
   Description,
   Links,
   ProjectsContainer,
   ProjectsWrapper,
   Slider,
   Slides,
   Title,
} from './ProjectsStyles';
import { projectData } from './ProjectsData';

const Projects = () => {
   const sliderRef = useRef(null);

   const cycleSlide = useCallback((offset) => {
      const slider = sliderRef.current;
      if (!slider) return;
      const slides = Array.from(slider.children);
      slides.forEach((slide) => slide.classList.remove('flip'));
      slides.forEach((slide) => slide.classList.remove('unflip'));
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

         switch (clickedIndex) {
            case 1:
               cycleSlide(-1);
               break;
            case 2:
               toggleFlip(event);
               break;
            case 3:
               cycleSlide(1);
               break;
            default:
               break;
         }
      },
      [cycleSlide]
   );

   const toggleFlip = (event) => {
      const clickedSlide = event.target.closest('.slides');
      if (clickedSlide.classList.contains('flip')) {
         clickedSlide.classList.remove('flip');
         clickedSlide.classList.add('unflip');
      } else if (clickedSlide.classList.contains('unflip')) {
         clickedSlide.classList.remove('unflip');
         clickedSlide.classList.add('flip');
      } else {
         clickedSlide.classList.add('flip');
      }
   };

   return (
      <ProjectsWrapper>
         <ProjectsContainer>
            <Slider ref={sliderRef} className='slider' onClick={handleSliderClick}>
               {projectData.map((project, index) => (
                  <Slides
                     key={index}
                     className='slides flip'
                     style={{ '--img': `url(${project.imgPath})` }}
                  >
                     <Title>{project.title}</Title>
                     <Description>{project.description}</Description>
                     <Links>
                        <a href={project.github} target='_blank' title='GitHub'>
                           <ion-icon name='logo-github'></ion-icon>
                        </a>
                        <a href={project.youtube} target='_blank' title='YouTube'>
                           <ion-icon name='logo-youtube'></ion-icon>
                        </a>
                        <a href={project.live} target='_blank' title='Live Demo'>
                           <ion-icon name='pulse-outline'></ion-icon>
                        </a>
                     </Links>
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

export default Projects;
