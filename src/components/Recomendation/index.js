import React from 'react';

import ArrowRight from 'react-native-vector-icons/MaterialIcons';
import Flash from 'react-native-vector-icons/FontAwesome';

import { Container, Area, Title, Product, Description,
    Value, Plots, Freight, AreaHistory, History, Image,
    AreaTitle, AreaImage, AreaFreight, Percentagem,
    AreaInfo, AreaDetails, ImageView
} from './styles';

import Phone from '../../assets/recomendation/smartphone.jpeg';

import SamsungS6 from '../../assets/recomendation/celular-samsung-galaxy-s6.png';
import Samsungs7 from '../../assets/recomendation/celular-samsung-galaxy-s7.png';
import Samsung30 from '../../assets/recomendation/galaxy-a-30s.png';

import Discounts from '../Discounts';

export default function Recomendation() {
    return (
        <>
            <Container>
                <Area style={{ elevation: 5 }}>
                    <AreaTitle>
                        <Title>Visto recentemente</Title>
                    </AreaTitle>

                    <AreaImage>
                        <Image 
                            source={Phone}
                        />
                    </AreaImage>
                    
                    <Product>Celular Samsung Galaxy J2 Core J260 Rev</Product>
                    <Description>Dual 5 16gb Preto</Description>

                    <Value>R$ 699 <Percentagem>10% OFF</Percentagem> </Value>
                    <Plots>12x R$ 58²² sem juros</Plots>

                    <Freight>Frete grátis <Flash name="flash" color="green" size={15}/> FULL </Freight>

                    <AreaHistory>
                        <History>
                            Ver histórico de navagação
                        </History>

                        <ArrowRight name="keyboard-arrow-right" color="blue" size={25} />
                    </AreaHistory>
                </Area>

                <Area style={{ elevation: 5 }}>
                    <AreaTitle>
                        <Title>Inspirado no último visto</Title>
                    </AreaTitle>

                    <AreaInfo>
                        <ImageView>
                            <Image 
                                style={{ width: 100, height: 100 }}
                                source={SamsungS6}
                            />
                        </ImageView>

                        <AreaDetails>
                            <Product>Celular Samsung Galaxy J2</Product>
                            <Description>Dual 5 16gb Preto</Description>

                            <Value>R$ 699</Value>
                            <Plots>12x R$ 58²²</Plots>
                            <AreaFreight>
                                <Freight>Frete grátis FULL</Freight>
                            </AreaFreight>
                        </AreaDetails>
                    </AreaInfo>

                    <AreaInfo>
                        <ImageView>
                            <Image 
                                style={{ width: 100, height: 100 }}
                                source={Samsungs7}
                            />
                        </ImageView>

                        <AreaDetails>
                            <Product>Celular Samsung Galaxy J2</Product>
                            <Description>Dual 5 16gb Preto</Description>

                            <Value>R$ 699</Value>
                            <Plots>12x R$ 58²²</Plots>
                            <AreaFreight>
                                <Freight>Frete grátis FULL</Freight>
                            </AreaFreight>
                        </AreaDetails>
                    </AreaInfo>
                    
                    <AreaInfo>
                        <ImageView>
                            <Image 
                                style={{ width: 100, height: 100 }}
                                source={Samsung30}
                            />
                        </ImageView>

                        <AreaDetails>
                            <Product>Celular Samsung Galaxy J2</Product>
                            <Description>Dual 5 16gb Preto</Description>

                            <Value>R$ 699</Value>
                            <Plots>12x R$ 58²²</Plots>
                            <AreaFreight>
                                <Freight>Frete grátis FULL</Freight>
                            </AreaFreight>
                        </AreaDetails>
                    </AreaInfo>
                    

                    <AreaHistory>
                        <History>
                            Ver histórico de navagação
                        </History>
                    </AreaHistory>
                </Area>
            </Container>

            <Discounts />
        </>
    );
}