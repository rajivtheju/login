// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from './src/LoginForm';
import SignUpForm from './src/SignUpForm';
import OTPPage from './src/OTPPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginForm">
        <Stack.Screen name="LoginForm" component={LoginForm} />
        <Stack.Screen name="SignUpForm" component={SignUpForm} />
        <Stack.Screen name="OTPPage" component={OTPPage}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
