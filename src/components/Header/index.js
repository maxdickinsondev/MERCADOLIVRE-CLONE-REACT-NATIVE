import React from 'react';
import Bars from 'react-native-vector-icons/FontAwesome';
import Search from 'react-native-vector-icons/EvilIcons';
import Cart from 'react-native-vector-icons/Feather';
import Marker from 'react-native-vector-icons/FontAwesome';

import ArrowRight from 'react-native-vector-icons/MaterialIcons';

import { Container, AreaButtons, AreaInput, Input,
    AreaLocation, TextLocation
} from './styles';

import Products from '../Products';

export default function Header() {
    return (
        <>
            <Container>
                <AreaButtons>
                    <Bars name="bars" size={20} />
                    
                    <AreaInput>
                        <Input placeholder="Buscar no Mercado Livre" />
                    </AreaInput>

                    <Cart name="shopping-cart" size={20} />
                </AreaButtons>

                <AreaLocation>
                    <Marker style={{ marginRight: 5 }} name="map-marker" size={15} color="#7B7B81"/>
                    <TextLocation>Informe seu CEP</TextLocation>
                    <ArrowRight name="keyboard-arrow-right" size={15} color="#7B7B81"/>
                </AreaLocation>
            </Container>

            <Products />
        </>
    );
}