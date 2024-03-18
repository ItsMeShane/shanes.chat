import React, { useState, useEffect, useRef } from 'react';
import {
   ChatContainer,
   ChatHeader,
   ProfileImage,
   InputContainer,
   TextArea,
   MessageContainer,
   Message,
   Button,
   Dice,
} from './ChatStyles';
import { createThread, loadMessages, sendMessageToAssistant } from './Assistant';
import starterMessages from './Assistant';
import TypeingMessage from './TypeingMessage';
import getRandomMessage from './MessagePrompts';

const Chat = () => {
   const [textAreaValue, setTextAreaValue] = useState('');
   const [messageList, setMessageList] = useState([starterMessages]);
   const [threadId, setThreadId] = useState(null);
   const [isTypeing, setIsTypeing] = useState(false);

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
         setMessageList([...starterMessages, ...loadedMessages]);
      };

      initializeConversation();
   }, []);

   // auto scroll to bottom
   const messagesEndRef = useRef(null);
   useEffect(() => {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
   }, [messageList, isTypeing]);

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
      if (messageList[messageList.length - 1].sender !== 'assistant') {
         // cant send back-to-back messages
         return;
      }

      // add user message to chat
      setMessageList((prevMessages) => [
         ...prevMessages,
         { text: textAreaValue, sender: 'user' },
      ]);
      // clear text area
      setTextAreaValue('');

      // show typing visual
      let typingTimeout = setTimeout(function () {
         setIsTypeing(true);
      }, 1000);

      // get then add assistant message to chat
      try {
         const assistantMessage = await sendMessageToAssistant(threadId, textAreaValue);
         addMessageToChat(assistantMessage, 'assistant');
         clearTimeout(typingTimeout);
      } catch (error) {
         console.error('Failed to send message to Assistant');
         console.error(error);
      } finally {
         setIsTypeing(false);
      }
   };

   const addMessageToChat = (message, role) => {
      setMessageList((prevMessages) => [
         ...prevMessages,
         { text: message, sender: role },
      ]);
   };

   const resetThread = () => {
      // create a new thread and update saved data
      createThread().then((newThreadId) => {
         setThreadId(newThreadId);
         localStorage.setItem('threadId', newThreadId);
         // clear message list
         setMessageList(starterMessages);
      });
   };

   const handleDiceClick = () => {
      setTextAreaValue(getRandomMessage());
   };

   return (
      <ChatContainer>
         <MessageContainer>
            <ChatHeader>
               <ProfileImage onClick={resetThread} src='images/pfp.png' alt='pfp' />
            </ChatHeader>
            {messageList.map((message, index) => (
               <Message
                  key={index}
                  className={message.sender === 'user' ? 'sent' : 'received'}
               >
                  {message.text}
               </Message>
            ))}
            {isTypeing && <TypeingMessage ref={messagesEndRef} />}
            <div ref={messagesEndRef} />
         </MessageContainer>
         <InputContainer>
            <TextArea
               value={textAreaValue}
               placeholder='Ask about Shane!'
               onChange={(e) => setTextAreaValue(e.target.value)}
               onKeyDown={handleKeyDown}
            />
            <Button onClick={sendMessage}>
               <ion-icon name={'send-outline'}></ion-icon>
            </Button>
            <Dice onClick={handleDiceClick}>🎲</Dice>
         </InputContainer>
      </ChatContainer>
   );
};

export default Chat;
