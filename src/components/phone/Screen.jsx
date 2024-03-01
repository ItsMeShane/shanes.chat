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
} from './ScreenStyles';
import OpenAI from 'openai';

const Screen = () => {
    const [inputValue, setInputValue] = useState('');
    const [messageList, setMessageList] = useState([
        { text: "Hey, I'm Shane.", sender: 'shane' },
        { text: 'How can I help you?', sender: 'shane' },
    ]);
    const messagesEndRef = useRef(null);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
            event.preventDefault();
        }
    };

    const openai = new OpenAI({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
    });

    const sendMessage = async () => {
        if (inputValue.trim() === '') {
            return;
        }
        // add user message to chat
        setMessageList((prevMessages) => [
            ...prevMessages,
            { text: inputValue, sender: 'user' },
        ]);
        // clear text area
        setInputValue('');

        // send message to OpenAI
        try {
            const thread = await openai.beta.threads.create();
            await openai.beta.threads.messages.create(thread.id, {
                role: 'user',
                content: inputValue,
            });

            const run = await openai.beta.threads.runs.create(thread.id, {
                assistant_id: process.env.REACT_APP_OPENAI_ASSISTANT_ID,
            });

            let runStatus = await openai.beta.threads.runs.retrieve(
                thread.id,
                run.id
            );

            while (runStatus.status !== 'completed') {
                await new Promise((resolve) => setTimeout(resolve, 2000));
                runStatus = await openai.beta.threads.runs.retrieve(
                    thread.id,
                    run.id
                );
            }

            const assistantMessage = await openai.beta.threads.messages.list(
                thread.id
            );

            const lastMessageForRun = assistantMessage.data
                .filter(
                    (message) =>
                        message.run_id === run.id &&
                        message.role === 'assistant'
                )
                .pop();

            if (lastMessageForRun) {
                const assistantResponse =
                    lastMessageForRun.content[0].text.value.replaceAll(
                        /【.*?】/g,
                        ''
                    );

                setMessageList((prevMessages) => [
                    ...prevMessages,
                    { text: assistantResponse, sender: 'shane' },
                ]);
            }
        } catch (error) {
            console.error(error);
            console.error('Failed to send message to OpenAI');
        }

    };

    useEffect(() => {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [messageList]);

    return (
        <ScreenContainer>
            {/* header */}
            <ScreenHeader>
                <HeaderBackBtn>🡠</HeaderBackBtn>
                <HeaderProfile>
                    <HeaderInfo></HeaderInfo>
                    <ProfileImage src='face.png' alt='pfp' />
                    <ProfileName>Shane</ProfileName>
                </HeaderProfile>
                <HeaderCallBtn>🕽</HeaderCallBtn>
            </ScreenHeader>
            {/* messages */}
            <Messages>
                {messageList.map((message, index) =>
                    message.sender === 'user' ? (
                        <SentMessage key={index}>{message.text}</SentMessage>
                    ) : (
                        <ReceivedMessage key={index}>
                            {message.text}
                        </ReceivedMessage>
                    )
                )}
                <div ref={messagesEndRef} />
            </Messages>
            {/* input */}
            <InputContainer>
                <InputTextArea
                    value={inputValue}
                    placeholder='Send a message'
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
            </InputContainer>
        </ScreenContainer>
    );
};

export default Screen;
