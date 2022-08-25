import React, { useEffect } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { COLORS } from '../../common/colors';
import CommonHeader from '../../common/Header';

export default function Search(props) {
    return (
        <View>
            <CommonHeader />
            <View style={styles.container}>
                <Text style={styles.mainText}>Welcome to search screen</Text>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: COLORS.screenBackgroundColor
    },
    mainText: {
        textAlign: 'center',
        color: COLORS.whiteColor,
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 100
    }
});
