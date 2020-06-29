import React from 'react';
import { Container, Title, Description } from './styles';

import Header from '../../TabNavigator/Cart/Header';

export default function Cart() {
    return (
        <>
            <Header />
            <Container>
                <Title>Você não tem produtos salvos</Title>

                <Description>Se ainda não decidiu comprar algum prodruto</Description>
                <Description>do seu carrinho, você pode deixá-lo aqui.</Description>
            </Container>
        </>
    );
}