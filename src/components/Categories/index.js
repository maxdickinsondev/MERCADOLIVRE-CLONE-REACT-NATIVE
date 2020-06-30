import React from 'react';

import Car from 'react-native-vector-icons/AntDesign';
import Smartphone from 'react-native-vector-icons/MaterialIcons';
import Shirt from 'react-native-vector-icons/FontAwesome5';
import Couch from 'react-native-vector-icons/FontAwesome5';

import ArrowRight from 'react-native-vector-icons/MaterialIcons';

import Fogão from '../../assets/categories/fogão.png';
import Volante from '../../assets/categories/volante.png';

import { Container, Area, AreaInfo, AreaTitle, 
    Title, AreaCategories, Description, Image,
    AreaInfoFooter, AreaCategoriesFooter
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
                            <Car name="car" size={25} color="#4194F5" />

                            <Description>Carros, Motos e Outros</Description>
                        </AreaCategories>
                    </AreaInfo>

                    <AreaInfo>
                        <AreaCategories>
                            <Smartphone name="smartphone" size={25} color="#4194F5" />

                            <Description>Celulares e Telefones</Description>
                        </AreaCategories>
                    </AreaInfo>

                    <AreaInfo>
                        <AreaCategories>
                            <Shirt name="tshirt" size={25} color="#4194F5" />

                            <Description>Calçados, Roupas e Bolsas</Description>
                        </AreaCategories>
                    </AreaInfo>

                    <AreaInfo>
                        <AreaCategories>
                            <Couch name="couch" size={25} color="#4194F5" />

                            <Description>Casa, Móveis e Decoração</Description>
                        </AreaCategories>
                    </AreaInfo>

                    <AreaInfo>
                        <AreaCategories>
                            <Image
                                style={{ width: 25, height: 25 }}
                                source={Fogão}
                            />

                            <Description>Eletrodomésticos</Description>
                        </AreaCategories>
                    </AreaInfo>

                    <AreaInfo>
                        <AreaCategories>
                            <Image
                                style={{ width: 25, height: 25 }}
                                source={Volante}
                            />

                            <Description>Acessórios para Veículos</Description>
                        </AreaCategories>
                    </AreaInfo>

                    <AreaInfoFooter>
                        <AreaCategoriesFooter style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Description style={{ color: '#4194F5' }}>Ver todas as categorias</Description>

                            <ArrowRight name="keyboard-arrow-right" size={25} color="#4194F5" />
                        </AreaCategoriesFooter>
                    </AreaInfoFooter>
                </Area>
            </Container>
        </>
    );
}