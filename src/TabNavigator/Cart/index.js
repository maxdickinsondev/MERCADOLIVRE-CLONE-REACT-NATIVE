import React from 'react';
import LottieView from 'lottie-react-native';
import { Container, Title, Description, AreaLottie } from './styles';

import Header from '../../TabNavigator/Cart/Header';

import CartEmpty from '../../../4496-empty-cart.json';

export default function Cart() {
    return (
        <>
            <Header />
            <Container>
                <Title>O seu carrinho está vazio</Title>

                <Description>Não sabe o que comprar?</Description>
                <Description>Milhares de produtos esperam por você!</Description>

                <AreaLottie>
                    <LottieView
                        source={CartEmpty}
                        resizeMode="contain"
                        autoPlay
                        autoSize
                        loop
                    />
                </AreaLottie>
            </Container>
        </>
    );
}