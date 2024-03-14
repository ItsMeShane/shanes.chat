import React from 'react';
import {
   Card,
   Footer,
   Logo,
   Input,
   Title,
   WorkContainer,
   WorkWrapper,
   Content,
   Header,
   Description,
} from './WorkStyles';
import { workData } from './WorkData';

const Work = () => {
   return (
      <WorkWrapper>
         <WorkContainer>
            {workData.map((job) => (
               <React.Fragment key={job.id}>
                  <Input type='radio' name='workSlide' id={job.id} />
                  <Card htmlFor={job.id}>
                     <Content>
                        <Header>
                           <a
                              href={job.link}
                              target='_blank'
                              rel='noopener noreferrer'
                           >
                              <span className='company'>{job.company}</span>
                           </a>
                           <div className='dataWrapper'>

                           <span className='small'>{job.dates}</span>
                           <span className='small'>{job.location}</span>
                           </div>
                        </Header>
                        <Description>
                           <span>{job.description}</span>
                        </Description>
                     </Content>
                     <Footer>
                        <Logo src={job.logoSrc} alt={job.alt} />
                        <Title>{job.title}</Title>
                     </Footer>
                  </Card>
               </React.Fragment>
            ))}
         </WorkContainer>
      </WorkWrapper>
   );
};

export default Work;
