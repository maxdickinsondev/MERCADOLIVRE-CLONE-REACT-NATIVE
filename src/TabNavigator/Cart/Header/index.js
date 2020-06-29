import React from 'react';
import { TouchableOpacity } from 'react-native';

import Bars from 'react-native-vector-icons/FontAwesome';
import Search from 'react-native-vector-icons/EvilIcons';

import { Container, AreaButtons
} from './styles';

export default function Header({ navigation }) {
    function handleOpenMenuDrawer() {
        navigation.openDrawer();
    }

    function handleOpenTab() {
        navigation.navigate('Tab');
    }

    return (
        <>
            <Container>
                <AreaButtons>
                    <TouchableOpacity onPress={handleOpenMenuDrawer}>
                        <Bars name="bars" size={25} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleOpenTab}>
                        <Search name="search" size={30} />
                    </TouchableOpacity>
                </AreaButtons>
            </Container>
        </>
    );
}