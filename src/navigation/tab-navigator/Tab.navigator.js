/* eslint-disable no-unused-vars */
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Search, Profile, Loan } from '../../components/index';
import { COLORS } from '../../common/colors';
const TabNavigator = createBottomTabNavigator();
// *********** TAB-NAVIGATION SECTION START FROM HERE ************
const AppTabNavigator = () => {
    return (
        <TabNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
            backBehavior="initialRoute"
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    right: 0,
                    borderTopWidth: 0,
                    backgroundColor: COLORS.whiteColor,
                    elevation: 0,
                    height: 70,
                    borderRadius: 15
                },
            }}>
            {/* HOME TAB */}
            <TabNavigator.Screen
                component={Home}
                name="Home"
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={require('../../assests/images/home.png')}
                            resizeMode="contain"
                            style={{
                                width: 28,
                                height: 28,
                            }}
                        />
                    ),
                }}
            />
            <TabNavigator.Screen
                component={Search}
                name="Search"
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={require('../../assests/images/search.png')}
                            resizeMode="contain"
                            style={{
                                width: 28,
                                height: 28,
                            }}
                        />
                    ),
                }}
            />
            {/* PROFILE TAB */}
            <TabNavigator.Screen
                component={Profile}
                name="Profile"
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={require('../../assests/images/user.png')}
                            resizeMode="contain"
                            style={{
                                width: 28,
                                height: 28,
                            }}
                        />
                    ),
                }}
            />
            {/* LOANS TAB */}
            <TabNavigator.Screen
                component={Loan}
                name="Loans"
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={require('../../assests/images/loan-icon.png')}
                            resizeMode="contain"
                            style={{
                                width: 28,
                                height: 28,
                            }}
                        />
                    ),
                }}
            />
        </TabNavigator.Navigator>
    );
};
// *********** TAB-NAVIGATION SECTION END ************
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default AppTabNavigator;
