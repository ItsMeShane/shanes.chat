import styled from 'styled-components';

export const ScreenContainer = styled.div`
   position: absolute;
   width: 95%;
   height: 97.5%;
   border-radius: 40px;
   background-color: #d5d5d5;
   z-index: 1;

   display: flex;
   flex-direction: column;
   /* justify-content: center; */
   align-items: center;
`;

// header
export const ScreenHeader = styled.div`
   width: 380px;
   height: 145px;
   border-radius: 40px 40px 0px 0px;

   background-color: #d5d5d597;
   -webkit-backdrop-filter: blur(5px);
   backdrop-filter: blur(25px);

   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: end;

   padding-bottom: 5px;

   position: fixed;
   z-index: 2;
`;


export const HeaderProfile = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   height:62%;
   
`;

export const ProfileImage = styled.img`
   background-color: #a2a2a2;
   border: solid 2px darkblue;
   border-radius: 50%;
   width: 60px;
   height: 60px;
   object-fit: cover;
   
   transition: all 0.2s ease-in-out;
   &:hover {
      scale: 1.07;
   }
`;

export const ProfileName = styled.span`
   color: black;
   text-align: center;
`;

export const BackBtn = styled.button`
   font-size: 2rem;
   margin-right: auto;
   margin-left: 40px;
   width: 40px;
   height: 40px;
   padding-bottom: 70px;
   color: blue;
   background: transparent;
   border: none;
   cursor: pointer;
`;

export const ResetBtn = styled.button`
   font-size: 2rem;
   margin-left: auto;
   margin-right: 40px;
   width: 40px;
   height: 40px;
   padding-bottom: 70px;
   color: blue;
   background: transparent;
   border: none;
   cursor: pointer;
`;

// messages
export const Messages = styled.div`
   height: 100%;
   width: 100%;
   padding-top: 150px;
   border-radius: 40px 40px 0px 0px;
   background-color: #ffffff;
   overflow-y: auto;
   transition: all 2s ease;
   scrollbar-width: none;
   scroll-behavior: smooth;
`;

export const SentMessage = styled.div`
   background-color: #007bff;
   margin: 5px 25px 5px auto;
   color: #fff;
   border-radius: 10px 10px 0px 10px;
   padding: 8px;
   max-width: 70%;
   width: fit-content;
`;

export const ReceivedMessage = styled.div`
   background-color: #e0e0e0;
   margin: 5px auto 5px 25px;
   color: #000;
   border-radius: 10px 10px 10px 0px;
   padding: 8px;
   max-width: 70%;
   width: fit-content;
`;

// input
export const InputContainer = styled.div`
   height: 150px;
   width: 380px;
   padding-top: 5px;
   border-radius: 0px 0px 40px 40px;
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
   width:fit-content;
   height:fit-content;
   margin:5px;
   border: none;
   cursor: pointer;
   font-size: 3rem;
   transition: scale 0.2s ease-in-out;
   line-height: 50px;
   color:darkblue;

   &:active {
      scale:1.25;
   }
`;
