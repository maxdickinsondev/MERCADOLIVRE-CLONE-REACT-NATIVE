import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import Home from '../assets/inicio.png';

import Custom from './Custom';
import Inicio from './Inicio';
import Perfil from './Perfil'

export default function MyDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={props => <Custom {...props} />}
        >
            <Drawer.Screen 
                name="Inicio" 
                component={Inicio}
            />

            <Drawer.Screen 
                name="Perfil" 
                component={Perfil} 
            />
        </Drawer.Navigator>
    );
}