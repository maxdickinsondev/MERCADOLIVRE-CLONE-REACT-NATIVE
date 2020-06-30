import React from 'react';

import { Container, Area, AreaTitle, Title, AreaImage, Image,
    AreaDownload, ButtonDownload, AreaCard, ImageTools,
    ButtonText, AreaDescription, Description, AreaMarket
} from './styles';

import Descontos from '../../assets/descontos/descontos.jpeg';
import Ferramentas from '../../assets/recomendation/ferramentas.jpeg';
import Conforto from '../../assets/descontos/conforto.jpeg';
import Cozinha from '../../assets/recomendation/cozinha.jpeg';

import MercadoPago from '../../assets/mercadopago.png';

import Categories from '../Categories';

export default function Discounts() {
    return (
        <>
            <Container style={{ marginTop: 15 }}>
                <Area style={{ elevation: 5 }}>
                    <AreaTitle>
                        <Title>Descontos com Mercado Pago</Title>
                    </AreaTitle>

                    <AreaImage>
                        <Image 
                            source={Descontos}
                        />
                    </AreaImage>

                    <AreaDownload>
                        <AreaMarket>
                            <Image 
                                style={{ width: 70, height: 30 }}
                                source={MercadoPago}
                            />
                            
                            <AreaDescription>
                                <Description>Exclusivo com o</Description>
                                <Description>Mercado Pago</Description>
                            </AreaDescription>
                        </AreaMarket>

                        <ButtonDownload onPress={() => {}}>
                            <ButtonText>Baixar</ButtonText>
                        </ButtonDownload>
                    </AreaDownload>
                </Area>
            </Container>

            <Container>
                <AreaCard style={{ elevation: 5 }}>
                    <ImageTools 
                        source={Ferramentas}
                    />
                </AreaCard>

                <AreaCard style={{ elevation: 5 }}>
                    <ImageTools 
                        source={Conforto}
                    />
                </AreaCard>

                <AreaCard style={{ elevation: 5 }}>
                    <ImageTools 
                        source={Cozinha}
                    />
                </AreaCard>
            </Container>

            <Categories />
        </>
    );
}