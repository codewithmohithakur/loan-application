import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { RadioButton } from 'react-native-paper';
import Spinner from '../../common/Loader';
import { setUserInformation } from '../../service/Storage.service';
import { COLORS } from '../../common/colors';


export default function SignUp(props) {
    const { handleSubmit, control, register } = useForm({ mode: 'onBlur' });
    const [checked, setChecked] = React.useState(1); // variable use for radio button
    const [errorMessage, setErrorMessage] = useState(); // variable use for storing forms error
    const [loading, setLoading] = useState(true); // variable use for loader

    useEffect(() => {
        const loaderState = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => {
            clearTimeout(loaderState);
        };
    }, []);

    // user data storing async storage
    const createUser = (data) => {
        setErrorMessage('');
        setUserInformation(JSON.stringify(data));
        props.navigation.navigate('Home')
    }
    // Forms Errors
    const handleFormErrors = (errors) => {
        setErrorMessage(errors);
    };
    return (
        <>
            <Spinner visible={loading} />
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.formContainer}>
                        <Text style={styles.topHeading}>Custom Information</Text>
                        <Text style={[styles.topHeading, styles.innerHeading]}>Personal Details</Text>
                        {/* Personal-details-section start from here */}
                        <View style={styles.mainInputContainer}>
                            <View style={styles.boxContainer}>
                                <View style={styles.splitContainer}>
                                    {/* First name */}
                                    <Controller
                                        control={control}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <TextInput
                                                onBlur={onBlur}
                                                onChangeText={value => onChange(value)}
                                                value={value}
                                                ref={register()}
                                                underlineColorAndroid="transparent"
                                                placeholder="First Name"
                                                placeholderTextColor="gray"
                                                style={styles.input}
                                            />
                                        )}
                                        name="first_name"
                                        rules={{
                                            required: {
                                                value: true,
                                                message: 'Please enter first name'
                                            },
                                        }}
                                    />
                                    {errorMessage && errorMessage.first_name ?
                                        <Text style={styles.errorMessage}>
                                            {errorMessage.first_name.message}
                                        </Text>
                                        : null}
                                </View>
                                {/* last name */}
                                <View style={styles.splitContainer}>
                                    <Controller
                                        control={control}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <TextInput
                                                onBlur={onBlur}
                                                onChangeText={value => onChange(value)}
                                                value={value}
                                                ref={register()}
                                                underlineColorAndroid="transparent"
                                                placeholder="Last Name"
                                                placeholderTextColor="gray"
                                                style={styles.input}
                                            />
                                        )}
                                        name="last_name"
                                        rules={{
                                            required: {
                                                value: true,
                                                message: 'please enter last name'
                                            },
                                        }}
                                    />
                                    {errorMessage && errorMessage.last_name ?
                                        <Text style={styles.errorMessage}>
                                            {errorMessage.last_name.message}
                                        </Text>
                                        : null}
                                </View>
                            </View>
                            {/* EMAIL */}
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        onBlur={onBlur}
                                        onChangeText={value => onChange(value)}
                                        value={value}
                                        ref={register()}
                                        underlineColorAndroid="transparent"
                                        placeholder="Email"
                                        placeholderTextColor="gray"
                                        style={styles.input}
                                    />
                                )}
                                name="email"
                                rules={{
                                    required: {
                                        value: true,
                                        message: 'please enter email'
                                    },
                                }}
                            />
                            {errorMessage && errorMessage.email ?
                                <Text style={styles.errorMessage}>
                                    {errorMessage.email.message}
                                </Text>
                                : null}
                            {/* DATE OF BIRTH */}
                            <View style={styles.boxContainer}>
                                <View style={styles.splitContainer}>
                                    <Controller
                                        control={control}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <TextInput
                                                onBlur={onBlur}
                                                onChangeText={value => onChange(value)}
                                                value={value}
                                                ref={register()}
                                                underlineColorAndroid="transparent"
                                                placeholder="Date of Birth"
                                                placeholderTextColor="gray"
                                                style={styles.input}
                                            />
                                        )}
                                        name="dob"
                                        rules={{
                                            required: {
                                                value: true,
                                                message: 'please enter dob'
                                            },
                                        }}
                                    />
                                    {errorMessage && errorMessage.dob ?
                                        <Text style={styles.errorMessage}>
                                            {errorMessage.dob.message}
                                        </Text>
                                        : null}
                                </View>
                                {/* MOBILE NUMBER */}
                                <View style={styles.splitContainer}>
                                    <Controller
                                        control={control}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <TextInput
                                                onBlur={onBlur}
                                                onChangeText={value => onChange(value)}
                                                value={value}
                                                ref={register()}
                                                underlineColorAndroid="transparent"
                                                placeholder="Mobile Number"
                                                placeholderTextColor="gray"
                                                style={styles.input}
                                                keyboardType='numeric'
                                            />
                                        )}
                                        name="mobile_number"
                                        rules={{
                                            required: {
                                                value: true,
                                                message: 'please enter mobile number'
                                            },
                                        }}
                                    />
                                    {errorMessage && errorMessage.mobile_number ?
                                        <Text style={styles.errorMessage}>
                                            {errorMessage.mobile_number.message}
                                        </Text>
                                        : null}
                                </View>
                            </View>
                            <Text style={[styles.topHeading, styles.customHeading]}>Address</Text>
                            {/* STREET ADDRESS */}
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        onBlur={onBlur}
                                        onChangeText={value => onChange(value)}
                                        value={value}
                                        ref={register()}
                                        underlineColorAndroid="transparent"
                                        placeholder="Street Address"
                                        placeholderTextColor="gray"
                                        style={styles.input}
                                    />
                                )}
                                name="street_address"
                                rules={{
                                    required: {
                                        value: true,
                                        message: 'please enter street address'
                                    },
                                }}
                            />
                            {errorMessage && errorMessage.street_address ?
                                <Text style={styles.errorMessage}>
                                    {errorMessage.street_address.message}
                                </Text>
                                : null}
                            {/* APARTMENT NUMBER */}
                            <View style={styles.boxContainer}>
                                <View style={styles.splitContainer}>
                                    <Controller
                                        control={control}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <TextInput
                                                onBlur={onBlur}
                                                onChangeText={value => onChange(value)}
                                                value={value}
                                                ref={register()}
                                                underlineColorAndroid="transparent"
                                                placeholder="Apartment Number"
                                                placeholderTextColor="gray"
                                                style={styles.input}
                                            />
                                        )}
                                        name="apartment_number"
                                        rules={{
                                            required: {
                                                value: true,
                                                message: 'please enter apartment number'
                                            },
                                        }}
                                    />
                                    {errorMessage && errorMessage.apartment_number ?
                                        <Text style={styles.errorMessage}>
                                            {errorMessage.apartment_number.message}
                                        </Text>
                                        : null}
                                </View>
                                {/* ZIP CODE */}
                                <View style={styles.splitContainer}>
                                    <Controller
                                        control={control}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <TextInput
                                                onBlur={onBlur}
                                                onChangeText={value => onChange(value)}
                                                value={value}
                                                ref={register()}
                                                underlineColorAndroid="transparent"
                                                placeholder="ZIP Code"
                                                placeholderTextColor="gray"
                                                style={styles.input}
                                                keyboardType='numeric'
                                            />
                                        )}
                                        name="zip_code"
                                        rules={{
                                            required: {
                                                value: true,
                                                message: 'please enter zip code'
                                            },
                                        }}
                                    />
                                    {errorMessage && errorMessage.zip_code ?
                                        <Text style={styles.errorMessage}>
                                            {errorMessage.zip_code.message}
                                        </Text>
                                        : null}
                                </View>
                            </View>
                            {/* STATE */}
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        onBlur={onBlur}
                                        onChangeText={value => onChange(value)}
                                        value={value}
                                        ref={register()}
                                        underlineColorAndroid="transparent"
                                        placeholder="State"
                                        placeholderTextColor="gray"
                                        style={styles.input}
                                    />
                                )}
                                name="state"
                                rules={{
                                    required: {
                                        value: true,
                                        message: 'please enter state'
                                    },
                                }}
                            />
                            {errorMessage && errorMessage.state ?
                                <Text style={styles.errorMessage}>
                                    {errorMessage.state.message}
                                </Text>
                                : null}
                        </View>
                        {/* Personal-details-section end */}
                        {/* Identification-section start from here */}
                        <Text style={[styles.topHeading, styles.customHeading]}>Identification</Text>
                        <View style={styles.boxContainer}>
                            <View style={[styles.splitContainer, styles.boxContainer, styles.input]}>
                                <RadioButton
                                    value="checked"
                                    status={checked === 1 ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked(1)}
                                />
                                <Text style={styles.radioText}>Driver License</Text>
                            </View>
                            <View style={[styles.splitContainer, styles.boxContainer, styles.input]}>
                                <RadioButton
                                    value="unchecked"
                                    status={checked === 2 ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked(2)}
                                />
                                <Text style={styles.radioText}>Non-Driver</Text>
                            </View>
                        </View>
                        <View style={styles.boxContainer}>
                            <View style={styles.splitContainer}>
                                <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                            onBlur={onBlur}
                                            onChangeText={value => onChange(value)}
                                            value={value}
                                            ref={register()}
                                            underlineColorAndroid="transparent"
                                            placeholder="ID Number"
                                            placeholderTextColor="gray"
                                            style={styles.input}
                                            keyboardType='numeric'
                                        />
                                    )}
                                    name="id_number" deleteToken
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'please enter id number'
                                        },
                                    }}
                                />
                                {errorMessage && errorMessage.id_number ?
                                    <Text style={styles.errorMessage}>
                                        {errorMessage.id_number.message}
                                    </Text>
                                    : null}
                            </View>
                            <View style={styles.splitContainer}>
                                <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                            onBlur={onBlur}
                                            onChangeText={value => onChange(value)}
                                            value={value}
                                            ref={register()}
                                            underlineColorAndroid="transparent"
                                            placeholder="ID State"
                                            placeholderTextColor="gray"
                                            style={styles.input}
                                            keyboardType='numeric'
                                        />
                                    )}
                                    name="id_state"
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'please enter id state'
                                        },
                                    }}
                                />
                                {errorMessage && errorMessage.id_state ?
                                    <Text style={styles.errorMessage}>
                                        {errorMessage.id_state.message}
                                    </Text>
                                    : null}
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.signInButtonEnable} name="title" onPress={handleSubmit(createUser, handleFormErrors)}>
                            <Text style={styles.signInButtonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#3C2A70',
    },
    formContainer: {
        marginTop: 60,
        padding: 20,
    },
    topHeading: {
        color: COLORS.whiteColor,
        fontSize: 24,
        fontWeight: 'bold'
    },
    innerHeading: {
        marginTop: 10,
        fontSize: 18
    },
    customHeading: {
        marginTop: 20,
        fontSize: 18
    },
    input: {
        fontSize: 14,
        fontWeight: 'bold',
        top: 5,
        height: 55,
        padding: 10,
        borderRadius: 10,
        backgroundColor: COLORS.whiteColor,
        marginTop: 12,
        marginRight: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.9,
        shadowRadius: 30,
        elevation: 20,
    },
    boxContainer: {
        flexDirection: 'row'
    },
    splitContainer: {
        flex: 1,
    },
    radioText: {
        fontSize: 14,
        color: 'gray',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    signInButtonEnable: {
        width: '100%',
        padding: 18,
        backgroundColor: '#FC6B21',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        shadowColor: '#000',
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
    },
    errorMessage: {
        color: 'red',
        marginTop: 10
    },
});