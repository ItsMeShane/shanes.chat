import React, { useState, useEffect, useRef } from 'react';
import {
   ScreenContainer,
   ScreenHeader,
   HeaderProfile,
   ProfileImage,
   ProfileName,
   HeaderBackBtn,
   HeaderCallBtn,
   InputContainer,
   InputTextArea,
   Messages,
   SentMessage,
   ReceivedMessage,
   HeaderInfo,
   ChatButton,
} from './ScreenStyles';
import OpenAI from 'openai';

const openai = new OpenAI({
   apiKey: process.env.REACT_APP_OPENAI_API_KEY,
   dangerouslyAllowBrowser: true,
});

// create thread
const thread = await openai.beta.threads.create();

const Screen = () => {
   const [textAreaValue, setTextAreaValue] = useState('');
   const [messageList, setMessageList] = useState([
      { text: "Hey, I'm Shane's Assistant.", sender: 'assistant' },
      { text: 'How can I help you?', sender: 'assistant' },
   ]);

   // auto scroll to bottom
   const messagesEndRef = useRef(null);
   useEffect(() => {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
   }, [messageList]);

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

      try {
         // create message
         await openai.beta.threads.messages.create(thread.id, {
            role: 'user',
            content: textAreaValue,
         });
         // send message to openai assistant
         const run = await openai.beta.threads.runs.create(thread.id, {
            assistant_id: process.env.REACT_APP_OPENAI_ASSISTANT_ID,
         });

         // wait for assistant response
         let runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
         while (runStatus.status !== 'completed') {
            // check once every second to see if assistant finished messge
            await new Promise((resolve) => setTimeout(resolve, 1000));
            runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
         }

         // get assistant response
         const assistantResponse = (
            await openai.beta.threads.messages.list(thread.id)
         ).data.find((message) => message.role === 'assistant');

         const assistantMessage = assistantResponse.content[0].text.value;

         addMessageToChat(assistantMessage, 'assistant');
      } catch (error) {
         console.error(error);
         console.error('Failed to send message to OpenAI');
      }
   };

   const addMessageToChat = (message, role) => {
      setMessageList((prevMessages) => [
         ...prevMessages,
         { text: message, sender: role },
      ]);
   };

   return (
      <ScreenContainer>
         {/* header */}
         <ScreenHeader>
            <HeaderBackBtn>🡠</HeaderBackBtn>
            <HeaderProfile>
               <ProfileImage src='pfp.png' alt='pfp' />
               <ProfileName>Shane's Assistant</ProfileName>
            </HeaderProfile>
            <HeaderCallBtn>🕽</HeaderCallBtn>
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
               placeholder='Ask me about Shane!'
               onChange={(e) => setTextAreaValue(e.target.value)}
               onKeyDown={handleKeyDown}
            />
            <ChatButton onClick={sendMessage}>↑</ChatButton>
         </InputContainer>
      </ScreenContainer>
   );
};

export default Screen;
