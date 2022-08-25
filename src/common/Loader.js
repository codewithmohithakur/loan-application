import React from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';

export default function commonLoader(props) {
    return (
        <View style={props.visible ? styles.loaderMainDiv : ''}>
            {
                props.visible &&
                <ActivityIndicator size="large" color="#FFFFFF" />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    loaderMainDiv: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
        backgroundColor: 'rgba(211, 211, 211, 0.6)',
    }
});