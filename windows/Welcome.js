import React, { useState, useEffect }       from 'react';
import { View, Image, Text, Button, Modal } from 'react-native';
import * as LocalAuthentication             from 'expo-local-authentication';
import { styles }                           from '../styles/WelcomeStyle';

export default function Welcome({navigation}) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const bio = async() => {
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
    setShowModal(false);
  };

  
  const login = () => {
    navigation.navigate('Login');
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <Text>logo de la empresa</Text>
      <Image source={require('./huella.png')} style={styles.logo} />
      <Modal
        transparent={true}
        visible={showModal}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>BIENVENIDO</Text>
            <Image source={require('./huella.png')} style={styles.logo} />
            <View>
              <View style={styles.botoncontainer}>
                <Button title="Identificarme con Huella" onPress={() => bio()} />
              </View>
              <View style={styles.botoncontainer}>
                <Button title="Cerrar" onPress={() => login()} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}


