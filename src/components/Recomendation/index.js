import React from 'react';

import ArrowRight from 'react-native-vector-icons/MaterialIcons';
import Flash from 'react-native-vector-icons/FontAwesome';

import { Container, Area, Title, Product, Description,
    Value, Plots, Freight, AreaHistory, History, Image,
    AreaTitle, AreaImage, AreaFreight, Percentagem
} from './styles';

import Phone from '../../assets/recomendation/smartphone.jpeg';

export default function Recomendation() {
    return (
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

            <Area>
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

                <Value>R$ 699 10% OFF</Value>
                <Plots>12x R$ 58²² sem juros</Plots>
                <AreaFreight>
                    <Freight>Frete grátis FULL</Freight>

                    <Flash name="flash" color="green" size={25} />
                </AreaFreight>

                <AreaHistory>
                    <History>
                        Ver histórico de navagação
                    </History>
                </AreaHistory>
            </Area>
        </Container>
    );
}