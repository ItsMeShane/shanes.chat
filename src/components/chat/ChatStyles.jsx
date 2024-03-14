import styled from 'styled-components';

export const ChatContainer = styled.div`
   position: relative;
   background-color: white;
   border-radius: 0px 0px 40px 40px;

   display: flex;
   flex-direction: column;
   align-items: center;
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
   `;
export const Message = styled.div`
   padding: 8px;
   max-width: 70%;
   width: fit-content;
   white-space: pre-wrap;

   &.sent {
      background-color: #007bff;
      margin: 5px 25px 5px auto;
      color: #fff;
      border-radius: 10px 10px 0px 10px;
   }
   &.received {
      background-color: #e0e0e0;
      margin: 5px auto 5px 25px;
      color: #000;
      border-radius: 10px 10px 10px 0px;
   }
`;

// input
export const InputContainer = styled.div`
   height: 150px;
   width: 380px;
   padding-top: 5px;
   background-color: #d5d5d5;

   display: flex;
   justify-content: center;
`;

export const InputTextArea = styled.textarea`
   width: 60%;
   height: 60px;
   border: 1px solid #ccc;
   border-radius: 15px;
   font-size: 1rem;
   resize: none;
   outline: none;
   padding-left: 15px;
   padding-right: 15px;
`;

export const ChatButton = styled.button`
   background-color: transparent;
   width: fit-content;
   height: fit-content;
   margin: 5px;
   border: none;
   cursor: pointer;
   font-size: 3rem;
   transition: all 0.2s ease-in-out;
   line-height: 50px;
   color: darkblue;

   &:active {
      scale: 1.2;
      transform: translateY(-5px);
   }
`;
