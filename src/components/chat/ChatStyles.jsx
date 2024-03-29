import styled, { keyframes } from 'styled-components';

export const ChatContainer = styled.div`
   position: relative;
   background-color: white;
   border-radius: 0px 0px 40px 40px;

   display: flex;
   flex-direction: column;
   align-items: center;
   @media screen and (orientation: portrait) {
       border-radius:0;
       max-height:calc(100vh - 100px);
   }
`;

// header
export const ChatHeader = styled.div`
   height: 115px;
   padding-bottom: 10px;
   background-color: #e6e6e6;

   display: flex;
   justify-content: center;
   align-items: end;
`;

export const ProfileImage = styled.img`
   border: solid 2px darkblue;
   border-radius: 50%;
   width: 60px;
   height: 60px;
   cursor: pointer;
   transition: all 0.2s ease-in-out;
   &:hover {
      scale: 1.07;
   }
`;

// messages
export const MessageContainer = styled.div`
   height: 100%;
   width: 100%;
   overflow-y: auto;
   transition: all 2s ease;
   scrollbar-width: none;
   scroll-behavior: smooth;
   line-height: 1.25em;

   max-height: 550px;
   
   @media screen and (orientation: portrait) {
      max-height: none;
   }
`;
export const Message = styled.div`
   padding: 8px;
   max-width: 72%;
   width: fit-content;
   white-space: pre-wrap;

   &.sent {
      background-color: #007bff;
      margin: 5px 25px 5px auto;
      color: #fff;
      border-radius: 10px 10px 0px 10px;
   }
   &.received {
      background-color: #e6e6e6;
      margin: 5px auto 5px 25px;
      color: #000;
      border-radius: 10px 10px 10px 0px;
   }
`;

// input
export const InputContainer = styled.div`
   height: 125px;
   width:100%;
   padding-top: 5px;
   background-color: #d5d5d5;
   display: flex;
`;

export const TextArea = styled.textarea`
   height: 60px;
   width: 100%;
   border: 1px solid #ccc;
   border-radius: 15px;
   font-size: 1rem;
   resize: none;
   outline: none;
   padding-left: 15px;
   padding-right: 15px;
   margin: 0;
   margin-left: 30px;
   font-family: Poppins;
   font-size: 0.9rem;
   line-height: 1.2rem;
`;
const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const Button = styled.button`
   background-color: transparent;
   width: 55px;
   height: 55px;
   border: none;
   cursor: pointer;
   font-size: 3rem;
   transition: scale 0.2s ease-in-out;
   color: #26547c;
   margin: 5px;
   margin-right: 25px;

   &:active {
      scale: 1.1;
   }
`;
export const Dice = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   transition: scale 0.2s ease-in-out;
   line-height: 50px;
   color: #26547c;
   text-decoration: none;
   user-select: none;
   -webkit-user-select: none;

   width: 55px;
   height: 55px;
   position: absolute;
   font-size: 2.2rem;
   top: 5px;
   right: 25px;
   border-radius: 50%;
   background-color: #26547caa;
   border: 3px solid #26547c;

   &:active {
      scale: 1.1;
      animation: ${spinAnimation} 0.2s;
   }
`;
