import styled from 'styled-components';

export const ConnectContainer = styled.div`
   background-color: #e6e6e6;
   position: relative;
   border-radius: 0px 0px 40px 40px;
   display: flex;
   flex-direction: column;
   align-items: center;

   
   @media screen and (orientation: portrait) {
       border-radius:0;
       max-height:calc(100vh - 100px);
   }
`;

export const Banner = styled.div`
   width: 100%;
   height: 320px;
   display: flex;
   justify-content: center;
   align-items: end;
`;

export const Name = styled.span`
   font-size: 5rem;
   font-weight: 700;
   margin: 30px 30px 15px 30px;
   height: fit-content;
   width: fit-content;
`;

export const SegmentTitle = styled.span`
   font-size: 2rem;
   margin-left: 30px;
   transition: opacity 0.5s;
`;

export const SegmentLinks = styled.div`
   margin: 30px;
   display: flex;
   font-size: 1.8rem;
   padding: 5px;
   opacity: 0;
   transition: 0.25s;
   margin-left: auto;

   & div,
   a {
      cursor: pointer;
      margin: 5px;
      color: #000;
      &:active {
         scale: 1.1;
         color: #267c7a;
      }
   }

   & span {
      font-size: 1rem;
      align-self: center;
      background-color: #e6e6e6;
      padding-left: 5px;
      padding-right: 5px;
      margin-right: 20px;
      max-width:130px;
      overflow:auto;
   }
`;

export const Segment = styled.div`
   width: 100%;
   height: 75px;
   display: flex;
   align-items: center;
   transition: 0.5s;
   &:hover {
      background-color: #f3f3f3;
   }
   &:hover ${SegmentLinks} {
      opacity: 1;
   }
`;
