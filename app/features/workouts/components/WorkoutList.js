import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';

import { getWorkouts } from '../actions/workouts'
import Workout from './Workout';

const WorkoutList = () => {

    const status = useSelector((state) => state.workouts.status);
    const workouts = useSelector((state) => state.workouts.workouts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWorkouts());
    }, [])

    useEffect(() => {
        // TODO: Mejorar el mensaje de error
        if (status === 'rejected') alert('Ha ocurrido un error')
    }, [status])

    return (
        <View style={styles.container}>
            { status === 'pending' ?
                <View style={[styles.flex, styles.centerContent]}>
                    <ActivityIndicator size={76} color={'#ed593b'} />
                </View>
                :
                <View>
                    <FlatList
                        data={workouts}
                        renderItem={Workout}
                        keyExtractor={item => item._id}
                    />
                </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
    },
    orderList: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default WorkoutList;