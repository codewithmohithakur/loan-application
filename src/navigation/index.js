import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStackNavigator from './stack-navigator/Stack-navigator';
const AppNavigator = () => {
	return (
		<NavigationContainer>
			<AppStackNavigator />
		</NavigationContainer>
	);
};
export default AppNavigator;
