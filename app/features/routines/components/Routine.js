import React from "react";
import { View, Text, StyleSheet,TouchableOpacity, Image } from "react-native";
import moment from "moment";

import images from '../../../constants/Images'

const Routine = (data) => {

    const date = data.item.created;
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.routineContainer}>
                <View style={styles.iconStyle}>
                    <Image source={images.weightLifter} />
                </View>
                <View style={styles.routineDataContainer}>
                    <View style={[styles.flex, styles.paddingComponents]}>
                        <Text style={styles.nameStyle}>{data.item.name}</Text>
                    </View>
                    <View style={[styles.exercisesContainer]}>
                        <Text style={styles.exercisesStyle}>Cantidad de ejercicios: {data.item.exercises}</Text>
                    </View>
                    <View style={[styles.dateContainer, styles.paddingComponents]}>
                        <View style={styles.flex}>
                            <Text style={styles.dateStyle}>{moment(data.item.created).format('DD/MM/YY hh:mm')}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        borderBottomWidth:0.5,
    },
    routineContainer: {
        flex:1,
        flexDirection: 'row',
    },
    routineDataContainer: {
        justifyContent: 'center',
        alignItems:'flex-start',
        padding: 5,
        flex: 8,
    },
    flex:{
        flex: 1,
    },
    paddingComponents: {
        paddingVertical: 5
    },
    nameStyle:{
        fontSize: 28,
        fontWeight: 'bold'
    },
    iconStyle: {
        justifyContent: "center",
        alignItems: "center",
        flex: 2,
        paddingHorizontal: 5,
    },
    dateContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    exercisesContainer: {
        flex:1
    },
    dateStyle: {
        fontSize: 16,
        flex:1,
        textAlign: 'right',
        color: '#00000080'
    },
    exercisesStyle: {
        fontSize: 20,
    },
})

export default Routine;