import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import Inicio from './Inicio';
import Perfil from './Perfil'

export default function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Inicio" component={Inicio} />
            <Drawer.Screen name="Perfil" component={Perfil} />
        </Drawer.Navigator>
    );
}