import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Detalles({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla de Detalles</Text>
      <Button
        title="Volver a Inicio"
        onPress={() => navigation.navigate('Inicio')}
      />
    </View>
  );
}
