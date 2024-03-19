import styled from 'styled-components';

export const WorkWrapper = styled.div`
   display: flex;
   justify-content: center;
   background-color: #e6e6e6;
   border-radius: 0px 0px 40px 40px;
   @media screen and (orientation: portrait) {
       border-radius:0;
       max-height:calc(100vh - 100px);
   }
`;

export const WorkContainer = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   flex-wrap: nowrap;
   justify-content: start;
   width: 93%;
   height: fit-content;
   margin-top: 50px;
   margin-bottom: 50px;
`;

export const Card = styled.label`
   height: 70px;
   border-radius: 1rem 1rem 2rem 2rem;
   cursor: pointer;
   margin: 0 10px;
   display: flex;
   flex-direction: column;
   transition: 0.6s cubic-bezier(0.28, -0.03, 0, 0.99);
   box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.8);
   position: relative;
   overflow: hidden;
`;

export const Content = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   position: relative;
   opacity: 0;
   transition: 1s;
   overflow: hidden;
`;
export const Header = styled.div`
   flex: 1;
   height: 50px;
   margin: 20px;
   margin-top: 25px;
   margin-bottom: 0px;
   display: flex;
   align-items: center;
   a {
      color: black;
      text-decoration: none;
      &:active {
         color: gray;
      }
   }
   .company {
      margin-right: auto;
      font-weight: 600;
   }
   .dataWrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
   }
   .small {
      margin-left: auto;
      font-size: 0.8rem;
   }
`;

export const Description = styled.div`
   margin: 20px;
   margin-bottom: 0;
   height: 100%;
   white-space: pre-wrap;
`;

export const Footer = styled.div`
   color: #7c267a;
   height: 70px;
   display: flex;
   align-items: center;
`;

export const Logo = styled.img`
   background: #ffffff;
   background-size: cover;
   border-radius: 50%;
   width: 50px;
   height: 50px;
   margin: 10px;
`;

export const Title = styled.h4`
   text-transform: uppercase;
`;

export const Input = styled.input`
   display: none;
   &:checked + ${Card} {
      height: 300px !important;
      cursor: auto;
      ${Content} {
         opacity: 1;
      }
   }
`;
