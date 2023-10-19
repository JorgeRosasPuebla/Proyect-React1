import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from      './windows/Login';
import Home from       './windows/Home';
import Welcome from    './windows/Welcome';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome"   component={Welcome} />
        <Stack.Screen name="Login"     component={Login} />
        <Stack.Screen name="Home"      component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



