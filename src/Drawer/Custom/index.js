import React from 'react';
import { View, Text, Image } from 'react-native';
import { Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import Perfil from '../../assets/conta.png';

import Inicio from '../../assets/inicio.png';
import Buscar from '../../assets/buscar.png';
import Notificações from '../../assets/notificações.png';
import Compras from '../../assets/minhascompras.png';
import Favoritos from '../../assets/favoritos.png';
import Conta from '../../assets/minhaconta.png';
import Ofertas from '../../assets/ofertas.png';
import Vender from '../../assets/vender.png';
import Historico from '../../assets/historico.png';
import Categorias from '../../assets/categorias.png';
import Supermercado from '../../assets/supermercado.png';
import Lojas from '../../assets/lojasoficiais.png';
import Ajuda from '../../assets/ajuda.png';

export default function Custom(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props }>
                <View style={{ height: 100, width: 280, backgroundColor: '#FFDA18', padding: 20, flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                        <Image style={{ width: 50, height: 50, marginRight: 10 }}  source={Perfil} />
                    </View>

                    <View>
                        <Text>Olá, Max</Text>
                        <Text>Nível 1 - Mercado Pontos </Text>
                    </View>
                </View>

                <Drawer.Section>
                    <DrawerItem 
                        icon={({ color, size }) => (
                            <Image 
                                source={Inicio}
                                style={{ width: 22, height: 22 }}
                            />
                        )}
                        label="Inicio"
                        onPress={() => {props.navigation.navigate('Perfil')}}
                    />

                    <DrawerItem 
                        icon={({ color, size }) => (
                            <Image 
                                source={Buscar}
                                style={{ width: 22, height: 22 }}
                            />
                        )}
                        label="Buscar"
                    />

                    <DrawerItem
                        icon={({ color, size }) => (
                            <Image 
                                source={Notificações}
                                style={{ width: 22, height: 22 }}
                            />
                        )}
                        label="Notificações"
                    />

                    <DrawerItem
                        icon={({ color, size }) => (
                            <Image 
                                source={Compras}
                                style={{ width: 22, height: 22 }}
                            />
                        )}
                        label="Minhas compras"
                    />

                    <DrawerItem
                        icon={({ color, size }) => (
                            <Image 
                                source={Favoritos}
                                style={{ width: 22, height: 22 }}
                            />
                        )}
                        label="Favoritos"
                    />

                    <DrawerItem
                        icon={({ color, size }) => (
                            <Image 
                                source={Conta}
                                style={{ width: 22, height: 22 }}
                            />
                        )}
                        label="Minha conta"
                    />

                    <DrawerItem
                        icon={({ color, size }) => (
                            <Image 
                                source={Ofertas}
                                style={{ width: 22, height: 22 }}
                            />
                        )}
                        label="Ofertas"
                    />

                    <DrawerItem
                        icon={({ color, size }) => (
                            <Image 
                                source={Vender}
                                style={{ width: 22, height: 22 }}
                            />
                        )} 
                        label="Vender"
                    />

                    <DrawerItem
                        icon={({ color, size }) => (
                            <Image 
                                source={Historico}
                                style={{ width: 22, height: 22 }}
                            />
                        )}
                        label="Histórico"
                    />

                    <DrawerItem
                        icon={({ color, size }) => (
                            <Image 
                                source={Categorias}
                                style={{ width: 22, height: 22 }}
                            />
                        )}
                        label="Categorias"
                    />

                    <DrawerItem
                        icon={({ color, size }) => (
                            <Image 
                                source={Supermercado}
                                style={{ width: 22, height: 22 }}
                            />
                        )}
                        label="Supermercado"
                    />

                    <DrawerItem
                        icon={({ color, size }) => (
                            <Image 
                                source={Lojas}
                                style={{ width: 22, height: 22 }}
                            />
                        )}
                        label="Lojas oficiais"
                    />

                    <DrawerItem
                        icon={({ color, size }) => (
                            <Image 
                                source={Ajuda}
                                style={{ width: 22, height: 22 }}
                            />
                        )}
                        label="Ajuda"
                    />
                </Drawer.Section>  
            </DrawerContentScrollView>

        </View>
    );
}