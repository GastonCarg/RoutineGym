import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { getProfiles } from '../actions/profiles'

const Profiles = () => {
    const profiles = useSelector((state) => state.profiles.profiles);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfiles());
    }, [])

    return (
        <View style={styles.container}>
            <Text>Profile</Text>
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

export default Profiles;