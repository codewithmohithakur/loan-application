import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../../common/colors';
import CommonHeader from '../../common/Header';
import { deleteToken } from '../../service/Storage.service';

export default function Profile(props) {

    const _handleLogOut = async () => {
        await deleteToken();
        props.navigation.replace("Splash")
    }
    return (
        <View>
            <CommonHeader />
            <View style={styles.container}>
                <Text style={styles.mainText}>Welcome to profile screen</Text>
                {/* LOGOUT-BUTTON */}
                <TouchableOpacity
                    style={styles.signInButtonEnable} name="title" onPress={() => _handleLogOut()}>
                    <Text style={styles.signInButtonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
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
        marginTop: 100,
        padding: 20
    },
    signInButtonEnable: {
        width: '50%',
        padding: 18,
        alignSelf: 'center',
        backgroundColor: '#FC6B21',
        borderRadius: 10,
        shadowColor: '#000',
        justifyContent: 'center',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.9,
        shadowRadius: 30,
        elevation: 20,
    },
    signInButtonText: {
        color: COLORS.whiteColor,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
