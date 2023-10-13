import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from      './windows/Login';
import Home from       './windows/Home';
import Biometric from  './windows/Biometric';
import { Pruebas } from './windows/Pruebas';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Logion">
        <Stack.Screen name="Login"     component={Login} />
        <Stack.Screen name="Home"      component={Home} />
        <Stack.Screen name="Biometric" component={Biometric} />
        <Stack.Screen name="Pruebas"   component={Pruebas}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
