import React from 'react';
import {
    PhoneContainer,
    PhoneImage,
    PhoneScreen,
    PhoneHeader,
    HeaderProfile,
    ProfileImage,
    ProfileName,
} from './PhoneStyles';

const PhoneCase = () => {
    return (
        <PhoneContainer>
            <PhoneScreen>
                <PhoneHeader>

                    <HeaderProfile>
                        <ProfileImage src='face.png' alt='pfp' />
                        <ProfileName>Shane </ProfileName>
                    </HeaderProfile>


                </PhoneHeader>
            </PhoneScreen>

            <PhoneImage />
        </PhoneContainer>
    );
};

export default PhoneCase;
