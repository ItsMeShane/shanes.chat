import React, { useCallback, useRef } from 'react';
import {
   Button,
   Buttons,
   Content,
   ProjectsContainer,
   Slider,
   Slides,
   Title,
} from './ProjectsStyles';

const Projects = () => {
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

   return (
      <ProjectsContainer>
         <Slider ref={sliderRef} className='slider' onClick={handleSliderClick}>
            <Slides className='slides' style={{ '--img': `url(images/projects/pj0.png` }}>
               <Content>
                  <Title>Project 1</Title>
               </Content>
            </Slides>
            <Slides className='slides' style={{ '--img': `url(images/projects/pj1.png` }}>
               <Content>
                  <Title>Project 2</Title>
               </Content>
            </Slides>
            <Slides className='slides' style={{ '--img': `url(images/projects/pj2.png` }}>
               <Content>
                  <Title>Project 3</Title>
               </Content>
            </Slides>
            <Slides className='slides' style={{ '--img': `url(images/projects/pj3.png` }}>
               <Content>
                  <Title>Project 4</Title>
               </Content>
            </Slides>
            <Slides className='slides' style={{ '--img': `url(images/projects/pj4.png` }}>
               <Content>
                  <Title>Project 5</Title>
               </Content>
            </Slides>
            <Slides className='slides' style={{ '--img': `url(images/projects/pj5.png` }}>
               <Content>
                  <Title>Project 6</Title>
               </Content>
            </Slides>
            <Slides className='slides' style={{ '--img': `url(images/projects/pj6.png` }}>
               <Content>
                  <Title>Project 7</Title>
               </Content>
            </Slides>
            <Slides className='slides' style={{ '--img': `url(images/projects/pj7.png` }}>
               <Content>
                  <Title>Project 8</Title>
               </Content>
            </Slides>
            <Slides className='slides' style={{ '--img': `url(images/projects/pj8.png` }}>
               <Content>
                  <Title>Project 9</Title>
               </Content>
            </Slides>
            <Slides className='slides' style={{ '--img': `url(images/projects/pj9.png` }}>
               <Content>
                  <Title>Project 10</Title>
               </Content>
            </Slides>{' '}
         </Slider>
         <Buttons>
            <Button className='prev' onClick={() => cycleSlide(-1)}></Button>
            <Button className='next' onClick={() => cycleSlide(1)}></Button>
         </Buttons>
      </ProjectsContainer>
   );
};

export default Projects;
