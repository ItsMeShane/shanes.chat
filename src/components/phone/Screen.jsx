import React, { useState, useEffect, useRef } from 'react';
import {
   ScreenContainer,
   ScreenHeader,
   HeaderProfile,
   ProfileImage,
   ProfileName,
   BackBtn,
   ResetBtn,
   InputContainer,
   InputTextArea,
   Messages,
   SentMessage,
   ReceivedMessage,
   ChatButton,
} from './ScreenStyles';
import {
   createThread,
   loadMessages,
   sendMessageToAssistant,
   // getStarterMessages,
} from './Assistant';
import starterMessages from './Assistant';

const Screen = () => {
   const [textAreaValue, setTextAreaValue] = useState('');
   const [messageList, setMessageList] = useState([starterMessages]);

   const [threadId, setThreadId] = useState(null);
   // loads saved thread & messages if saved locally
   // else creates new thread & messages
   useEffect(() => {
      const initializeConversation = async () => {
         const storedThreadId = localStorage.getItem('threadId');
         let loadedMessages = [];
         if (storedThreadId) {
            setThreadId(storedThreadId);
            loadedMessages = await loadMessages(storedThreadId);
         } else {
            const newThreadId = await createThread();
            setThreadId(newThreadId);
            localStorage.setItem('threadId', newThreadId);
         }
         // Load starter messages
         // const starterMessages = getStarterMessages();
         setMessageList([...starterMessages, ...loadedMessages]);
      };

      initializeConversation();
   }, []);

   // auto scroll to bottom
   const messagesEndRef = useRef(null);
   useEffect(() => {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
   }, [messageList]);

   // shift + enter adds line
   const handleKeyDown = (event) => {
      if (event.key === 'Enter' && !event.shiftKey) {
         event.preventDefault();
         sendMessage();
      }
   };

   const sendMessage = async () => {
      if (textAreaValue.trim() === '') {
         return;
      }
      // add user message to chat
      setMessageList((prevMessages) => [
         ...prevMessages,
         { text: textAreaValue, sender: 'user' },
      ]);
      // clear text area
      setTextAreaValue('');

      // get then add assistant message to chat
      try {
         const assistantMessage = await sendMessageToAssistant(threadId, textAreaValue);
         addMessageToChat(assistantMessage, 'assistant');
      } catch (error) {
         console.error('Failed to send message to Assistant');
         console.error(error);
      }
   };

   const addMessageToChat = (message, role) => {
      setMessageList((prevMessages) => [
         ...prevMessages,
         { text: message, sender: role },
      ]);
   };

   const ResetThread = () => {
      // create a new thread and update saved data
      createThread().then((newThreadId) => {
         setThreadId(newThreadId);
         localStorage.setItem('threadId', newThreadId);
         // clear message list
         setMessageList(starterMessages);
      });
   };

   return (
      <ScreenContainer>
         {/* header */}
         <ScreenHeader>
            <BackBtn>B</BackBtn>
            <HeaderProfile>
               <ProfileImage src='pfp.png' alt='pfp' />
               <ProfileName>Shane's Assistant</ProfileName>
            </HeaderProfile>
            <ResetBtn onClick={ResetThread}>R</ResetBtn>
         </ScreenHeader>
         {/* messages */}
         <Messages>
            {messageList.map((message, index) =>
               message.sender === 'user' ? (
                  <SentMessage key={index}>{message.text}</SentMessage>
               ) : (
                  <ReceivedMessage key={index}>{message.text}</ReceivedMessage>
               )
            )}
            <div ref={messagesEndRef} />
         </Messages>
         {/* input */}
         <InputContainer>
            <InputTextArea
               value={textAreaValue}
               placeholder='Ask about Shane!'
               onChange={(e) => setTextAreaValue(e.target.value)}
               onKeyDown={handleKeyDown}
            />
            <ChatButton onClick={sendMessage}>↑</ChatButton>
         </InputContainer>
      </ScreenContainer>
   );
};

export default Screen;
