import React from 'react'
import { View , Text, StyleSheet,TouchableOpacity} from 'react-native'

export const Pruebas = () => {
  return (
<View style={styles.container}>
      <View style={styles.flatCard}>
        <Text style={styles.title}>Tarjeta Flat Design</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Aceptar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0', // Color de fondo
    },
    flatCard: {
      width: 300,
      padding: 20,
      backgroundColor: '#3498db', // Color de fondo del cuadro
      borderRadius: 4, // Bordes redondeados suaves
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff', // Color del texto del título
    },
    button: {
      marginTop: 16,
      padding: 12,
      backgroundColor: '#e74c3c', // Color de fondo del botón
      borderRadius: 4, // Bordes redondeados
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff', // Color del texto del botón
      textAlign: 'center',
    },
  });