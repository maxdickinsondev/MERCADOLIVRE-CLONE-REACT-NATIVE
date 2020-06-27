import React, { useState } from 'react';
import { Image, View, Dimensions, Animated } from 'react-native';

import { Container, List, Title } from './styles';
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

import produtosInverno from '../../assets/products/produtosinverno.jpeg';
import produtosLimpeza from '../../assets/products/produtoslimpeza.jpeg';
import desconto from '../../assets/products/desconto.jpeg';
import veiculo from '../../assets/products/veiculo.jpeg';
import recarga from '../../assets/products/recarga.jpeg';

import Offers from '../Offers';

export default function Products() {
    const scrollX = useState(new Animated.Value(0));

    const arr = [
        {
            id: 1
        }
    ];

    return (
        <Container>
            <List 
                data={arr}
                renderItem={() => (
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        pagingEnabled={true}
                    >
                        <Animated.View>
                            <Image 
                                style={{ width: width, height: 150, borderRadius: 6 }}
                                source={produtosInverno}
                            />
                        </Animated.View>

                        <View>
                            <Image 
                                style={{ width: width, height: 150, borderRadius: 6 }}
                                source={produtosLimpeza}
                            />
                        </View>

                        <View>
                            <Image 
                                style={{ width: width, height: 150, borderRadius: 6 }}
                                source={desconto}
                            />
                        </View>

                        <View>
                            <Image 
                                style={{ width: width, height: 150, borderRadius: 6 }}
                                source={veiculo}
                            />
                        </View>

                        <View>
                            <Image 
                                style={{ width: width, height: 150, borderRadius: 6 }}
                                source={recarga}
                            />
                        </View>
                    </ScrollView>
                )}
            />

            <Offers />
        </Container>
    );
}