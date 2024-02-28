import styled from 'styled-components';

export const PhoneContainer = styled.div`
    max-width: 400px;
    max-height: 800px;
    padding: 10px;

    position: relative;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const PhoneScreen = styled.div`
    position: absolute;
    min-width: 380px;
    min-height: 780px;
    border-radius: 30px;
    background-color: #3498db;
    z-index: 1;

    display: flex;
    justify-content: center;
`;

export const PhoneImage = styled.div`
    background-image: url('iPhone.png');
    background-size: cover;
    display: flex;
    justify-content: center;
    min-width: 400px;
    min-height: 800px;
    position: absolute;
    z-index: 2;
`;

export const PhoneHeader = styled.div`
    width: 380px;
    height: 130px;
    border-radius: 30px 30px 0px 0px;
    background-color: red;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;

export const HeaderProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ProfileImage = styled.img`
    background-color: #a2a2a2;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    object-fit: cover;
`;

export const ProfileName = styled.span`
    color: black;
    text-align: center;
`;
