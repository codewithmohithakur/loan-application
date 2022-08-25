import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { COLORS } from '../../common/colors';
import { getUserInformation } from '../../service/Storage.service';

export default function Splash(props) {
    useEffect(() => {
        setTimeout(() => {
            _checkAuthenication();
        }, 2000);
    });

    const _checkAuthenication = async () => {
        const data = await getUserInformation();
        if (data) {
            props.navigation.replace("Home");
        } else {
            props.navigation.replace("SignUp");
        }
    };
    return (
        <View style={styles.container}>
            <Image
                resizeMode="contain"
                resizeMethod="scale"
                style={styles.logo}
                source={require('../../assests/images/loan.png')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: COLORS.screenBackgroundColor
    },
    logo: {
        alignSelf: 'center',
        width: 250,
        justifyContent: 'center'
    }
});
