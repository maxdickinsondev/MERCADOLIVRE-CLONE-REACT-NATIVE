import React from 'react';

import Car from 'react-native-vector-icons/AntDesign';
import Smartphone from 'react-native-vector-icons/MaterialIcons';
import Shirt from 'react-native-vector-icons/FontAwesome5';
import Couch from 'react-native-vector-icons/FontAwesome5';

import { Container, Area, AreaInfo, AreaTitle, 
    Title, AreaCategories, Description
} from './styles';

export default function Categories() {
    return (
        <>
            <Container>
                <Area style={{ elevation: 5 }}>
                    <AreaInfo>
                        <AreaTitle>
                            <Title>Categorias</Title>
                        </AreaTitle>

                        <AreaCategories>
                            <Car name="car" size={20} color="#4194F5" />

                            <Description>Carros, Motos e Outros</Description>
                        </AreaCategories>
                    </AreaInfo>

                    <AreaInfo>
                        <AreaCategories>
                            <Smartphone name="smartphone" size={20} color="#4194F5" />

                            <Description>Celulares e Telefones</Description>
                        </AreaCategories>
                    </AreaInfo>

                    <AreaInfo>
                        <AreaCategories>
                            <Shirt name="tshirt" size={20} color="#4194F5" />

                            <Description>Calçados, Roupas e Bolsas</Description>
                        </AreaCategories>
                    </AreaInfo>

                    <AreaInfo>
                        <AreaCategories>
                            <Couch name="couch" size={20} color="#4194F5" />

                            <Description>Casa, Móveis e Decoração</Description>
                        </AreaCategories>
                    </AreaInfo>
                </Area>
            </Container>






            <Container>
                <Area style={{ elevation: 5 }}>
                    <AreaInfo>
                        <AreaTitle>
                            <Title>Categorias</Title>
                        </AreaTitle>

                        <AreaCategories>
                            <Car name="car" size={20} />

                            <Description>Carros, Motos e Outros</Description>
                        </AreaCategories>
                    </AreaInfo>

                    <AreaInfo>
                        <AreaTitle>
                            <Title>Categorias</Title>
                        </AreaTitle>

                        <AreaCategories>
                            <Smartphone name="smartphone" size={20} />

                            <Description>Carros, Motos e Outros</Description>
                        </AreaCategories>
                    </AreaInfo>
                </Area>
            </Container>
        </>
    );
}