import React from 'react';
import { PhoneContainer, PhoneImage } from './PhoneStyles';
import Screen from './Screen';

const Phone = () => {
    return (
        <PhoneContainer>
            <Screen />
            <PhoneImage />
        </PhoneContainer>
    );
};

export default Phone;
