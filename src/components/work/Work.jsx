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
                           <span className='company'>{job.company}</span>
                           <span className='dates'>{job.dates}</span>
                        </Header>
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
