import styled from 'styled-components';

export const Container = styled.View`
    align-items: center;
    
`;

export const AreaTitle = styled.View`
    border-bottom-width: 1px;
    border-color: #eee;
    padding: 10px;
`;

export const Area = styled.View`
    flex-direction: column;

    background-color: #fff;
    padding: 10px;
    margin-bottom: 15px;

    width: 100%;
    max-width: 330px;

    border-radius: 4px;
`;

export const Title = styled.Text`
    margin-bottom: 10px;
    font-size: 17px;
    font-weight: bold;
`;

export const AreaCategories = styled.View`
    flex-direction: row;

    padding: 20px;
`;

export const Description = styled.Text`
    margin-left: 15px;
`;

export const AreaInfo = styled.View`
    flex-direction: column;
    border-bottom-width: 1px;
    border-color: #eee;
`;
