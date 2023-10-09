import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Inicio({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla de Inicio</Text>
      <Button
        title="Ir a Detalles"
        onPress={() => navigation.navigate('Detalles')}
      />
    </View>
  );
}