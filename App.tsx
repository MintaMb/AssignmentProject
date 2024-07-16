import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  Platform,
  StatusBar,
  StyleSheet,
  DeviceEventEmitter,
  PermissionsAndroid,
  AppState,
} from 'react-native';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import {navigationRef} from './src/library/helper/RootNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AppConstants,
  ColorConstants,
  ScreenConstants,
  StringConstants,
} from './src/library/constants';
import SplashScreen from './src/containers/SplashScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {scaleFontSize} from './src/library/utils/DimensionsValue';
import KundliScreen from './src/containers/KundliScreen';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={ColorConstants.WHITE}
        />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
              name={ScreenConstants.SPLASH_SCREEN}
              component={SplashScreen}
            />
            <Stack.Screen
              name={ScreenConstants.KUNDLISCREEN}
              component={KundliScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  modalTitle: {
    fontFamily: AppConstants.FONT_OUTFIT_BOLD,
    fontSize: scaleFontSize(22),
  },
  modalSubTitle: {
    fontFamily: AppConstants.FONT_OUTFIT_REGULAR,
    fontSize: scaleFontSize(14),
  },
});

export default App;
