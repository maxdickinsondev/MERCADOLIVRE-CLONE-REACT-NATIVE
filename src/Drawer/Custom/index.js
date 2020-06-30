import React, { useState } from 'react';
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

import InicioBlue from '../../assets/icons_blue/inicio_blue.png';
import BuscarBlue from '../../assets/icons_blue/buscar_blue.png';
import NotificaçõesBlue from '../../assets/icons_blue/notificações_blue.png';
import ComprasBlue from '../../assets/icons_blue/minhascompras_blue.png';
import FavoritosBlue from '../../assets/icons_blue/favoritos_blue.png';
import ContaBlue from '../../assets/icons_blue/minhaconta_blue.png';
import OfertasBlue from '../../assets/icons_blue/ofertas_blue.png';
import VenderBlue from '../../assets/icons_blue/vender_blue.png';
import HistoricoBlue from '../../assets/icons_blue/historico_blue.png';

export default function Custom(props) {
    const [active, setActive] = useState('');

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props }>
                <View style={{ marginTop: -4, height: 100, width: 280, backgroundColor: '#FFDA18', padding: 20, flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                        <Image style={{ width: 50, height: 50, marginRight: 10 }}  source={Perfil} />
                    </View>

                    <View>
                        <Text style={{ color: '#7B7B81' }}>Olá, Max</Text>
                        <Text>Nível 1 - Mercado Pontos </Text>
                    </View>
                </View>

                <Drawer.Section>
                    {active === 'first' ? (
                        <DrawerItem
                            focused={active === 'first'}
                            icon={() => (
                                <Image 
                                    source={InicioBlue}
                                    style={{ width: 22, height: 22 }}
                                />
                            )}

                            label="Inicio"
                            onPress={() => setActive('first')}
                        />
                    ) : (
                        <DrawerItem
                            focused={active === 'first'}
                            icon={() => (
                                <Image 
                                    source={Inicio}
                                    style={{ width: 22, height: 22 }}
                                />
                            )}

                            label="Inicio"
                            onPress={() => setActive('first')}
                        />
                    )}

                   {active === 'second' ? (
                       <DrawerItem
                        focused={active === 'second'}
                        icon={({ color, size }) => (
                            <Image 
                                source={BuscarBlue}
                                style={{ width: 22, height: 22 }}
                            />
                        )}
                        onPress={() => setActive('second')}
                        label="Buscar"
                    />
                   ) : (
                    <DrawerItem
                        focused={active === 'second'}
                        icon={({ color, size }) => (
                            <Image 
                                source={Buscar}
                                style={{ width: 22, height: 22 }}
                            />
                        )}
                        onPress={() => setActive('second')}
                        label="Buscar"
                    />
                   ) }

                    {active == 'three' ? (
                        <DrawerItem
                            focused={active === 'three'}
                            icon={({ color, size }) => (
                                <Image 
                                    source={NotificaçõesBlue}
                                    style={{ width: 22, height: 22 }}
                                />
                            )}
                            onPress={() => setActive('three')}
                            label="Notificações"
                    />
                    ) : (
                        <DrawerItem
                            focused={active === 'three'}
                            icon={({ color, size }) => (
                                <Image 
                                    source={Notificações}
                                    style={{ width: 22, height: 22 }}
                                />
                            )}
                            onPress={() => setActive('three')}
                            label="Notificações"
                        />
                    )}

                    {active === 'four' ? (
                        <DrawerItem
                            focused={active === 'four'}
                            icon={({ color, size }) => (
                                <Image 
                                    source={ComprasBlue}
                                    style={{ width: 22, height: 22 }}
                                />
                            )}
                            onPress={() => setActive('four')}
                            label="Minhas compras"
                    />
                    ) : (
                        <DrawerItem
                            focused={active === 'four'}
                            icon={({ color, size }) => (
                                <Image 
                                    source={Compras}
                                    style={{ width: 22, height: 22 }}
                                />
                            )}
                            onPress={() => setActive('four')}
                            label="Minhas compras"
                        />
                    )}

                    {active == 'five' ? (
                        <DrawerItem
                            focused={active === 'five'}
                            icon={({ color, size }) => (
                                <Image 
                                    source={FavoritosBlue}
                                    style={{ width: 22, height: 22 }}
                                />
                            )}
                            onPress={() => setActive('five')}
                            label="Favoritos"
                    />
                    ) : (
                        <DrawerItem
                            focused={active === 'five'}
                            icon={({ color, size }) => (
                                <Image 
                                    source={Favoritos}
                                    style={{ width: 22, height: 22 }}
                                />
                            )}
                            onPress={() => setActive('five')}
                            label="Favoritos"
                    />
                    )}

                    {active === 'six' ? (
                        <DrawerItem
                            focused={active === 'six'}
                            icon={({ color, size }) => (
                                <Image 
                                    source={ContaBlue}
                                    style={{ width: 22, height: 22 }}
                                />
                            )}
                            onPress={() => setActive('six')}
                            label="Minha conta"
                    />
                    ) : (
                        <DrawerItem
                            focused={active === 'six'}
                            icon={({ color, size }) => (
                                <Image 
                                    source={Conta}
                                    style={{ width: 22, height: 22 }}
                                />
                            )}
                            onPress={() => setActive('six')}
                            label="Minha conta"
                        />
                    )}

                    {active === 'seven' ? (
                        <DrawerItem
                            focused={active === 'seven'}
                            icon={({ color, size }) => (
                                <Image 
                                    source={OfertasBlue}
                                    style={{ width: 22, height: 22 }}
                                />
                            )}
                            onPress={() => setActive('seven')}
                            label="Ofertas"
                    />
                    ) : (
                        <DrawerItem
                            focused={active === 'seven'}
                            icon={({ color, size }) => (
                                <Image 
                                    source={Ofertas}
                                    style={{ width: 22, height: 22 }}
                                />
                            )}
                            onPress={() => setActive('seven')}
                            label="Ofertas"
                        />
                    )}

                    {active === 'eight' ? (
                        <DrawerItem
                            focused={active === 'eight'}
                            icon={({ color, size }) => (
                                <Image 
                                    source={VenderBlue}
                                    style={{ width: 22, height: 22 }}
                                />
                            )} 
                            onPress={() => setActive('eight')}
                            label="Vender"
                    />
                    ) : (
                        <DrawerItem
                            focused={active === 'eight'}
                            icon={({ color, size }) => (
                                <Image 
                                    source={Vender}
                                    style={{ width: 22, height: 22 }}
                                />
                            )} 
                            onPress={() => setActive('eight')}
                            label="Vender"
                    />
                    )}

                    {active === 'nine' ? (
                        <DrawerItem
                            focused={active === 'nine'}
                            icon={({ color, size }) => (
                                <Image 
                                    source={HistoricoBlue}
                                    style={{ width: 22, height: 22 }}
                                />
                            )}
                            onPress={() => setActive('nine')}
                            label="Histórico"
                    />
                    ) : (
                        <DrawerItem
                            focused={active === 'nine'}
                            icon={({ color, size }) => (
                                <Image 
                                    source={Historico}
                                    style={{ width: 22, height: 22 }}
                                />
                            )}
                            onPress={() => setActive('nine')}
                            label="Histórico"
                        />
                    )}

                    <DrawerItem
                        focused={active === 'ten'}
                        icon={({ color, size }) => (
                            <Image 
                                source={Categorias}
                                style={{ width: 22, height: 22 }}
                            />
                        )}
                        onPress={() => setActive('ten')}
                        label="Categorias"
                    />

                    <DrawerItem
                        focused={active === 'eleven'}
                        icon={({ color, size }) => (
                            <Image 
                                source={Supermercado}
                                style={{ width: 22, height: 22 }}
                            />
                        )}
                        onPress={() => setActive('eleven')}
                        label="Supermercado"
                    />

                    <DrawerItem
                        focused={active === 'twelve'}
                        icon={({ color, size }) => (
                            <Image 
                                source={Lojas}
                                style={{ width: 22, height: 22 }}
                            />
                        )}
                        onPress={() => setActive('twelve')}
                        label="Lojas oficiais"
                    />

                    <DrawerItem
                        focused={active === 'thirteen'}
                        icon={({ color, size }) => (
                            <Image 
                                source={Ajuda}
                                style={{ width: 22, height: 22 }}
                            />
                        )}
                        onPress={() => setActive('thirteen')}
                        label="Ajuda"
                    />
                </Drawer.Section>  
            </DrawerContentScrollView>

        </View>
    );
}