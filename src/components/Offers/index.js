import React from 'react';
import { Image } from 'react-native';

import QRCode from 'react-native-vector-icons/AntDesign';
import Ofertas from '../../assets/ofertas.png';
import Mercado from '../../assets/supermercado.png';
import Car from 'react-native-vector-icons/AntDesign';
import Plus from 'react-native-vector-icons/Feather';

import { Container, AreaIcon, AreaOffer, AreaTitle, Title } from './styles';

import Recomendations from '../Recomendation';

export default function Offers() {
    return (
        <>
            <Container>
                <AreaOffer>
                    <AreaIcon>
                        <QRCode name="qrcode" size={20} color="#7B7B81" />
                    </AreaIcon>

                    <AreaTitle>
                        <Title>Pagar com código QR</Title>
                    </AreaTitle>
                </AreaOffer>

                <AreaOffer>
                    <AreaIcon>
                        <Image style={{ width: 25, height: 25 }} source={Ofertas} />
                    </AreaIcon>

                    <AreaTitle>
                        <Title>Ofertas</Title>
                    </AreaTitle>
                </AreaOffer>

                <AreaOffer>
                    <AreaIcon>
                        <Image style={{ width: 25, height: 25 }} source={Mercado} />
                    </AreaIcon>

                    <AreaTitle>
                        <Title>Mercado</Title>
                    </AreaTitle>
                </AreaOffer>

                <AreaOffer>
                    <AreaIcon>
                        <Car name="car" size={20} color="#7B7B81" />
                    </AreaIcon>

                    <AreaTitle style={{ width: '100%', maxWidth: 78 }}>
                        <Title>Carros, motos e outros</Title>
                    </AreaTitle>
                </AreaOffer>
                
                <AreaOffer>
                    <AreaIcon>
                        <Plus name="plus" size={20} color="#7B7B81" />
                    </AreaIcon>

                    <AreaTitle>
                        <Title>Ver mais</Title>
                    </AreaTitle>
                </AreaOffer>
            </Container>

            <Recomendations />
        </>
    );
}
