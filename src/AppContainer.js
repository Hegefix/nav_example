// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import * as screens from '@screens';

// const Stack = createStackNavigator();
// const AppContainer = () => {
//   const handleNavStateChange = navState => {
//     console.log('nav state change', navState);
//   };

//   return (
//     <NavigationContainer onStateChange={handleNavStateChange}>
//       <Stack.Navigator initialRouteName="splash">
//         <Stack.Screen
//           name="splash"
//           component={screens.SplashScreen}
//           options={{title: 'Splash'}}
//         />
//         <Stack.Screen
//           name="login"
//           component={screens.LoginScreen}
//           options={{title: 'Login'}}
//         />
//         <Stack.Screen
//           name="register"
//           component={screens.RegisterScreen}
//           options={{title: 'Register'}}
//         />
//         <Stack.Screen
//           name="home"
//           component={screens.HomeScreen}
//           options={{title: 'Home'}}
//         />
//         <Stack.Screen
//           name="list"
//           component={screens.ListScreen}
//           options={{title: 'List'}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppContainer;
