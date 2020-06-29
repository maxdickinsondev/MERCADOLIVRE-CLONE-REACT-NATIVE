import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Drawer from '../src/Drawer';
import TabNavigator from '../src/TabNavigator';

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                headerMode="none"
            >
                <Stack.Screen name="Drawer" component={Drawer} />
                <Stack.Screen name="Tab" component={TabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}