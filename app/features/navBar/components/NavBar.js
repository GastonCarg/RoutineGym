import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const NavBar = () => {

    return (
        <View style={styles.componentStyle}>
            <View style={styles.fullsize}>
                <View style={[styles.fullsize, styles.textContainer]}>
                    <Text style={styles.textStyle}>Rutinas</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    componentStyle: {
        // backgroundColor: '#271c2c',
        backgroundColor: '#0e2032',
        height: 56,
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle:{
        color: 'white',
        fontSize: 25,
    },
    fullsize: {
        height: 56,
        width: '100%',
    }
})

export default NavBar;