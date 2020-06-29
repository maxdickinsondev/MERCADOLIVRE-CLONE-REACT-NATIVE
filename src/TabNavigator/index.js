import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import Cart from './Cart';
import Saves from './Saves';

export default function TabNavigator() {
    return (
        <Tab.Navigator
            tabBarPosition="bottom"
            tabBarOptions={{
                tabStyle: {
                    backgroundColor: '#FFDA18',
                    
                }
            }}
        >
            <Tab.Screen name="Cart" component={Cart} options={{ title: 'Carrinho (0)' }} />
            <Tab.Screen name="Saves" component={Saves} options={{ title: 'Salvos (0)' }} />
        </Tab.Navigator>
    );
}