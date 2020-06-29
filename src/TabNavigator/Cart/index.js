import React from 'react';
import { Container, Title, Description } from './styles';

import Header from '../../TabNavigator/Cart/Header';

export default function Cart() {
    return (
        <>
            <Header />
            <Container>
                <Title>O seu carrinho está vazio</Title>

                <Description>Não sabe o que comprar?</Description>
                <Description>Milhares de produtos esperam por você!</Description>
            </Container>
        </>
    );
}