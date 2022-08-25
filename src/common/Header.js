import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { COLORS } from './colors';

export default function CommonHeader(props) {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <Text style={styles.shyftText}>SHYFT</Text>
                </View>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: COLORS.whiteColor,
        padding: 4,
        justifyContent: 'center',
        aligninnerContainers: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.9,
        elevation: 20,
    },
    innerContainer: {
        flex: 1,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.9,
        shadowRadius: 30,
        elevation: 20
    },
    shyftText: {
        fontSize: 22,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 40
    }
});