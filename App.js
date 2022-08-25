import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppNavigator from './src/navigation';
import Theme from './src/common/Theme';
import { Provider } from 'react-native-paper';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
        <Provider theme={Theme}>
          <AppNavigator />
          <StatusBar style="auto" />
        </Provider>
    </NativeBaseProvider>
  );
}