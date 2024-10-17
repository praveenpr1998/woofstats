import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthScreen from '../Auth/Auth';
import Onboarding from '../onboarding';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../Home';
import SplashScreen from '../SplashScreen';
import DetailsScreen from '../TabScreens/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function RootContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="auth" component={AuthScreen} />
        <Stack.Screen name="onboarding" component={Onboarding} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
