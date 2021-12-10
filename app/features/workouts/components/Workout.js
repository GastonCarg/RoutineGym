import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { getWorkouts } from '../actions/workouts'

const Workout = (props) => {
console.log('holaaa', props);

    const status = useSelector((state) => state.workouts.status);
    const workouts = useSelector((state) => state.workouts.workouts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWorkouts());
    }, [])

    return (
        <View style={styles.container}>
            <Text>Workout</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    }
});

export default Workout;