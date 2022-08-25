import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import CommonHeader from '../../common/Header';
import Spinner from '../../common/Loader';
import { getUserInformation, setLoanDetails } from '../../service/Storage.service';
import { COLORS } from '../../common/colors';

export default function Loan(props) {
    const { handleSubmit, control, register, reset } = useForm({ mode: 'onBlur' });
    const [loading, setLoading] = useState(true); // variable use for loader
    const [userDetails, setUserDetails] = useState({}); // variable use for loader
    const [errorMessage, setErrorMessage] = useState(); // variable use for storing forms error

    useEffect(() => {
        _fetchUserInformation(); // get user information
        const loaderState = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => {
            clearTimeout(loaderState);
        };
    }, []);

    // get user information
    const _fetchUserInformation = async () => {
        const data = await getUserInformation();
        setUserDetails(JSON.parse(data));
    }
    // loan form submit
    const loanSubmit = (data) => {
        setErrorMessage('');
        const loanDetails = {
            first_name: userDetails.first_name,
            last_name: userDetails.last_name,
            dob: userDetails.dob,
            mobile_number: userDetails.mobile_number,
            email: userDetails.email,
            bank_name: data.bank_name,
            country: data.country,
            long: data.long,
            money: data.money
        }
        setLoanDetails(JSON.stringify(loanDetails));
        props.navigation.replace('Home');
        reset();
    }
    // Forms Errors
    const handleFormErrors = (errors) => {
        setErrorMessage(errors);
    };
    return (
        <>
            <Spinner visible={loading} />
            <CommonHeader />
            <ScrollView style={styles.container}>
                <View>
                    <View style={styles.formContainer}>
                        <Text style={styles.topHeading}>Loan Application</Text>
                        <Text style={[styles.topHeading, styles.innerHeading]}>Custom Information</Text>
                        <View style={styles.mainInputContainer}>
                            <View style={styles.boxContainer}>
                                <View style={styles.splitContainer}>
                                    <Controller
                                        control={control}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <TextInput
                                                onBlur={onBlur}
                                                onChangeText={value => onChange(value)}
                                                value={userDetails.first_name}
                                                ref={register()}
                                                underlineColorAndroid="transparent"
                                                placeholder="First Name"
                                                placeholderTextColor="gray"
                                                style={styles.input}
                                                defaultValue={userDetails.first_name}
                                                editable={false}
                                            />
                                        )}
                                        name="first_name"
                                    />
                                </View>
                                <View style={styles.splitContainer}>
                                    <Controller
                                        control={control}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <TextInput
                                                onBlur={onBlur}
                                                onChangeText={value => onChange(value)}
                                                value={userDetails.last_name}
                                                ref={register()}
                                                underlineColorAndroid="transparent"
                                                placeholder="Last Name"
                                                placeholderTextColor="gray"
                                                style={styles.input}
                                                editable={false}
                                            />
                                        )}
                                        name="last_name"
                                    />
                                </View>
                            </View>
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        onBlur={onBlur}
                                        onChangeText={value => onChange(value)}
                                        value={userDetails.email}
                                        ref={register()}
                                        underlineColorAndroid="transparent"
                                        placeholder="Email"
                                        placeholderTextColor="gray"
                                        style={styles.input}
                                        editable={false}
                                    />
                                )}
                                name="email"
                            />
                            <View style={styles.boxContainer}>
                                <View style={styles.splitContainer}>
                                    <Controller
                                        control={control}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <TextInput
                                                onBlur={onBlur}
                                                onChangeText={value => onChange(value)}
                                                value={userDetails.dob}
                                                ref={register()}
                                                underlineColorAndroid="transparent"
                                                placeholder="Date of Birth"
                                                placeholderTextColor="gray"
                                                style={styles.input}
                                                editable={false}
                                            />
                                        )}
                                        name="dob"
                                    />
                                </View>
                                <View style={styles.splitContainer}>
                                    <Controller
                                        control={control}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <TextInput
                                                onBlur={onBlur}
                                                onChangeText={value => onChange(value)}
                                                value={userDetails.mobile_number}
                                                ref={register()}
                                                underlineColorAndroid="transparent"
                                                placeholder="Mobile Number"
                                                placeholderTextColor="gray"
                                                style={styles.input}
                                                editable={false}
                                            />
                                        )}
                                        name="mobile_number"
                                    />
                                </View>
                            </View>
                            <Text style={[styles.topHeading, styles.customHeading]}>Loan Details</Text>
                            <View style={styles.mainInputContainer}>
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
                                                    placeholder="Bank Name"
                                                    placeholderTextColor="gray"
                                                    style={styles.input}
                                                />
                                            )}
                                            name="bank_name"
                                            rules={{
                                                required: {
                                                    value: true,
                                                    message: 'please enter bank name'
                                                },
                                            }}
                                        />
                                        {errorMessage && errorMessage.bank_name ?
                                            <Text style={styles.errorMessage}>
                                                {errorMessage.bank_name.message}
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
                                                    placeholder="County"
                                                    placeholderTextColor="gray"
                                                    style={styles.input}
                                                />
                                            )}
                                            name="country"
                                            rules={{
                                                required: {
                                                    value: true,
                                                    message: 'please enter country'
                                                },
                                            }}
                                        />
                                        {errorMessage && errorMessage.country ?
                                            <Text style={styles.errorMessage}>
                                                {errorMessage.country.message}
                                            </Text>
                                            : null}
                                    </View>
                                </View>
                                <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                            onBlur={onBlur}
                                            onChangeText={value => onChange(value)}
                                            value={value}
                                            ref={register()}
                                            underlineColorAndroid="transparent"
                                            placeholder="How much would be like to borrow ?"
                                            placeholderTextColor="gray"
                                            style={styles.input}
                                        />
                                    )}
                                    name="money"
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'please enter money'
                                        },
                                    }}
                                />
                                {errorMessage && errorMessage.money ?
                                    <Text style={styles.errorMessage}>
                                        {errorMessage.money.message}
                                    </Text>
                                    : null}

                                <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                            onBlur={onBlur}
                                            onChangeText={value => onChange(value)}
                                            value={value}
                                            ref={register()}
                                            underlineColorAndroid="transparent"
                                            placeholder="How long ?"
                                            placeholderTextColor="gray"
                                            style={styles.input}
                                        />
                                    )}
                                    name="long"
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'please enter month/year ?'
                                        },
                                    }}
                                />
                                {errorMessage && errorMessage.long ?
                                    <Text style={styles.errorMessage}>
                                        {errorMessage.long.message}
                                    </Text>
                                    : null}
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.signInButtonEnable} name="title" onPress={handleSubmit(loanSubmit, handleFormErrors)}>
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
        backgroundColor: COLORS.screenBackgroundColor,
        marginBottom: 80
    },
    formContainer: {
        marginTop: 20,
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
