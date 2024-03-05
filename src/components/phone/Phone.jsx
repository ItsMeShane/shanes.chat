import React from 'react';
import Screen from './Screen';
import styled from 'styled-components';

export const PhoneContainer = styled.div`
    width: 400px;
    height: 802px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const PhoneImage = styled.div`
    background-image: url('iPhone.png');
    background-size: cover;
    display: flex;
    justify-content: center;
    width: 400px;
    height: 802px;
    position: absolute;
    z-index: 2;
    pointer-events: none;
`;

const Phone = () => {
    return (
        <PhoneContainer>
            <Screen />
            <PhoneImage />
        </PhoneContainer>
    );
};

export default Phone;
