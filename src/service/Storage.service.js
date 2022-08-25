import AsyncStorage from '@react-native-async-storage/async-storage';


const USER_INFORMATION = 'userData'; // storing user details
const LOAN_DETAILS = 'loanDetails'; // storing loan data

const getUserInformation = async () => {
    try {
        const value = await AsyncStorage.getItem(USER_INFORMATION);
        if (value !== null) {
            return value;
        }
    } catch (e) { }
};

const setUserInformation = async (data) => {
    try {
        await AsyncStorage.setItem(USER_INFORMATION, data);
    } catch (e) { }
};
const getLoanDetails = async () => {
    try {
        const value = await AsyncStorage.getItem(LOAN_DETAILS);
        if (value !== null) {
            return value;
        }
    } catch (e) { }
};

const setLoanDetails = async (data) => {
    try {
        await AsyncStorage.setItem(LOAN_DETAILS, data);
    } catch (e) { }
};

// Delete Data
const deleteToken = async () => {
    try {
        await AsyncStorage.removeItem(LOAN_DETAILS);
        await AsyncStorage.removeItem(USER_INFORMATION);
    } catch (e) { }
};
export {
    getUserInformation,
    setUserInformation,
    getLoanDetails,
    setLoanDetails,
    deleteToken
};
