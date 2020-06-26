import React from 'react';
import { View, Text, Button } from 'react-native';

import Header from '../../components/Header';

export default function Inicio({ navigation }) {
    function handleOpenMenu() {
        navigation.openDrawer();
    }

    return (
        <View>
            <Header />
        </View>
    );
}