import styled from 'styled-components';

export const Container = styled.View`
    padding: 15px;
    background-color: #FFDA18;
    height: 200px;
`;

export const AreaButtons = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;

export const AreaInput = styled.View`
    width: 100%;
    max-width: 270px;
`;

export const Input = styled.TextInput`
    height: 40px;
    padding: 0px 25px;
    border: none;
    background-color: #fff;
    border-radius: 20px;
    color: #000;
`;

export const AreaLocation = styled.View`
    align-items: center;
    flex-direction: row;
    margin-top: 15px;
`;

export const TextLocation = styled.Text`
    color: #7B7B81;
    margin-right: 5px;
`;