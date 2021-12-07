import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { getRoutines } from '../actions/routines';
import Routine from './Routine';

const RoutinesList = () => {

    const status = useSelector((state) => state.routines.status);
    const routines = useSelector((state) => state.routines.routines);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRoutines());
    }, [])

    useEffect(() => {
        // TODO: Agregar un toast más lindo que un alert horrible
        if (status === 'rejected') alert('Ha ocurrido un error');
    }, [status])

    return (
        <View style={[styles.fullSize, styles.flex]}>
            { status === 'pending' ?
                    <View style={[styles.flex, styles.centerContent]}>
                        <ActivityIndicator size={76} color={'#ed593b'} />
                    </View>
                :
                    <View style={styles.orderList}>
                        <FlatList
                            data={routines}
                            renderItem={Routine}
                            keyExtractor={item => item.id}
                        />
                    </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    fullSize: {
        width: '100%',
        height: '100%'
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
    },
    orderList: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        // padding:5
    },
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default RoutinesList;
