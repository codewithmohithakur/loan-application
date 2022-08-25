import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import AppTabNavigator from '../tab-navigator/Tab.navigator';
import { Splash, SignUp, Profile, Home, Loan } from '../../components/index';
const StackNavigator = createStackNavigator();



const AppStackNavigator = () => {
    return (
        <StackNavigator.Navigator initialRouteName="Splash"
            screenOptions={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} >
            <StackNavigator.Screen component={Splash} name="Splash" />
            <StackNavigator.Screen component={SignUp} name="SignUp" />
            <StackNavigator.Screen component={AppTabNavigator} name="Home" />
            <StackNavigator.Screen component={Profile} name="Profile" />
        </StackNavigator.Navigator>
    );
};

export default AppStackNavigator;
