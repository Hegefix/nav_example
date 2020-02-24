import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../screens/Splash';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import HomeScreen from '../screens/Home';
import ListScreen from '../screens/List';

const Stack = createStackNavigator();
const AppContainer = () => {
  const handleNavStateChange = navState => {
    console.log('nav state change', navState);
  };

  return (
    <NavigationContainer onStateChange={handleNavStateChange}>
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen
          name="splash"
          component={SplashScreen}
          options={{title: 'Splash'}}
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="register"
          component={RegisterScreen}
          options={{title: 'Register'}}
        />
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name="list"
          component={ListScreen}
          options={{title: 'List'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
