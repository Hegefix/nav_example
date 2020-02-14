import React, {createContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import useAuth from './hooks/useAuth';

import SplashScreen from './screens/splash';
import LoginScreen from './screens/login';
import RegisterScreen from './screens/register';
import HomeScreen from './screens/home';
import ListScreen from './screens/list';

export const AuthContext = createContext();
const Stack = createStackNavigator();
const App = () => {
  const [state, authContext] = useAuth();

  const handleNavStateChange = navState => {
    console.log('nav state change', navState);
  };

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer onStateChange={handleNavStateChange}>
        <Stack.Navigator initialRouteName="splash">
          {state.isLoading ? (
            <Stack.Screen
              name="splash"
              component={SplashScreen}
              options={{header: () => null}}
            />
          ) : state.userToken === null ? (
            <>
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
            </>
          ) : (
            <>
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
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
