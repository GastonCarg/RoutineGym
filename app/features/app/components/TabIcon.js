
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useSelector } from 'react-redux';

import images from '../../../constants/Images';

const RoutineIcon = ({ title }) => {
    const view = useSelector((state) => state.app.view);

    const getText = () => {
        if (title === "routineStack") return 'Rutinas';
        else return 'Perfil'
    }

    const selectedIcon = () => {
        if (view === title) return images.tabs.selected[title]
        else return images.tabs.normal[title]
    }

    return (
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Image
                source={selectedIcon()}
            />

            <Text>
                {getText()}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
});

export default RoutineIcon;