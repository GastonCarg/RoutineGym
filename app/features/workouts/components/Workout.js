import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import moment from 'moment';

import images from '../../../constants/Images';

const Workout = ({ item: { exercises, created }, index }) => {

    // debería meterlo en una funcion?
    let completeExercises = 0;
    exercises.forEach(exercise => {
        if (exercise.done === true) completeExercises++;
    });

    return (
        <View style={styles.container}>
            {/* TODO: Agregar la vista de los ejercicios al presionar el botón */}
            <TouchableOpacity style={styles.workoutContainer} onPress={()=>console.log('Open exercises')}>
                <View style={styles.iconStyle}>
                    <Image source={images.armFlex} />
                </View>
                <View style={styles.workoutDataContainer}>
                    <View style={[styles.flex, styles.paddingComponents]}>
                        <Text style={styles.dateStyle}>ID entrenamiento: {index + 1}</Text>
                    </View>
                    <View style={[styles.flex, styles.paddingComponents]}>
                        <Text style={styles.dateStyle}>{moment(created).format('DD/MM/YY hh:mm')}</Text>
                    </View>
                    <View style={[styles.exercisesContainer, styles.paddingComponents]}>
                        <Text style={styles.exercisesStyle}>Ejercicios realizados: {completeExercises}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        borderBottomWidth:0.5,
    },
    workoutContainer: {
        flex:1,
        flexDirection: 'row',
    },
    workoutDataContainer: {
        justifyContent: 'center',
        alignItems:'flex-start',
        padding: 5,
        flex: 8
    },
    flex:{
        flex: 1,
        flexDirection: 'row'
    },
    paddingComponents: {
        paddingVertical: 5,
        paddingRight: 5
    },
    nameStyle:{
        fontSize: 28,
        fontWeight: 'bold',
        flex:1
    },
    iconStyle: {
        justifyContent: "center",
        alignItems: "center",
        flex: 2,
        // paddingHorizontal: 5,
    },
    dateContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    exercisesContainer: {
        flex:1
    },
    dateStyle: {
        fontSize: 20,
        flex:1
    },
    exercisesStyle: {
        fontSize: 20,
    },
});

export default Workout;