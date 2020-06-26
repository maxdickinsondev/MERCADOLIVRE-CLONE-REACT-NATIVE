import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Inicio({ navigation }) {
    function handleOpenMenu() {
        navigation.openDrawer();
    }

    return (
        <View>
            <Text>Estou na tela principal!</Text>
            <Button title="Open Menu Drawer" onPress={handleOpenMenu} />
        </View>
    );
}