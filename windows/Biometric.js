import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

export default function Biometric({ navigation }) {


  const handleFingerprintAuth = async () => {
    try {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Coloca tu dedo en el sensor',
      });

      if (result.success) {
        navigation.navigate('Home');
      } else {
        alert('La autenticación con huella dactilar ha fallado.');
      }
    } catch (error) {
      console.error('Error de autenticación con huella dactilar', error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Presiona el botón para autenticarte con huella dactilar</Text>
      <Button
        title="Autenticar con Huella Dactilar"
        onPress={handleFingerprintAuth}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});
