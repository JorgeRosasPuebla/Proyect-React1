import React from 'react';
import { View, Button,Text } from 'react-native';
import { styles } from '../styles/styles';


export default function Home({ navigation }) {
  const handleLogout = () => {
    navigation.navigate('Login');
  };


  return (
    <View style={styles.containerHome}>
      <View style={styles.boxHome}>
        <View style={styles.innerBoxHome}>
         <Button title="Cerrar Sesión" onPress={handleLogout} />
        </View>
      </View>
      <View style={styles.boxHome}>
         <View style={styles.innerBoxHome}>
         <Button title="Cerrar Sesión" onPress={handleLogout} />
        </View>
      </View>
        <View style={styles.boxHome}>
        <View style={styles.innerBoxHome}>
        <Button title="Cerrar Sesión" onPress={handleLogout} />
        </View>
      </View>     
    </View>
  );
}


