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

const Screen = () => {
    const [inputValue, setInputValue] = useState('');
    const [messageList, setMessageList] = useState([
        { text: "Hey, I'm Shane.", sender: 'shane' },
        { text: "How can I help you?", sender: 'shane' },
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

    const sendMessage = () => {
        if (inputValue.trim() !== '') {
            // add user message to chat
            setMessageList((prevMessages) => [
                ...prevMessages,
                { text: inputValue, sender: 'user' },
            ]);

            // temp receive message
            setTimeout(() => {
                setMessageList((prevMessages) => [
                    ...prevMessages,
                    { text: "Hi, I'm Shane", sender: 'shane' },
                ]);
            }, 500);

            // reset textInput
            setInputValue('');
        }
    };

    useEffect(() => {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [messageList]);

    return (
        <ScreenContainer>
            <ScreenHeader>
                <HeaderBackBtn>🡠</HeaderBackBtn>
                <HeaderProfile>
                    <HeaderInfo></HeaderInfo>
                    <ProfileImage src='face.png' alt='pfp' />
                    <ProfileName>Shane</ProfileName>
                </HeaderProfile>
                <HeaderCallBtn>🕽</HeaderCallBtn>
            </ScreenHeader>
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
