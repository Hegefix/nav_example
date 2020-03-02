import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TestScreen } from '@screens';

const Stack = createStackNavigator();
const App = () => {
  const handleNavStateChange = state => {
    console.log('handleNavStateChange', state);
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer onStateChange={handleNavStateChange}>
        <Stack.Navigator initialRouteName="Test" headerMode="none">
          <Stack.Screen name="Test" component={TestScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
