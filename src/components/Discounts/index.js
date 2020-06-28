import React from 'react';

import { Container, Area, AreaTitle, Title, AreaImage, Image,
    Description, Value, AreaDownload, ButtonDownload, AreaProducts,
    AreaDetails, AreaCard
} from './styles';

import Lopes from '../../assets/descontos/petz.png';
import Petz from '../../assets/descontos/petz.png';
import Drogal from '../../assets/descontos/drogal.png';
import Swift from '../../assets/descontos/swift.png';
import BurgerKing from '../../assets/descontos/burgerking.png';

export default function Discounts() {
    return (
        <Container>
            <Area style={{ elevation: 5 }}>
                <AreaTitle>
                    <Title>Descontos com Mercado Pago</Title>
                </AreaTitle>

                <AreaCard>
                    <AreaProducts>
                        <AreaDetails>
                            <AreaImage>
                                <Image 
                                    source={BurgerKing}
                                />
                            </AreaImage>

                            <Description>Até</Description>
                            <Value>R$ 10</Value>
                        </AreaDetails>

                        <AreaDetails>
                            <AreaImage>
                                <Image 
                                    source={Petz}
                                />
                            </AreaImage>

                            <Description>Até</Description>
                            <Value>R$ 10</Value>
                        </AreaDetails>

                        <AreaDetails>
                            <AreaImage>
                                <Image 
                                    source={Drogal}
                                />
                            </AreaImage>

                            <Description>Até</Description>
                            <Value>R$ 10</Value>
                        </AreaDetails>
                    </AreaProducts>

                    <AreaProducts>
                        <AreaDetails>
                            <AreaImage>
                                <Image 
                                    source={Swift}
                                />
                            </AreaImage>

                            <Description>Até</Description>
                            <Value>R$ 10</Value>
                        </AreaDetails>

                        <AreaDetails>
                            <AreaImage>
                                <Image 
                                    source={BurgerKing}
                                />
                            </AreaImage>

                            <Description>Até</Description>
                            <Value>R$ 10</Value>
                        </AreaDetails>

                        <AreaDetails>
                            <AreaImage>
                                <Image 
                                    source={BurgerKing}
                                />
                            </AreaImage>

                            <Description>Até</Description>
                            <Value>R$ 10</Value>
                        </AreaDetails>
                    </AreaProducts>
                </AreaCard>

                <AreaDownload>
                    <ButtonDownload />
                </AreaDownload>
            </Area>
        </Container>
    );
}