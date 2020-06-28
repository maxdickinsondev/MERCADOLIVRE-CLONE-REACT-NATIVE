import React from 'react';

import { Container, Area, AreaTitle, Title, AreaImage, Image,
    AreaDownload, ButtonDownload, AreaCard, ImageTools
} from './styles';

import Descontos from '../../assets/descontos/descontos.jpeg';
import Ferramentas from '../../assets/recomendation/ferramentas.jpeg';
import Conforto from '../../assets/descontos/conforto.jpeg';
import Cozinha from '../../assets/recomendation/cozinha.jpeg';

export default function Discounts() {
    return (
        <>
            <Container>
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
                        <ButtonDownload />
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
        </>
    );
}