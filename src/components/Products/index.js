import React, { useState, useEffect } from 'react';
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
    const [refreshing, setRefreshing] = useState(false);

    const [moveY] = useState(new Animated.Value(50));

    const arr = [
        {
            id: '1'
        }
    ];

    useEffect(() => {
        Animated.spring(moveY, {
            toValue: 0,
            velocity: 5,
            bounciness: 30,
            useNativeDriver: true
        }).start();
    }, []);

    function handleRefresh() {
        setRefreshing(true);

        setRefreshing(false);
    }

    return (
        <>
            <List 
                data={arr}
                onRefresh={handleRefresh}
                refreshing={refreshing}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <>
                        <Animated.View style={{ 
                            transform: [
                                { translateY: moveY }
                            ]
                        }}>
                            <ScrollView
                                key={String(item.id)}
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
                        
                            <Offers />
                        </Animated.View>
                    </>
                )}
            />
        </>
    );
}